var mysql = require('mysql');

var connMySQL = function(){
	console.log('>>>>Conexão com DB<<<<');
	return connection = mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : 'my123',
		database : 'portal_noticias'
	});
}

module.exports = function() {
	console.log('>>>>Autoload carregou<<<<');
	return connMySQL;
}