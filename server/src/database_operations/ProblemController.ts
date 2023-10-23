import { Problem } from "../entity/Problem";
import { AppDataSource } from "../index";

export class ProblemController {
    private problemRepository;

    constructor() {
        this.problemRepository = AppDataSource.getRepository(Problem);
    }

    public async SelectAll(){
        const problems = await this.problemRepository.find();
        return problems;
    }
}