$(function(){
var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({
  'api-key': "a1f474fef60b4344b4a905fde1e852da"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});






//----------------------NYT example code------------------------
//
//





//--------------------------my Itunes widget--------------------------------
//
//
//                        $('#tech').on('submit', function(event_object) {
//   event_object.preventDefault();
//   $(".album-list").empty();
//   var artist_name = $("#artist-name").val();
//   var albumList = "";  
//   $.ajax({
//     method: 'GET', 
//     url: 'https://itunes.apple.com/search?entity=album&limit=6&term='+artist_name,
//     dataType:"jsonp"
//   }).done(function(data) {
//     $.each(data.results, function(index, value) {
      
//       albumList +=  '<li><img src="' + value.artworkUrl100 +'">'+ value.collectionName + '</li>'
//       console.log(albumList);
//     }); 
//     $(".album-list").append(albumList);
//   }).fail(function(){
//     $(".album-list").append("<li>Sorry!</li>");
//   });
// });