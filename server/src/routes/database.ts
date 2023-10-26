import { Router, Request, Response } from 'express';
import { Operations } from '../database_operations/operations';
import { JobController } from '../database_operations/JobController';
import { JobDescriptionController } from '../database_operations/JobDescriptionController';
import { ProblemCallController } from '../database_operations/ProblemCallController';
import { ProblemController } from '../database_operations/ProblemController';
import { ServiceContractController } from '../database_operations/ServiceContractController';
import { ServiceController } from '../database_operations/ServiceController';
import { TechnicianSkillController } from '../database_operations/TechnicianSkillController';
import { ClientController } from '../database_operations/ClientController';

const router = Router();
const operations = new Operations();
const JC = new JobController();
const JDC = new JobDescriptionController();
const PCC = new ProblemCallController();
const PC = new ProblemController();
const SCC = new ServiceContractController();
const SC = new ServiceController();
const TSC = new TechnicianSkillController();
const CC = new ClientController();

router.get('/AllTS', async (req: Request, res: Response) => {
    res.send(await operations.AllTechnicianSkill());
});

router.get('/AllClients', async (req: Request, res: Response) => {
    res.send(await CC.SelectAll());
});

router.get('/AllCalls', async (req: Request, res: Response) => {
    res.send(await operations.AllCalls());
});

router.get('/AllUsers', async (req: Request, res: Response) => {
    res.send(await operations.AllUsers());
});

router.get('/AllContracts', async (req: Request, res: Response) => {
    res.send(await operations.AllContracts());
});

router.get('/AllEmployees', async (req: Request, res: Response) => {
    res.send(await operations.AllEmployees());
});

router.get('/AllJobs', async (req: Request, res: Response) => {
    res.send(await JC.SelectAll());
});

router.get('/AllJobDescriptions', async (req: Request, res: Response) => {
    res.send(await JDC.SelectAll());
});

router.get('/AllProblems', async (req: Request, res: Response) => {
    res.send(await operations.AllProblems());
});

router.get('/AllProblemCalls', async (req: Request, res: Response) => {
    res.send(await operations.AllProblemCalls());
});

router.get('/AllClientContracts', async (req: Request, res: Response) => {
    res.send(await operations.AllClientContracts());
});

router.get('/AllServiceContracts', async (req: Request, res: Response) => {
    res.send(await operations.AllServiceContracts());
});

router.get('/AllServices', async (req: Request, res: Response) => {
    res.send(await operations.AllServices());
});

export default router;