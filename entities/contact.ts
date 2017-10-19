import { PrimaryGeneratedColumn, Entity, Column, ManyToOne } from "typeorm";
import { User } from "./user";



@Entity()

export class contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    firstName: string;
 
    @Column()
    rue: number;

    @Column()
    Numrue: number;

    @Column()
    codepostal: number;

    @Column()
    ville: string;

    @ManyToOne(type => User, user => user.contact)
    user: User;



}