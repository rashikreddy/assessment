const pg = require('pg');

const config = {
    host:'localhost',
    user:'postgres',
    password:'root',
    database:'customer',
    port:5432
}

const pool = new pg.Pool(config);


executeQuery = async (query,parameters) => {
    let client = null;
    try{
        client = await pool.connect();
        const result = await client.query(query,parameters);
        return result;
    }catch(error){
        console.log('---exception---',error);
    }finally{
        client.release();
    }
}

module.exports = executeQuery;