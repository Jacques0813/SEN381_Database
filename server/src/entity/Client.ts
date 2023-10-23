import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Problem } from "./Problem"; // Import the Problem entity
import { ClientUser } from "./ClientUser"; // Import the ClientUser entity
import { ProblemCall } from "./ProblemCall"; // Import the ProblemCall entity
import { Employee } from "./Employee"; // Import the Employee entity
import { ClientContract } from "./ClientContract";

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

    // One-to-Many relationship with Problem
    @OneToMany(() => Problem, (problem) => problem.Client)
    problems!: Problem[];

    // One-to-Many relationship with ClientUser
    @OneToMany(() => ClientUser, (clientUser) => clientUser.Client)
    clientUsers!: ClientUser[];

    // One-to-Many relationship with ProblemCall
    @OneToMany(() => ProblemCall, (problemCall) => problemCall.CallCentre)
    problemCalls!: ProblemCall[];

    // //One-to-many relationship with Clientcontracts
    // @OneToMany(() => ClientContract, (Clientcontract) => ClientContract.ClientId)
    // Clientcontract!: ClientContract[];

}