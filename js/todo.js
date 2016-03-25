$(document).ready(function(){
    $.cookie('qwer', 'rewq');
    console.log($.cookie("qwer"));
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