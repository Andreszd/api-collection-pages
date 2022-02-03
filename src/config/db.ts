import { Dialect, Sequelize } from 'sequelize';

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbHost = process.env.DB_HOST;
const dbDriver = process.env.DB_DRIVER as Dialect;
const dbPassword = process.env.DB_PASSWORD;

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
});

export async function testConnection(): Promise<void> {
  try {
    await sequelizeConnection.authenticate();
    console.log('connection to db succesfully');
  } catch (error) {
    console.error('Unable to connect to the database', error);
  }
}

export default sequelizeConnection;
