const MysqlConnectionOptions = require('typeorm/driver/mysql/MysqlConnectionOptions').MysqlConnectionOptions;

const options = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'user',
  password: 'password',
  database: 'develop',
  entities: ['dist/src/**/*.entity.js'],
  migrations: ['dist/src/migration/**/*.js'],
  cli: {
    migrationsDir: 'src/migration',
  },
};

module.exports = options;
