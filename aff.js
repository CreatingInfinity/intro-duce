const audio = document.querySelectorAll('#audio-data')

const playcon = document.querySelectorAll('#play');
const pausecon = document.querySelectorAll('#pause');

const box = document.querySelectorAll('#a')


function play(i){
    if(i == 0){
        audio[i].play();
        playcon[i].style.display = 'none';
        pausecon[i].style.display = 'flex';
        audio[0].addEventListener('ended', ()=>{
            playcon[i].style.display = 'flex';
            pausecon[i].style.display = 'none';
            box[i+1].style.display = 'flex'
        })
    }else if(i==1){
        audio[i].play();
        playcon[i].style.display = 'none';
        pausecon[i].style.display = 'flex';
        audio[1].addEventListener('ended', ()=>{
            playcon[i].style.display = 'flex';
            pausecon[i].style.display = 'none';
            box[i+1].style.display = 'flex'
        })
    }else if(i==2){
        audio[i].play();
        playcon[i].style.display = 'none';
        pausecon[i].style.display = 'flex';
        audio[2].addEventListener('ended', ()=>{
            playcon[i].style.display = 'flex';
            pausecon[i].style.display = 'none';
            box[i+1].style.display = 'flex'
        })
    }else if(i==3){
        audio[i].play();
        playcon[i].style.display = 'none';
        pausecon[i].style.display = 'flex';
        audio[3].addEventListener('ended', ()=>{
            playcon[i].style.display = 'flex';
            pausecon[i].style.display = 'none';
            box[0].style.display = 'none';
            box[1].style.display = 'none';
            box[2].style.display = 'none';
            box[3].style.display = 'none';
            window.location.href = 'index.html'
        })
    }
}

function pause(i){
    if(i==0){
        audio[i].pause();
        playcon[i].style.display = 'flex';
        pausecon[i].style.display = 'none';
    }else if(i==1){
        audio[i].pause();
        playcon[i].style.display = 'flex';
        pausecon[i].style.display = 'none';
    }else if(i==2){
        audio[i].pause();
        playcon[i].style.display = 'flex';
        pausecon[i].style.display = 'none';
    }else if(i==3){
        audio[i].pause();
        playcon[i].style.display = 'flex';
        pausecon[i].style.display = 'none';
    }
}
