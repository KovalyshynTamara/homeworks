
//*********SLIDER*********//

$(function () { 
    const slider = $('.my-slider').lightSlider({
        controls: false,
        item: 3,
        slideMargin: 30,
        loop: true,
        autoWidth: false,
        slideMove: 1,
        pager: true,
        responsive : [
                {
                    breakpoint:950,
                    settings: {
                        item: 2,     
                        pager: true,
                    }
                },
                {
                    breakpoint:680,
                    settings: {
                        item: 1, 
                        pager: true,
                        
                    }
                }
            ]

    });
    $('#promo-slider').lightSlider({
        controls: false,
        item: 1,
        loop: true,
        autoWidth: false,
        pager: true,
        vertical: true,
        verticalHeight: 800,
        responsive: [
             {
                breakpoint:1020,
                    settings: {
                        verticalHeight: 600
                        
                    }
             },
             {
                breakpoint:768,
                    settings: {
                        verticalHeight: 500
                        
                    }
             },
             {
                breakpoint:500,
                    settings: {
                        verticalHeight: 400
                        
                    }
             }
        ]
    });


    $("#slide-prev").on('click', function () {
    slider.goToPrevSlide()
    })
    $("#slide-next").on('click', function () {
    slider.goToNextSlide()
    })


     lightGallery(document.getElementById('lightgallery'), {
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
        
    });
})

//**********MAP**********//

document.querySelector('#my-map').addEventListener('click', function (e) {
    e.preventDefault()
    if (e.target.id === 'init-map-link') {
        initMap()
    }
})

function initMap() {
const map = L.map('my-map').setView([40.62855201656928, -73.89604802534322], 13);

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


    L.marker([40.643562117683175, -73.9034790544971], { icon: purpleIcon })
        .addTo(map)
        .bindPopup(`<div class="popup-wrap">
            <span>Hello!</span>
        </div>`)
}
const purpleIcon = L.icon({ 
    iconUrl: 'imgs/pin.png',
    iconSize:     [106, 106], 
    iconAnchor:   [53, 53], 
});

//*******HEADER SCROLL******//

document.addEventListener('scroll', function(){
    if (window.scrollY >= 100){
        document.getElementById('header').classList.add('scroll');
    } else {
        document.getElementById('header').classList.remove('scroll');
   }
})

//*****NEWS API****///

const NEWSAPI_KEY = 'd69e604e046740efba34fb89d1b6ee4d'
const DEV_MODE = true

async function getNews() {
    const URL = DEV_MODE ? '/data/news.json' : 'https://newsapi.org/v2/everything'
    return await axios.get( URL, {
        params: {
            apiKey: NEWSAPI_KEY,
            q: 'design',
            searchIn: 'title',
            language: 'en',
            pageSize: 5,
            page: 1
        }
    })
        .then(resp => {
            return resp.data
        })
}
getNews().then((resp) => {
    console.log(resp);
     let list = ''
     resp.articles.forEach(news => {
         list += newsHTML(news)
     })
     document.getElementById('news-wrap').innerHTML = list
})

function newsHTML(news) {
    const d = new Date(news.publishedAt)
    const newsDate = d.getDate()+' 0'+(d.getMonth()+1)+' '+d.getFullYear()
    
    return `
        <div class="card">
            <a href="${news.url}" title="${news.title}" target="_blank">
            <img  class="news-img" src="${news.urlToImage}" alt=""/>
                </a>
            <div class="card-body">
            
              <h3 class="card-title" title="${news.title}">${news.title}</h3>
              </a>
              <p class="text" title="${news.description}">${news.description}</p>
            </div>
            <div class="card-footer">
              <div class="avatar">
                <img src="imgs/avatar.png" alt="">
              </div>
              <div class="info">
                <div class="name" title="${news.author}">${news.author}</div>
                <div class="date">${newsDate}</div>
              </div>
            </div>
        </div>

        `
}

//********FORM*********//
function isValidName(name) {
    const regexName = /^(([a-zA-Z\s]\D))+([a-zA-Z]\D)$/
    return regexName.test(name)
}

function isValidEmail(email) {
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
    
}

document.getElementById('subscribe-form').addEventListener('submit', function(e){
    e.preventDefault()
    const email = document.getElementById('email').value.trim()
    const name = document.getElementById('name').value.trim()
    let valid = true
    if(name==='') {
        valid = false
        toast.warning("Please enter your name!")
        
    } else {
        if(isValidName(name)===false){
            valid = false
            toast.danger("Invalid name!")
        }
    }
    
    if(email==='') {
        valid = false
        toast.warning("Please enter your email!")
        
    } else {
        if(isValidEmail(email)===false){
            valid = false
            toast.danger("Invalid email address")
        }
    }
    
    if(valid){
        submitFeedback()   
    }
})

function submitFeedback(){
    const BOT_TOKEN = '6100533036:AAHQ73-bugcjTqM5rwH7Qtb3m8M2CJxYj8I';
    const CHAT_ID = '-1001601521359';
    const text = `
        <b>Name: </b> ${document.getElementById('name').value}
        <b>Email: </b> ${document.getElementById('email').value}
        `

    axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        chat_id: CHAT_ID,
        text: text,
        parse_mode: 'HTML'
    })
    .then(resp => {
        document.getElementById('name').value = ''
        document.getElementById('email').value = ''
        toast.success('Massage sent successfully')
    })
    .catch(err => {
        toast.danger('AJAX error. Please try again later')
    })
}


function toggleMenu(){
    document.getElementById("mobile-menu").classList.toggle("open")
    document.getElementById("hamb-btn").classList.toggle("active")
    document.getElementById("shadow").classList.toggle("show")
}

