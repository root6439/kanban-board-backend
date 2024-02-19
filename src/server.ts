import "reflect-metadata";
import "express-async-errors";
import express, { Express, NextFunction, Request, Response } from "express";
import cors from "cors";
import { AppRouter } from "./routes/App.routes";

class App {
  private express: Express;
  private appRouter: AppRouter;

  constructor() {
    this.express = express();
    this.appRouter = new AppRouter();
    this.setConfigs();
  }

  setConfigs() {
    this.express.use(cors());
    this.express.use(express.json());
    this.express.use(this.appRouter.getRouter());
  }

  start() {
    this.express.listen(3000, () => {
      console.log("Server on");
    });
  }
}

new App().start();
