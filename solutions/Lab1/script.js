$(function () {

    $("#analyzeImageButton").click(function () {
        getImageInfo();

    });

    var getImageInfo = function () {
        var subscriptionKey = "dc6d7936f86b4577bbb9750c91233f74";
        var imageUrl = $("#imageUrlTextbox").val();
        var webSvcUrl = "https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize";
        var resultsDiv = $("#ResultsDiv");


        if (imageUrl) {
            var body = '{ "url": "' + imageUrl + '" }';

            $.ajax({
                type: "POST",
                url: webSvcUrl,
                headers: {"Ocp-Apim-Subscription-Key": subscriptionKey},
                contentType: "application/json",
                data: body
            }).done(function (data) {
                var scores = data[0].scores;
                var angerScore = scores.anger;
                var contemptScore = scores.contempt;
                var disgustScore = scores.disgust;
                var fearScore = scores.fear;
                var happinessScore = scores.happiness;
                var neutralScore = scores.neutral;
                var sadnessScore = scores.sadness;
                var surpriseScore = scores.surprise;
                                
                var angerText = "Anger Score: " + angerScore.toFixed(2);
                var contemptText = "Contempt Score: " + contemptScore.toFixed(2);
                var disgustText = "Disgust Score: " + disgustScore.toFixed(2);
                var fearText = "Fear Score: " + fearScore.toFixed(2);
                var happinessText = "Happiness Score: " + happinessScore.toFixed(2);
                var neutralText = "Neutral Score: " + neutralScore.toFixed(2);
                var sadnessText = "Sadness Score: " + sadnessScore.toFixed(2);
                var surpriseText = "Surprise Score: " + surpriseScore.toFixed(2);
                $("#AngerDiv").text(angerText);
                $("#ContemptDiv").text(contemptText);
                $("#DisgustDiv").text(disgustText);
                $("#FearDiv").text(fearText);
                $("#HappinessDiv").text(happinessText);
                $("#NeutralDiv").text(NeutralText);
                $("#SadnessDiv").text(sadnessText);
                $("#SurpriseDiv").text(surpriseText);

                $("#ResultsDiv").text("Success!");

            }).fail(function (err) {
                $("#ResultsDiv").text("ERROR!" + err.responseText);
            });
        }
    };
});
