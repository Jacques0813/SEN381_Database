import { AppDataSource } from "../../index";
import { CallCentre } from "../entity/CallCentre";

export class CallCentreController {
    private callcentreRepository;

    constructor() {
        this.callcentreRepository = AppDataSource.getRepository(CallCentre);
    }

    public async SelectAll(){
        const CallCentre = await this.callcentreRepository.find();
        return CallCentre;
    }
}