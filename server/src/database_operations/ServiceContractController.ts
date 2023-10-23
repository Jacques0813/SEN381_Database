import { ServiceContract } from "../entity/ServiceContract";
import { AppDataSource } from "../index";

export class ServiceContractController {
    private SCRepository;

    constructor() {
        this.SCRepository = AppDataSource.getRepository(ServiceContract);
    }

    public async SelectAll(){
        const problems = await this.SCRepository.find();
        return problems;
    }
}