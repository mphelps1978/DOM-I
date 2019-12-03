const siteContent = {
	nav: {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png',
	},
	cta: {
		h1: 'DOM Is Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png',
	},
	'main-content': {
		'features-h4': 'Features',
		'features-content':
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4': 'About',
		'about-content':
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src': 'img/mid-page-accent.jpg',
		'services-h4': 'Services',
		'services-content':
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4': 'Product',
		'product-content':
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4': 'Vision',
		'vision-content':
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
	},
	contact: {
		'contact-h4': 'Contact',
		address: '123 Way 456 Street Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io',
	},
	footer: {
		copyright: 'Copyright Great Idea! 2018',
	},
};

// End JSON Content

// OK, Let's get the page content ACTUALLY ON THE PAGE

// setting the images first
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

let spacerImage = document.getElementById('middle-img');
spacerImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

// Done with the Images

//NavBar stuff

let navBar = document.querySelectorAll('nav a');
navBar[0].textContent = siteContent['nav']['nav-item-1'];
navBar[1].textContent = siteContent['nav']['nav-item-2'];
navBar[2].textContent = siteContent['nav']['nav-item-3'];
navBar[3].textContent = siteContent['nav']['nav-item-4'];
navBar[4].textContent = siteContent['nav']['nav-item-5'];
navBar[5].textContent = siteContent['nav']['nav-item-6'];

navBar.forEach(item => (item.style.color = 'green'));

// CTA Stuff

document.querySelector('h1').textContent = siteContent['cta']['h1'];
document.querySelector('button').textContent = siteContent['cta']['button'];

// Top-Content Stuff

//features
let features = document.querySelector('div:nth-child(1) h4');
features.textContent = siteContent['main-content']['features-h4'];
let featuresText = document.querySelector('div:nth-child(1) p');
featuresText.textContent = siteContent['main-content']['features-content'];

// about
let about = document.querySelector('div:nth-child(2) h4');
about.textContent = siteContent['main-content']['about-h4'];
let aboutText = document.querySelector('div:nth-child(2) p');
aboutText.textContent = siteContent['main-content']['about-content'];

// End Top-Content Stuff

//Bottom-Content Stuff

// Services
let services = document.querySelector('.bottom-content div:nth-child(1) h4');
services.textContent = siteContent['main-content']['services-h4'];
let servicesText = document.querySelector('.bottom-content div:nth-child(1) p');
servicesText.textContent = siteContent['main-content']['services-content'];

// Product
let product = document.querySelector('.bottom-content div:nth-child(2) h4');
product.textContent = siteContent['main-content']['product-h4'];
let productText = document.querySelector('.bottom-content div:nth-child(2) p');
productText.textContent = siteContent['main-content']['product-content'];

// Vision
let vision = document.querySelector('.bottom-content div:nth-child(3) h4');
vision.textContent = siteContent['main-content']['vision-h4'];
let visionText = document.querySelector('.bottom-content div:nth-child(3) p');
visionText.textContent = siteContent['main-content']['vision-content'];

// End Bottom-Content Stuff

//Contact Stuff

let contactHead = document.querySelector('.contact h4');
contactHead.textContent = siteContent['contact']['contact-h4'];

let contactInfo = document.querySelectorAll('.contact p');
contactInfo[0].textContent = siteContent['contact']['address'];
contactInfo[1].textContent = siteContent['contact']['phone'];
contactInfo[2].textContent = siteContent['contact']['email'];

// End Contact Stuff

// Footer Stuff

document.querySelector('footer p').textContent = siteContent['footer']['copyright'];

// End Footer Stuff
