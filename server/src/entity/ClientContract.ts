import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { Client } from "./Client";
import { Contract } from "./Contract";

@Entity({ name: "ClientContract" })
export class ClientContract {

    @PrimaryColumn({ type: 'int' })
    ClientId!: number;

    @PrimaryColumn({ type: 'int' })
    ContractId!: number;

    //Many-to-one relationship to clients
    @ManyToOne(() => ClientContract, (Clientcontract) => Clientcontract.ClientId)
    Clientcontract!: Client[];

    // Many-to-One relationship with Contract
    @ManyToOne(() => Contract, (contract) => contract.clientContract)
    contract!: Contract;
}