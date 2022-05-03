const mysql = require('mysql')


const cred = {
    host:'127.0.0.1',
    user : 'root',
    password : '12345678'
}

const con = mysql.createPool(cred);

exports.sqlQuery = async (query)=>{
    console.log(query);
    return new Promise((res,rej)=>{
        con.query(query,function(err,results,field){
            if(err){
                rej(err);
            }
            else{
                res(results);
            }
        })
    })
}
