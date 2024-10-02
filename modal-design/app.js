
    const button = document.getElementById('click');
    const modal = document.querySelector('.box-modal');
    const close = document.querySelector('.close');

    button.addEventListener('click', function(){
        modal.style.opacity = '1';
        modal.style.transform = 'translateY(0)';
        modal.style.pointerEvents = 'auto';
    });

    close.addEventListener('click', function(){
        modal.style.opacity = '0';
        modal.style.transform = 'translateY(-100px)';
        modal.style.pointerEvents = 'none';
    });

 