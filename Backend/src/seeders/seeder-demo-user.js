'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      return queryInterface.bulkInsert('Users', [{
        email: 'admin@gmail.com',
        password: "123456789",
        firstName: 'John',
        lastName: 'Doe',
        address: "Ngõ 38, P.Tư Đình, Long Biên, Hà Nội",
        phoneNumber: "0988791065",
        gender:1,
        roleId:"",
        positionId:"",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
