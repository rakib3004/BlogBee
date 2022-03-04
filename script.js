

    function getVideo(){
    var API_KEY = "AIzaSyCDqpvkFcSA2OucamX9Uk429DTXLNAvZkk"

  
console.log("My Department");

        var search = document.forms["form"]["submit"].value;

        videoSearch(API_KEY,search,10);
        console.log("Hub of Innovation");


   
}
function videoSearch(key,search,maxResults){
    console.log("Execute Betterment");
    $("#videos").empty()

    document.getElementById("videos").empty()
    $.get("https://www.googleapis.com/youtube/v3/search?key="+key+"&type=video&part=snippet&maxResults="+maxResults+"&q="+search,function(data){
        console.log(data)
        console.log("Be Positive");


        data.items.forEach(item=> {
            
            video= `
            <iframe width="420" height="315" src="https://www.youtube.com/embed/$(item.id.videoId)" frameborder="0" allowfullscreen></iframe>
            
            `
            $("#videos").append(video);

        });
    
    
    })

}

