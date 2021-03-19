# BIZNED

Welcome to the BIZNED platform. The platform has been developed as an information point for business travelers passing through The Netherlands. It is within this platform, that they can find key business/trip facilities recommended by the business community.

## UX
 
### Project Goals

The goals of this project are to develop a platform that shows a good foundation for a business travel platform. On this platform, elements such as flexible desks, hotels and world trade centers can be found. Furthermore, an overview and location of major transport hubs are given to business travellers. The platform is developed in English, but could eventually be translated on a later stage.

There are three different users of the website: 

* International and National Business Travellers.
* Potential Partners for platform recommendations (hotels, work centres etc.)
* Random visitors living in these cities.

#### International and National Business Travellers Goals:

* To find necessary business facilities across three key cities.
* To plan their trip with the official information displayed.
* To have insights on the best logistical plans and transport hub proximities. 

#### Potential Partners Goals:

* To see their competition and how they are advertised as trusted partners on the platform.
* To feel the "community feeling" that attracts recurring travellers to take advice. 
* To be able to reach out and structure a deal with BIZNED.

#### Random web visitors goals:


* To obtain relevant information concerning the BIZNED community and its activities, offering and search tools.
* To obtain relevent information concerning the three key cities displayed. 
* To live a good web visitor's experience. 


### Developer & Business Goals

* The developer wishes to develop a functional website capable of converting traffic into users or partners by using a combination of HTML, CSS and JS languages. 
* The business aims at growing its current parnter and user base, which will enable them to expand to other cities and market other potential business eco-systems to users. 


### User Stories

As a business traveller, I want:
* As a business traveller, I want to be able to see the different locations per cities that are recommended and which ones suit my needs. 
* As a business traveller, I want to have insight on transport hubs, so that I may plan my logistics properly.
* As a business traveller, I want to be able to contact BIZNED and send them an email with my requests. 
* As a business traveller, I want to navigate a logical website in a quick and seamless fashion.  

As a potential partner, I want:
* I want to have insights on the partners already displayed on the platform. 
* I want to see an official website that demonstrates professionalism and shows etiquette. 
* I want to be able to properly contact BIZNED. 

As a visitor, I want:
*  I want to see a clear navigation structure.
*  I want to see relevant content.
*  I want to be able to contact BIZNED or to follow them on social media.

### Design Choices

#### Fonts

