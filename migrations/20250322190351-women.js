module.exports = {
  async up(db) {
    db.createCollection("women");
  },

  async down(db) {
    db.collection("women").drop();
  },
};
