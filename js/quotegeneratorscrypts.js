var qoutesArray = [
    ["O philosophy, life’s guide! O searcher-out of virtue and expeller of vices! What could we and every age of men have been without thee? Thou hast produced cities; thou hast called men scattered about into the social enjoyment of life.", "Cicero"],
    ["Philosophy stands in the same relation to the study of the actual world as masturbation to sexual love.", "Karl Marx"],
    ["Philosophy is the acquisition of knowledge.", "Plato"],
    ["A little philosophy inclineth man’s mind to atheism; but depth in philosophy bringeth men’s minds about to religion.", "Francis Bacon"],
    ["A cleric who loses his faith abandons his calling; a philosopher who loses his redefines his subject.", "Ernest Gellner"],
    ["Philosophy is questions that may never be answered. Religion is answers that may never be questioned.", "Anonymous"],
    ["Philosophy, being nothing but the study of wisdom and truth.", "George Berkeley"],
    ["Art shows how it loves, philosophy what it loves; mysticism knows only that it loves.", "Constantin Brunner"],
    ["Too much philosophy makes men mad.", "Alan Judd"],
    ["There are more things in heaven and earth, Horatio, Than are dreamt of in your philosophy.", "William Shakespeare, Hamlet"],
    ["Music is ... A higher revelation than all Wisdom & Philosophy.", "Ludwig van Beethoven"],
    ["A serious and good philosophical work could be written consisting entirely of jokes.", "Ludwig Wittgenstein"],
    ["This is my simple religion. There is no need for temples; no need for complicated philosophy. Our own brain, our own heart is our temple; the philosophy is kindness.", "Dalai Lama XIV"],
    ["I have gained this by philosophy … I do without being ordered what some are constrained to do by their fear of the law.", "Aristotle"],
    ["To make light of philosophy is to be a true philosopher.", " Blaise Pascal"],
    ["Philosophy ... is a science, and as such has no articles of faith; accordingly, in it nothing can be assumed as existing except what is either positively given empirically, or demonstrated through indubitable conclusions.", "Arthur Schopenhauer"],
    ["Keep me away from the wisdom which does not cry, the philosophy which does not laugh and the greatness which does not bow before children.", "Kahlil Gibran"],
    ["I do not know how to teach philosophy without becoming a disturber of the peace.", "Baruch Spinoza"],
    ["Jokes of the proper kind, properly told, can do more to enlighten questions of politics, philosophy, and literature than any number of dull arguments.", "Isaac Asimov"],
    ["Generally speaking, the errors in religion are dangerous; those in philosophy only ridiculous.", "David Hume"]
];
var randomize;
$(document).ready(function () {
    $("#quote-button").click(function () {
        $("blockquote").css("display", "block");
        randomize = randomInteger(0, qoutesArray.length);
        $("#quote-text").html(qoutesArray[randomize][0]);
        $("#quote-author").html(qoutesArray[randomize][1]);
    });
    $("#hide-button").click(function () {
        $("blockquote").css("display", "none");
    });
});

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}