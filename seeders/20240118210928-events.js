'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('events', [{
      name: 'country concert',
      date: new Date(),
      start_time: new Date(),
      end_time: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('events', null, {})
  }
};
