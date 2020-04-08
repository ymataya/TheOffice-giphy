$("#office-button").on("click", function (a) {
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=ixVfksAKLn7w00x7PIVK3XqXcdDQfDkg&tag=the-office-kevin-malone";
    $.ajax({ 
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {
            a.preventDefault();
            var imageUrl = response.data.image_original_url;
            var officeImage = $("<img>");
            officeImage.attr("src", imageUrl);
            $("#images").empty();
            $("#images").append(officeImage);
        });
});