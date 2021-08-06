import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCars1628284667968 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "cars",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "daily_rate",
                        type: "numeric"
                    },
                    {
                        
                    }
                ];
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
