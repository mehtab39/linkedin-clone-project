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

To run this application, you have to set your own firebase configurations. For security reasons, these configurations have been hidden from view and used as environmental variables with the help of dotenv file. You can simply create a new project in ![firebase](https://console.firebase.google.com/) by following the instructions provided by Firebase docs. After creating a project. you will recieve your configurations in the firebase console that you can use to initialize your application. Create a new .env file in the root folder of the application and keep the configurations keys there.

After initializing your application, you need to select the Sign-in providers you want. We are using Email and password, and Google provider for authentication. You also need to create a new firestore database. All these steps are straight forward. 

Now you can run "npm start" in the terminal and the application should work.


## Basic inference about the company

Hi

## Technology
### The application is built with:

* Node.js version 12.16.3
* Mongoose 6.1.1
* Express version 4.17.1
* Passport: 0.5.0 used for authentication
* Express Validator: used for form validation
* EJS 2.1.6

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
* [vipul chodhari](https://github.com/vipchoudhary13)
* [Shubham Bhagwatrao Tammewar](https://github.com/Shubhamtammewar)
* [Swathi Kummara](https://github.com/swathi191254)
* [Smrutiranjan Patra](https://github.com/Smrutiranjan-Patra)
* [Shahid Ansari](https://github.com/Shahid321fw11)



## Glimpse of our work


![Beauty](https://github.com/Smrutiranjan-Patra/shopper-stop-clone-public/blob/main/images/beautypage.png?raw=true)


![Wishlist](https://github.com/Smrutiranjan-Patra/shopper-stop-clone-public/blob/main/images/wishlist.png?raw=true)


![Product Description](https://github.com/Smrutiranjan-Patra/shopper-stop-clone-public/blob/main/images/description.png?raw=true)




