// Dependencies
// ==========================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


// Sets up the Express App
// ============================================================
var app = express();
var PORT = process.env.PORT || 3000;

/// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up (ROUTES)
// ==========================================================
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});


//displays friends
app.get("/api/friends", function (req, res) {
    return res.json(friends);
});


//Create New Friend
var friends = [{
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
    "scores": [
        "5",
        "1",
        "4",
        "4",
        "5",
        "1",
        "2",
        "5",
        "4",
        "1"
    ]
},
{
    "name": "Jacob Deming",
    "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
    "scores": [
        "4",
        "2",
        "5",
        "1",
        "3",
        "2",
        "2",
        "1",
        "3",
        "2"
    ]
},
{
    "name": "Jeremiah Scanlon",
    "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
    "scores": [
        "5",
        "2",
        "2",
        "2",
        "4",
        "1",
        "3",
        "2",
        "5",
        "5"
    ]
},
{
    "name": "Louis T. Delia",
    "photo": "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
    "scores": [
        "3",
        "3",
        "4",
        "2",
        "2",
        "1",
        "3",
        "2",
        "2",
        "3"
    ]
},
{
    "name": "Lou Ritter",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
    "scores": [
        "4",
        "3",
        "4",
        "1",
        "5",
        "2",
        "5",
        "3",
        "1",
        "4"
    ]
},
{
    "name": "Jordan Biason",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
    "scores": [
        "4",
        "4",
        "2",
        "3",
        "2",
        "2",
        "3",
        "2",
        "4",
        "5"
    ]
},
{
    "name": "Margie",
    "photo": "https://www.google.com/search?q=image+of+cute+puppy&rlz=1C1CHBF_enUS801US801&source=lnms&tbm=isch&sa=X&ved=0ahUKEwirsL7qmJHdAhUFmuAKHUHEAYMQ_AUICigB&biw=1280&bih=575#imgrc=5f2HTDEVhEXW4M:",
    "scores": [
        "4",
        "3",
        "5",
        "3",
        "5",
        "1",
        "3",
        "3",
        "4",
        "3"
    ]
}
];


app.post("/api/friends", function (req, res) {
    var diffArray = [];
    console.log("message received");
    var newUser = req.body;
    
    for (var i = 0; i < friends.length; i++) {
        var scoreDiff= 0;
        for (var j = 0; j < friends[i].scores.length; j++) {
                scoreDiff+= Math.abs(friends[i].scores[j] - newUser.scores[j])
                
        }
        diffArray.push(scoreDiff);
    }
    var matchIndex = diffArray.indexOf(Math.min(...diffArray));
   

    var match= friends[matchIndex];
    console.log(match);

    res.json(match)
    friends.push(newUser);
});



// Starts the server to begin listening
//==========================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
