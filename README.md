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

![Home-Page](https://github.com/Smrutiranjan-Patra/shopper-stop-clone-public/blob/main/images/home.png?raw=true)

The application is deployed to Heroku and can be accessed through the following link:
[Shoppers Stop](https://shopper-stop-clone.herokuapp.com)

The website resembles a real store and you can login using google authentication or can create new account. You can add products to your wishlist or move to the cart and can virtually pay for them.


## How to run the app

To run this application, you have to set your own environmental variables. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variables that you need to set in order to run the application:

* MONGO_URI: this is the connection string of your MongoDB Atlas database.
* JWT_ACCESS_KEY: This is a key which is used to authencticate user. You can put any strings here.
* JsonWebToken: This is a token created by JWT library used to authenticate user. You can put any strings here.
* GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET: These credentials can be created using Google cloud platform. This helps to authenticate a user using Google OAuth.4

After you've set these environmental variables in the .env file at the root of the project, you need to fill your empty MongoDB Atlas database by creating new products in the Products collection.

Now you can run "npm start" in the terminal and the application should work.


## Basic inference about the company

Shoppers Stop is an Indian department store chain, owned by the K Raheja Corp. There are 86 stores across 40 cities in India, with clothing, accessories, handbags, shoes, jewellery, fragrances, cosmetics, health and beauty products, home furnishing, and decor products.

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




