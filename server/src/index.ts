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

AppDataSource.initialize().then(async () => {

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(TechnicianSkill)
    // console.log("Loaded users: ", users)

    console.log("Connected to database server");

    const app: Express = express();
    app.use(cors({
      origin: 'http://localhost:5174',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    }));
    const port = 3000;
    const operations = new Operations();

    const JC = new JobController();
    const JDC = new JobDescriptionController();
    const PCC = new ProblemCallController();
    const PC = new ProblemController();
    const SCC = new ServiceContractController();
    const SC = new ServiceController();
    const TSC = new TechnicianSkillController();
    const CC = new ClientController();

    app.get('/Api/AllTS', async (req: Request, res: Response) => {
      res.send(await operations.AllTechnicianSkill());
    });

    app.get('/Api/AllClients', async (req: Request, res: Response) => {
      res.send(await CC.SelectAll());
    });

    app.get('/Api/AllCalls', async (req: Request, res: Response) => {
      res.send(await operations.AllCalls());
    });

    app.get('/Api/AllUsers', async (req: Request, res: Response) => {
      res.send(await operations.AllUsers());
    });

    app.get('/Api/AllContracts', async (req: Request, res: Response) => {
      res.send(await operations.AllContracts());
    });

    app.get('/Api/AllEmployees', async (req: Request, res: Response) => {
      res.send(await operations.AllEmployees());
    });

    app.get('/Api/AllJobs', async (req: Request, res: Response) => {
      res.send(await JC.SelectAll());
    });

    app.get('/Api/AllJobDescriptions', async (req: Request, res: Response) => {
      res.send(await JDC.SelectAll());
    });

    app.get('/Api/AllProblems', async (req: Request, res: Response) => {
      res.send(await operations.AllProblems());
    });

    app.get('/Api/AllProblemCalls', async (req: Request, res: Response) => {
      res.send(await operations.AllProblemCalls());
    });

    app.get('/Api/AllClientContracts', async (req: Request, res: Response) => {
      res.send(await operations.AllClientContracts());
    });

    app.get('/Api/AllServiceContracts', async (req: Request, res: Response) => {
      res.send(await operations.AllServiceContracts());
    });

    app.get('/Api/AllServices', async (req: Request, res: Response) => {
      res.send(await operations.AllServices());
    });

    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });

}).catch(error => console.log(error))

export { AppDataSource };