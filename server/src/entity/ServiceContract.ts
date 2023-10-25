import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { Contract } from "./Contract";
import { Service } from "./Service";

@Entity({ name: "ServiceContract" })
export class ServiceContract {

    @PrimaryColumn({ type: 'int' })
    ServiceId!: number;

    @PrimaryColumn({ type: 'int' })
    ContractId!: number;

    //many-to-one relationship with service contract
    @ManyToOne(() => Contract, (contract) => contract.ContractId)
    contract!: ServiceContract[];

    @ManyToOne(() => Service, (service) => service.ServiceId)
    Service!: Service[];
}
