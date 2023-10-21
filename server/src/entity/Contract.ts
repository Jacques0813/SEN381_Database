import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Employee } from "./Employee"; // Import the Employee entity
import { ClientContract } from "./ClientContract";

@Entity({ name: "Contract" })
export class Contract {

    @PrimaryGeneratedColumn()
    ContractId!: number;

    @Column({ type: "int" })
    CreatedBy!: number;

    @Column({ type: "varchar", length: 50 })
    ContractName!: string;

    @Column({ type: "datetime" })
    StartDate!: Date;

    @Column({ type: "datetime", nullable: true })
    EndDate!: Date | null;

    @Column({ type: "double" })
    Price!: number;

    @Column({ type: "varchar", length: 20 })
    Status!: string;

    @Column({ type: "varchar", length: 10 })
    Priority!: string;

    // @ManyToOne(() => Employee)
    // @JoinColumn({ name: "CreatedBy" })
    // CreatedByEmployee!: Employee;

    // One-to-Many relationship with ClientContract
    @OneToMany(() => ClientContract, (clientContract) => clientContract.contract)
    clientContract!: ClientContract[];
}