import {AppDataSource} from "../index"
import { TechnicianSkill} from "../entity/TechnicianSkill"
import { CallCentre } from "../entity/CallCentre";
import { Client } from "../entity/Client";
import { Problem } from "../entity/Problem";
import { ClientUser } from "../entity/ClientUser";
import { Contract } from "../entity/Contract";
import { Employee } from "../entity/Employee";
import { Job } from "../entity/Job";
import { JobDescription } from "../entity/JobDescription";
import { ProblemCall } from "../entity/ProblemCall";

export class Operations {
    constructor() {
    }
    public async AllTechnicianSkill(){
        const TSRepository = AppDataSource.getRepository(TechnicianSkill);
        const TSs = await TSRepository.find();
        return TSs;
    }

    public async AllClients(){
        const clientRepository = AppDataSource.getRepository(Client);
        const clients = await clientRepository.find();
        return clients;
    }

    public async AllCalls(){
        const callRepository = AppDataSource.getRepository(CallCentre);
        const calls = await callRepository.find();
        return calls;
    }

    public async AllUsers(){
        const userRepository = AppDataSource.getRepository(ClientUser);
        const users = await userRepository.find();
        return users;
    }

    public async AllContracts(){
        const contractRepository = AppDataSource.getRepository(Contract);
        const contracts = await contractRepository.find();
        return contracts;
    }

    public async AllEmployees(){
        const empRepository = AppDataSource.getRepository(Employee);
        const emps = await empRepository.find();
        return emps;
    }

    public async AllJobs(){
        const jobRepository = AppDataSource.getRepository(Job);
        const jobs = await jobRepository.find();
        return jobs;
    }

    public async AllJobDescriptions(){
        const JDRepository = AppDataSource.getRepository(JobDescription);
        const JDs = await JDRepository.find();
        return JDs;
    }

    public async AllProblems(){
        const probRepository = AppDataSource.getRepository(Problem);
        const probs = await probRepository.find();
        return probs;
    }

    public async AllProblemCalls(){
        const PCRepository = AppDataSource.getRepository(ProblemCall);
        const PCs = await PCRepository.find();
        return PCs;
    }
}