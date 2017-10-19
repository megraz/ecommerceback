import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user";



@Entity()

export class order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ref: string;

    @Column()
    dateorder: string;

    @ManyToOne(type => User, user => user.orders)
    user: User;

}