import SQLite from "react-native-sqlite-2"

const db = SQLite.openDatabase("test.db", "1.0", "", 1);

export function createContact (){
db.transaction(function (txn){
    txn.executeSql(
        "CREATE TABLE IF NOT EXISTS CONTACTS (address VARCHAR(100) PRIMARY KEY NOT NULL, address_name VARCHAR(100) NOT NULL)", 
        []
    );
    txn.executeSql('INSERT INTO MASTER VALUES("abcd", "address1")');
    txn.executeSql('INSERT INTO MASTER VALUES("efgh", "address2")');
    txn.executeSql("SELECT * FROM MASTER", [], function(tx, res){
        for(let i=0; i<res.rows.length;++i){
            console.log("item: ", res.rows.item(i));
        }

    }); 
});
}