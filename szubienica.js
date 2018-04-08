var wrongAnswers = 0; //number of wrong answers given during 1 game
var password = "";
var haslo = ""; // password with blanck spaces
var haslo2 = haslo;
var win = 0; // 0 means that you won the game
var language = false;
var kat0, kat1, kat2, kat3, kat4, kat5;

// baza hasel
var kategories = ["Movie", "Football Player", "Country", "PC Equipment", "TV Show", "Car"];
var kategorie = ["Film", "Piłkarz", "Państwo", "Sprzęt komputerowy", "Serial", "Samochód"];

window.onload = start;

function writeWord(m_pass) {
    haslo = "";
    for (var i = 0; i < m_pass.length; i++){ 
        if(m_pass.charAt(i) == ' ')
            haslo = haslo + " ";
        else
            haslo = haslo + "-";
    }
    wtitePassword(haslo);
}

function changeLanguage() {
    if(language){
        document.getElementById("jezyk").innerHTML = '<img id="flaga" src="img/flagapl.jpg"><h4>PL</h4>';
        document.getElementById("plansza").innerHTML = "Wybierz kategorię!";
        kat0 = ["pulp fiction", "zielona mila", "skazani na shawshank", "piła", "teksańska masakra piłą mechaniczną", "matrix", "nietykalni", "władca pierścieni", "mr nobody"];
        kat1 = ["zinedine zidane", "cristiano ronaldo", "ronaldinho", "lionel messi", "luis figo", "eric cantona", "wayne rooney", "van der sar", "thierry henry", "ronaldinho"];
        kat2 = ["rwanda", " suazi", "lesotho", "liberia", "saint kittis i nevis", "polska", "madagaskar", "gabon", "kirgistan", "tadżykistan"];
        kat3 = ["myszka", "drukarka", "mikrofon", "dysk twardy", "płyta głowna", "pamięć ram", "obudowa", "klawiatura", "głośniki", "procesor"];
        kat4 = ["lost", "stranger things", "dark", "skazani na śmierć", "dexter", "the walking dead", "breaking bad", "better call saul", "black mirror", "narcos"];
        kat5 = ["bmw", "mercedes", "pagani", "bugatti", "citroen", "peugeot", "audi", "saab", "volvo", "dacia"];
    }
    else {
        document.getElementById("jezyk").innerHTML = '<img id="flaga" src="img/flagauk.png"><h4>UK</h4>';
        document.getElementById("plansza").innerHTML = "Choose category!";
        kat0 = ["pulp fiction", "zielona mila", "skazani na shawshank", "piła", "teksańska masakra piłą mechaniczną", "matrix", "nietykalni", "władca pierścieni", "mr nobody"];
        kat1 = ["zinedine zidane", "cristiano ronaldo", "ronaldinho", "lionel messi", "luis figo", "eric cantona", "wayne rooney", "van der sar", "thierry henry", "ronaldinho"];
        kat2 = ["rwanda", " suazi", "lesotho", "liberia", "saint kittis and nevis", "poland", "madagascar", "gabon", "kyrgyzstan", "tajikistan"];
        kat3 = ["mouse", "printer", "microphone", "hard drive", "motherboard", "ram memory", "case", "keyboard", "speakers", "procesor"];
        kat4 = ["lost", "stranger things", "dark", "prison break", "dexter", "the walking dead", "breaking bad", "better call saul", "black mirror", "narcos"];
        kat5 = ["bmw", "mercedes", "pagani", "bugatti", "citroen", "peugeot", "audi", "saab", "volvo", "dacia"];
    }
    language = !language;
    start();
}

function losuj(nrKat) {
    var numer = Math.floor(Math.random()*9);
    var chosenKat = "kat" + nrKat;
    
    if(nrKat == 0) {
        password = kat0[numer];
    }
    else if(nrKat == 1) {
        password = kat1[numer];
    }
    else if(nrKat == 2) {
        password = kat2[numer];
    }
    else if(nrKat == 3) {
        password = kat3[numer];
    }
    else if(nrKat == 4) {
        password = kat4[numer];
    }
    else if(nrKat == 5) {
        password = kat5[numer];
    }
    console.log("wybrano kat" + nrKat + ": " +kategories[nrKat]);
    for(i=0; i<6;i++) 
    {
        var ups = "kat" + i;
        if(i != nrKat ) {
            document.getElementById(ups).style.backgroundColor = "#a52a2a";
            document.getElementById(ups).style.fontWeight = "400";
            document.getElementById(ups).style.cursor = "default";
        }
        else if (i == nrKat){
            document.getElementById(ups).style.backgroundColor = "green";
            document.getElementById(ups).style.fontWeight = "700";
        }
            document.getElementById(ups).style.pointerEvents = "none";
    }

    writeWord(password); 
}
    
