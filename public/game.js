function generate() {
    
    const data = null;
    alert(currentUser);

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
            document.getElementById("fact").innerHTML = JSON.parse(this.responseText).value;
        }
    });

    xhr.open("GET", "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random?category=food");
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
