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

     const element = document.createElement('li')
     element.appendChild(button)
     element.innerText = value
     return element
}

function createDeleteTweetButton()
{
     const button = document.createElement('button')
     button.setAttribute('class', 'borrar-tweet')
     button.innerText = 'X'
     return button
}

function addTweetListItem(item)
{
     const my_tweets = document.getElementById('lista-tweets')
     my_tweets.insertBefore(item, my_tweets.firstChild)
}