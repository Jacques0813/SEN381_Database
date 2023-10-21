import { TechnicianSkill } from "../entity/TechnicianSkill";
import { AppDataSource } from "../index";

export class TechnicianSkillController {
    private TSRepository;

    constructor() {
        this.TSRepository = AppDataSource.getRepository(TechnicianSkill);
    }

    public async SelectAll(){
        const problems = await this.TSRepository.find();
        return problems;
    }
}