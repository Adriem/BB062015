$('#create-form').submit(function (e) {
    e.preventDefault();

    $('.input-group').removeClass('has-error');

    var beer = {
        name: $('#name').val(),
        details: $('#details').val(),
        img: $('#img').val(),
        provenance: $('#provenance').val(),
        vol: $('#vol').val()
    };
    var errors = {};
    var keys = ["name", "details", "img", "provenance", "vol"];

    function validate(value){
        return (value == undefined || value.trim() == "");
    }

    function showErrorFeedback(field){
        errors[field] = true;
        $('#'+field+"-error").addClass('has-error');
    }

    keys.forEach(function(key){
        if (validate(beer[key])) {
            showErrorFeedback(key);
        }
    });

    if (errors.name||errors.details||errors.img||errors.provenance||errors.vol) {
        console.log(errors);
        return;
    }

    console.log(beer);

    var request = $.ajax({
        url: "http://localhost:5000/api/beer",
        data: JSON.stringify(beer),
        contentType: 'application/json',
        method: "POST"
    });

    request.done(function(msg){
        alert("Beer successfully added!");
        window.location.href= 'index.html';
    });

    request.fail(function(){
        alert("Error submitting beer");
    });
});