function wtitePassword(haselko) {
    var kisiel = haselko.toUpperCase();
    document.getElementById("plansza").innerHTML = kisiel;
}

function start() {
    var divContent = "";
    var kategoryContent = "";
    var litery = "aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż";
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var duzeLitery = litery.toUpperCase();
    var bigLetters = letters.toUpperCase();
    
    if(!language){
        for(i = 0; i < 35; i++) {
            divContent = divContent + '<input type="button" id="'+litery.charAt(i)+'" class="literka" onclick="sprawdz('+i+')" value="'+duzeLitery.charAt(i)+'">';
        }
        for(i = 0; i < 6; i++) {
        kategoryContent = kategoryContent + '<div id="kat' + i + '" class="kategoria" onclick="losuj('+i+')">'+kategorie[i]+'</div>';
    }
    }
    else {
        for(i = 0; i < 26; i++) {
            divContent = divContent + '<input type="button" id="'+letters.charAt(i)+'" class="literka" onclick="sprawdz('+i+')" value="'+bigLetters.charAt(i)+'">';
        }
        for(i = 0; i < 6; i++) {
        kategoryContent = kategoryContent + '<div id="kat' + i + '" class="kategoria" onclick="losuj('+i+')">'+kategories[i]+'</div>';
    }
    }
    
    document.getElementById("alfabet").innerHTML = divContent;
    document.getElementById("kategorie-przyciski").innerHTML = kategoryContent;
    
}

function changePic(wrongAnswers) {
    var plik = "<img src=\"img/s" + wrongAnswers + ".jpg\" />";
    document.getElementById("szubienica").innerHTML = plik;
}

function sprawdz(letterNumber) { 
    
    //var node = document.getElementById("plansza");
    //var answer = node.textContent;
    haslo2 = haslo;
    haslo = "";
    var zmienna = 0;
    var letters = "";
    if(!language){
        letters = "aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż";
    }
    else {
        letters = "abcdefghijklmnopqrstuvwxyz";
    }

    var character = letters.charAt(letterNumber);
    
    for (var i = 0; i < password.length; i++){ 
        if(password[i] == character){
            zmienna = 1;
            haslo = haslo + character;
        }
        else if (password.charAt(i) == ' '){
            haslo = haslo + " ";
        }
        else if (haslo2.charAt(i) == '-'){
            haslo = haslo + "-";
        }
        else if (haslo2.charAt(i) != '-'){
            haslo = haslo + haslo2[i];
        }

        
    }
    if(zmienna) {
        document.getElementById(character).style.color = "green";
        document.getElementById(character).style.borderColor = "green";
        
    }
    else if(!zmienna) 
    {
        document.getElementById(character).style.color = "red";
        document.getElementById(character).style.borderColor = "red";
        if(wrongAnswers < 9){wrongAnswers++;}
    }
    
    document.getElementById(character).style.pointerEvents = "none";
    
    changePic(wrongAnswers);
    wtitePassword(haslo);
    
    if (wrongAnswers >= 9)
    {
        document.getElementById("alfabet").innerHTML = 'Przegrana! prawidłowe hasło: <span id="correct-answer">'+ password +'</span><br /><br /><span class="powtorka" onclick="restart()">JESZCZE RAZ?</span>';
        document.getElementById("plansza").style.backgroundColor = "#f90606";
        document.getElementById("plansza").style.color = "black";
    }
    
        if (haslo == password)
    { 
        document.getElementById("alfabet").innerHTML = 'BRAWO, WYGRAŁEŚ! Prawidłowe hasło: <span id="correct-answer">'+ haslo +'</span><br /><br /><span class="powtorka" onclick="restart()">JESZCZE RAZ?</span>';
        document.getElementById("plansza").style.backgroundColor = "rgba(15,240,30,0.7)";
        document.getElementById("plansza").style.color = "black";
    }
}

function restart(){
    window.location.reload();
    changePic(0);
}