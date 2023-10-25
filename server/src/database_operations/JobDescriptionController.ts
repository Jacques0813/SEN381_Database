import { JobDescription } from "../entity/JobDescription";
import { AppDataSource } from "../../index";

export class JobDescriptionController {
    private JDRepository;

    constructor() {
        this.JDRepository = AppDataSource.getRepository(JobDescription);
    }

    public async SelectAll(){
        const JDs = await this.JDRepository.find();
        return JDs;
    }
}