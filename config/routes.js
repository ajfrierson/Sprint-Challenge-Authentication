const axios = require('axios');

const { authenticate } = require('../auth/authenticate');
const tokenService = require('../auth/generate-token');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
};

function register(req, res) {
  // implement user registration
  let user = req.body;

  db('users')
    .insert(user)
    .then(userId => {
      const [id] = userId;
      db('users')
        .where('id', id)
        .then(user => {
          res.status(201).json(user); 
        });
    })
    .catch(error => {
      res.status(500).json({ error: 'There was an error registering the user.'});
    });
} // end of registration function


function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
