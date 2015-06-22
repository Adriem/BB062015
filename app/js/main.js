var beerList = [];

function setList(list) {
    var listFrame = $('#list');
    listFrame.empty();
    list.forEach(function (item) {
        listFrame.append(
            "<div class='list-group-item'>" +
            "<div class='row'>" +
            "<div class='col-md-2'>" +
            "<img class='beer-image' width='100px' src=" + item.img + " alt='Beer image'>" +
            "</div>" +
            "<div class='col-md-8'>" +
            "<h3>" + item.name + "</h3>" +
            "<p>" + item.details + "</p>" +
            "</div>" +
            "<div class='col-md-2'>" +
            "<em class='pull-right'>" + item.vol + "%</em>" +
            "</div>" +
            "</div>" +
            "</div>"
        );
    });
}

function filterAndSetElements() {
    var filterValue = $('#filter').val();
    var filteredList = beerList.filter(function (item) {
        return item.name.toLowerCase().indexOf(filterValue.toLowerCase()) > -1;
    });
    setList(filteredList);
}

var request = $.ajax({
    url: "./data/beers.json",
    method: "GET"
});

request.done(function (msg) {
    beerList = msg.data;
    setList(beerList);
});

request.fail(function () {
    console.log("Error in the network")
});

$('#filter-form').keyup(filterAndSetElements);