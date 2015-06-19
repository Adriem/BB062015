$('#create-form').submit(function(e){
    e.preventDefault();
    var beer = {
        name: $('#name').val(),
        details: $('#details').val(),
        img: $('#image').val(),
        provenance: $('#provenance').val(),
        vol: $('#vol').val()
    };

    console.log(beer);

    $.ajax({

    });
});