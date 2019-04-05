// event listener on button
function randomIndex(){
    
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json', true);
   
    xhr.onload = function(){
        if(this.status === 200){
            let boxOfQuotes = JSON.parse(this.responseText);
            //to generate random index for array
            let RandomIndex = Math.floor(Math.random()*boxOfQuotes.quotes.length);
          
            document.getElementById("text").innerHTML = boxOfQuotes.quotes[RandomIndex].quote ;
            document.getElementById("author").innerHTML = boxOfQuotes.quotes[RandomIndex].author;
            document.getElementById("tweet-quote").setAttribute("href","twitter.com/intent/tweet" + boxOfQuotes.quotes[RandomIndex].quote);

        }
         
    }

    //ON ERROR sta da radi ako mu error 404 izbaci tj ne nadje ono sta se poziva    
    xhr.onerror = function(){
        console.log("Request Error")
    }
  
    // Sends request
    xhr.send();
}
