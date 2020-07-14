const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018",
  },
  "img": {
    "header-img": "https://tk-assets.lambdaschool.com/d312ae1d-879c-4c0b-8e0a-d03661aed7d8_header-img.png",
    "mid-page-img": "https://tk-assets.lambdaschool.com/933e5c8a-f143-4a89-b81b-4a609c325f1a_mid-page-accent.jpg",
    "logo-img": "https://tk-assets.lambdaschool.com/d7b66b1d-1f0f-489e-b408-f8e25140c82c_logo.png",
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["img"]["logo-img"])

let navBar = document.querySelectorAll("a");
navBar[0].textContent = siteContent["nav"]["nav-item-1"];
navBar[1].textContent = siteContent["nav"]["nav-item-2"];
navBar[2].textContent = siteContent["nav"]["nav-item-3"];
navBar[3].textContent = siteContent["nav"]["nav-item-4"];
navBar[4].textContent = siteContent["nav"]["nav-item-5"];
navBar[5].textContent = siteContent["nav"]["nav-item-6"];

navBar.forEach(link => {
  link.style.color = "green";
});

let newLink1 = document.createElement('a');
newLink1.textContent = 'Prepend';
newLink1.style.padding = '2rem';

let newLink2 = document.createElement('a');
newLink2.textContent = 'append';
newLink2.style.padding = '2rem';

navBar[5].appendChild(newLink2);
navBar[0].prepend(newLink1);


const title = document.querySelector("h1");
title.textContent = siteContent["cta"]["h1"];

const headerPic = document.getElementById("cta-img");
headerPic.setAttribute('src', siteContent["img"]["header-img"]);

let hdrBtn = document.querySelector("button");
hdrBtn.textContent = siteContent["cta"]["button"];

let subHeaders = document.getElementsByTagName("h4");
subHeaders[0].textContent = siteContent["main-content"]["features-h4"];
subHeaders[1].textContent = siteContent["main-content"]["about-h4"];
subHeaders[2].textContent = siteContent["main-content"]["services-h4"];
subHeaders[3].textContent = siteContent["main-content"]["product-h4"];
subHeaders[4].textContent = siteContent["main-content"]["vision-h4"];
subHeaders[5].textContent = siteContent["contact"]["contact-h4"];

let subHeaderContent = document.getElementsByTagName("p");
subHeaderContent[0].textContent = siteContent["main-content"]["features-content"];
subHeaderContent[1].textContent = siteContent["main-content"]["about-content"];
subHeaderContent[2].textContent = siteContent["main-content"]["services-content"];
subHeaderContent[3].textContent = siteContent["main-content"]["product-content"];
subHeaderContent[4].textContent = siteContent["main-content"]["vision-content"];
subHeaderContent[5].textContent = siteContent["contact"] ["address"];
subHeaderContent[6].textContent = siteContent["contact"] ["phone"];
subHeaderContent[7].textContent = siteContent["contact"] ["email"];
subHeaderContent[8].textContent = siteContent["footer"]["copyright"];

const midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["img"]["mid-page-img"]);

const bonusBar = document.createElement('div');
bonusBar.textContent = "We append all bonus content,because to prepend would be rude!";
bonusBar.style.width = "880px";
bonusBar.style.margin = "auto";

const webBody = document.querySelector('body');
webBody.appendChild(bonusBar);


const banner = document.createElement("div");
banner.textContent = "^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^*^";
banner.style.color = "dodgerblue";
banner.style.width = "880px";
banner.style.margin = "auto";
banner.style.backgroundColor = "black";

webBody.prepend(banner);