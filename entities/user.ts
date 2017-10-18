import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User {
 
    @PrimaryGeneratedColumn()
    id_client: number;
 
    @Column()
    Name: string;
 
    @Column()
    lastName: string;
 
    @Column()
    Address: number;

    @Column()
    Phone: number;

    @Column()
    Mail: number;

    @Column()
    Pseudo: number;

    @Column()
    Password: number;

    @Column()
    basket_id: number;
 
}