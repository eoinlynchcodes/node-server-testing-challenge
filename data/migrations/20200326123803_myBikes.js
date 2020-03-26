
exports.up = function(knex) {
  return knex.schema.createTable('myBikes', table => {
      table.increments();
      table.string('frameModel');
      table.decimal('frameSize');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('myBikes');
};
