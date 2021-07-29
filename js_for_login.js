document.getElementById('button-lg-in').addEventListener('click', function(){
    document.querySelector('.bg-modal-log').style.display= 'flex';
    document.querySelector('.left-log').style.background="grey";
});

document.querySelector('.close-log').addEventListener('click', function(){
    document.querySelector('.bg-modal-log').style.display= 'none';
});

document.getElementById('customer-button').addEventListener('click', function(){
    document.querySelector('.bg-modal-log').style.display= 'flex';
    document.querySelector('.left-log').style.background="grey";
});

