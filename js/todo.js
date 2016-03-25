$(document).ready(function(){
    console.log($.cookie());
    loadCookie();
    setCookie();
    if($('.to-do-list li').length === 0 && $(".done-list li").length === 0){
        $('.to-do-list').html("<li>Sleep</li><li>Nothing</li>");
        $('.done-list').html("<li>Create to-do list</li>");
        setCookie();
    }
    console.log($.cookie());
});

$("#add-button").click(function(){
    if ($("#add-input").val().length>0) {
        $(".to-do-list").append("<li>" + $("#add-input").val() +"</li>");
        $("#add-input").val(function(){
            $(this).empty();
        });
    };
});
$(document).on("click", ".to-do-list li", function(){
    $(this).appendTo(".done-list");
});

$(document).on("click", ".done-list li", function(){
    $(this).appendTo(".to-do-list");
});

$("#remove-tasks-button").click(function(){
    $(".done-list li").remove();
});

$(document).click(function(){
    clearCookie();
    setCookie();
    console.log($.cookie());
});


function setCookie(){
    var toDoListLength = $('.to-do-list li').length;
    var doneListLength = $(".done-list li").length;

    for(var i = 1; i<=toDoListLength; i++){
        $.cookie("toDoList"+i,$(".to-do-list li:nth-child("+i+")").html());
    }  
    for(var i = 1; i<=doneListLength; i++){
        $.cookie("doneListLength"+i,$(".done-list li:nth-child("+i+")").html());
    }      
}

function clearCookie(){
    $.each($.cookie(), function(index, value) {
        $.removeCookie(index);
    }); 
}

function loadCookie(){
    $.each($.cookie(), function(index, value) {
        if(index.charAt(0) == "t"){
            $(".to-do-list").append("<li>"+value+"</li>");
        }else if (index.charAt(0) == "d") {
            $(".done-list").append("<li>"+value+"</li>");
        };
    }); 
}

function clearLists(){
    $("ol").empty();
}
