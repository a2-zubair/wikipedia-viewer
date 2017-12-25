$(document).ready(function(){
    // search button is clicked
    $("#searchBtn").click(function(){
        var searchText = $("#searchText").val();
        // console.log(searchText);
        var apiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchText +"&format=json&callback=?";
        $.ajax({
            type:"GET",
            url:apiUrl,
            async:"flase",
            dataType:"json",
            success: function(data){
                getWikiData(data);                
            },
            cache:false,
            error: function(errorWiki){
                alert("Wiki Data Error!");
            }
        });
    });

    // get wikidata and process the data
    function getWikiData(wikiData){
        $("#result").empty();
        for(var i = 0; i < wikiData[1].length; i++){
            $("#result").append(
                "<li class='result-box'>"+
                "<h3>"+wikiData[1][i]+"</h3>"+
                "<p>"+wikiData[2][i]+"</p>"+
                "<a href="+wikiData[3][i]+" target='_blank'>Read More</a>"+
                "</li>"
            );
        }
    }
    // footer
    $("#footer").append("<div class='footer-text'>copyright &copy; 2017. Design and Develope by <a href='https://codepen.io/a2-zubair'>Zubair</a>.</div>");
});