function moviePage(url, movieId) {
    this.url = url;
    this.movieId = movieId;
}

moviePage.prototype = {
    constructor: moviePage,
    getInfo: function (cb) {
        var _this = this, url;
        this.movieId.forEach(function (props) {
            url = _this.url + '/anime/' + props;
            fetch(url, {
                    method: 'GET'
                })
                .then(function serverResponse(echo) {
                    while (echo.statusText === 'OK') {
                        return echo.json();
                    }
                })
                .then(function retrieveSuccess(movieData) {
                    cb(movieData);
                })
                .catch(function errorMessage(error) {
                    var error = "Something went wrong! Please try again.";
                    console.log(error);
                });
        });
    }
};