import {MigrationInterface, QueryRunner} from "typeorm";

export class saunalog1691494774369 implements MigrationInterface {
    name = 'saunalog1691494774369'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`saunalog\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(30) NOT NULL, \`area\` varchar(255) NOT NULL, \`rank\` int NOT NULL, \`comment\` varchar(100) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`saunalog\``);
    }

}
