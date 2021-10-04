var mongo = require('mongodb');

var connMongoDB = function () {
    console.log('Entrou na função de conexão');
    var db = new mongo.Db(
        'got',
         new mongo.Server(
            'localhost',
            27017,
            {}
        ),
        {}
    );

    return db;

}

module.exports = function(){
    return connMongoDB;
}