const body = document.querySelector('body')
body.addEventListener('click', showClick)
localStorage.setItem('tweets', {})

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

     }
     else{
          alert('No puedes mandar un Tweet vacío')
     }
}