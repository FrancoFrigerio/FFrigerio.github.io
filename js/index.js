// **********************************efecto scroll*/    
    window.addEventListener('scroll',function(){
    let animacion = document.getElementById('maqueta1') 
    let animacion1 = document.getElementById('maqueta2')


    let posicionObj = animacion.getBoundingClientRect().top;
   let posicionObj1 = animacion1.getBoundingClientRect().top;


    let tamañoPantalla = window.innerHeight/1;
    if(posicionObj < tamañoPantalla)
        
        animacion.style.animation = 'mover 1.9s ease-in';
       
    if(posicionObj1< tamañoPantalla)
     animacion1.style.animation = 'mover 1.9s ease-out';
})

// **************************************** menu responsive*/
const menu = document.querySelector('#menu');
menu.addEventListener('click' , () =>{
    containerBarra.classList.toggle('move');
})

const containerBarra = document.querySelector('#barra');
const containerlinks = document.querySelectorAll('.links');
containerlinks.forEach(link =>{
    link.addEventListener('click', ()=>{
        containerBarra.classList.toggle('move');
     })
})

//**********para enviar mail */
const btnEnviar = document.querySelector('#enviar1');
const link = document.querySelector('#enviar');
btnEnviar.addEventListener('click', ()=>{
               const string = "mailto:contacto@frigeriofranco.com?&subject="+document.getElementById("asunto").value+"&body=Hola soy "+document.getElementById("name").value+" "+document.getElementById("message").value;
        link.href = string;
       document.getElementById("name").value = "";
       document.getElementById("email").value = "";
       document.getElementById("asunto").value = "";
       document.getElementById("message").value = "";
})

