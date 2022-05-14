const db = require('../helpers/db');
const helper = require('../helpers/helpers');
const config1 = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
module.exports = {
    getAll
};

async function getAll() {
    const rows = await db(
        `select * from meter_master`
      );
      const data = helper.emptyOrRows(rows);
      return data;
}
