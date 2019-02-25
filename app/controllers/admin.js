module.exports.formulario_inclusao_noticia = function(app, req, res){
	res.render("admin/form_add_noticia", {validacao : {},noticia : {} });
}

module.exports.noticias_salvar = function(app, req, res){
	var noticia = req.body;

	req.assert('titulo','Título é obrigatório').notEmpty();
	req.assert('resumo','Resumo é obrigatório').notEmpty();
	req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
	req.assert('autor','Autor é obrigatório').notEmpty();
	req.assert('data_noticia','Data é obrigatória').notEmpty();
	req.assert('noticia','Noticia é obrigatória').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
		return;
	}
		
	var connection = app.config.dbConnection();
	var noticiasModel = new app.app.models.NoticiasDAO(connection);

	noticiasModel.salvarNoticia(noticia, function(error, resul){
		res.redirect('/noticias');
	});
}