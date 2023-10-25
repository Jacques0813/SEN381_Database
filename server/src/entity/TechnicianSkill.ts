import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToOne } from "typeorm"
import { Employee } from "./Employee";

@Entity({ name: "TechnicianSkill" }) 
export class TechnicianSkill {

    @PrimaryGeneratedColumn()
    SkillId!: number

    @Column({type:"int"})
    EmpId!: number

    @Column({ type:"nvarchar", length: 20 })
    Skill!: string

    @ManyToOne(() => Employee, (employee) => employee.EmpId)
    employee!: Employee[];

}
