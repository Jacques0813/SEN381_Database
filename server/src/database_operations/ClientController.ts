import { AppDataSource } from "../../index";
import { Client } from "../entity/Client";

export class ClientController {
    private clientRepository;

    constructor() {
        this.clientRepository = AppDataSource.getRepository(Client);
    }

    public async SelectAll(){
        const clients = await this.clientRepository.find();
        return clients;
    }
}