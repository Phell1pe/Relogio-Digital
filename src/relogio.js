

function Relogio(){
    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();
    let seg = data.getSeconds();

    let tempo_total = hora + ":" + min + ":" + seg;
    let tempo = window.document.getElementById('cont');
    
    tempo.innerHTML = tempo_total;
};

setInterval(Relogio,1000);



