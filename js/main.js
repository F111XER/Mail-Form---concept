var formBtn = $("#formSubmit");
var paper = $("#paper");
var lid = $("#lid");
var envelope = $("#envelope");

formBtn.click(paperAnimation);

function paperAnimation(){
  
  $("#paper").addClass("hide-paper");

  setTimeout(function(){
    lid.addClass("close-lid");
    envelope.addClass("turn-form");
  },500);
}
