import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1627342009403 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid"
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "username",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "password",
                        type: "varchar"
                    }
                    
                ];
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
