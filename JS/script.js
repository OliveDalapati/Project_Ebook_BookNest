//Banner-Btn
const bannerBtn = document.getElementById('banner-btn');

bannerBtn.addEventListener('click',()=>{
    bannerBtn.innerText = "You're Clicked!"
    bannerBtn.style.backgroundColor = 'green'
    bannerBtn.style.color = "white";
    bannerBtn.style.border = 'green'
});

//Banner-Btn

//welcome-btn
const welcomeBtn = document.getElementById('welcome-btn');

welcomeBtn.addEventListener('click',()=>{
    welcomeBtn.innerText = "You're Clicked!";
    welcomeBtn.style.backgroundColor = 'green';
    welcomeBtn.style.color = 'white';
    welcomeBtn.style.border='green';
})
//welcome-btn




//form validation
function formValidationFunc(event){
    const firstName = document.getElementById('firstName').value ;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;


    if(firstName =="" || lastName =="" || phone == "" || email == ""){
        
        alert('All fields are mandatory')
        event.preventDefault();
        return false;
    }
    else if(phone.length > 10 || phone.length < 10){
        alert('Enter a valis 10 digit mobile number');
        event.preventDefault()

        return false;
    }


    return true;
}

// const signBtn = document.getElementById('sign-btn');

// signBtn.addEventListener('submit',()=>{
//     formValidationFunc()
// })



//hamburger
const hamburger = document.getElementById('bar');
const lists = document.getElementById('lists');
const bannerPadding = document.getElementById('banner-padding');

    hamburger.addEventListener('click',()=>{
        console.log('heelo');
        lists.style.display = "block";
        hamburger.style.display = 'none';
        bannerPadding.style.padding = "470px 0 100px 0"
    
    });

    lists.addEventListener('click',()=>{
        lists.style.display = "none";
        hamburger.style.display = "block";
        bannerPadding.style.padding = "300px  0 100px 0"
    })
   





//hover-efferts

//facebook
const facebook = document.getElementById('facebook');

facebook.addEventListener('mouseover',()=>{
    facebook.style.color = "var(--facebook-color)";
    facebook.style.backgroundColor = "var(--white)";
});

facebook.addEventListener('mouseout',()=>{
    facebook.style.color = "var(--white)";
    facebook.style.backgroundColor = "var(--facebook-color)";
});


//twitter
const twitter = document.getElementById('twitter');

twitter.addEventListener('mouseover',()=>{
    twitter.style.backgroundColor = "var(--white)";
    twitter.style.color = " var(--twitter-color)";
});

twitter.addEventListener('mouseout',()=>{
    twitter.style.backgroundColor = "var(--twitter-color)";
    twitter.style.color = "var(--white)"
});


//google
const google = document.getElementById('google');

google.addEventListener('mouseover',()=>{
    google.style.backgroundColor = "var(--white)";
    google.style.color = "var(--google-color)";
});

google.addEventListener('mouseout',()=>{
    google.style.backgroundColor = "var(--google-color)";
    google.style.color = " var(--white)";
});

//insta
const insta = document.getElementById('instagram');

insta.addEventListener('mouseover',()=>{
    insta.style.backgroundColor = "var(--white)";
    insta.style.color = "var(--instagram-color)";
});

insta.addEventListener('mouseout',()=>{
    insta.style.backgroundColor = "var(--instagram-color)";
    insta.style.color = "var(--white)";
});

//linkedin
const linkedin = document.getElementById('linkedin');

linkedin.addEventListener('mouseover',()=>{
    linkedin.style.backgroundColor = "var(--white)";
    linkedin.style.color = "var(--linkedin-color)";
});

linkedin.addEventListener('mouseout',()=>{
    linkedin.style.color = "var(--white)";
    linkedin.style.backgroundColor = "var(--linkedin-color)";
});

//youtube
const youTube = document.getElementById('youtube');

youTube.addEventListener('mouseover',()=>{
    youTube.style.backgroundColor = "var(--white)";
    youTube.style.color = "var(--youtube-color)";
});

youTube.addEventListener('mouseout',()=>{
    youTube.style.backgroundColor = "var(--youtube-color)";
    youTube.style.color = "var(--white)";
})
