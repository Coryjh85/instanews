$(function () {
$('.loadingGif').hide();
  var $articleGrid = $('.articleGrid');
  $('select').change(function () {
    $articleGrid.empty();
     $('.loadingGif').show();
  $('#logo').removeClass('logo').addClass('logoSmall');

  });

    $('select').change(function () {
      var apiUrl = 'https://api.nytimes.com/svc/topstories/v2/';
      apiUrl += $(this).val();
      apiUrl += '.json';
      apiUrl += '?' + $.param({
        'api-key': 'a1f474fef60b4344b4a905fde1e852da'
      });
      $.ajax({
        url: apiUrl,
        method: 'GET',
      
    })
  
        .done(function (data) {
          $.each(data.results, function () {
          });
          var articleGroup = data.results.filter(function (item) {
            return item.multimedia.length;
          }).slice(0, 12);
        
        $.each(articleGroup, function (key, value) {
            var articleUrl = value.url;
            var pic = value.multimedia[4].url;
            var title = value.title;
            var caption = value.abstract;
            var results = '';


            results += '<li class="article" alt="' + title + '" style="background-image: url(' + pic + ' )"> <a href=';
            results += articleUrl;
            results += '>';
            results += caption;
            results += ' </a> <p class="headline">';
            results += '</p> </li>';

            $('.loadingGif').hide();
            $('.articleGrid').append(results);
          });
        });
    });
 });