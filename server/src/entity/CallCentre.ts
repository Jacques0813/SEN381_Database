import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Client } from "./Client"; // Import the Client entity
import { Employee } from "./Employee"; // Import the Employee entity
import { ProblemCall } from "./ProblemCall";

@Entity({ name: "CallCentre" })
export class CallCentre {

    @PrimaryGeneratedColumn()
    CallId!: number;

    @Column({ type: "int" })
    ClientId!: number;

    @Column({ type: "int" })
    EmpId!: number;

    @Column({ type: "timestamp" })
    Start!: Date;

    @Column({ type: "timestamp" })
    End!: Date;

    // @ManyToOne(() => Client)
    // @JoinColumn({ name: "ClientId" })
    // Client!: Client;

    // @ManyToOne(() => Employee)
    // @JoinColumn({ name: "EmpId" })
    // Employee!: Employee;

    @ManyToOne(() => Client, (client) => client.clientUsers)
    Client!: Client;

    @ManyToOne(() => Employee, (employee) => employee.jobs)
    Employee!: Employee;

    @OneToMany(() => ProblemCall, (ProblemCall) => ProblemCall.CallCentre) //Check relationship
    problemCalls!: ProblemCall[];
}
