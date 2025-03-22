module.exports = {
  async up(db) {
    db.createCollection("kids");
  },

  async down(db) {
    db.collection("kids").drop();
  },
};
