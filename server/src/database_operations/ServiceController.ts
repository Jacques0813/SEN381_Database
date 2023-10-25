import { Service } from "../entity/Service";
import { AppDataSource } from "../../index";

export class ServiceController {
    private serviceRepository;

    constructor() {
        this.serviceRepository = AppDataSource.getRepository(Service);
    }

    public async SelectAll(){
        const problems = await this.serviceRepository.find();
        return problems;
    }
}