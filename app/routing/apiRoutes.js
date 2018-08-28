//displays friends
app.get("/api/friends", function (req, res) {
    return res.json(friends);
});


//Create New Friend
app.post("/api/friends", function (req, res) {

    var newUser = req.body;

    console.log(newUser);

    friends.push(newUser);

    //this is where the math goes but can not push to browser so have to send t or f


});