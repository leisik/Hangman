var wrongAnswers = 0; //number of wrong answers given during 1 game
var chancesLeft = 0;
var password = "";
var haslo = ""; // password with blanck spaces
var haslo2 = haslo;
var win = 0; // 0 means that you won the game
var language = false; //jezyk polski
var kat0, kat1, kat2, kat3, kat4, kat5;
var divPlansza, divAlfabet, divSzubienica;
var wylosowane;
var alfabet = "aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż";

// baza hasel
var kategories = ["Movie", "Football Player", "Country", "PC Equipment", "TV Show", "Car"];
var kategorie = ["Film", "Piłkarz", "Państwo", "Sprzęt komputerowy", "Serial", "Samochód"];



window.onload = start;

function allPasswords() {
    if(!language){
    kat0 = ["pulp fiction", "zielona mila", "skazani na shawshank", "piła", "teksańska masakra piłą mechaniczną", "matrix", "nietykalni", "władca pierścieni", "mr nobody"];
    kat1 = ["zinedine zidane", "cristiano ronaldo", "ronaldinho", "lionel messi", "luis figo", "eric cantona", "wayne rooney", "van der sar", "thierry henry", "ronaldinho"];
    kat2 = ["rwanda", " suazi", "lesotho", "liberia", "saint kittis i nevis", "polska", "madagaskar", "gabon", "kirgistan", "tadżykistan"];
    kat3 = ["myszka", "drukarka", "mikrofon", "dysk twardy", "płyta główna", "pamięć ram", "obudowa", "klawiatura", "głośniki", "procesor"];
    kat4 = ["lost", "stranger things", "dark", "skazani na śmierć", "dexter", "the walking dead", "breaking bad", "zadzwon do saula", "czarna lustro", "narcos"];
}
else if(language) {
    kat0 = ["pulp fiction", "the green mile", "shawshank redemption", "saw", "the texas chainsaw massacre", "matrix", "untouchables", "the lord of the rings", "mr nobody"];
    kat1 = ["zinedine zidane", "cristiano ronaldo", "ronaldinho", "lionel messi", "luis figo", "eric cantona", "wayne rooney", "van der sar", "thierry henry", "ronaldinho"];
    kat2 = ["afghanistan", "algeria", "andorra", "angola", "antigua and deps", "argentina", "armenia", "australia", "austria", "azerbaijan", "bahamas", "bahrain", "bangladesh", "barbados", "belarus", "belgium", "belize", "benin", "bhutan", "bolivia", "bosnia herzegovina", "botswana", "brazil", "brunei", "bulgaria", "burkina", "burundi", "cambodia", "cameroon", "canada", "cape verde", "central african rep", "chad", "chile", "china", "colombia", "comoros", "congo", "congo {democratic rep}", "costa rica", "croatia", "cuba", "cyprus", "czech republic", "denmark", "djibouti", "dominica", "dominican republic", "east timor", "ecuador", "egypt", "el salvador", "equatorial guinea", "eritrea", "estonia", "ethiopia", "fiji", "finland", "france", "gabon", "gambia", "georgia", "germany", "ghana", "greece", "grenada", "guatemala", "guinea", "guinea-bissau", "guyana", "haiti", "honduras", "hungary", "iceland", "india", "indonesia", "iran", "iraq", "ireland", "israel", "italy", "ivory coast", "jamaica", "japan", "jordan", "kazakhstan", "kenya", "kiribati", "korea north", "korea south", "kosovo", "kuwait", "kyrgyzstan", "laos", "latvia", "lebanon", "lesotho", "liberia", "libya", "liechtenstein", "lithuania", "luxembourg", "macedonia", "madagascar", "malawi", "malaysia", "maldives", "mali", "malta", "marshall islands", "mauritania", "mauritius", "mexico", "micronesia", "moldova", "monaco", "mongolia", "montenegro", "morocco", "mozambique", "myanmar, {burma}", "namibia", "nauru", "nepal", "netherlands", "new zealand", "nicaragua", "niger", "nigeria", "norway", "oman", "pakistan", "palau", "panama", "papua new guinea", "paraguay", "peru", "philippines", "poland", "portugal", "qatar", "romania", "russian federation", "rwanda", "st kitts & nevis", "st lucia", "saint vincent and the grenadines", "samoa", "san marino", "sao tome & principe", "saudi arabia", "senegal", "serbia", "seychelles", "sierra leone", "singapore", "slovakia", "slovenia", "solomon islands", "somalia", "south africa", "south sudan", "spain", "sri lanka", "sudan", "suriname", "swaziland", "sweden", "switzerland", "syria", "taiwan", "tajikistan", "tanzania", "thailand", "togo", "tonga", "trinidad and tobago", "tunisia", "turkey", "turkmenistan", "tuvalu", "uganda", "ukraine", "united arab emirates", "united kingdom", "united states", "uruguay", "uzbekistan", "vanuatu", "vatican city", "venezuela", "vietnam", "yemen", "zambia", "zimbabwe"];
    kat3 = ["mouse", "printer", "microphone", "hard drive", "motherboard", "ram memory", "case", "keyboard", "speakers", "procesor"];
    kat4 = ["lost", "stranger things", "dark", "prison break", "dexter", "the walking dead", "breaking bad", "better call saul", "black mirror", "narcos"];
    }

kat5 = ["alfa romeo", "aston martin", "audi", "bentley", "benz", "bmw", "bugatti", "cadillac", "chevrolet", 
"chrysler", "citroen", "corvette", "daf", "dacia", "daewoo", "daihatsu", "datsun", "de lorean", "dino", "dodge",  
"farboud", "ferrari", "fiat", "ford", "honda", "hummer", "hyundai", "jaguar", "jeep", "kia", "koenigsegg",   
"lada", "lamborghini", "lancia", "land rover", "lexus", "ligier", "lincoln", "lotus", "martini", "maserati", "maybach",  
"mazda", "mclaren", "mercedes benz", "mini", "mitsubishi", "nissan", "noble", "opel", "peugeot", "pontiac",  
"porsche", "renault", "rolls royce", "saab", "seat", "skoda", "smart", "spyker", "subaru", "suzuki", "toyota",   
"vauxhall", "volkswagen", "volvo"] 
}

