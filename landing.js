

window.onload = function(){
    var loading_div = document.createElement('div');
    loading_div.className = 'loading-div';
    var animation_container = document.createElement('div');
    animation_container.className = 'animation-container'

    for(var i=0;i<5;i++){
        var animation = document.createElement('span');
        animation.className = 'animation-span';
        animation_container.appendChild(animation);
    }
    loading_div.appendChild(animation_container);
    document.body.appendChild(loading_div);
    setTimeout(()=>{
        loading_div.remove();

    },8000);

};


var list_color = document.querySelectorAll('.colors li');
var localcolor = localStorage.getItem('color_option');

//check if local storage is empty or not
if(localcolor!==null){
    // store the local color to local storage
    document.documentElement.style.setProperty('--main-color',localcolor);
    // remove th active clas from all colors
    for(let i of list_color){i.classList.remove('active');}

    // add the active class to the selected color
    for(let i of list_color){
        if(localcolor === i.getAttribute('data-color')){
            i.classList.add('active');
        }
    }

}

for(let lc of list_color){

    // set the backgrount color on any li 
    var color = lc.getAttribute('data-color');
    lc.style.backgroundColor = color;

    // clicking on li option 
    lc.onclick = ()=>{
        // changing the color option 
        var l_color = lc.getAttribute('data-color');
        document.documentElement.style.setProperty('--main-color',l_color);
        localStorage.setItem('color_option',color);
        // changing the active li
        for(let i of list_color){i.classList.remove('active');}
        lc.classList.add('active');
        //store data to local storage
        localStorage.setItem('color_option',l_color);
    }


}


var bg_option_list = document.querySelectorAll('.bg-option span');





// making the background change random
var images = ["lan2.jpg","lan3.jpg","lan4.jpg","lan5.jpg","lan6.jpg"];
var nav = document.getElementsByClassName('nav-par');
var head1 = document.getElementById('_header');
var inter ;
var backgroundoption ;
var another_bgimage = document.querySelectorAll('.another-bg div');


function change(){ 
    inter = setInterval(function (){ 
    let random  = Math.floor(Math.random() * images.length);
    head1.style.backgroundImage = 'url("'+images[random]+'")';

},1000);};
if(backgroundoption === 'multi'){

    change();
}

var localbackground = localStorage.getItem('background-option');
var localanotherbg = localStorage.getItem('another-bg');
if(localbackground !== null){
    if(localbackground === 'multi'){
        backgroundoption = 'multi';
    }
    else if(localbackground === 'defult'){
        backgroundColor = 'defult';
    }
    else if(localbackground === 'another'){
        backgroundColor = 'another';
        if(localanotherbg !== null){
            head1.style.backgroundImage = 'url("'+localanotherbg+'")';
            
        }

    }

    for(let i of bg_option_list){
        i.classList.remove('active');
        if(i.getAttribute('data-bg') === localbackground){
            i.classList.add('active');
        }
    }
    
}



for(let im of another_bgimage){
    im.onclick = ()=>{
        var data_im = im.getAttribute('data-image');
        head1.style.backgroundImage = 'url("'+data_im+'")';
        clearInterval(inter);

    };
}



// selecting the background option
var bg_option_list = document.querySelectorAll('.bg-option span');

for(let span of bg_option_list){

    span.onclick = ()=>{
        var bg_option = span.getAttribute('data-bg');
        if(bg_option === 'defult'){
            backgroundoption = 'defult';
            var another =document.getElementById('another');
            another.style.display = 'none';
            head1.style.backgroundImage = 'url("lan3.jpeg")';
            clearInterval(inter);
            localStorage.setItem('background-option','defult');

        }
        else if(bg_option === 'multi'){
            backgroundoption = 'multi';
            var another =document.getElementById('another');
            another.style.display = 'none';
            clearInterval(inter);
            v=head1.style.backgroundImage = 'url("lan3.jpeg")';
            change();
            localStorage.setItem('background-option','multi');
        }
        else{
            backgroundoption = 'another';
            var another =document.getElementById('another');
            another.style.display = 'block';
            localStorage.setItem('background-option','another');
            for(let im of another_bgimage){
                im.onclick = ()=>{
                    var data_im = im.getAttribute('data-image');
                    head1.style.backgroundImage = 'url("'+data_im+'")';
                    clearInterval(inter);
                    localStorage.setItem('another-bg',data_im);
            
                };
            }
        }

        for(let i of bg_option_list){
            i.classList.remove('active');
        }
        span.classList.add('active');
        
    };
}






// making the gear methods 
var my_gear = document.getElementById('gear');
my_gear.onclick = function() {
    'use strict';
    document.querySelector('.fa-cog').classList.toggle('fa-spin');
    document.querySelector('.setting').classList.toggle('setting-open');
};



var aboutus_image = document.querySelectorAll('.about-us img');
var my_div = document.querySelector('.about-us .image img');


setInterval(()=>{
    var random_index = Math.floor(Math.random() * aboutus_image.length);
    my_div.src = aboutus_image[random_index].src;
    for(let i of aboutus_image){
        i.classList.remove('active');
    }
    aboutus_image[random_index].classList.add('active');
},5000);



var galarry_images = document.querySelectorAll('.galarry img');

