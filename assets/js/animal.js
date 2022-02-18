var mousePositionElephant; 
var mousePositionGirrafle;
var offset = [0,0];
var isDown = false;
var elephant = document.querySelector('.elephant');
var girrafle = document.querySelector('.girrafle');


elephant.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        elephant.offsetLeft - e.clientX,
        elephant.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePositionElephant = {

            x : event.clientX,
            y : event.clientY

        };
        elephant.style.left = (mousePositionElephant.x + offset[0]) + 'px';
        elephant.style.top  = (mousePositionElephant.y + offset[1]) + 'px';
    }
}, true);

// girrafle.addEventListener('mousedown', function(e) {
//     isDown = true;
//     offset = [
//         girrafle.offsetLeft - e.clientX,
//         girrafle.offsetTop - e.clientY
//     ];
// }, true);

// document.addEventListener('mouseup', function() {
//     isDown = false;
// }, true);

// document.addEventListener('mousemove', function(event) {
//     event.preventDefault();
//     if (isDown) {
//         mousePositionGirrafle = {

//             x : event.clientX,
//             y : event.clientY

//         };
//         girrafle.style.left = (mousePositionGirrafle.x + offset[0]) + 'px';
//         girrafle.style.top  = (mousePositionGirrafle.y + offset[1]) + 'px';
//     }
// }, true);
