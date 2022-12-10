function findButton() {
    let p = document.getElementById("original");
    console.log(p);
    
    let input = document.getElementById('input');
    let text = String(input.value);
    console.log(input);
    
    let inputWord = document.getElementById('word');
    let word = String(inputWord.value);
    console.log(inputWord.text);

    if(word != "") {
        let newp = find(text, word);
        p.innerHTML = newp;
    }

    

}

function replaceButton() {
    console.log("clicked");
    let input = document.getElementById('newWord');
    let newWord = String(input.value);
    let text = document.getElementById('input');
    let text = String(text.value);
    let p = document.getElementById('original');
    let inputWord = document.getElementById('word');
    let word = String(inputWord.value);
    


    let newText = change(text, novaword, word);
    p.innerHTML = newText;
}

function runButton() {
    console.log("clicked");
    let input = document.getElementById('input');
    let text = String(input.value);
    let div = document.getElementById("show");
    let p = document.getElementById("original");

    p.innerHTML = text;
    div.innerHTML += "</br></br><b>função reverse:</b> "+reverse(text);

    div.innerHTML += "</br><b>função highlight:</b> "+highlight(text);

    store(text);

    maiorOcorrencia(store(text));
    

}    

function dateButton() {
    console.log("clicked");

    let input = document.getElementById('date');
    let date = String(input.value);

    
    let p = document.getElementById("days");
    p.innerHTML = countDays(date);


}

function concatButton() {
    console.log("clicked");

    let input = document.getElementById('concat');
    let date = String(input.value);

    
    let p = document.getElementById("concatp");
    p.innerHTML = dayconcat(date);


}
function semanaButton() {
    console.log("clicked");

    let input = document.getElementById('weeks');
    let date = String(input.value);
    let input2 = document.getElementById('weeks2');
    let date2 = String(input2.value);

    
    let p = document.getElementById("weeksp");
    p.innerHTML = weeks(date, date2);


}
function codifyButton() {
    let p = document.getElementById("codifyp");
    console.log(p);
    
    let input = document.getElementById('codify');
    let text = String(input.value);

    if(text != "") {
        p.innerHTML = codify(text);
    }

    

}

function change(text, newWord, word) {
    let newText;

    newText = text.replaceAll(word, newWord)
    return newText;
}

function find(text, word) {
    let newText;

    newText = text.replace(word, "<b>"+word+"</b>")
    return newText;
}

function countDays (date) {
    let dateint = date.split("-");
    console.log(date)

    let year = parseInt(dateint[0]);
    let month = parseInt(dateint[1]);
    let day = parseInt(dateint[2]);

    var Today = new Date();
    console.log(Today.getMonth)
    var GetDay = parseInt(Today.getDate());
    var monthAtual = parseInt(Today.getMonth()) + 1;
    var yearAtual = parseInt(Today.getFullYear());

   let daysYear = yearAtual - year;
   let daysMonth = monthAtual - month;
   console.log(monthAtual, month)
   let daysDay = GetDay - day;

   console.log(daysYear);
   console.log(daysMonth);
   console.log(daysDay);

   let soma = (daysYear*365) + (daysMonth*30) + (daysDay);
    return soma;
}
function dayconcat (date) {
    let dateint = date.split("-");
    console.log(date)

    let year = parseInt(dateint[0]);
    let month = parseInt(dateint[1]);
    let day = parseInt(dateint[2]);

    let monthes = [
        'january', 'february',
         'march', 'april', 
         'may', 'june', 'july', 
         'august', 'september', 
         'october', 'november',
         'december'
    ]

   let concat = day +' de '+ monthes[month-1] +' de ' +year;
    return concat;

    
}
function weeks (date, date2) {
    let dateint = date.split("-");
    console.log(date)

    let year = parseInt(dateint[0]);
    let month = parseInt(dateint[1]);
    let day = parseInt(dateint[2]);

    let dateint2 = date2.split("-");
    console.log(date2)

    let year2 = parseInt(dateint2[0]);
    let month2 = parseInt(dateint2[1]);
    let day2 = parseInt(dateint2[2]);


   let daysYear = year2 - year;
   let daysMonth = month2 - month;
   let daysDay = day2 - day;

   console.log(daysYear, year, year2);
   console.log(daysMonth);
   console.log(daysDay);

   let soma = ((daysYear*365) + (daysMonth*30) + (daysDay))/7;
    return parseInt(soma);
}
function password (password) {
    let strenght;
    let regex1 = /(?=.*[a-z])(?=.*[A-Z]).*$/;
    let regex2 = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/;
    let regex3 = /\W|_/;
    
    if(regex1.test(password)) {
        strenght = 0;
    }
    if(regex2.test(password)) {
        strenght = 1;
    }

    if(regex3.test(password)) {
        strenght = 2;
        console.log(regex3.test(password))
    }

    return strenght;

}

function codify(text) {
    let newWord;

    newWord = text.replaceAll('t', 'p').replaceAll('e', 'o').replaceAll('n', 'l').replaceAll('i', 'a').replaceAll('s', 'r');
    return newWord;
}

function reverse(text) {
    var newText = "";
    for(let i=0;i<text.length;i++) {
        newText=newText+text[text.length - i-1];
    }
    return newText;    
}

function highlight(text) {
    let newText;

    // console.log("text: text");
    // console.log(text.replace('a', "<b>a</b>").replace('o', "<b>o</b>"));
    // console.log(text);

    newText = text.replaceAll('a', "<b>a</b>");
    newText = newText.replaceAll('e', "<b>e</b>");
    newText = newText.replaceAll('i', "<b>i</b>");
    newText = newText.replaceAll('o', "<b>o</b>");
    newText = newText.replaceAll('u', "<b>u</b>");
    newText = newText.replaceAll('E', "<b>e</b>");
    newText = newText.replaceAll('I', "<b>i</b>");
    newText = newText.replaceAll('O', "<b>o</b>");
    newText = newText.replaceAll('U', "<b>u</b>");
    newText = newText.replaceAll('A', "<b>u</b>");
    return newText;
}

function store(text) {
    
    var date = [];

    const myArray = text.split(" ");
    console.log(myArray);

    myArray.map(function(item){
        let exists = false;

        for(i=0;i<=date.length;i++) {
            if(date[i]?.word == item){
                date[i].count+=1;
                exists = true;
            } 
            
        }
        
        if(!exists) {
            let dt = {
                word: item,
                count: 1
            }
            date.push(dt);
        }
    })
    return date;    
}

// Bigger
function highestOccurrence(date) {
    var biggerThen = {
        count: 0
    };
    date.map(function(item){
        if(item.count>biggerThen?.count) {
            biggerThen = item;
        }
    })
    console.log(biggerThen);
}


