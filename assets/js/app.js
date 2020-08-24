const body = document.querySelector('body')
body.addEventListener('click', showClick)

function showClick(e){
     const target = e.target
     if(target.type == 'submit'){
          console.log('Esto es un botón')
     }
     else{
          console.log('Esto no es un botón')
     }
}