* The primary font is Lato. It is a beautiful and user-appreciated font. At the same time, it is also enables to generate nice titles and if styled correctly mini-logos. [Click here to see font on google.](https://fonts.google.com/specimen/Lato?preview.text_type=custom#standard-styles)
* The second font is Roboto, the latter used for smaller casings such as <p>'s throughout the project and pairs well with Lato. It displays the same round and easy-going aspect that users might feel more comfortable reading. [Click here to see font on google.](https://fonts.google.com/specimen/Roboto?preview.text_type=custom&query=roboto)

#### Icons
* All Icons in this project have been associated with their obvious meaning such as certificates, hotels and bikes (typical of the Netherlands).

#### Colours

The general website's colors are white and dark blue. Bellow some specifics:
* Button colours: #102137 with white text.
* Footer Colour: #102137 with white icons and text.
* Text: Black and #102137.

The dark blue has been chosen, as it is a favorite color of the developer and also, as it is a color that inspires trust in the conservative business world. 

### Wireframes

1.  [Home Page]
2.  [About Page]
3.  [Contact Page]

## Features

 ### index.html
* Navigation bar with anchor tags, logo and contact button.
* Hero intro image section with anchor tag to either about or explore. 
* About section with accordion of potential facilities and a call to action card with cities featured and anchor tag. 
* Hero section with newsletter subscription input (non-active).
* Bootstrap component with 3 city cards representing Amsterdam, Rotterdam and The Hague, with their respective JS aciton buttons.
* Map display with facilities per city cards. (not implemented due to delays in development)
* Contact form powered by mail.js
* Footer with rights reserved and social icons with respective _blank links. 

 ## Future features to implement:

### Major features 
 * A partner page 
 * A boooking section 
 * An API with flexible office options
 * More html pages for about, exploring guidelines and perhaps F.A.Q.
 * blog implementation


### Minor features
*  Updated images
*  Map styling
*  Privacy policy

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Bootstrap v5.0.0-beta1 :](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
    - Bootstrap was used to assist with the responsiveness and styling of the website.
1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Lato' & 'Roboto' font into the style.css file which are used on all pages throughout the project.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
1. [jQuery:](https://jquery.com/)
    - The project uses JQuery to simplify DOM manipulation.
    - jQuery also came with Bootstrap to make the navbar responsive but was also used for the smooth scroll function in JavaScript.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the [wireframes](https://github.com/) during the design process.
1. [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview) 
    - The BIZNED platform uses the google maps api to generate interactive maps with markers.
1. [Google Places API](https://developers.google.com/places/web-service/overview) 
    - The BIZNED platform uses the google places api to get acces to place ID's and obtain relevant geo-information on BIZNED recommended places.
1. [Email JS](https://www.emailjs.com/) 
    - the api of email js enables users to communicate with the BIZNED team. 

## Testing

### Validation

 * The HTML was tested by using the https://validator.w3.org/ 
 * The CSS was tested using the Jigsaw validator https://jigsaw.w3.org/

### Display testing 

The site has been tested across different devices and displays to verify and ensure good responsiveness. Fortunately, it passed all tests and the test users were able to navigate properly on all of them. Below are listed the displays and devices tested on:

* 13" Macbook pro display 
* 15"Macbook pro display 
* Wide display LG 29WK500/50s 2560x1080/60Hz
* iPhone X/Xr
* iPhone 6/7/8 and plus models
* iPad Air

### Cross-browser Compatability Testing

The site renders well on both Chrome and Safari. Test Users were asked to load and navigate on both browsers when using their computers.

### Test Users

The site has been tested by 3 Users:

* Developer, male, aged 24.
* Hotel management expert, female, aged 24.
* Financial management and real estate student, male, aged 19.

### General Questions to Test Users & Developer:


* Does the navbar appear correctly on all screens?
* Are the Navbar links are correctly set-up throughout the website?
* Do the button work and do they display an effect when pressed?
* Are the icons well displayed throughout the website, and are they logical?
* Is the general website content relevant?
* Are the images well displayed through the website? If not, where not?
* Are the contact forms displayed correctly and are they intuitively correct?
* Do external links open in separate tabs?
* Is the text with background images through the website visible?
* Do the social media Icons work?
* Is the website responsive on mobile?
* Are the call-to-actions clearly present?
* Is there a clear intuitive use of colors?
* Is the structure of the website understood and logical?

| Issues spoted by Users & Developer         | Fix         |
| ----------- | ----------- |
| Navbar button returned negative by validator      | Issue fixed by using a proper bootsrap element role=button. **Resolved.**       |
| Users found it confusing to have contact form on each page   | Removed the contact forms from all pages except the contact page **Resolved.**  |
| No placeholder text was found after deployment in the contact form email section  | corrected by adding placeholder text **Resolved.**  |
| Buttons on home page did not link the read more to another page | added href and implemented bootstrap buttons to all **Resolved.**  |


### Specific Test User UX response:

* **Hotel management expert, female, aged 24**:
She stated that as a real estate professional she perfectly understood the range of services that the site offered and that it was logical for her to both navigate and understand the different pages on the website. In addition, she stated that the contact form should not be placed on each website, just as the Developer’s mentor. So that was corrected. 

* **Financial management and Real Estate student, male, aged 19**:
He stated that the website was clear and intuitive in its details. He suggested that further developments, including a portfolio would be a plus. However, the purpose of the website is clearly demonstrated and inspires confidence in the business at hand. He admitted that as an investor this would demonstrate performance and that the website has proper CTAs.


## Deployment
This site has been deployed using Github pages, the last version is to be found here: [BIZNED]()

It has been deployed multiple times using the same version link above and has no local deployment available, as this was not necessary for the assignment. 

## Credits

-  Bootstrap full-width hero section with text and image [GitHub Gist - Adam de Haven](https://gist.github.com/adamdehaven/dceabb07450295fec6fc)

-  [Bootstrap5](https://getbootstrap.com/docs/5.0/getting-started/introduction/): Bootstrap Library used throughout the project mainly to make site responsive using the Bootstrap Grid System.
 

### Content
- All content written on this website is fictional and written by the Developer. 

### Media
The Photos used in this website were obtained from unsplash and the credits are listen below: