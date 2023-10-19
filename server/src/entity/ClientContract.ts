import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, PrimaryColumn } from "typeorm";

@Entity({ name: "ClientContract" })
export class ClientContract {

    @PrimaryColumn({ type: 'int' })
    ClientId!: number;

    @PrimaryColumn({ type: 'int' })
    ContractId!: number;
}