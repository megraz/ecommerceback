import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class product {
 
    @PrimaryGeneratedColumn()
    id_product: number;
 
    @Column()
    Author: string;
 
    @Column()
    Name: string;
 
    @Column()
    Description: number;

    @Column()
    Category: number;

    @Column()
    Price: number; 
}