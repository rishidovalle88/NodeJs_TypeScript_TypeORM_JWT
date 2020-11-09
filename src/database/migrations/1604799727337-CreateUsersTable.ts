import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersTable1604799727337 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'users',
				columns: [
					{
						name: 'id',
						type: 'nvarchar',
						isPrimary: true,
					},
					{
                        name: 'email',
                        type: 'nvarchar',
                        isUnique: true  
                    },
                    {
                        name: 'password',
                        type: 'nvarchar',
                    }
				]
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}
