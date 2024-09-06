const progress = document.getElementById('progress');
const prev = document.getElementById('prev')
const next = document.getElementById('next');
const circle = document.querySelectorAll('.circle');
let count = 1;

next.addEventListener('click', () => {
    count++;
    if (count > 4) {
        count = 4;
    }
    UpdateEvent();
})
prev.addEventListener('click', () => {
    count--;
    if (count <= 1) {
        count == 1;
    }
    UpdateEvent();
})
function UpdateEvent() {
    circle.forEach((circle, idx) => {
        if (idx < count) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active');
        }
    })
    const actives = document.querySelectorAll('.active')
    progress.style.width = ((actives.length - 1) / (circle.length - 1) * 100) + '%';
    if (count == 1) {
        prev.disabled = true;
    } else if (count == 4) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}