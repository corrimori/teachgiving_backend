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

const createPledge = body => {
  console.log('body>>', body);
  pledge = pledgesQuery.createPledge(body);

  return pledge.then(result => {
    return !result ? { error: 'error creating pledge', status: 500 } : result;
  });
};

const updatePledge = (id, body) => {
  pledge = pledgesQuery.updatePledge(id, body);

  return pledge.then(result => {
    return !result ? { error: 'error updating pledge', status: 500 } : result;
  });
};

const deletePledge = id => {
  console.log('in pledge delete models...');

  pledge = pledgesQuery.deletePledge(id);

  return pledge.then(result => {
    return !result ? { error: 'error deleting pledge', status: 500 } : result;
  });
};

module.exports = {
  getPledges,
  createPledge,
  updatePledge,
  deletePledge,
};
