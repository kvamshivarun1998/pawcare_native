import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { MainNav } from "@/components/nav/main-nav";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Store from "@/pages/store";
import Blog from "@/pages/blog";
import Community from "@/pages/community";
import PetCare from "@/pages/pet-care";
import Profile from "@/pages/profile";
import Vaccination from "@/pages/vaccination";
import PetKYC from "@/pages/pet-kyc";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/store" component={Store} />
      <Route path="/blog" component={Blog} />
      <Route path="/community" component={Community} />
      <Route path="/pet-care" component={PetCare} />
      <Route path="/profile" component={Profile} />
      <Route path="/vaccination" component={Vaccination} />
      <Route path="/pet-kyc" component={PetKYC} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainNav />
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;