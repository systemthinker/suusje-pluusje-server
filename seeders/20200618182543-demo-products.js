"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "products",
      [
        {
          naam: "test product 1",
          omschrijving: "beste babyNestje",
          prijs: 10,
          imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71nYPytk8fL._AC_SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naam: "test product 1",
          omschrijving: "beste babyNestje",
          prijs: 10,
          imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71nYPytk8fL._AC_SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naam: "test product 2",
          omschrijving: "beste babyNestje",
          prijs: 10,
          imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71nYPytk8fL._AC_SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naam: "test product 3",
          omschrijving: "beste babyNestje",
          prijs: 10,
          imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71nYPytk8fL._AC_SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naam: "test product 4",
          omschrijving: "beste babyNestje",
          prijs: 25,
          imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71nYPytk8fL._AC_SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naam: "test product 5",
          omschrijving: "beste babyNestje",
          prijs: 50,
          imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71nYPytk8fL._AC_SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naam: "test product 6",
          omschrijving: "beste babyNestje",
          prijs: 10,
          imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71nYPytk8fL._AC_SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naam: "test product 7",
          omschrijving: "beste babyNestje",
          prijs: 10,
          imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71nYPytk8fL._AC_SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naam: "test product 8",
          omschrijving: "beste babyNestje",
          prijs: 10,
          imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71nYPytk8fL._AC_SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naam: "test product 9",
          omschrijving: "beste babyNestje",
          prijs: 10,
          imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71nYPytk8fL._AC_SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naam: "test product 10",
          omschrijving: "beste babyNestje",
          prijs: 10,
          imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71nYPytk8fL._AC_SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naam: "test product 11",
          omschrijving: "beste babyNestje",
          prijs: 10,
          imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71nYPytk8fL._AC_SL1500_.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          naam: "test product 12",
          omschrijving: "beste babyNestje",
          prijs: 10,
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
