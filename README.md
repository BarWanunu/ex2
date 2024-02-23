# Welcome to our facebook platform for web !

## How to compile and run our project
Before we will explain about our project, you need to clone the repository and also install the dependencies

Please write the next two lines: <br> 
git clone https://github.com/BarWanunu/ex2 <br>
npm install

Now you can start and see our App by writing to the termianl this line: <br> 
npm start

## About our project-
#### Signin page
The first page while running the app, for this part of the project we have only one user (hard coded) for siging in. <br> 
The user details: <br> 
username: guest <br>
password: Aa12345678

#### Signup page
Here the user need to fill the fields to create new user in our facebook app (for this part of the project the details of the users don't save somewhere). <br>
Be aware, when you fill the fields you must fill them all and you won't be able to add a user unless all fileds are filled with the appropriate requirements. <br>
For example - the email address you sign up with must be from the pattern of name@example.com. <br>
For the password choosing it must be in the length of 8-20 characters and must contain letters and numbers, and must not contain spaces, special characters, or emoji.
Afterwards, you will have to confirm your password and the values must be identical of course. <br>
After you'll choose your display name for the application and the photo that will be shown you'll get a massage that the form was submmited successfuly and you'll find yourself back in the sign in page.

#### Home page
Our feed page, you can see the top-ruler with the search box and the icons, the left menu with his icons, and the posts in the muddle of the feed. you can add posts with the "What's on your mind?" box and see the post that you added below the rest of the posts, you can also add picture from your computer to the post. In addition, each post can be edited or deleted. On the right you have logout button for logout to the signin page.

#### Posts
Each post has its own data: author, content, number of likes and comments, you can add like by presing the like button, you can add comments by pressing the comments button and right after to enter you comment and submit it. you can also delete and edit your comment.

#### Dark mode
You can switch to Dark mode and light Mode if you want, in the signin and signup pages you can to that by pressing dark or light on the top-left of the page. <br> 
In the home page you can do that by pressing on the moon icon to change the mode.

## Tests
We created 5 tests, you can run all of them when you run npm test, then press 'a'. we have those tests: <br>
-displays alert message for invalid email address. <br>
-displays alert message for log in. <br>
-Add a new post and check if it is displayed. <br>
-onDelete prop changes to true when clicking delete option. <br>
-Add and edit a comment in Post component. <br>

## Our workflow

At first we divided the missions between us and updated it in the Jira. <br>
We created the tests for the program and by them we built the components with different and specific roles for each component. <br>
During our work we checked after every little detail we changed that our app behavior is as we expected. <br> 
When everything worked as we expected we upload our program. <br>












