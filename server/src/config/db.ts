import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
dotenv.config();

import Product from '../models/Product.models';
import clients from '../models/Client.models';

const db = new Sequelize(process.env.DB_URL!, {
  models: [Product, clients],
});


export default db;