$(document).ready(function(){var a=function(a){var b=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return b.test(a)?!0:!1};$(document).foundation(),$(document).on("open.fndtn.offcanvas","[data-offcanvas]",function(){$("html, body").animate({scrollTop:0},500)}),$("#banners").owlCarousel({singleItem:!0,slideSpeed:300,paginationSpeed:400,autoPlay:8e3}),$("#banners2").owlCarousel({singleItem:!0,slideSpeed:300,paginationSpeed:400,autoPlay:8e3}),$("#banners3").owlCarousel({singleItem:!0,slideSpeed:300,paginationSpeed:400,autoPlay:8e3}),$("#footer .news .form").on("keyup","input",function(){a($(this).val())?$(this).parent().addClass("done"):$(this).parent().removeClass("done")}),$(window).scroll(function(){var a=$(window).scrollTop(),b="#header #banners .banner, #header #banners2 .banner, #header #banners3 .banner",c=Math.round(a/10*(.1*a/100)),d="50% "+c+"px";a>=10&&$(b).css("background-position",d),a>=$("#container-menu").offset().top&&$("#header #menu").css({position:"fixed",top:"0",left:"0"}),$("#container-menu").offset().top>=a&&$("#menu").css({position:"relative",top:"initial",left:"initial"})}),$("#contato #form").on("keyup","input, textarea",function(){$(this).hasClass("email")?a($(this).val())?(console.log("true"),$(this).parent().addClass("done")):(console.log("f"),$(this).parent().removeClass("done")):""==$(this).val()?$(this).parent().removeClass("done"):$(this).parent().addClass("done")}),$("#send").click(function(){var b=$('input[name="nome"]').val(),c=$('input[name="telefone"]').val(),d=$('input[name="email"]').val(),e=$('input[name="cidade"]').val(),f=$('input[name="estado"]').val(),g=$('textarea[name="mensagem"]').val();return""==b?($("input[name='nome']").addClass("required").focus(),$("#retorno-contato").addClass("error").empty().html("<p>O Campo nome é obrigatório.</p>").fadeIn(),!1):($("#retorno-contato").empty().hide(),""==c?($("input[name='telefone']").addClass("required").focus(),$("#retorno-contato").addClass("error").empty().html("<p>O Campo telefone é obrigatório.</p>").fadeIn(),!1):($("#retorno-contato").empty().hide(),""==d?($("input[name='email']").addClass("required").focus(),$("#retorno-contato").addClass("error").empty().html("<p>O Campo e-mail é obrigatório.</p>").fadeIn(),!1):($("#retorno-contato").empty().hide(),a(d)?($("#retorno-contato").empty().hide(),""==e?($("input[name='cidade']").addClass("required").focus(),$("#retorno-contato").addClass("error").empty().html("<p>O Campo cidade é obrigatório.</p>").fadeIn(),!1):($("#retorno-contato").empty().hide(),""==f?($("input[name='estado']").addClass("required").focus(),$("#retorno-contato").addClass("error").empty().html("<p>O Campo estado é obrigatório.</p>").fadeIn(),!1):($("#retorno-contato").empty().hide(),""==g?($("textarea[name='mensagem']").addClass("required").focus(),$("#retorno-contato").addClass("error").empty().html("<p>O Campo mensagem é obrigatório.</p>").fadeIn(),!1):($("#retorno-contato").empty().hide(),$("#loading").fadeIn(),void $.ajax({url:"contato/enviar/",dataType:"json",data:{nome:b,telefone:c,email:d,cidade:e,estado:f,mensagem:g},type:"POST",success:function(a){1==a.sucess?($("#retorno-contato").addClass("success").empty().html("<p>Sua mensagem foi encaminhada.</p>").fadeIn(),console.log(a),$("#loading").fadeOut(),setTimeout(function(){$("#retorno-contato").hide().removeClass("success"),$("input, textarea").val(""),$(".input, .textarea").removeClass("done")},5e3)):(console.log(a),$("#loading").fadeOut(),$("#retorno-contato").addClass("error").empty().html("<p>Ocorreu algum erro.</p>").fadeIn(),setTimeout(function(){$(".input, .textarea").removeClass("done"),$("#retorno-contato").removeClass("error").hide(),$("input, textarea").val("")},5e3))}}))))):($("input[name='email']").addClass("required").focus(),$("#retorno-contato").addClass("error").empty().html("<p>Preencher corretamente o campo e-mail.</p>").fadeIn(),!1))))}),$("#send-newsletter").click(function(){var b=$('input[name="newsletter"]').val();return""==b?($("input[name='newsletter']").addClass("required").focus(),$(".state").empty().html("O Campo e-mail é obrigatório.").parent().addClass("error"),!1):($(".state").parent().removeClass("error"),a(b)?($(".state").parent().removeClass("error"),void $.ajax({url:"newsletter/enviar/",dataType:"json",data:{email:b},type:"POST",success:function(a){a.sucess?(console.log("testesucees"),$(".state").empty().html("E-mail cadastrado com sucesso!").parent().addClass("success")):(console.log("testeerroor"),$(".state").empty().html("Ocorreu algum erro.").parent().addClass("error"))}})):($("input[name='newsletter']").addClass("required").focus(),$(".state").empty().html("Preencher corretamente o campo e-mail.").parent().addClass("error"),!1))})}),$(document).ready(function(){var a=function(a){var b=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;return b.test(a)?!0:!1};$(document).foundation(),$(document).on("open.fndtn.offcanvas","[data-offcanvas]",function(){$("html, body").animate({scrollTop:0},500)}),$("#banners").owlCarousel({singleItem:!0,slideSpeed:300,paginationSpeed:400,autoPlay:8e3}),$("#banners2").owlCarousel({singleItem:!0,slideSpeed:300,paginationSpeed:400,autoPlay:8e3}),$("#banners3").owlCarousel({singleItem:!0,slideSpeed:300,paginationSpeed:400,autoPlay:8e3}),$("#footer .news .form").on("keyup","input",function(){a($(this).val())?$(this).parent().addClass("done"):$(this).parent().removeClass("done")}),$(window).scroll(function(){var a=$(window).scrollTop(),b="#header #banners .banner, #header #banners2 .banner, #header #banners3 .banner",c=Math.round(a/10*(.1*a/100)),d="50% "+c+"px";a>=10&&$(b).css("background-position",d),a>=$("#container-menu").offset().top&&$("#header #menu").css({position:"fixed",top:"0",left:"0"}),$("#container-menu").offset().top>=a&&$("#menu").css({position:"relative",top:"initial",left:"initial"})}),$("#contato #form").on("keyup","input, textarea",function(){$(this).hasClass("email")?a($(this).val())?(console.log("true"),$(this).parent().addClass("done")):(console.log("f"),$(this).parent().removeClass("done")):""==$(this).val()?$(this).parent().removeClass("done"):$(this).parent().addClass("done")}),$("#send").click(function(){var b=$('input[name="nome"]').val(),c=$('input[name="telefone"]').val(),d=$('input[name="email"]').val(),e=$('input[name="cidade"]').val(),f=$('input[name="estado"]').val(),g=$('textarea[name="mensagem"]').val();return""==b?($("input[name='nome']").addClass("required").focus(),$("#retorno-contato").addClass("error").empty().html("<p>O Campo nome é obrigatório.</p>").fadeIn(),!1):($("#retorno-contato").empty().hide(),""==c?($("input[name='telefone']").addClass("required").focus(),$("#retorno-contato").addClass("error").empty().html("<p>O Campo telefone é obrigatório.</p>").fadeIn(),!1):($("#retorno-contato").empty().hide(),""==d?($("input[name='email']").addClass("required").focus(),$("#retorno-contato").addClass("error").empty().html("<p>O Campo e-mail é obrigatório.</p>").fadeIn(),!1):($("#retorno-contato").empty().hide(),a(d)?($("#retorno-contato").empty().hide(),""==e?($("input[name='cidade']").addClass("required").focus(),$("#retorno-contato").addClass("error").empty().html("<p>O Campo cidade é obrigatório.</p>").fadeIn(),!1):($("#retorno-contato").empty().hide(),""==f?($("input[name='estado']").addClass("required").focus(),$("#retorno-contato").addClass("error").empty().html("<p>O Campo estado é obrigatório.</p>").fadeIn(),!1):($("#retorno-contato").empty().hide(),""==g?($("textarea[name='mensagem']").addClass("required").focus(),$("#retorno-contato").addClass("error").empty().html("<p>O Campo mensagem é obrigatório.</p>").fadeIn(),!1):($("#retorno-contato").empty().hide(),$("#loading").fadeIn(),void $.ajax({url:"contato/enviar/",dataType:"json",data:{nome:b,telefone:c,email:d,cidade:e,estado:f,mensagem:g},type:"POST",success:function(a){1==a.sucess?($("#retorno-contato").addClass("success").empty().html("<p>Sua mensagem foi encaminhada.</p>").fadeIn(),console.log(a),$("#loading").fadeOut(),setTimeout(function(){$("#retorno-contato").hide().removeClass("success"),$("input, textarea").val(""),$(".input, .textarea").removeClass("done")},5e3)):(console.log(a),$("#loading").fadeOut(),$("#retorno-contato").addClass("error").empty().html("<p>Ocorreu algum erro.</p>").fadeIn(),setTimeout(function(){$(".input, .textarea").removeClass("done"),$("#retorno-contato").removeClass("error").hide(),$("input, textarea").val("")},5e3))}}))))):($("input[name='email']").addClass("required").focus(),$("#retorno-contato").addClass("error").empty().html("<p>Preencher corretamente o campo e-mail.</p>").fadeIn(),!1))))}),$("#send-newsletter").click(function(){var b=$('input[name="newsletter"]').val();return""==b?($("input[name='newsletter']").addClass("required").focus(),$(".state").empty().html("O Campo e-mail é obrigatório.").parent().addClass("error"),!1):($(".state").parent().removeClass("error"),a(b)?($(".state").parent().removeClass("error"),void $.ajax({url:"newsletter/enviar/",dataType:"json",data:{email:b},type:"POST",success:function(a){a.sucess?(console.log("testesucees"),$(".state").empty().html("E-mail cadastrado com sucesso!").parent().addClass("success")):(console.log("testeerroor"),$(".state").empty().html("Ocorreu algum erro.").parent().addClass("error"))}})):($("input[name='newsletter']").addClass("required").focus(),$(".state").empty().html("Preencher corretamente o campo e-mail.").parent().addClass("error"),!1))})});