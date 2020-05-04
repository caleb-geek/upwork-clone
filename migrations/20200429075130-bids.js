'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bids', {
      freelancerId: {
        type:Sequelize.INTEGER,
        references :{
          model:'Users',
          key:'id'
        },
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
      }
        ,
        jobsId: {
          type:Sequelize.INTEGER,
          references :{
            model:'Jobs',
            key:'id'
          },
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
        }
          ,
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Bids');
  }
};