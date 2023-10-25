import { AppDataSource } from "../index";
import { ClientUser } from "../entity/ClientUser";

export class ClientUserController {
    private clientuserRepository;

    constructor() {
        this.clientuserRepository = AppDataSource.getRepository(ClientUser);
    }

    public async SelectAll(){
        const ClientUser = await this.clientuserRepository.find();
        return ClientUser;
    }
}