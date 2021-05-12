import SQLite from "react-native-sqlite-2"

const db = SQLite.openDatabase("test.db", "1.0", "", 1);
db.transaction(function (txn){
    txn.executeSql(
        "CREATE TABLE IF NOT EXISTS WALLETS (index VARCHAR(100) PRIMARY KEY NOT NULL, wallet_name VARCHAR(100) NOT NULL, chain_code VARCHAR(100) NOT NULL, public_key VARCHAR(100) NOT NULL, private_key VARCHAR(100) NOT NULL)", 
        []
    );
    txn.executeSql('INSERT INTO MASTER VALUES("abcde", "wallet1", "chaincode1", "1234", "5678")');
    txn.executeSql('INSERT INTO MASTER VALUES("abcdef", "wallet1", "chaincode1", "ABCD", "EFGH")');
    txn.executeSql("SELECT * FROM MASTER", [], function(tx, res){
        for(let i=0; i<res.rows.length;++i){
            console.log("item: ", res.rows.item(i));
        }

    }); 
});