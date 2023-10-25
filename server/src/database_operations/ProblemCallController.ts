import { ProblemCall } from "../entity/ProblemCall";
import { AppDataSource } from "../../index";

export class ProblemCallController {
    private PCRepository;

    constructor() {
        this.PCRepository = AppDataSource.getRepository(ProblemCall);
    }

    public async SelectAll(){
        const PCs = await this.PCRepository.find();
        return PCs;
    }
}