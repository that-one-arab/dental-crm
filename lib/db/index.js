const { Pool } = require('pg');
const pool = new Pool();
module.exports = {
    pool,
    query: async (text, params) => {
        const res = await pool.query(text, params);
        return res;
    },
};
