module.exports = {
  async up(db) {
    db.createCollection("man");
  },

  async down(db) {
    db.collection("man").drop();
  },
};
