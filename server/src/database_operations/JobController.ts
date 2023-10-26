import { Job } from "../entity/Job";
import { AppDataSource } from "../../index";

export class JobController {
    private jobRepository;

    constructor() {
        this.jobRepository = AppDataSource.getRepository(Job);
    }

    public async SelectAll(){
        const jobs = await this.jobRepository.find();
        return jobs;
    }

    public async SelectByProblem(ID: number){
        return await this.jobRepository.createQueryBuilder("job")
        .where("job.ProblemId = :id", { id: ID})
        .getMany();
    }

    public async SelectByTechnician(ID: number){
        return await this.jobRepository.createQueryBuilder("job")
        .where("job.EmpId = :id", { id: ID})
        .getMany();
    }

    public async SelectByAdmin(ID: number){
        return await this.jobRepository.createQueryBuilder("job")
        .where("job.CreatedBy = :id", { id: ID})
        .getMany();
    }

    public async SelectClientJobs(ID: number){
        return await this.jobRepository.query(
            `SELECT J.Description AS Description,
                J.Start AS StartDate,
                J.End AS EndDate,
                E.Name AS EmployeeName,
                C_Employee.Name AS CreatedByName
            FROM Job J
            JOIN Problem P ON J.ProblemId = P.ProblemId
            JOIN Client C ON P.ClientId = C.ClientId
            JOIN Employee E ON J.EmpId = E.EmpId
            JOIN Employee C_Employee ON J.CreatedBy = C_Employee.EmpId
            WHERE C.ClientId = 6;`
        )
    }

    public async InsertJob(ProbId: number, EmpId: number, CreatedBy: number, Desc: string, Start: Date, End: Date){
        return await this.jobRepository.createQueryBuilder().insert()
        .into(Job)
        .values([
            { ProblemId: ProbId, EmpId: EmpId, CreatedBy: CreatedBy, Description: Desc, Start: Start, End: End },
        ])
        .execute();
    }

    public async UpdateJob(ID: number, ProbId: number, EmpId: number, CreatedBy: number, Desc: string, Start: Date, End: Date){
        return await this.jobRepository.createQueryBuilder("job")
        .update(Job)
        .set({ ProblemId: ProbId, EmpId: EmpId, CreatedBy: CreatedBy, Description: Desc, Start: Start, End: End })
        .where("JobId = :id", { id: ID })
        .execute()
    }

    public async DeleteJob(ID: number){
        return await this.jobRepository.createQueryBuilder("job")
        .delete()
        .from(Job)
        .where("JobId = :id", { id: ID })
        .execute()
    }
}