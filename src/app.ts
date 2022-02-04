import { app } from './server';
import { initModels, testConnection } from './db/init';

app.mount();
testConnection();
initModels();
