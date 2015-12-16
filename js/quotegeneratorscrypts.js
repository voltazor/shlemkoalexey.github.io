var qoutesArray = [
  ["O philosophy, life’s guide! O searcher-out of virtue and expeller of vices! What could we and every age of men have been without thee? Thou hast produced cities; thou hast called men scattered about into the social enjoyment of life.","Cicero"],
  ["Philosophy stands in the same relation to the study of the actual world as masturbation to sexual love.","Karl Marx"],
  ["Philosophy is the acquisition of knowledge.","Plato"],
  ["A little philosophy inclineth man’s mind to atheism; but depth in philosophy bringeth men’s minds about to religion.","Francis Bacon"],
  ["A cleric who loses his faith abandons his calling; a philosopher who loses his redefines his subject.","Ernest Gellner"],
  ["Philosophy is questions that may never be answered. Religion is answers that may never be questioned.", "Anonymous"],
  ["Philosophy, being nothing but the study of wisdom and truth.","George Berkeley"],
  ["Art shows how it loves, philosophy what it loves; mysticism knows only that it loves.","Constantin Brunner"],
  ["Too much philosophy makes men mad.","Alan Judd"],
  ["There are more things in heaven and earth, Horatio, Than are dreamt of in your philosophy.","William Shakespeare, Hamlet"]
]
var randomize;
$(document).ready(function(){
  $("#quote-button").click(function(){
    $("blockquote").css("display", "block");  
    randomize = randomInteger(0,qoutesArray.length);
    $("#quote-text").html(qoutesArray[randomize][0]);
    $("#quote-author").html(qoutesArray[randomize][1]);
  });
  $("#hide-button").click(function(){
    $("blockquote").css("display", "none");                       
  });
});

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}