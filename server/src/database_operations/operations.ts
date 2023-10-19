import {AppDataSource} from "../index"
import { TechnicianSkill} from "../entity/TechnicianSkill"
import { CallCentre } from "../entity/CallCentre";

export class Operations {
    constructor() {
    }

    public async AllTechnicianSkill(){
        const TSRepository = AppDataSource.getRepository(TechnicianSkill);
        const TS = await TSRepository.find();
        return TS;
    }

    public async AllCalls(){
        const callRepository = AppDataSource.getRepository(CallCentre);
        const calls = await callRepository.find();
        return calls;
    }
}