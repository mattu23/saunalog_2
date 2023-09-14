import {MigrationInterface, QueryRunner} from "typeorm";

export class UserTable1694711691719 implements MigrationInterface {
    name = 'UserTable1694711691719'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(20) CHARACTER SET "utf8" NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`saunalog\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`saunalog\` ADD \`name\` varchar(20) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`saunalog\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`saunalog\` ADD \`name\` varchar(30) NOT NULL`);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
