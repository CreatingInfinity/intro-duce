
const page_turnr = document.getElementById('next');
    page_turnr.addEventListener('click', ()=>{
        window.location.href = 'home.html';
})

page_turnr.addEventListener('mouseove', ()=>{
    document.getElementById('click').style.display = 'none';
})