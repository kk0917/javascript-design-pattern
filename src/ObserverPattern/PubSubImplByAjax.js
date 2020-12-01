;($ => {
  // Cache by using pre-compile template and closure.
  let resultTemplate = _.template($("#resultTemplate").html());

  // Subscribe to the search topics
  $.subscribe('/search/tags', tags => {
    $("#searchResults").html('Searched for:' + tags + '');
  });

  // Subscribe to the resulting topic
  $.subscribe('/search/resultSet', results => {
    $("#searchResults").append(resultTemplate(results));
    $("#searchResults").append(compiledTemplate(results));
  });

  // Send the searching Query and publish the tags to /search/tags topic
  $("flickrSearch").submit(e => {
    e.preventDefault();

    let tags = $(this).find("#query").val();

    if (!tags) return;

    $.publish('/search/tags', [$.trim(tags)]);
  });

  /**
   * Subscribe to the published tag, and execute searching query by using the tag.
   * When returning tha data, to be able to use other application,
   *   publish That data.
   */
  $.subscribe('/search/tags', tags => {
    $.getJson('http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?', {
      tags:    tags,
      tagmode: 'any',
      format:  'json'
    },
    
    data => {
      if (!data.items.length) return;

      $.publish('/search/resultSet', data.items);
    });
  });

})();