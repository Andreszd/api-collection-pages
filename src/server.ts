import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

class Server {
  private app: Application;
  private port: number;

  public constructor(port: number) {
    this.port = port;
    this.app = express();
    this.initConfig();
  }

  private initConfig(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
  }

  public mount(): void {
    try {
      this.app.listen(this.port, () => `Server running on port ${this.port}`);
    } catch (error: any) {
      //TODO search type required for error param
      console.log(`Error ocurred: ${error.message}`);
    }
  }
}
//This code will be execute 1 time ?
export const app = new Server(4000);
