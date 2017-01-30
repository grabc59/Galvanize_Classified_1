// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/galvanize_classified_dev'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/galvanize_classified_test'
  },
  production: {
    client: 'pg',
    connection: 'postgres://eceqyldmeleyil:3cde3244ceaccacfe3df949ff5a6acad5eeabb4085434a6a678cbbd32fec7fad@ec2-54-235-72-121.compute-1.amazonaws.com:5432/d6nlo031n4ive8'
  }
};
