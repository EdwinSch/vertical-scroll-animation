/* ---- TARGETS && INITIALIZERS ---- */
const boxes = document.querySelectorAll('.card');


/* ---- FUNCTIONS ---- */

// ON LOAD -> Load items before the fold
checkBoxes();


window.addEventListener('scroll', checkBoxes);



function checkBoxes() {
    const triggerBottom = window.innerHeight / 5*4;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    });
}


