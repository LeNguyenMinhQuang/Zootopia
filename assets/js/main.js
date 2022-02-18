// Navigator indication
let navMenuItem = document.querySelectorAll('#zNav li a');
for (let i = 0; i < navMenuItem.length; i++) {
    navMenuItem[i].addEventListener('click', function(){
        for (let j = 0; j< navMenuItem.length; j++){
            navMenuItem[j].classList.remove('znavActive');
        }
        this.classList.add('znavActive');
    })
}

// Auto hide header
let header = document.querySelector('#zHeader');
let lastScrollTop = 0;
window.addEventListener('scroll',function(){
    let scrollTop = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.classList.add('hideHeader');
    } else {
        header.classList.remove('hideHeader');
    }
    lastScrollTop = scrollTop;
})

// Change color Header when scroll
let backgroundHeight = document.querySelector('#zWelcomebg').offsetHeight;
window.addEventListener('scroll',function(){
    let scrollTop = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
    if (scrollTop >= backgroundHeight-300) {
        header.classList.add('colorHeader');
    } else {
        header.classList.remove('colorHeader');
    }
    if (scrollTop >= backgroundHeight + block1.offsetHeight + block2.offsetHeight +block3.offsetHeight) {
        header.classList.remove('colorHeader');
    }
})

// Blur when focus button Welcome 
let welcomeButton = document.querySelectorAll('#zWelcome .zButton');
let welcomeBackground = document.querySelector('#zWelcomebg')
for (let i = 0; i < welcomeButton.length; i++) {
    welcomeButton[i].addEventListener('mouseover',function(){
        welcomeBackground.style.filter = 'blur(4px)';
    })
    welcomeButton[i].addEventListener('mouseout',function(){
        welcomeBackground.style.filter = 'none';
    })
}

// Tiger move
let tiger = document.querySelector('#zBGtiger');
let shadow = document.querySelector('#zTigershadow');
let grass = document.querySelector('#zBGgrass')
setInterval(function(){
    tiger.classList.toggle('zTigermove');
    shadow.classList.toggle('zShadowmove');
},1500)

// Fadein when scroll
let block1 = document.querySelectorAll('#zBlock')[0];
let block2 = document.querySelectorAll('#zBlock')[1];
let block3 = document.querySelectorAll('#zBlock')[2];
let block4 = document.querySelectorAll('#zBlock')[3];
let block5 = document.querySelectorAll('#zBlock')[4];
let scrollHeight1 = backgroundHeight*2/5;
window.addEventListener('scroll',function(){
    let scrollTop = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
    if (window.innerWidth <= 576) {
        block1.classList.remove('hide');
        block2.classList.remove('hide');
        block3.classList.remove('hide');
        block4.classList.remove('hide');
        block5.classList.remove('hide');
    }
    if (scrollTop >= scrollHeight1) {
        block1.classList.remove('hide');
    }
    if (scrollTop >= backgroundHeight + block1.offsetHeight*2/5) {
        block2.classList.remove('hide');
    }
    if (scrollTop >= backgroundHeight + block1.offsetHeight + block2.offsetHeight*2/5) {
        block3.classList.remove('hide');
    }
    if (scrollTop >= backgroundHeight + block1.offsetHeight + block2.offsetHeight +block3.offsetHeight*1/5) {
        block4.classList.remove('hide');
    }
    if (scrollTop >= backgroundHeight + block1.offsetHeight + block2.offsetHeight +block3.offsetHeight*1/5) {
        block5.classList.remove('hide');
    }
})
document.querySelectorAll('#zHeader #zNav li')[1].addEventListener('click',function(){
    block1.classList.remove('hide');
})

document.querySelectorAll('#zHeader #zNav li')[2].addEventListener('click',function(){
    block2.classList.remove('hide');
})

document.querySelectorAll('#zHeader #zNav li')[3].addEventListener('click',function(){
    block3.classList.remove('hide');
})

document.querySelectorAll('#zHeader #zNav li')[4].addEventListener('click',function(){
    block4.classList.remove('hide');
})

// Zother

let other = document.querySelector('#zOther');
let othertext = document.querySelector('#zOther .zText');
let otherbutton = document.querySelectorAll('#zBlock:nth-child(5) .otherbut li a');
for (let i=0; i < otherbutton.length; i++) {
    otherbutton[i].addEventListener('click',function(){
        other.classList.remove('hide');
    })
}
other.addEventListener("click",function(){
    other.classList.add('hide');
})
othertext.addEventListener('click', function(event){
    event.stopPropagation()
})