//writes word with blanck spaces in the top of the screen
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

//chanhes langueage in whole game
function changeLanguage() {
    
    if(language){
        document.getElementById("jezyk").innerHTML = '<img id="flaga" src="img/flagapl.jpg"><h4>PL</h4>';
        document.getElementById("plansza").innerHTML = "Wybierz kategorię!";
        alfabet = "aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż";
    }
    else {
        document.getElementById("jezyk").innerHTML = '<img id="flaga" src="img/flagauk.png"><h4>UK</h4>';
        document.getElementById("plansza").innerHTML = "Choose category!";
        alfabet = "abcdefghijklmnopqrstuvwxyz";
    }
    language = !language;
    console.log(language);
    password = "";
    start();
}

//draws a password from picked category
function losuj(wylosowane) {
    var numer;
    if(wylosowane == 5){
        numer = Math.floor(Math.random()*kat5.length);
    }
    else if(wylosowane == 2){
        numer = Math.floor(Math.random()*kat2.length);
    }
    else {
        numer = Math.floor(Math.random()*9);
    }
    var chosenKat = "kat" + wylosowane;
    
    if(wylosowane == 0) {
        password = kat0[numer];
    }
    else if(wylosowane == 1) {
        password = kat1[numer];
    }
    else if(wylosowane == 2) {
        password = kat2[numer];
    }
    else if(wylosowane == 3) {
        password = kat3[numer];
    }
    else if(wylosowane == 4) {
        password = kat4[numer];
    }
    else if(wylosowane == 5) {
        password = kat5[numer];
    }
    console.log(numer, password);
    writeWord(password); 
}

function changeCategory(nrKat) {
    wylosowane = nrKat;
    console.log("wybrano kat" + nrKat + ": " +kategories[nrKat]);
    for(i=0; i<6;i++) 
    {
        var ups = "kat" + i;
        if(i != nrKat ) {
            document.getElementById(ups).style.backgroundColor = "#a52a2a";
            document.getElementById(ups).style.fontWeight = "400";
         }
        else if (i == nrKat){
             document.getElementById(ups).style.backgroundColor = "green";
             document.getElementById(ups).style.fontWeight = "700";
         }

    }
    restart();
}

//writes actuas password in the top of the screen
function wtitePassword(haselko) {
    var kisiel = haselko.toUpperCase();
    document.getElementById("plansza").innerHTML = kisiel;
}

