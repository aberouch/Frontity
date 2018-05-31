$(document).ready(() => {
  // Gets 5 latests posts
  $('#getAll').click(() => {
    $('#content').html("");
    getPosts();
  });

  // Gets 5 latests posts
  $('#getNature').click(() => {
    $('#content').html("");
    getPosts(7);
  });

});


// Gets Posts by category.
// If no category param is passed, the filter wont work and will return posts from all categories

function getPosts(category) {
  $('#loader').toggleClass('hide');

  axios.create({
      baseURL: `https://demo.worona.org/wp-json/wp/v2/posts?filter[cat]=${category}`
    })
    .get()
    .then(response => {
      $('#loader').toggleClass('hide');
      displayContent(response.data.slice(5));
    })
    .catch(err => {
      $('#content').append(err);
    })
}


// Displays content.

function displayContent(data) {

  data.forEach((e) => {
    $('#content').append("<li>" + e.title.rendered + "</li>")
  });

}