$(document).ready(function () {
    var root = 'https://api.jikan.me/';
    var movieId = ['32071', '31049', '5114'];
    var movieContainer = new moviePage(root, movieId);
    movieContainer.getInfo(function (movieData) {
        var container = $('<div>').addClass('movie-container');
        var docFragment = document.createDocumentFragment();
        var movieInfo = {
            title: $('<h2>').addClass('movie-title').text(movieData.title),
            poster: $('<img>').attr('src', movieData.image_url),
            synopsis: $('<p>').addClass('txt').text(movieData.synopsis.slice(0, 300) + ' ' + '...').prepend('<p class="pClass">Description: </p>'),
            episodes: $('<p>').addClass('txt').text(movieData.episodes).prepend('<p class="pClass">Episodes: </p>'),
            score: $('<p>').addClass('txt').text(movieData.score).prepend('<p class="pClass">Fans rating: </p>'),
            rank: $('<p>').addClass('txt').text(movieData.rank).prepend('<p class="pClass">Rank: </p>'),
            detailsButton: $('<button class="btn btn-primary details-btn" value="Back">Read more &#10097 </button>')    
        };
        $.each(movieInfo, function (mI, props) {
            props.appendTo(docFragment);
        });
        container.append(docFragment);
        $('.container').append(container);
    });

    $('.container').on('click', '.btn-primary', movieDetailsPage);
    function movieDetailsPage() {
        var movieId = $(this).data('id');
        window.location.href = 'movieDetails.html'
    }
});