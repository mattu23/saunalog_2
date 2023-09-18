const MysqlConnectionOptions = require('typeorm/driver/mysql/MysqlConnectionOptions').MysqlConnectionOptions;

const options = {
  type: 'mysql',
  host: 'us-cdbr-east-06.cleardb.net',
  port: 3306,
  username: 'b95043fd55958a',
  password: 'd67af78e',
  database: 'heroku_c037d59f3b5618c',
  entities: ['dist/src/**/*.entity.js'],
  migrations: ['dist/src/migration/**/*.js'],
  cli: {
    migrationsDir: 'src/migration',
  },
};

module.exports = options;
