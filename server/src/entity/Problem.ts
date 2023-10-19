import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Client } from "./Client"; // Import the Client entity
import { Employee } from "./Employee"; // Import the Employee entity

@Entity({ name: "Problem" })
export class Problem {

    @PrimaryGeneratedColumn()
    ProblemId!: number;

    @Column({ type: "int" })
    ClientId!: number;

    @Column({ type: "int" })
    CreatedBy!: number;

    @Column({ type: "varchar", length: 255 })
    Description!: string;

    @Column({ type: "date" })
    AvailableStart!: Date;

    @Column({ type: "date", nullable: true })
    AvailableEnd!: Date | null;

    @ManyToOne(() => Client)
    @JoinColumn({ name: "ClientId" })
    Client!: Client;

    @ManyToOne(() => Employee)
    @JoinColumn({ name: "CreatedBy" })
    CreatedByEmployee!: Employee;
}
