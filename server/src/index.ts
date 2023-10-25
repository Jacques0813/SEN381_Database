import express from 'express';
import { Express, Request, Response } from 'express';
import "reflect-metadata";
import { AppDataSource } from "./data-source"
import { TechnicianSkill} from "./entity/TechnicianSkill"
import {Operations} from "./database_operations/operations"
import cors from "cors"
import { ClientController } from './database_operations/ClientController';
import { JobController } from './database_operations/JobController';
import { ProblemController } from './database_operations/ProblemController';
import { JobDescriptionController } from './database_operations/JobDescriptionController';
import { ProblemCallController } from './database_operations/ProblemCallController';
import { ServiceContractController } from './database_operations/ServiceContractController';
import { ServiceController } from './database_operations/ServiceController';
import { TechnicianSkillController } from './database_operations/TechnicianSkillController';
import dotenv from "dotenv";
import { Email } from './mailing/email';
import dbRoutes from './routes/database';
import mailRoutes from './routes/mail';

AppDataSource.initialize().then(async () => {

    dotenv.config();
    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(TechnicianSkill)
    // console.log("Loaded users: ", users)

    //This is a testing change

    console.log("Connected to database server");

    const app: Express = express();
    app.use(cors({
      origin: process.env.CORS_ORIGIN,
      methods: process.env.CORS_METHODS,
    }));
    const port = process.env.PORT;

    app.use('/DB', dbRoutes);
    app.use('/mail', mailRoutes);

    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });

}).catch(error => console.log(error))

export { AppDataSource };