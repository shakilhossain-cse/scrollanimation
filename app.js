const boxex = document.querySelectorAll('.box');

document.addEventListener('scroll', checkBoxex);


checkBoxex()


function checkBoxex(){
    console.log('hello');
    const tiggerButton = window.innerHeight / 5 * 4;
    boxex.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < tiggerButton) {
            box.classList.add('show');
            console.log(box.classList);
        }else{
            box.classList.remove('show');
        }
    })
}