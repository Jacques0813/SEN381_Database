import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Problem } from "./Problem"; // Import the Problem entity
import { Job } from "./Job"; // Import the Job entity

@Entity({ name: "Employee" })
export class Employee {

    @PrimaryGeneratedColumn()
    EmpId!: number;

    @Column({ type: "varchar", length: 50 })
    Name!: string;

    @Column({ type: "varchar", length: 50 })
    Surname!: string;

    @Column({ type: "varchar", length: 50, nullable: true })
    Username!: string | null;

    @Column({ type: "varchar", length: 12 })
    Phone!: string;

    @Column({ type: "varchar", length: 50 })
    Email!: string;

    @Column({ type: "varchar", length: 100 })
    Password!: string;

    @Column({ type: "varchar", length: 50 })
    Title!: string;

    @Column({ type: "varchar", length: 50 })
    Street!: string;

    @Column({ type: "varchar", length: 50 })
    Suburb!: string;

    @Column({ type: "varchar", length: 50 })
    City!: string;

    @Column({ type: "varchar", length: 40 })
    BankAccount!: string;

    @Column({ type: "varchar", length: 50 })
    AccountHolder!: string;

    @Column({ type: "varchar", length: 20 })
    Bank!: string;

    @Column({ type: "varchar", length: 20 })
    AccountType!: string;

    @Column({ type: "varchar", length: 10 })
    TaxNumber!: string;

    @OneToMany(() => Problem, (problem) => problem.CreatedByEmployee)
    problems!: Problem[];

    @OneToMany(() => Job, (job) => job.Employee)
    jobs!: Job[];
}