initializePage()

function initializePage()
{
     const body = document.querySelector('body')
     body.addEventListener('click', showClick)
     cargaTweets()
}

function showClick(e){
     const target = e.target
     if(target.type == 'submit'){
          addTweet()
     }
     else if(target.className == 'borrar-tweet')
     {
          console.log(target.parentNode)
     }
}

function addTweet(){
     let text_area = document.getElementById('tweet')
     const tweet = text_area.value
     if(tweet.length > 0){
          let tweets = getOrCreateTweets()
          tweets.push(tweet)
          localStorage.setItem('tweets',JSON.stringify(tweets))     
          addTweetListItem(createTweetListItem(tweet))

          text_area.value = ""
     }
     else{
          alert('No puedes mandar un Tweet vacío')
     }
}

function getOrCreateTweets(){
     if(localStorage.getItem("tweets") === null){
          localStorage.setItem("tweets", JSON.stringify([]))
     }
     return JSON.parse(localStorage.getItem('tweets'))
}

function cargaTweets(){
     const string_tweets = getOrCreateTweets()
     const my_tweets = document.getElementById('lista-tweets')

     console.log(string_tweets)
     
     my_tweets.innerHTML = "";
     string_tweets.forEach(function(value){
          addTweetListItem(createTweetListItem(value))
     });
}

function createTweetListItem(value){
     const button = createDeleteTweetButton()
     const text = document.createTextNode(value)
     const element = document.createElement('li')

     element.appendChild(button)
     element.appendChild(text)
     return element
}

function createDeleteTweetButton()
{
     const button = document.createElement('a')

     button.setAttribute('class', 'borrar-tweet')
     button.innerText = 'X'
     return button
}

function addTweetListItem(item)
{
     const my_tweets = document.getElementById('lista-tweets')
     my_tweets.insertBefore(item, my_tweets.firstChild)
}