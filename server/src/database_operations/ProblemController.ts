import { Problem } from "../entity/Problem";
import { AppDataSource } from "../../index";

export class ProblemController {
    private problemRepository;

    constructor() {
        this.problemRepository = AppDataSource.getRepository(Problem);
    }

    public async SelectAll(){
        const problems = await this.problemRepository.find();
        return problems;
    }

    public async SelectByClient(ID: number){
        return await this.problemRepository.createQueryBuilder("prob")
        .where("prob.ClientId = :id", { id: ID})
        .getMany();
    }

    public async SelectByCreator(ID: number){
        return await this.problemRepository.createQueryBuilder("prob")
        .where("prob.CreatedBy = :id", { id: ID})
        .getMany();
    }

    public async InsertProblem(ClientId: number, CreatedBy: number, Desc: string, Start: Date, End: Date){
        return await this.problemRepository.createQueryBuilder().insert()
        .into(Problem)
        .values([
            { ClientId: ClientId, CreatedBy: CreatedBy, Description: Desc, AvailableStart: Start, AvailableEnd: End },
        ])
        .execute();
    }

    public async UpdateProblem(ID: number, ClientId: number, CreatedBy: number, Desc: string, Start: Date, End: Date){
        return await this.problemRepository.createQueryBuilder("job")
        .update(Problem)
        .set({ ClientId: ClientId, CreatedBy: CreatedBy, Description: Desc, AvailableStart: Start, AvailableEnd: End })
        .where("ProblemId = :id", { id: ID })
        .execute()
    }

    public async DeleteProblem(ID: number){
        return await this.problemRepository.createQueryBuilder("job")
        .delete()
        .from(Problem)
        .where("ProblemId = :id", { id: ID })
        .execute()
    }
}