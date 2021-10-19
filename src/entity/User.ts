import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 250, nullable: false })
    name!: string;

    @Column({ length: 250, unique: true, nullable: false })
    email!: string;

    @Column({ name: "password_digest", length: 1024, nullable: false })
    passwordDigest!: string;

    @Column({ nullable: false })
    active!: boolean;

    @Column({ name: "inserted_date", nullable: false })
    insertedDate!: Date;
    
}