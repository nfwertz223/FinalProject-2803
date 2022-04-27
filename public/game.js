function generate() {
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
            document.getElementById("fact").innerHTML = JSON.parse(this.responseText).value;
        }
    });

    xhr.open("GET", "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random?category=movie");
    xhr.setRequestHeader("accept", "application/json");
    xhr.setRequestHeader("X-RapidAPI-Host", "matchilling-chuck-norris-jokes-v1.p.rapidapi.com");
    xhr.setRequestHeader("X-RapidAPI-Key", "dd12ef4b37msheecbd0ae22a6a5fp1baa2ajsn068e5a27914f");

    xhr.send(data);

    get = "select into registeredUsers values(?, ?)"
    conn.query(insertUser, [req.body.username, passwordHash], function(err, rows){
        if (err){
            res.json({success: false, message: "Server error"})
        }
        else{
            res.json({success: true, message: "User registered"})
        }
    })
}

document.getElementById("generate").addEventListener("click", generate());