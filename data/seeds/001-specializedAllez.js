
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('myBikes').del()
    .then(function () {
      // Inserts seed entries
      return knex('myBikes').insert([
        {id: 1, frameModel: 'Specialized Allez' , frameSize: 56},
        {id: 2, frameModel: 'Storck Scentron', frameSize: 55},
        {id: 3, frameModel: 'Planet X Team Bike', frameSize: 58,}
      ]);
    });
};
