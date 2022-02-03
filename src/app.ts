import { app } from './server';
import { testConnection } from './config/db';

testConnection();
app.mount();