for(let img of galarry_images){

    img.onclick = ()=>{
        var overlay_imgdiv = document.createElement('div');
        overlay_imgdiv.className = 'overlay-divimg';
        document.body.appendChild(overlay_imgdiv);



        var open_div = document.createElement('div');
        open_div.className = 'open-div';
        document.body.appendChild(open_div);

        // var heading = document.createElement('h2');
        // heading.className = 'image-heading';
        // var text = document.createTextNode(img.title);
        // heading.appendChild(text);
        // open_div.appendChild(heading);

        var my_img = document.createElement('img');
        my_img.src =img.src;
        my_img.className = 'galary-image-opened';
        open_div.appendChild(my_img);


        var close = document.createElement('span');
        var close_text = document.createTextNode('X');
        close.appendChild(close_text);
        close.className = 'close-button';
        open_div.appendChild(close);

        close.onclick = ()=>{
            overlay_imgdiv.remove();
            open_div.remove();
            next_image.remove();
            previous_image.remove();
        };


        var next_image = document.createElement('span');
        next_image.className = 'next-image';
        var next_text = document.createTextNode('>');
        next_image.appendChild(next_text);
        document.body.appendChild(next_image);



        next_image.onclick = ()=>{
            my_img.src = img.nextElementSibling.src;
            img = img.nextElementSibling;
            // heading.style.opacity = 0;
            
        };


        var previous_image = document.createElement('span');
        previous_image.className = 'previous-image';
        var previous_text = document.createTextNode('<');
        previous_image.appendChild(previous_text);
        document.body.appendChild(previous_image);

        previous_image.onclick = ()=>{
            my_img.src = img.previousElementSibling.src;
            img = img.previousElementSibling;
            // heading.style.opacity = 0;
        };

    };
}


var ourskills = document.querySelector('.skills');
var counters = document.querySelectorAll('.counter');
var progress_width = document.querySelectorAll('.skills .skills-progress span');
var contact = document.querySelector('.contact');
var time = document.querySelector('.timeout');
var left = document.querySelectorAll('.timeout .content .left');
var right = document.querySelectorAll('.timeout .content .right');
var nav_par = document.querySelector('.nav-par');
var up_button = document.querySelector('.up');





window.onscroll = ()=>{
    let skillofsettop = ourskills.offsetTop;

    let skillouterheight = ourskills.offsetHeight;

    let windowheight = this.innerHeight;

    let windowscrolltop = this.pageYOffset;

    if(windowscrolltop >= (skillofsettop + skillouterheight - windowheight - 200)){
        
        counters.forEach(count =>{
            const update_function = ()=>{
                const progress = +count.getAttribute('data-progress');
                const value = +count.innerHTML;
                const increment = 1;
                if(value < progress){
                    count.innerText = value + increment ;
                    setTimeout(update_function, 20);
                }
                else{
                    count.innerText = progress +"%";
                }
            };
            update_function();
            
        });

        for(let span of progress_width){
            span.style.width =span.getAttribute('data-progress');
        }
        
    }
    else{
        counters.forEach(count =>{
            count.innerText = 0;

        });
        for(let span of progress_width){
            span.style.width = 0;
        }
    }

    let socialoffset = contact.offsetTop;
    let socialheight = contact.offsetHeight;
    var followers = document.querySelectorAll(".social .icon .number");
    if(windowscrolltop > (socialoffset + socialheight - windowheight - 200 )){
        let increment;
        for(let f of followers){
            let data_number = +f.getAttribute('data-number');
            increment =Math.floor(data_number / 300);
            let update_function = ()=>{
                let value = +f.innerHTML;

                if(value < data_number){
                    f.innerHTML = value + increment;
                    setTimeout(update_function, 13);
                }
                else{
                    f.innerHTML = data_number;
                }
            }
    
            update_function();
            
        }
    }
    else{
        for(let f of followers){
            f.innerHTML = 0;
        }

    }



    let timeofsettop = time.offsetTop;

    let timeouterheight = time.offsetHeight;

    let windowheighttime = this.innerHeight;

    let windowscrolltoptime = this.pageYOffset;

    if(windowscrolltoptime >= (timeofsettop + timeouterheight - windowheighttime  - 500) ){
        
        for(let r of right){
            r.classList.add('right-animated');
        }
        for(let l of left){
            l.classList.add('left-animated');
        }
    }
    else{
        for(let r of right){
            r.classList.remove('right-animated');
        }
        for(let l of left){
            l.classList.remove('left-animated');
        }
    }



    if(windowscrolltoptime > 400){
        nav_par.classList.add('nav-par-scrolled');
        up_button.style.display = 'block';
    }
    else{
        nav_par.classList.remove('nav-par-scrolled');
        up_button.style.display = 'none';
    }
};





var links = document.querySelectorAll('.nav-par .links a');
links.forEach(link =>{
    
    link.addEventListener("click" , (e)=>{
        var data_section = link.getAttribute('data-section');
        document.querySelector(data_section).scrollIntoView({
            behavior: 'smooth'
        })
        for(let l of links){
            l.classList.remove('active');
        }
        link.classList.add('active');
    })
    
});

up_button.onclick = ()=>{
    document.querySelector('.landing').scrollIntoView({
        behavior:'smooth'
    })
    for(let l of links){
        l.classList.remove('active');
    }
};


var menu = document.querySelector('.toggle-menu');
console.log(menu)
var link = document.querySelector('.nav-par .links ul');

menu.onclick = ()=>{
    menu.classList.toggle('menu-active');
    link.classList.toggle('open');
}

// window.onclick = ()=>{
//     menu.classList.remove('menu-active');
//     link.classList.remove('open');
// }