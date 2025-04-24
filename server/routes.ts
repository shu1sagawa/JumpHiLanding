import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', version: '1.0.0' });
  });

  // Contact form endpoint (this would handle the newsletter subscription from the footer)
  app.post('/api/contact', (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        return res.status(400).json({ message: 'Valid email is required' });
      }
      
      // In a real implementation, you would store this in a database
      // For now we'll just return a success message
      
      res.status(200).json({ 
        message: 'Thank you for subscribing!',
        success: true
      });
    } catch (error) {
      res.status(500).json({ 
        message: 'An error occurred while processing your request',
        success: false
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
