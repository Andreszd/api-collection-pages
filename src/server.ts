import express, { Application } from 'express';
import cors from 'cors';
import routes from './routes';
import { handleErrors } from './middlewares/handleErrors';
import { Server } from 'http';

class ServerConfig {
  private app: Application;
  serverI!: Server;
  private port: number;

  public constructor(port: number) {
    this.port = port;
    this.app = express();
    this.initMidlewares();
    this.setRoutes();
    this.initHandleErrors();
  }

  private initMidlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
  }

  private setRoutes(): void {
    this.app.use(routes);
  }

  private initHandleErrors(): void {
    this.app.use(handleErrors);
  }

  public mount(): Server | null {
    try {
      const port = process.env.PORT || this.port;
      this.serverI = this.app.listen(
        port,
        () => `Server running on port ${port}`
      );
    } catch (error: any) {
      //TODO search type required for error param
      console.log(`Error ocurred: ${error.message}`);
    }
    return null;
  }
}
//This code will be execute 1 time ?
export const app = new ServerConfig(4000);
