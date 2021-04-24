# Milestone Project 2
![Picture of Site](/assets/images/milestone2responsive.png)

This is a milestone 2 project for the Code Institute. The aim of this project to build an interactive front-end site. 

This website 'Cocktail Space' is an interactive cocktail recipe website which includes what ingredients are need and instructions the instructions, to make some of the most popular cocktails from around the world.

## Table of Content
- [About](#about)
- [UX](#ux)
    - [Business Scope](#business-scope)
    - [User Stories](#user-stories)
    - [Design](#design)
    - [Wireframes](#wireframes)
- [Features](#features)
    - [Current Features](#current-features)
    - [Features for Future](#features-for-future)
- [Technologies Used](#technologies-used)
    - [Lauguages](#languages)
    - [Frameworks, Libraries and Programs Used](#frameworks-libraries-and-programes-used)
- [Testing](#testing)
    - [Issues Encountered](#issues-encountered)
    - [Business Scope](#business-scope)
    - [User Stories](#user-stories)
        - [First time user](#first-time-user)
        - [Returning user](#returning-user)
    - [Functionality](#functionality)
    - [Compatibility](#compatibility)
    - [Performance and Accessibility](#performance-and-accessibility)
    - [Code validation](#code-validation)
    - [Further testing](#further-testing)
- [Deployment](#deployment)
- [Credits](#credits)
- [Acknowledgements](#acknowledgements)

## About
Cocktail Space is designed for people who are above the legal age of drinking in their country. It was designed to give people the knowledge to create bar quality drinks at home for housemates or family.

A live version of the website can be found [here](https://lamcguinness.github.io/Milestone2-CocktailSpace/) and its repository [here](https://github.com/LAMcGuinness/Milestone2-CocktailSpace)



## UX

### Business Scope
By having this website the business is aiming to;
* Want to user to have a pleasurable experience on the page.
* Want the user to easily navigate around the page
* Enjoy learning how to make random new cocktails
* If user can do all of these things. Return to the page ofter to learn new cocktail recipies
* Want the user to share the site with friends and increase ammount of people using the site.

### User Stories
As as first time user I want to;
* Navigate through the website with ease and find all information presented clearly.
* Learn more about cocktail making and mixology.
* Easily find the selection of cocktails that instructions are available to make on this website.
* Easily find the ingredients needed, instructions on making and serving selected cocktail.
* Increase my knowledge and skill in cocktail making
* Have links to social media to learn more about the company.
* Link to contact information incase of any further questions or feedback.  

As a returning user I want to;
* Easily navigate around the website.
* Find favourite and new cocktails to make.
* Search for cocktails
* Find links to social media account
* Contact the creators if I have some suggestions or queries.

### Design

#### Colors
Colors used were found using adobe wheel search. Same colors are throughout the sites sections/pages.
![ColorChart](/assets/images/colorScheme.png)

#### Typography
Merriweather is the font selected from google fonts is used throughout the site.

#### Iconography
Icons were used in the footer to show social media links. The user should easily recognised the links for each company. Twitter, Instagram, Facebook and Pinterest

### Wireframes
Wirefames were created using balsamiq and can be found in the link below.
[Wirefames](https://balsamiq.cloud/susrf72/p9rmus4) 
    -Note on wireframes
     I may have been to ambitious on my early design wireframe and with the time i had left myself to do this, but ideally in future releases I could get it up to there.

## Features
### Current Features
* Navigation Bar 
-  Users can navigate throughout the website easily with the aid of the navigation bar. The navigation bar is fixed to the top of the screen and also collapses on smaller screens with links to all sections. The navigation bar contains links to each section: home, cocktails and contact.

* Cocktail Section 
- contains the fixed navigation bar at the top of the screen to navigate throught the website. Also contains a search bar to for users to search for favourite cocktails and a random cocktail displayed below if the user cant decide!

* Contact Section
- Contains a contact form for users to contact the develops with any questions or feedback.

* Footer
- Contains links to their social media accounts. Social media links will open on a sperate tab.

### Features for future release
* Improve on Uniformity of site content. Some styling improvements needed also. 
- Make sure all headers, padding, margins etc are uniform throughout the site.
* Add some features to make it easier for user to navigate. 
- 
* Blog Section
- Create more interaction with the user. Could update with blog posts such as seasonal drinks for all holidays.
* Newsletter
- Users could sign up for a newsletter could contain "cocktail of the week"

## Technologies Used

### Languages

* HTML
* CSS
* Javascript

### Frameworks, Libraries and Programs Used
1. [Balsamiq](https://balsamiq.cloud/snrllgh/p9puddq/r4729) wireframes created at the design stage in website devolopment.

2. [Google Fonts](https://fonts.google.com/) selected Merriweather and Roboto fonts and imported to the style.css file.

3. [Font Awesome](https://fontawesome.com/v4.7.0/) was used for icons used throughout the website.

4. [Bootstrap4](https://getbootstrap.com/docs/4.0/getting-started/introduction/) was used for stucture and layout.

5. [Adobe Color](https://color.adobe.com/create/color-wheel) selected a colour palette for website from adobe color. 

6. [Canva](https://www.canva.com/) was used to create logo

7. [TheCocktailDB](https://www.thecocktaildb.com/) was used as the database for all cocktails in this website.

8. [Shutterstock](https://www.shutterstock.com/home) images were found here.

9. [CodePen](https://codepen.io/) used to preview and write code.

10. [ResponsiveViewer](https://chrome.google.com/webstore/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb?hl=en) used to see what the site looked on various other devices.

11. [JSONLint](https://jsonlint.com/) 

12. [EmailJS](https://www.emailjs.com/) JS for contact form




## Testing
### Issues Encountered
- 404 error in console log when API was fetchs. Multiple API links on the website used wrong one entered the reccomend api key and is now working fine. 

- When adding the event listener to contact form this JS error came up in DevTools.
script.js:26 Uncaught TypeError: Cannot read property 'addEventListener' of null
Solution : Put code inside window.onload

- Unable to style search bar. 
Solution: Styled in DevTools copied and pasted from there and noted id and class to save it as in style.css

### Business Scope
* Want to user to have a pleasurable experience on the page.
    - site is simple to use. with navigation buttons at the top and a cocktail call to action button on the landing page. From there user is directed to cocktail page where directions and searchbar are clearly visable to the user.
* Want the user to easily navigate around the page
* Enjoy learning how to make random new cocktails
* If user can do all of these things. Return to the page ofter to learn new cocktail recipies
* Want the user to share the site with friends and increase ammount of people using the site.

### User Stories
#### First time user
* Navigate through the website with ease and find all information presented clearly.
    - First time user can clearly navigate through the site by using the fixed navigation bar at the top. It is visable at all times on all devices. Also clicking the logo on same with bring you back to the landing page.
* Learn more about cocktail making and mixology.
    - This can be done by using the search function in the cocktail section. 
* Easily find the selection of cocktails that instructions are available to make on this website.

* Easily find the ingredients needed, instructions on making and serving selected cocktail.
    - ingredients, measures and method are displayed below name and picture of cocktail. 

* Increase my knowledge and skill in cocktail making
    - Over 600 cocktails in the API with a randon one generated on the page or ability to search for new cocktails via the search bar to increase you knowledge of cocktails. Ingredients and Method are displayed below the picture.

* Have links to social media to learn more about the company.
    - Links the the companys social media accounts can be found at the bottom of all pages.

* Link to contact information incase of any further questions or feedback.  
    - There is a contact form page. Here a user can send form once name, email and message containing questions or feedback is filled out.

#### Returning User
* Easily navigate around the website.
    - Navigation can be easily done by using the navigation bar at the top of page or the back and forward buttons on browser.
* Find favourite and new cocktails to make.
    - Using search bar 
* Search for cocktails
    - Using the search bar.
* Find links to social media account
    - Social media links are in the footer of each page. When they are clicked they link will open in a new page so they will not loose there place on orginal page
* Contact the creators if I have some suggestions or queries.
    - Contact section is accessible through the navigation bar. Once there a form can be sent once the user has entered name, email and message.

### Functionality
#### Checked for broken links
1. Started on landing page from the top left side clicked every button and link to ensure that each button had the anticipated action. Everything working as expected.
2. Same tests carried out on cocktail page... ***##FINISH WHEN COMPLETE##***
3. Same tests carried out on contact page. All links working as expected.
#### Tested browser back/forward actions
* Back and forward actions working as anticipiated throughout the site.
#### Tested form validation
* Cocltail button on landing page works properly directs user to the cocktail section.
* Search Button in cocktail section ###****!!FINISH WHEN COMPLETE
* Contact form worked as expected. It will not send unless all feilds contain text. Email feild must contain "@". Submit works.

### Compatibility

#### Responsiveness
 
#### Devices Test
The website was tested on the following devices and worked as expected:
1. MacBook Pro 13-inch
2. iPhone 11 Pro Max
3. iPad Pro 12.9-inch
4. Huawei p20 lite
5. Amazon fire 10 HD tablet

#### Browser Test
Tested the website on versions of the following and worked as expected:
1. Safari
2. Chrome
3. Mozilla Firefox
4. Internet explorer. 

### Performance & Accessibility

### Code validation

#### HTML
HTML code was validated by [W3C Validator](https://validator.w3.org/). Code from index.html, cocktails.html, and contact.html was ran through HTML validation.
No errors showed up. Example of result shown below. 
![Html Validation](/assets/images/HTMLValidator.png)

#### CSS
CSS was validated by [W3C CSS](https://validator.w3.org/). CSS validatian complete. Initally showed error seen in image below.
![CSS Error](/assets/images/CSSValidatorError.png)
Error when adding the media querries in CSS for small screen. Forgot "}" at the end. This is now fixed and now errors shown.
![CSS Validation](/assets/images/CSSValidator.png)

#### JavaScript
JavaScript was validate by [JSHint](https://jshint.com/).
### Further testing 
* Spell check carried out using [W3C Spell Checker](https://www.w3.org/2002/01/spellchecker). 

## Deployment
### GitHub Pages
This project was deployed via GitHub pages using the steps below:
1. Log in GitHub and click on the Milestone2 Repository.
2. Under the repository name clicked on the "Settings" button on the menu.
3. Scroll down until "GitHub Pages" section was found.
4. In the "Source" section click on the dropdown menu labelled "none and change "Select Branch" to "master" branch.
5. Click on the "Save" button to the right of selection.
6. Back on the main repository page on the right hand side the "github pages" is active. This is the link.

### Forking the GitHub repository
Forking the orginal respository on GitHub account can be used to make changes to copy with out affecting the orignal repository. Use the following steps if doing this:

1. Login to GitHub and locate Milestone2-Cocktail Space Respitory.
2. At the top of Repository just above "Settings" button there is a "Fork" button.
3. There should now be a copy of the orginal repository in our GitHub account.

### Making a clone or download zip to run locally.
1. Log in GitHub and click on respository.
2. Select Milestone2-Cocktail Space Repository. 
3. Click on "Code" button along the top next to green "Gitpod button".
4. Download ZIP to run locally.
5. To make clone - click on clipboard icon.
6. Open Git Bash.
7. Change the current working directory to where cloned directory is located.
8. Type 'git clone' in commant line and paste URL into search bar beside clipboard icon (from step 5).
9. When return key pressed created local clone.

## Credits
* Code
    - [Code Institute](www.codeinstitute.com) code taken and edited from course material
    - [SearchBar Video](https://www.youtube.com/watch?v=wxz5vJ1BWrc) ideas taken from here
    - [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) code copied from here for navbar     containers and buttons.
    - [On Click](https://www.w3schools.com/jsref/event_onclick.asp) information for on click taken from here.

  // cocktail api
  // https://dmitripavlutin.com/foreach-iterate-array-javascript

 
* General
    - A general source of inspiration for ideas [Hennessy](https://www.hennessy.com/en-int/cocktails?gclid=Cj0KCQjw9_mDBhCGARIsAN3PaFP86x5_iu8DZQb6YhWmUcYaV7xiKPKNrRNpDU4aqUZQAq8_5xeIIZIaAo7tEALw_wcB)

### Acknowledgements
* I would like to thank my mentor Gerry McBride for his time and tips on what to do in a short space of time.
* The student care team at Code Institute for the encouragement to keep going!
* 