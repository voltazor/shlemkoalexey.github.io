$(document).ready(function () {

    $.getJSON("http://localhost:8080/", function (data) {
        alert(data.id);
        console.log(data.id);
        console.log(data.age);
    });
    alert(1);
});
       

