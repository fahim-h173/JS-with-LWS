function myMove(){
    const animation = document.getElementById('animate');
    let pos = 0;

    const invervel=setInterval(frame,5);

    function frame(){
        if(pos === 350){
            clearInterval(invervel)
        }else{

            pos++;
            animation.style.top = pos + 'px';
            animation.style.left = pos + 'px';
        }
    }
}
document.querySelector('#BTN').addEventListener('click',myMove)