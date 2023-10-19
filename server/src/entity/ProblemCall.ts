import { Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm";
import { Problem } from "./Problem"; // Import the Problem entity
import { CallCentre } from "./CallCentre"; // Import the CallCentre entity

@Entity({ name: "ProblemCall" })
export class ProblemCall {

    @PrimaryColumn({ type: 'int' })
    CallId!: number;

    @PrimaryColumn({ type: 'int' })
    ProblemId!: number;

    // @ManyToOne(() => Problem, { primary: true })
    // @JoinColumn({ name: "ProblemId" })
    // Problem!: Problem;

    // @ManyToOne(() => CallCentre)
    // @JoinColumn({ name: "CallId" })
    // CallCentre!: CallCentre;
}
