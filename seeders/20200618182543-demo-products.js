"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "products",
      [
        {
          name: "test product 1",
          description: "beste babyNestje",
          price: '10.99',
          imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71nYPytk8fL._AC_SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "test product 2",
          description: "beste babyNestje",
          price: '10,00',
          imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71nYPytk8fL._AC_SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "test product 3",
          description: "beste babyNestje",
          price: '13,37',
          imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71nYPytk8fL._AC_SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "test product 4",
          description: "beste babyNestje",
          price: '25,70',
          imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71nYPytk8fL._AC_SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "test product 5",
          description: "beste babyNestje",
          price: '50,00',
          imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71nYPytk8fL._AC_SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "test product 6",
          description: "beste babyNestje",
          price: '10,99',
          imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71nYPytk8fL._AC_SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "test product 7",
          description: "beste babyNestje",
          price: '10,99',
          imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71nYPytk8fL._AC_SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "test product 8",
          description: "beste babyNestje",
          price: '10,99',
          imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71nYPytk8fL._AC_SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "test product 9",
          description: "beste babyNestje",
          price: 10,
          imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71nYPytk8fL._AC_SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "test product 10",
          description: "beste babyNestje",
          price: '10,99',
          imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71nYPytk8fL._AC_SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "test product 11",
          description: "beste babyNestje",
          price: '10,99',
          imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71nYPytk8fL._AC_SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "test product 12",
          description: "beste babyNestje",
          price: '10,99',
          imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71nYPytk8fL._AC_SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  },
};
