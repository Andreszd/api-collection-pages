import dotenv from 'dotenv';
dotenv.config();

import app from './server';
import { initModels, testConnection } from './db/init';

testConnection();
initModels();
app.mount();

export default app;
