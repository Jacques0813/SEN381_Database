import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Problem } from "./Problem"; // Import the Problem entity
import { Employee } from "./Employee"; // Import the Employee entity

@Entity({ name: "Job" })
export class Job {

    @PrimaryGeneratedColumn()
    JobId!: number;

    @Column({ type: "int" })
    ProblemId!: number;

    @Column({ type: "int" })
    EmpId!: number;

    @Column({ type: "int" })
    CreatedBy!: number;

    @Column({ type: "varchar", length: 255 })
    Description!: string;

    @Column({ type: "date" })
    Start!: Date;

    @Column({ type: "date", nullable: true })
    End!: Date | null;

    // @ManyToOne(() => Problem)
    // @JoinColumn({ name: "ProblemId" })
    // Problem!: Problem;

    // @ManyToOne(() => Employee, { onDelete: "CASCADE" }) // onDelete: "CASCADE" is used to automatically delete the job when the associated employee is deleted
    // @JoinColumn({ name: "EmpId" })
    // Employee!: Employee;

    // @ManyToOne(() => Employee, { onDelete: "CASCADE" }) // onDelete: "CASCADE" is used to automatically delete the job when the created employee is deleted
    // @JoinColumn({ name: "CreatedBy" })
    // CreatedByEmployee!: Employee;

    @ManyToOne(() => Problem, (problem) => problem.jobs)
    Problem!: Problem;

    @ManyToOne(() => Employee, (employee) => employee.jobs)
    Employee!: Employee;

    @ManyToOne(() => Employee, (employee) => employee.jobs)
    CreatedByEmployee!: Employee;
}
