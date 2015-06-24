$(document).ready(function(){

	var validMail = function (mail) {
		var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		if( pattern.test(mail) ) {
			return true
		}

		return false;
	}

	$(document).foundation();
	$(document).on('open.fndtn.offcanvas', '[data-offcanvas]', function () {
    	$('html, body').animate({
			scrollTop: 0
		}, 500);
	});

	$("#banners").owlCarousel({
		singleItem: true,
		slideSpeed : 300,
      	paginationSpeed : 400,
      	autoPlay: 8000,
	});

	$("#banners2").owlCarousel({
		singleItem: true,
		slideSpeed : 300,
      	paginationSpeed : 400,
      	autoPlay: 8000,
	});

	$("#banners3").owlCarousel({
		singleItem: true,
		slideSpeed : 300,
      	paginationSpeed : 400,
      	autoPlay: 8000,
	});

	

	$("#footer .news .form").on("keyup", "input", function(){
		if( validMail($(this).val()) ) {
			$(this).parent().addClass("done");
		} else {
			$(this).parent().removeClass("done");
		}
	});


	$(window).scroll(function(){
		var scroll = $(window).scrollTop(),
			banners = "#header #banners .banner, #header #banners2 .banner, #header #banners3 .banner",
			algor = Math.round( (scroll/10) * ((scroll*0.1) / 100) ),
			bgPosition = '50% ' + algor + "px";

		if ( scroll >= 10 ) {
			$(banners).css("background-position", bgPosition);
		}

		if ( scroll >= $("#container-menu").offset().top ) {
			$("#header #menu").css(
				{
					"position" : 'fixed',
					"top" : "0",
					"left" : "0"

				}
			);
		} 

		if ( $("#container-menu").offset().top >= scroll ) {
			$("#menu").css(
				{
					"position" : "relative",
					"top" : "initial",
					"left" : "initial"

				}
			);
			
		}

	});

	$("#contato #form").on("keyup", "input, textarea", function(){
		if($(this).hasClass("email")){
			if( validMail($(this).val()) ) {
				console.log("true");
				$(this).parent().addClass("done");
			} else {
				console.log("f");
				$(this).parent().removeClass("done");
			}
		} else {
			if($(this).val() == ""){
				$(this).parent().removeClass("done")
			} else {
				$(this).parent().addClass("done");
			}
		}
	});


	$("#send").click(function(){

		var nome = $('input[name="nome"]').val();
		var telefone = $('input[name="telefone"]').val();
		var email = $('input[name="email"]').val();
		var cidade = $('input[name="cidade"]').val();
		var estado = $('input[name="estado"]').val();
		var mensagem = $('textarea[name="mensagem"]').val();
		
		if(nome == ''){
			$("input[name='nome']").addClass('required').focus();
			$("#retorno-contato").addClass("error").empty().html('<p>O Campo nome é obrigatório.</p>').fadeIn();
			return false;
		} else {
			$("#retorno-contato").empty().hide();
		}

		if(telefone == ''){
			$("input[name='telefone']").addClass('required').focus();
			$("#retorno-contato").addClass("error").empty().html('<p>O Campo telefone é obrigatório.</p>').fadeIn();
			return false;
		} else {
			$("#retorno-contato").empty().hide();
		}
		
		if(email == ''){
			$("input[name='email']").addClass('required').focus();
			$("#retorno-contato").addClass("error").empty().html('<p>O Campo e-mail é obrigatório.</p>').fadeIn();
			return false;
		}else{
			$("#retorno-contato").empty().hide();
		}

		if(!validMail(email)){
			$("input[name='email']").addClass('required').focus();
			$("#retorno-contato").addClass("error").empty().html('<p>Preencher corretamente o campo e-mail.</p>').fadeIn();
			return false;
		}else{
			$("#retorno-contato").empty().hide();
		}

		if(cidade == ''){
			$("input[name='cidade']").addClass('required').focus();
			$("#retorno-contato").addClass("error").empty().html('<p>O Campo cidade é obrigatório.</p>').fadeIn();
			return false;
		}else{
			$("#retorno-contato").empty().hide();
		}

		if(estado == ''){
			$("input[name='estado']").addClass('required').focus();
			$("#retorno-contato").addClass("error").empty().html('<p>O Campo estado é obrigatório.</p>').fadeIn();
			return false;
		}else{
			$("#retorno-contato").empty().hide();
		}
		
		if(mensagem == ''){
			$("textarea[name='mensagem']").addClass('required').focus();
			$("#retorno-contato").addClass("error").empty().html('<p>O Campo mensagem é obrigatório.</p>').fadeIn();
			return false;
		} else {
			$("#retorno-contato").empty().hide();
		}

		$("#loading").fadeIn();
		$.ajax({ 
			url: "contato/enviar/", 
			dataType: 'json',
			data: {
					nome : nome,
					telefone : telefone,
					email : email,
					cidade : cidade,
					estado : estado,
					mensagem : mensagem
				},
			type: "POST", 
			success: function(json) {
			    if(json.sucess == true){  
			    	$("#retorno-contato").addClass("success").empty().html('<p>Sua mensagem foi encaminhada.</p>').fadeIn();
			    	console.log(json);
			    	$("#loading").fadeOut();
			    	setTimeout(function() {
			    		$('#retorno-contato').hide().removeClass("success");
			    		$('input, textarea').val('');
			    		$(".input, .textarea").removeClass("done");
			    	}, 5000);
			    	
					} else {
						console.log(json);
						$("#loading").fadeOut();
						$("#retorno-contato").addClass("error").empty().html('<p>Ocorreu algum erro.</p>').fadeIn();
			    	setTimeout(function() {
			    		$(".input, .textarea").removeClass("done");
			    		$('#retorno-contato').removeClass("error").hide();
			    		$('input, textarea').val('');
			    	}, 5000);
				}
			}

		});

	});

	$("#send-newsletter").click(function(){

		var email = $('input[name="newsletter"]').val();
		if(email == ''){
			$("input[name='newsletter']").addClass('required').focus();
			$(".state").empty().html('O Campo e-mail é obrigatório.').parent().addClass("error");
			return false;
		}else{
			$(".state").parent().removeClass("error");
		}

		if(!validMail(email)){
			$("input[name='newsletter']").addClass('required').focus();
			$(".state").empty().html('Preencher corretamente o campo e-mail.').parent().addClass("error");
			return false;
		}else{
			$(".state").parent().removeClass("error");
		}

		$.ajax({  
			url: "newsletter/enviar/", 
			dataType: 'json',
			data: {email:email},
			type: "POST", 
			success: function(json) {
				if(json.sucess){
					console.log('testesucees');
					$(".state").empty().html('E-mail cadastrado com sucesso!').parent().addClass("success");
				}else{
					console.log('testeerroor');
					$(".state").empty().html('Ocorreu algum erro.').parent().addClass("error");
				}
			}
		});

		
	});

});