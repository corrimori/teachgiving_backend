const pledgesQuery = require('../../queries/pledges');

const getPledges = () => {
  console.log('in pledge models...');

  pledges = pledgesQuery.getPledges();

  return pledges.then(result => {
    return result.length < 1
      ? { error: 'error retreiving pledges', status: 404 }
      : result;
  });
};

module.exports = {
  getPledges,
};
