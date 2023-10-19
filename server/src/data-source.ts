import "reflect-metadata"
import { DataSource } from "typeorm"
import { TechnicianSkill } from "./entity/TechnicianSkill"
import { CallCentre } from "./entity/CallCentre"
import { Client } from "./entity/Client"
import { ClientUser } from "./entity/ClientUser"
import { Contract } from "./entity/Contract"
import { Employee } from "./entity/Employee"
import { Job } from "./entity/Job"
import { JobDescription } from "./entity/JobDescription"
import { Problem } from "./entity/Problem"
import { ProblemCall } from "./entity/ProblemCall"
import { ClientContract } from "./entity/ClientContract"
import { ServiceContract } from "./entity/ServiceContract"
import { Service } from "./entity/Service"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "sql11.freesqldatabase.com",
    port: 3306,
    username: "sql11653999",
    password: "rcArPmc9CM",
    database: "sql11653999",
    synchronize: true,
    logging: false,
    entities: [
        TechnicianSkill, 
        CallCentre, 
        ClientUser, 
        Contract, 
        Employee, 
        Job,
        JobDescription,
        Problem,
        ProblemCall,
        Client,
        ClientContract,
        ServiceContract,
        Service
    ],
    migrations: [],
    subscribers: [],
})
