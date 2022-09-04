let musicas = [
    {titulo: 'Memory', artista: 'Richard Clayderman', src: 'musicas/Richard Clayderman - Memory.mp3', img: 'imagens/pianopic.jpg'},
    {titulo: 'Still Got The Blues', artista: 'Gary Moore', src: 'musicas/Gary Moore - Still Got The Blues.mp3', img: 'imagens/guitarpic.jpg'},
    {titulo: "Cafe' Bolero", artista: 'Guitarra Azul', src: "musicas/Guitarra Azul - Cafe' Bolero.mp3", img: 'imagens/reggaepic.jpg'},
    {titulo: "Man Down", artista: 'Shelly Sony', src: "musicas/Man Down - Rihanna's song - Shelly Sony.mp3", img: 'imagens/killerpic.jpg'},
    {titulo: "Garde l'équilibre", artista: 'H MAGNUM feat INDILA', src: "musicas/H MAGNUM feat  INDILA - Garde l'équilibre.mp3", img: 'imagens/ContinuandoJehro.jpg'},
];
let musica = document.querySelector('audio');
let indexMusica = 0;
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);




document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if(indexMusica < 0) {
        indexMusica = 4;
    }
    renderizarMusica(indexMusica)
});

document.querySelector('.posterior').addEventListener('click', () => {
    indexMusica++;
    if(indexMusica > 4){
        indexMusica = 0
    }
    renderizarMusica(indexMusica)
});

function renderizarMusica(index){  
    let barra = document.querySelector('progress');
    barra.style.width = 0;
    pausarMusica()
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = converteTempo(Math.floor(musica.duration));
  });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
    
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block';
    document.querySelector('.botao-pause').style.display = 'none';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = converteTempo(Math.floor(musica.currentTime));
}

function converteTempo(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos+':'+campoSegundos;
}

