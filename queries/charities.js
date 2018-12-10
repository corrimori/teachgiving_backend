const knex = require('./db');

getAllCharities = () => {
  return knex('charities').orderBy('name', 'ASC');
};

getCharityById = id => {
  return knex('charities').where('id', id);
};

createCharity = body => {
  return knex('charities')
    .insert(body)
    .returning('*')
    .catch(err => {
      console.error(err);
      knex.destroy();
      process.exit(1);
    });
};

updateCharity = (id, body) => {
  return (
    knex('charities')
      .where('id', id)
      // .update(body)
      .update({
        name: body.name,
        price: body.price,
        description: body.description,
        tags: body.tags,
      })
      .returning('*')
      .catch(err => {
        console.error(err);
        knex.destroy();
        process.exit(1);
      })
  );
};

deleteCharityById = id => {
  return knex('charities')
    .where('id', id)
    .del()
    .returning('*')
    .catch(err => {
      console.error(err);
      knex.destroy();
      process.exit(1);
    });
};

module.exports = {
  getAllCharities,
  getCharityById,
  createCharity,
  updateCharity,
  deleteCharityById,
};
