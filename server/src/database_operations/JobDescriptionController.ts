import { JobDescription } from "../entity/JobDescription";
import { AppDataSource } from "../../index";

export class JobDescriptionController {
    private JDRepository;

    constructor() {
        this.JDRepository = AppDataSource.getRepository(JobDescription);
    }

    public async SelectAll(){
        return await this.JDRepository.find();
    }

    public async SelectByJob(ID: number){
        return await this.JDRepository.createQueryBuilder("JD")
        .where("JD.JobId = :id", { id: ID})
        .getMany();
    }

    public async InsertJD(JobId: number, Status: string, Issue: string){
        return await this.JDRepository.createQueryBuilder().insert()
        .into(JobDescription)
        .values([
            { JobId: JobId, Status: Status, Description: Issue},
        ])
        .execute();
    }

    public async UpdateJD(ID: number, JobId: number, Status: string, Issue: string){
        return await this.JDRepository.createQueryBuilder("JD")
        .update(JobDescription)
        .set({ JobId: JobId, Status: Status, Description: Issue})
        .where("DescriptionId = :id", { id: ID })
        .execute()
    }

    public async DeleteJD(ID: number){
        return await this.JDRepository.createQueryBuilder("JD")
        .delete()
        .from(JobDescription)
        .where("DescriptionId = :id", { id: ID })
        .execute()
    }
}