$( document ).ready(function() {
var date = new Date();
var monthA = 'января,февраля,марта,апреля,июня,июля,августа,сентября,октября,ноября,декабря'.split(',');
var ISOdate = date.getDate() + ' ' + monthA[(date.getMonth()-1)] + ' ' +date.getFullYear();


$("#msgFrUser").keypress(function(e) {
 	var code = e.keyCode || e.which;
  	if (code == 10 && e.ctrlKey && $('form').valid()) { 
    	    writeNewItem();
    	    $('textarea').val('');
    	};
	});
$('.addButBl').bind("click keypress",function(){
	if($('form').valid()){
		writeNewItem();
		$('textarea').val('');
	}
});

function writeNewItem(){
   var valueText = $("#msgFrUser").val();
   $('.commentsMainBl').append('<div class="commentOfUser">\
											<div class="nameOfUser">Приходящее имя пользователя</div>\
											<div class="dateOfComm">'+ ISOdate +'</div>\
											<div class="commentBl">'+ valueText +'</div>\
										</div>');}
});