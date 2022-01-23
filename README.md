This is the clone of [LinkedIn](linkedin.com) build using Reactjs, styled components, Redux, and Firebase. We started this project as a four member team during the fifth unit construct week organised at Masai School, Bengaluru, Karnataka. 

## Table of contents

* [Demo](#demo)
* [How to run the app](#how-to-run-the-app)
* [Basic inference about the company](#basic-inference-about-the-company)
* [Technology](#technology)
* [Added Functionalities](#added-functionalities)
* [Database](#database)
* [added Features](#added-features)
* [Contributors](#contributors)
* [Glimpse of our work](#glimpse-of-our-work)

## Demo

![Home-Page](https://github.com/mehtab39/linkedin-clone-project/blob/master/public/images/Home.png)

The application is deployed to Firebase and can be accessed through the following link:
[LinkedIn-clone](https://linkedin-production-app.web.app/)



## How to run the app

To run this application, you have to set your own firebase configurations. For security reasons, these configurations have been hidden from view and used as environmental variables with the help of dotenv file. You can simply create a new project in [firebase](https://console.firebase.google.com/) by following the instructions provided by Firebase docs. After creating a project. you will recieve your configurations in the firebase console that you can use to initialize your application. Create a new .env file in the root folder of the application and keep the configurations keys there.

After initializing your application, you need to select the Sign-in providers you want. We are using Email and password, and Google provider for authentication. You also need to create a new firestore database. All these steps are straight forward. 

Now you can run "npm i" and "npm start" in the terminal and the application should work.


## Basic inference about the company

LinkedIn is an American business- and employment-oriented online service that operates via websites and mobile apps. The platform is primarily used for professional networking and career development, and allows job seekers to post their CVs and employers to post jobs.

## Technology
### The application is built with:

* React 17.0.2
* Firebase 7.20.0
* Redux 4.1.2
* Styled-components 5.3.3


## Added Functionalities

### The application displays a virtual bags store that contains virtual products and contact information. User can do the following:

* Create an account, login or logout
* Browse available products
* Add products to the shopping cart and wishlist
* Delete products from the shopping cart and wishlist
* Display the shopping cart and wishlist.
* To checkout, a user must be logged in


## Added features
* Search feature with searching suggestions for any available item 
* Sort by brand, colour, price, popularity, discount or type
* Sign-in / Sign up authentication
* Pagination


## Database

### All the models can be found in the models directory created using mongoose.

#### User Schema:
* email (String)
* password (String)

#### Category Schema:
* title (String)
* slug (String)

#### Product Schema:
* Product_Id (String)
* title (String)
* imagePath (Array)
* description (String)
* price (Number)
* discount (Number)
* category (ObjectId - a reference to the category schema)

## Contributors



* [Mehtab Singh Gill](https://github.com/mehtab39)
* [Pummy Sharma](https://github.com/vipchoudhary13)
* [Meera](https://github.com/Shubhamtammewar)
* [Anand Kumar](https://github.com/swathi191254)




## Glimpse of our work


![Message](https://github.com/mehtab39/linkedin-clone-project/blob/master/public/images/Message.png)


![Connections](https://github.com/mehtab39/linkedin-clone-project/blob/master/public/images/Connection.png)





