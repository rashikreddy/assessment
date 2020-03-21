const query = require('../databaseconnection/connection.js');
post_details = async (data) => {
    try{
        const result = await query('insert into details values($1,$2,$3,$4,$5,$6)',[data.firstname,data.lastname,data.email,data.address,data.city,data.state]);
        return result;
    }catch(error){
        console.log('---exception---',error);
    }
}


get_details = async () => {
    try{
        const result = await query('select * from details');
        return result;
    }catch(error){
        console.log('---exception---',error);
    }
} 


delete_details = async (data) => {
    try{
        const result = await query('delete from details where firstname = $1',[data]);
        return result;
    }catch(error){
        console.log('---exception---',error);
    }
}

update_details = async (update,value,data) => {
    try{
        const result = await query(`update details set ${update}='${value}' where firstname = '${data}'`);
        return result;
    }
    catch(error){
        console.log('---exception---',error);
    }
}

getByFirstName = async (firstname) => {
    try{
        const result = await query('select * from details where firstname = $1',[firstname]);
        return result
    }
    catch(error){
        console.log('---exception---',error);
    }
}

module.exports = {
    update_details,post_details,delete_details,get_details,getByFirstName
}