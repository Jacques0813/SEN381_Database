import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ClientUser } from "./ClientUser"; 

@Entity({ name: "Client" })
export class Client {

    @PrimaryGeneratedColumn()
    ClientId!: number;

    @Column({ type: "varchar", length: 20 })
    Type!: string;

    @Column({ type: "boolean" })
    Active!: boolean;

    @Column({ type: "varchar", length: 40 })
    BankAccount!: string;

    @Column({ type: "varchar", length: 50 })
    AccountHolder!: string;

    @Column({ type: "varchar", length: 20 })
    Bank!: string;

    @Column({ type: "varchar", length: 20 })
    AccountType!: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    Notes!: string;
}