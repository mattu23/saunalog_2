import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateCascadeDelete1701008195956 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // 既存の外部キー制約を削除
        await queryRunner.query(`ALTER TABLE \`saunalog\` DROP FOREIGN KEY \`FK_2e1451b3b66f88259adc563dbb2\``);

        // 新しい外部キー制約を追加（ON DELETE CASCADE）
        await queryRunner.query(`ALTER TABLE \`saunalog\` ADD CONSTRAINT \`FK_2e1451b3b66f88259adc563dbb2\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // 外部キー制約を元に戻す（ON DELETE NO ACTION）
        await queryRunner.query(`ALTER TABLE \`saunalog\` DROP FOREIGN KEY \`FK_2e1451b3b66f88259adc563dbb2\``);
        await queryRunner.query(`ALTER TABLE \`saunalog\` ADD CONSTRAINT \`FK_2e1451b3b66f88259adc563dbb2\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION`);
    }
}
