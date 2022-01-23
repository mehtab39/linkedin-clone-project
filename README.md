This is the clone of [LinkedIn](linkedin.com) build using Reactjs, styled components, Redux, and Firebase. We started this project as a four member team during the fifth unit construct week organised at Masai School, Bengaluru, Karnataka. 

## Table of contents

* [Demo](#demo)
* [How to run the app](#how-to-run-the-app)
* [Basic inference about the company](#basic-inference-about-the-company)
* [Technology](#technology)
* [Added Functionalities](#added-functionalities)
* [Database](#database)
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

### The application includes number of functionalities. User can do the following:

* Create an account, login or logout using email and password or google authentication
* can post images, share a post, see other people's post and like their posts.
* can find other people's profiles
* can send, recieve, ignore and accept invitation requests.
* can send and recieve messages in realtime 
* recieve notifications



## Database

### All the collections are created using Firestore database.

#### User Collection:
* email (String)
* password (String)

#### Profile Collection:
* user_uid (String) - a reference to the user collection
* name (string)
* email (string)
* notifications (array)
* activities (array)
* connections (array)
* pending_invitations (array)
* waiting_invitations (array)
* sent_invitations (array)
* profile_img (string)
* about (string)
* skills (array)
* education (array)
* experience (array)
* location (string)
* resume_path (string)

#### Article collection:
* Author_details (object) - reference to the post collection
* image (string) - stored in firebase storage
* video (string)
* createdAt (date)

#### Article collection:
* Author_details (object) - reference to the post collection
* image (string) - stored in firebase storage
* video (string)
* createdAt (date)

#### Message collection:
* data (object)


## Contributors

* [Mehtab Singh Gill](https://github.com/mehtab39)
* [Pummy Sharma](https://github.com/pummysh)
* [Meera Mendhe](https://github.com/MeeraMendhe)
* [Anand Kumar](https://github.com/anandKmrSharma)




## Glimpse of our work


![Message](https://github.com/mehtab39/linkedin-clone-project/blob/master/public/images/Message.png)


![Connections](https://github.com/mehtab39/linkedin-clone-project/blob/master/public/images/Connection.png)





