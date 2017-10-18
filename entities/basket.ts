import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";



@Entity() 
export class Basket {
    @PrimaryGeneratedColumn()
    id: number;
 
    @Column()
    products: string;
 
    @Column()
    User: string;
}