//sets alphabet, buttons and whole game logic
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
            kategoryContent = kategoryContent + '<div id="kat' + i + '" class="kategoria" onclick="changeCategory('+i+')">'+kategorie[i]+'</div>';
        }
    }
    else {
        for(i = 0; i < 26; i++) {
            divContent = divContent + '<input type="button" id="'+letters.charAt(i)+'" class="literka" onclick="sprawdz('+i+')" value="'+bigLetters.charAt(i)+'">';
        }
        for(i = 0; i < 6; i++) {
            kategoryContent = kategoryContent + '<div id="kat' + i + '" class="kategoria" onclick="changeCategory('+i+')">'+kategories[i]+'</div>';
        }
    }
    
    document.getElementById("alfabet").innerHTML = divContent;
    document.getElementById("kategorie-przyciski").innerHTML = kategoryContent;
    
    //jquery functions to clone divs for restoration
    divPlansza = divContent;
    divAlfabet = divContent;
    chanceLeft();
    allPasswords();
}

//changes pic when needed
function changePic(wrongAnswers) {
    var plik = "<img src=\"img/s" + wrongAnswers + ".jpg\" />";
    document.getElementById("szubienica").innerHTML = plik;
}

//checks if picked letter is in password
function sprawdz(letterNumber) { 
    if(password.length > 0)
    {
        //var node = document.getElementById("plansza");
        //var answer = node.textContent;
        haslo2 = haslo;
        haslo = "";
        var zmienna = 0;

        var character = alfabet.charAt(letterNumber);

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
            document.getElementById(character).style.backgroundColor = "rgba(0,255,0,0.3)";

        }
        else if(!zmienna) 
        {
            document.getElementById(character).style.color = "red";
            document.getElementById(character).style.borderColor = "red";
            document.getElementById(character).style.backgroundColor = "rgba(255,0,0,0.3)";
            if(wrongAnswers < 9){wrongAnswers++;}
        }
        
        document.getElementById(character).style.cursor = "default";
        document.getElementById(character).style.pointerEvents = "none";

        changePic(wrongAnswers);
        wtitePassword(haslo);

        if (wrongAnswers >= 9)
        {
            if(!language) {
                document.getElementById("alfabet").innerHTML = 'Przegrana! prawidłowe hasło: <span id="correct-answer"> <br />'+ password +'</span><br /><br /><span class="powtorka" onclick="restart()">JESZCZE RAZ?</span>';
                document.getElementById("plansza").style.backgroundColor = "#a52a2a";
                document.getElementById("plansza").style.color = "black";
            }
            else {
                document.getElementById("alfabet").innerHTML = 'You lost! Correct password is: <span id="correct-answer"> <br />'+ password +'</span><br /><br /><span class="powtorka" onclick="restart()">PLAY AGAIN</span>';
                document.getElementById("plansza").style.backgroundColor = "#a52a2a";
                document.getElementById("plansza").style.color = "black";
            }
        }

            if (haslo == password)
        { 
            if(!language) {
                document.getElementById("alfabet").innerHTML = 'BRAWO, WYGRAŁEŚ! Prawidłowe hasło: <span id="correct-answer"> <br />'+ haslo +'</span><br /><br /><span class="powtorka" onclick="restart()">JESZCZE RAZ?</span>';
                document.getElementById("plansza").style.backgroundColor = "rgba(15,240,30,0.7)";
                document.getElementById("plansza").style.color = "black";
            }
            else {
                document.getElementById("alfabet").innerHTML = 'CONGRATULATIONS, YOU WON! Correct password is: <span id="correct-answer"> <br />'+ haslo +'</span><br /><br /><span class="powtorka" onclick="restart()">PLAY AGAIN</span>';
                document.getElementById("plansza").style.backgroundColor = "rgba(15,240,30,0.7)";
                document.getElementById("plansza").style.color = "black";
            }
        }
    }
    console.log(character, alfabet);
    chanceLeft();
}
//shows how many chances are left
function chanceLeft() {
    chancesLeft = 9 - wrongAnswers;
    if(!language){
        document.getElementById("licznik").innerHTML = "Pozostało " + chancesLeft + " prób";
    }
    else {
        document.getElementById("licznik").innerHTML = chancesLeft + " attempts left";
    }
}

//reloads website
function restart(){
    document.getElementById("plansza").style.backgroundColor = "black";
    document.getElementById("plansza").style.color = "gray";
    document.getElementById("alfabet").innerHTML = divAlfabet;
    losuj(wylosowane);
    wrongAnswers = 0;
    win = 0; 
    changePic(0); 
    chanceLeft();
}