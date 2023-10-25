import { AppDataSource } from "../index";
import { Contract } from "../entity/Contract";

export class contractController {
    private contractRepository;

    constructor() {
        this.contractRepository = AppDataSource.getRepository(Contract);
    }

    public async SelectAll(){
        const contracts = await this.contractRepository.find();
        return contracts;
    }
}