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
          imageUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fin04.hostcontrol.com%2Fresources%2F56634549962945%2F93914b59c3.JPEG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "test product 3",
          description: "beste babyNestje",
          price: '13,37',
          imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fd8%2F7b%2F4c%2Fd87b4cae3eade074162007f704f27149.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "test product 4",
          description: "beste babyNestje",
          price: '25,70',
          imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.myonlinestore.eu%2F94a76d3d-6be1-11e9-a722-44a8421b9960%2Fimage%2Fcache%2Ffull%2Ff428bfd174ceb6743ec945d7c76ce95ad08b68ff.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "test product 5",
          description: "beste babyNestje",
          price: '50,00',
          imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.magicdat.nl%2Fwp-content%2Fuploads%2F2020%2F01%2F20200120_124542-1024x1024.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "test product 6",
          description: "beste babyNestje",
          price: '10,99',
          imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.janske.nl%2Fwp-content%2Fuploads%2F2016%2F09%2FDSC02350.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "test product 7",
          description: "beste babyNestje",
          price: '10,99',
          imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flittlefeet.be%2Fwp-content%2Fuploads%2F2020%2F01%2F20200115_101814-scaled.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "test product 8",
          description: "beste babyNestje",
          price: '10,99',
          imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flittlefeet.be%2Fwp-content%2Fuploads%2F2020%2F02%2F20200227_161003-scaled.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "test product 9",
          description: "beste babyNestje",
          price: 10,
          imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jollein.com%2Fmedia%2Fimage%2F24%2F5f%2F9b%2FSMA-21jun-025yulQaVshtaEUa.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "test product 10",
          description: "beste babyNestje",
          price: '10,99',
          imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-6GN6ZEfLtww%2FXUVvQd3vknI%2FAAAAAAAAK7w%2F72KedqVZH8kb4YbzdvWIK73g0Pg7O9-RACLcBGAs%2Fs1600%2Fbabynestje%252Bmet%252Bmatrasje.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "test product 11",
          description: "beste babyNestje",
          price: '10,99',
          imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.myonlinestore.eu%2F9491b0df-6be1-11e9-a722-44a8421b9960%2Fimages%2FBabynest%2520Powder%2520Pink%2520Ruches.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "test product 12",
          description: "beste babyNestje",
          price: '10,99',
          imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.myonlinestore.eu%2F93dde2ed-6be1-11e9-a722-44a8421b9960%2Fimage%2Fcache%2Ffull%2F7a6cc0a0b7b8e8e18b33384faa788c1f9e11a922.jpg",
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
