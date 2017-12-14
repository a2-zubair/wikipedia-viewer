$(document).ready(function(){
    // search button is clicked
    $("#search").click(function(){
        var searchText = $("#searchText").val();
        // console.log(searchText);
        var url = "https://en.wikipedia.org/w/api.php?action=query&titles="+ searchText +"&inlimit=10&format=json&origin=*";
        $.getJSON(url, function(wikiData){
            console.log(wikiData);
        });
    });
});