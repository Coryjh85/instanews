$(function(){
  console.log('hi');

});

var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({
  'api-key': "a1f474fef60b4344b4a905fde1e852da"
});
var storyCategory = '';
var sections = '';

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
}).done(function(data){
  $.each(data.results, function(index, value){
    storyCategory += '<option class="dropdown-item" value="home">' + value.section + '</option>'
    console.log(storyCategory)
  }).slice(0, 12);
   $("#selection").append(storyCategory);

});

