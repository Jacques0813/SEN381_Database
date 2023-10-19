import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, PrimaryColumn } from "typeorm";

@Entity({ name: "ServiceContract" })
export class ServiceContract {

    @PrimaryColumn({ type: 'int' })
    ServerId!: number;

    @PrimaryColumn({ type: 'int' })
    ContractId!: number;
}