
var friends = require('../data/friends');



function apiRoutes(app) {
//displays friends
app.get("/api/friends", function (req, res) {
    return res.json(friends);
});


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
};

module.exports = apiRoutes;