import { AppDataSource } from "../index";
import { Employee } from "../entity/Employee";

export class EmployeeController {
    private EmployeeRepository;

    constructor() {
        this.EmployeeRepository = AppDataSource.getRepository(Employee);
    }

    public async SelectAll(){
        const Employees = await this.EmployeeRepository.find();
        return Employees;
    }
}