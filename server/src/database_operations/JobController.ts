import { Job } from "../entity/Job";
import { AppDataSource } from "../index";

export class JobController {
    private jobRepository;

    constructor() {
        this.jobRepository = AppDataSource.getRepository(Job);
    }

    public async SelectAll(){
        const jobs = await this.jobRepository.find();
        return jobs;
    }
}