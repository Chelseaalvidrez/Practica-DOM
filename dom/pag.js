let te = 0;
const cambiarTexto = ()=>{
    if (te == 0){
    document.getElementById('camb').innerHTML ='¡Hola mundo!';
    te=1;
    }
    else{
        document.getElementById('camb').innerHTML ='Texto';
        te=0;
    }
}
const color = ()=>{

    const random = () => {
       
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        let comb = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        return comb;
      }
      
      let camb = document.querySelector('#camb');
      camb.style.backgroundColor = random();

    document.getElementById('camb').camb.style.color = random();

}

function boton (){
    alert('¡Haz hecho clic!');

}
let vis=0;
const ocul = ()=>{
    document.getElementById('camb');
    

    if(vis==0){
        camb.style.display = "none";
        vis=1;
    }
    else{
        camb.style.display = "block";
        vis=0;
    }
}