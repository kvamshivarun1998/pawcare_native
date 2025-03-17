import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertUserSchema } from "@shared/schema";

export async function registerRoutes(app: Express) {
  // Authentication routes
  app.post("/api/auth/register", async (req, res) => {
    try {
      const parseResult = insertUserSchema.safeParse(req.body);
      if (!parseResult.success) {
        res.status(400).json({ message: "Invalid input" });
        return;
      }

      const existingUser = await storage.getUserByUsername(req.body.username);
      if (existingUser) {
        res.status(400).json({ message: "Username already taken" });
        return;
      }

      await storage.createUser(req.body);
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to create user" });
    }
  });

  app.post("/api/auth/login", async (req, res) => {
    try {
      const { username, password } = req.body;

      const user = await storage.getUserByUsername(username);
      if (!user || user.password !== password) {
        res.status(401).json({ message: "Invalid credentials" });
        return;
      }

      // In a real app, set session/token here
      res.json({ message: "Logged in successfully" });
    } catch (error) {
      res.status(500).json({ message: "Login failed" });
    }
  });

  app.get("/api/user/profile", async (req, res) => {
    try {
      // In a real app, get user ID from session
      const user = await storage.getUser(1);
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch user profile" });
    }
  });

  app.get("/api/pets/vaccination", async (req, res) => {
    try {
      // In a real app, get user ID from session
      const pets = await storage.getPetsByUserId(1);
      res.json(pets);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch pet vaccination status" });
    }
  });

  app.get("/api/pets/kyc", async (req, res) => {
    try {
      // In a real app, get user ID from session
      const pets = await storage.getPetsByUserId(1);
      res.json(pets);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch pet KYC status" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}