function generate() {
    
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            document.getElementById("fact").innerHTML = JSON.parse(this.responseText).value;

            pastJokes = localStorage.getItem("pastJokes");
            if (pastJokes === null) {
                pastJokes = [];
            } else {
                pastJokes = JSON.parse(pastJokes);
            }
            pastJokes.push(JSON.parse(this.responseText).value);
            localStorage.setItem("pastJokes", JSON.stringify(pastJokes))
        }
    });

    xhr.open("GET", "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random?category=movie");
    xhr.setRequestHeader("accept", "application/json");
    xhr.setRequestHeader("X-RapidAPI-Host", "matchilling-chuck-norris-jokes-v1.p.rapidapi.com");
    xhr.setRequestHeader("X-RapidAPI-Key", "dd12ef4b37msheecbd0ae22a6a5fp1baa2ajsn068e5a27914f");

    xhr.send(data);
    
}

function update() {

    getNum = "select * from userScores where username='" + currentUser + "'";
    conn.query(getNum, function(err, rows){
        if (err){
            res.json({success: false, message: "Server error"})
        }
        else{
            console.log(rows[0].numFacts);
            console.log("good");
        }
    })
}