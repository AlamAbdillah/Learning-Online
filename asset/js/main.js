
var container = document.getElementById('container');
var loader = document.getElementsByClassName('loader')[0];     
const load = () => {
    setTimeout(() => {
        document
        container.style.display = "block";
        scroll_show(container);
        loader.style.opacity = "0%";
        loadpage();
    }, 1000)
}

// load page
const loadpage = () => {
    let elems = [menu_left, menu_right, achievement];
    let delay = 0;
    for(let i = 0; i <= 2; i++) {
        setTimeout(() => {
            scroll_show(elems[i]);
            delay += 300;
        }, i * (500 + delay));
    }
    setTimeout(() => {
        load_achievement();
    }, 300 * 4 + 800)
}

// navbar
let nav_link = document.querySelectorAll('.nav-link');
nav_link.forEach(link => {
    link.addEventListener('click', () => {
        nav_active(link);
    })
})
const nav_active = (link) => {
    nav_link.forEach(all_link => {
        all_link.classList.remove('active');
    })
    link.classList.add('active');
}

// navbar toggle
const nav = document.getElementsByTagName('nav')[0]; 
const toggle_nav = () => {
    nav.classList.toggle('nav-active');
}

// mode dark/light
const mode_img  = (loc_img) => {
    return (loc_img == 'dark') ? 'asset/img/moon.png' : 'asset/img/sun.png';
}
const mode = () => {
    const body = document.getElementsByTagName('body')[0];
    const img = document.getElementById('mode-img');
    body.classList.toggle('dark');
    img.setAttribute('src', mode_img(body.getAttribute('class')));
}

// achievement
const brach = document.getElementById('branch');
const comment = document.getElementById('comment');
const students = document.getElementById('students');
const load_achievement = () => {
    for (let i = 0; i <= 16; i++){       
        setTimeout(function () {
            let num_start = i.toString().substring(0,1);
            let num_end = i.toString().substring(1);
            if(i <= 5) {
                brach.innerHTML = i + "+";
            }
            if(i <= 6) {
                comment.innerHTML = i + "K";
            }
            if(i <= 10) {
                students.innerHTML = num_start + num_end + "K";
            }else {
                students.innerHTML =num_start + "." + num_end + "K";
            }
        }, i*100)
    }
}

// scroll show
const menu_left = document.getElementsByClassName('menu-left')[0]; 
const menu_right = document.getElementsByClassName('menu-right')[0]; 
const achievement =document.getElementsByClassName('achievement')[0];
const kursus = document.getElementById('kursus');
const kursus_item = document.getElementsByClassName('kursus-item');
const services = document.getElementById('services');
const service = document.getElementsByClassName('service');
const testimony = document.getElementById('testimony');
const writer = document.getElementById('writer');
const contact = document.getElementById('contact');

const scroll_show = (elem) => {
    elem.style.transform = 'translateY(0px)';
    elem.style.transform = 'translateX(0px)';
    elem.style.opacity = '100%'
}


// fade show
var scroll_enable = 0;
const show = (scroll) => {
    if(scroll > kursus.offsetTop-200 && scroll_enable == 0) {
        scroll_show(kursus);
        for(let i = 0; i <= 1; i++) {
            setTimeout(() => {
                scroll_show(kursus_item[i]);
            }, i*200);
            setTimeout(() => {
                scroll_show(kursus_item[i+2]);
            }, i*400);
        }
        scroll_enable = 1;
    }
    else if(scroll > services.offsetTop-200 && scroll_enable == 1) {
        let delay = 0;
        for(let i = 0; i <= 3; i++) {
            setTimeout(() => {
                delay += 200;
                scroll_show(service[i]);
            }, i*(200 + delay));
        }
        scroll_enable = 2;
    }
    else if(scroll >= testimony.offsetTop-200 && scroll_enable == 2) {
        speed = 25;
        txt = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium asperiores minima a, consequatur veniam totam corporis omnis incidunt nobis error. Veniam optio impedit illo vero totam eius iste exercitationem sed? <br> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium asperiores minima a, consequatur veniam totam corporis omnis incidunt nobis error. Veniam optio impedit illo vero totam eius iste exercitationem sed?";
        for(let i = 0; i <= txt.length; i++) {
            setTimeout(() => {
                writer.innerHTML += txt.charAt(i);
            }, i*speed);
        }
        scroll_enable = 3;
    }
    // slicing nav
    if(scroll < kursus.offsetTop-200) {
        nav_active(nav_link[0]);
    }
    else if(scroll < services.offsetTop-200) {
        nav_active(nav_link[1]);
    }
    else if(scroll < testimony.offsetTop-200) {
        nav_active(nav_link[2]);
    }
    else if(scroll < contact.offsetTop-200) {
        nav_active(nav_link[3]);
    }
    else {
        nav_active(nav_link[4]);
    }
}

window.addEventListener('scroll', () => {
    show(window.scrollY);
    // console.log(window.scrollY);
})
