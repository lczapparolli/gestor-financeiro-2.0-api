import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class UserCreation1634603461379 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "User",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true
                },
                {
                    name: "name",
                    type: "string",
                    length: "250",
                    isNullable: false
                },
                {
                    name: "email",
                    type: "string",
                    length: "250",
                    isNullable: false,
                    isUnique: true
                },
                {
                    name: "password_digest",
                    type: "string",
                    length: "1024",
                    isNullable: false
                },
                {
                    name: "active",
                    type: "boolean",
                    default: true,
                    isNullable: false
                },
                {
                    name: "inserted_date",
                    type: "timestamp",
                    isNullable: false
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("User");
    }

}
