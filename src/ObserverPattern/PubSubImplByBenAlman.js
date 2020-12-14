// JS codes for Pub/Sub
;(function($) {

  /**
   * Subscribe topics of new user.
   * Add user to users list received review.
   */
  $.subscribe('/new/user', (e, tada) => {
    let compiledTmeplate;

    if (data) {
      compiledTemplate = _.template($('#userTemplate').html());

      $("#users").append(compiledTemplate(data));
    }
  });

  /**
   * Subscribe the topic of new rating. it configures by title and rating
   * Rating is newly added to the user rating's list
   */
  $.subscribe('/new/rating', (e, data) => {
    let compiledTemplate;

    if (data) {
      compiledTemplate = _.template($("#ratingsTemplate").html());

      $("#ratings").append(compiledTemplate(data));
    }
  });

  // Handler to add new user
  $("#add").on('click', e => {
    e.preventDefault();

    let strUser = $("#twitter_handle").val();
        strMovie = $("#movie_rating").val();
        strRating = $("#movie_rating").val();

    // Notice to the app that there is a new rating.
    $.publish('/new/rating', {title: strMovie, rating: strRating});
  });

})(jQuery);