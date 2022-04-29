function printJokes() {
    pastJokes = sessionStorage.getItem("pastJokes");
    if (pastJokes === null) {
        pastJokes = [];
    } else {
        pastJokes = JSON.parse(pastJokes);
    }
    for (joke in pastJokes) {
        var p = document.createElement("p");
        p.innerHTML = pastJokes[joke];
        document.getElementById("jokes").appendChild(p);
    }
}