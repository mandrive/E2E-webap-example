var Sequelize = require('Sequelize');

var sequelize = new Sequelize('example_app_db', 'example_app_user', '1Password2', {
  dialect: 'postgres'
});

var Person = sequelize.define('person', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  forename: Sequelize.STRING,
  surname: Sequelize.STRING,
  dateOfBirth: Sequelize.DATE
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'person',
});

console.log('db initialized');

module.exports = {
  dbConnection: sequelize,
  Person: Person
};
