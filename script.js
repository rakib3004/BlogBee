$(document).ready(function(){
    var API_KEY = "AIzaSyCDqpvkFcSA2OucamX9Uk429DTXLNAvZkk"

    $("#form").submit(function (event)){
        event.preventDefault()

        var search = $("#search").val()

        videoSearch(API_KEY,10)
    }
})

function videoSearch(key,search,maxResults){
    $("#videos").empty()
    $.get("https://www.googleapis.com/youtube/v3/search?key="+key+"&type=video&part=snippet&maxResults="+maxResults+"&q="+search,function(data){
        console.log(data)

        data.items.forEach(item=>{
            video= `
            
            `
        })
    });
}