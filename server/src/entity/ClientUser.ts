import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Client } from "./Client"; // Import the Client entity
import { Employee } from "./Employee"; // Import the Employee entity

@Entity({ name: "ClientUser" })
export class ClientUser {

    @PrimaryGeneratedColumn()
    UserId!: number;

    @Column({ type: "int" })
    ClientId!: number;

    @Column({ type: "nvarchar", length: 50 })
    Position!: string;

    @Column({ type: "nvarchar", length: 50 })
    Name!: string;

    @Column({ type: "nvarchar", length: 50 })
    Surname!: string;

    @Column({ type: "nvarchar", length: 50, nullable: true })
    Username!: string;

    @Column({ type: "nvarchar", length: 12 })
    Phone!: string;

    @Column({ type: "nvarchar", length: 50 })
    Email!: string;

    @Column({ type: "nvarchar", length: 100 })
    Password!: string;

    @Column({ type: "nvarchar", length: 50 })
    Street!: string;

    @Column({ type: "nvarchar", length: 50 })
    Suburb!: string;

    @Column({ type: "nvarchar", length: 50 })
    City!: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    Notes!: string;

    // @ManyToOne(() => Client)
    // @JoinColumn({ name: "ClientId" })
    // Clients!: Client;

    // Many-to-One relationship with Client
    @ManyToOne(() => Client, (client) => client.clientUsers)
    Client!: Client;

    // Many-to-One relationship with Employee (EmpId)
    // @ManyToOne(() => Employee, (employee) => employee.clientUsers)
    // Employee!: Employee;
}