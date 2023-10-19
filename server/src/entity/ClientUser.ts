import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Client } from "./Client"; // Import the Client entity

@Entity({ name: "clientUser" })
export class ClientUser {

    @PrimaryGeneratedColumn()
    UserId!: number;

    @Column({ type: "int" })
    ClientId!: number;

    @Column({ type: "varchar", length: 50 })
    Position!: string;

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
    Street!: string;

    @Column({ type: "varchar", length: 50 })
    Suburb!: string;

    @Column({ type: "varchar", length: 50 })
    City!: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    Notes!: string | null;

    @ManyToOne(() => Client)
    @JoinColumn({ name: "ClientId" })
    Clients!: Client;
}