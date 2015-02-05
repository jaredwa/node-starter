var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'rpg-server'
    },
    port: process.env.PORT || 5000,
    db: 'postgres://postgres:postgres@rpg-dev.cwkfx0asoq4h.us-west-1.rds.amazonaws.com:5432/rpg_dev'

  },

  staging: {
    root: rootPath,
    app: {
      name: 'rpg-server'
    },
    port: process.env.PORT || 5000,
    db: 'postgres://postgres:postgres@rpg-dev.cwkfx0asoq4h.us-west-1.rds.amazonaws.com:5432/rpg_staging'

  },

  production: {
    root: rootPath,
    app: {
      name: 'rpg-server'
    },
    port: process.env.PORT || 5000,
    db: 'postgres://postgres:postgres@rpg-dev.cwkfx0asoq4h.us-west-1.rds.amazonaws.com:5432/rpg_production'

  }
};

module.exports = config[env];
