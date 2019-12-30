const mysql = require('mysql') ;
// const express = require('express') ; 




const connection = mysql.createConnection(
    {
        host:"localhost" , 
        user:"root" , 
        database:"behdasht_app"
    }
)

const q = 'SELECT CURRENT_DATR(); ' ; 
connection.query(q ,
     (err , results , fileds) => { 
        if (err) { 
            console.log('some error ouccred' , err) ; 
        }

        console.log('the result is' , results) ; 
     }
) ; 
