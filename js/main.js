$(function(){

// $('#selection').on('submit', function(event_object) {
//   event_object.preventDefault();
//   $('.articlegrid').empty();
//   var choice = $('#selection').val();
//   var articles = ''; 


var url = 'https://api.nytimes.com/svc/topstories/v2/home.json';
url += '?' + $.param({
  'api-key': 'a1f474fef60b4344b4a905fde1e852da'
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});
});
// });


