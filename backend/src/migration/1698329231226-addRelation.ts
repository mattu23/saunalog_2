import {MigrationInterface, QueryRunner} from "typeorm";

export class addRelation1698329231226 implements MigrationInterface {
    name = 'addRelation1698329231226'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`saunalog\` ADD \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`saunalog\` ADD CONSTRAINT \`FK_2e1451b3b66f88259adc563dbb2\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`saunalog\` DROP FOREIGN KEY \`FK_2e1451b3b66f88259adc563dbb2\``);
        await queryRunner.query(`ALTER TABLE \`saunalog\` DROP COLUMN \`userId\``);
    }

}
