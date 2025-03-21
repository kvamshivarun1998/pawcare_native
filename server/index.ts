import 'module-alias/register';
import express, { type Request, Response, NextFunction } from "express";
import path from "path";

// Simple log function
const log = (message: string) => {
  console.log(message);
};
import { registerRoutes } from "./routes";
import serveStatic from "serve-static";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware to log API requests and responses
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      // Trim log if it exceeds 80 characters
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Register routes
(async () => {
  const server = await registerRoutes(app);

  // Serving the  static files from the "public" or "dist" directory
    const publicPath = path.join(__dirname, "../public"); // Update if needed
  app.use(express.static(publicPath));

  // Catch-all to serve index.html for React/SPA apps
  app.get("*", (_req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
  });

  // Error handler middleware
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // Serve static files if needed
  app.use(serveStatic('public'));

  // Always serve on port 8080
  const port = 8080;
  server.listen(
    {
      port,
      host: "127.0.0.1",
      reusePort: true,
    },
    () => {
      log(`Serving on port ${port}`);
    }
  );
})();