let down = document.querySelector('#zDownload');
let down2 = document.querySelector('#zHeader button');
let downBoxs = document.querySelector('#zDownload .zBoxs');
let downbutton = document.querySelectorAll('#zBlock button');

for (let i=0; i< downbutton.length-1;i++){
    downbutton[i].addEventListener('click',function(){
        down.classList.remove('hide');
    })
}

down2.addEventListener('click',function(){
    down.classList.remove('hide');
})
down.addEventListener('click',function(){
    down.classList.add('hide');
})
downBoxs.addEventListener('click',function(event){
    event.stopPropagation();
})

let menu = document.querySelector('.zMenu');
let nav = document.querySelector('#zSubnav')
let showmenu = document.querySelector('#zSubmenu');
let subButton = document.querySelectorAll('#zSubmenu li a');
menu.addEventListener('click',function(){
    showmenu.classList.remove('hide');
})
showmenu.addEventListener('click',function(){
    showmenu.classList.add('hide');
})
nav.addEventListener('click',function(event){
    event.stopPropagation();
})
for (let i=0; i < subButton.length; i++){
    subButton[i].addEventListener('click',function(){
        showmenu.classList.add('hide');
    })
}

// Send contact
downbutton[5].addEventListener('click',function(){
    this.innerHTML = `<span style='color: #ec9f05; line-height:40px; font-weight:700' class="material-icons">done</span>`;
})

document.querySelector('#zFooter .zSub span').addEventListener('click',function(){
    this.innerHTML = `<span style='color: #ec9f05; line-height:40px; font-weight:700' class="material-icons">done</span>`;
})

// Owl carousel

$('#owl-one').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay: function(){
        let scrollTop = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > backgroundHeight + block1.offsetHeight*0.1) {
            return true
        } else {
            return false
        }
    },
    autoplayTimeout: 5000,
    autoplayHoverPause:true,
    items:1,
})

$('#owl-two').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0: {
            items:1
        },
        576: {
            items:3
        },
        1200:{
            items:2.5
        }
    }
})

$('#owl-three').owlCarousel({
    loop:true,
    margin:60,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0: {
            items:1
        },
        576: {
            items:1
        },
        1200:{
            items:3
        }
    }
})


// // Auto change animal background
    
// let animalBackground = document.querySelector('#zBody .zAnimalbackground')

// setInterval(function(){
//     let number  = Math.floor(Math.random() * 9) + 1;
//     animalBackground.setAttribute('style',`background-image: url(assets/img/animal/${number}.svg)`);
// },3000)

// setInterval(function(){
//     animalBackground.classList.toggle('zAnimalbreath');
// },1000)

// zActive switch on header
// let links = document.querySelectorAll('#zNav > li a');
window.addEventListener('scroll',function(){
    let scrollTop = window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
    if (scrollTop < backgroundHeight*0.8) {
        $('#zNav > li a').removeClass('znavActive');
        $('#zNav > li a:eq(0)').addClass('znavActive');
    }
    if (scrollTop >= backgroundHeight*0.8) {
        $('#zNav > li a').removeClass('znavActive');
        $('#zNav > li a:eq(1)').addClass('znavActive');
    }
    if (scrollTop >= backgroundHeight + block1.offsetHeight*0.8) {
        $('#zNav > li a').removeClass('znavActive');
        $('#zNav > li a:eq(2)').addClass('znavActive');
    }
    if (scrollTop >= backgroundHeight + block1.offsetHeight + block2.offsetHeight*0.8) {
        $('#zNav > li a').removeClass('znavActive');
        $('#zNav > li a:eq(3)').addClass('znavActive');
    }
    if (scrollTop >= backgroundHeight + block1.offsetHeight + block2.offsetHeight +block3.offsetHeight*0.8) {
        $('#zNav > li a').removeClass('znavActive');
        $('#zNav > li a:eq(4)').addClass('znavActive');
    }
    if (scrollTop >= backgroundHeight + block1.offsetHeight + block2.offsetHeight +block3.offsetHeight+block4.offsetHeight*0.8) {
        $('#zNav > li a').removeClass('znavActive');
        $('#zNav > li a:eq(5)').addClass('znavActive');
    }
})
