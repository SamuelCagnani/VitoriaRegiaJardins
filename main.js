const nav = document.querySelector('#header nav')
    const icons = document.querySelectorAll('nav .toggle')
    
    
    for(const element of icons){
       element.addEventListener('click', function(){
          nav.classList.toggle('show')
       })
    }