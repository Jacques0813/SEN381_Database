import { AppDataSource } from "../../index";
import { ClientContract } from "../entity/ClientContract";

export class ClientContractController {
    private clientcontractRepository;

    constructor() {
        this.clientcontractRepository = AppDataSource.getRepository(ClientContract);
    }

    public async SelectAll(){
        const clientContract = await this.clientcontractRepository.find();
        return clientContract;
    }
}