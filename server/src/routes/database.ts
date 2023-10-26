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
const PCC = new ProblemCallController();
const SCC = new ServiceContractController();
const SC = new ServiceController();
const TSC = new TechnicianSkillController();
const CC = new ClientController();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// JOB TABLE
const JC = new JobController();

// Gets the entire table
router.get('/AllJob', async (req: Request, res: Response) => {
    res.send(await JC.SelectAll());
});

// gets all jobs done on a specific problem
router.get('/JobByProblem/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    res.send(await JC.SelectByProblem(id));
});

// Gets all jobs assigned to an employee
router.get('/JobByEmp/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    res.send(await JC.SelectByTechnician(id));
});

// Gets all jobs made by an admin
router.get('/JobByAdmin/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    res.send(await JC.SelectByAdmin(id));
});

// Gets all jobs done for a client
router.get('/ClientJobs/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    res.send(await JC.SelectClientJobs(id));
});

// Inserts a job
router.post('/InsertJob', async (req: Request, res: Response) => {
    const Data = req.body;
    res.send(await JC.InsertJob(Data.ProblemId, Data.EmpId, Data.CreatedBy, Data.Description, Data.Start, Data.End));
});

// Updates a job (Give all values even if they don't change)
router.put('/UpdateJob/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const Data = req.body;
    res.send(await JC.UpdateJob(id, Data.ProblemId, Data.EmpId, Data.CreatedBy, Data.Description, Data.Start, Data.End));
});

// Deletes a job
router.delete('/DeleteJob/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    res.send(await JC.DeleteJob(id));
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// JOB DESCRIPTION TABLE
const JDC = new JobDescriptionController();

// Gets the entire table
router.get('/AllJD', async (req: Request, res: Response) => {
    res.send(await JDC.SelectAll());
});

// Gets all descriptions for specific jobs
router.get('/JDByJob/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    res.send(await JDC.SelectByJob(id));
});

// Inserts a job description
router.post('/InsertJD', async (req: Request, res: Response) => {
    const Data = req.body;
    res.send(await JDC.InsertJD(Data.JobId, Data.Status, Data.Issue));
});

// Updates a job description (Give all values even if they don't change)
router.put('/UpdateJD/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const Data = req.body;
    res.send(await JDC.UpdateJD(id, Data.jobId, Data.Status, Data.Description));
});

// Deletes a job description
router.delete('/DeleteJD/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    res.send(await JDC.DeleteJD(id));
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PROBLEM TABLE
const PC = new ProblemController();

// Gets the entire table
router.get('/AllProblems', async (req: Request, res: Response) => {
    res.send(await PC.SelectAll());
});

// Gets all problems for specific client
router.get('/ProblemByClient/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    res.send(await PC.SelectByClient(id));
});

// Gets all problems for specific admin creator
router.get('/ProblemByCreate/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    res.send(await PC.SelectByCreator(id));
});

// Inserts a problem
router.post('/InsertProblem', async (req: Request, res: Response) => {
    const Data = req.body;
    res.send(await PC.InsertProblem(Data.ClientId, Data.CreatedBy, Data.Description, Data.Start, Data.End));
});

// Updates a problem (Give all values even if they don't change)
router.put('/UpdateProblem/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const Data = req.body;
    res.send(await PC.UpdateProblem(id, Data.ClientId, Data.CreatedBy, Data.Description, Data.Start, Data.End));
});

// Deletes a problem
router.delete('/DeleteProblem/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    res.send(await PC.DeleteProblem(id));
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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