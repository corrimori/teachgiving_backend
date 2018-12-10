const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 3032;
const app = express();

if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

const UserRoutes = require('./src/routes/users.js');
app.use('/users', UserRoutes);

const kidRoutes = require('./src/routes/kids.js');
app.use('/kids', kidRoutes);

const avatarRoutes = require('./src/routes/avatars.js');
app.use('/avatars', avatarRoutes);

const charitiesRoutes = require('./src/routes/charities.js');
app.use('/charities', charitiesRoutes);

// any other route is not allowed
app.all('*', (req, res, next) => res.sendStatus(404));

app.use((err, req, res, next) => {
  res.status(err.status).json(err);
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`teachgiving open on port ${port}!`);
  });
}

module.exports = app;
