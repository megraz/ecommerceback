import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";



@Entity()

export class admin {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pseudo: string;

    @Column()
    mdp: string;
}