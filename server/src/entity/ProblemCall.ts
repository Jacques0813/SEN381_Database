import { Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Problem } from "./Problem"; // Import the Problem entity
import { CallCentre } from "./CallCentre"; // Import the CallCentre entity

@Entity({ name: "ProblemCall" })
export class ProblemCall {

    @PrimaryGeneratedColumn()
    CallId!: number;

    @ManyToOne(() => Problem, { primary: true })
    @JoinColumn({ name: "ProblemId" })
    Problem!: Problem;

    @ManyToOne(() => CallCentre)
    @JoinColumn({ name: "CallId" })
    CallCentre!: CallCentre;
}
