import dotenv from 'dotenv';
dotenv.config();

import { app } from './server';
import { initModels, testConnection } from './db/init';

app.mount();
testConnection();
initModels();

const serverInstace = app.serverI;

export { serverInstace };
