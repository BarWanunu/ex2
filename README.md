# Welcome to our facebook platform for web !

## How to compile and run our project
Before we will explain about our project, you need to clone the repository and also install the dependencies

Please write the next two lines: <br> 
git clone https://github.com/BarWanunu/ex2/tree/branch_ex3_react <br>
npm install

Now you can start and see our App by writing to the termianl this line: <br> 
npm start

## About our project-
#### Signin page
The first page while running the app, for this part of the project you can sign in with on of the user in the mongoDB or you can create a new user. <br> 
user details from the mongo: <br> 
username: Shaked Gitta <br> 
password: Aa12345678<br> 
After you sign in with us you'll get a spesific token that will allow you to make some of the activities we offer for our users by making sure you are indeed the person who are authorized to make the specific action.



#### Signup page
In the signup page is where you'll create your user.<br> 
You'll have to fill all of the fields in order to finish the form.<br> 
For example - the email address you sign up with must be from the pattern of name@example.com.
For the password choosing it must be in the length of minimum 8 characters and contain letters and numbers. Afterwards, you will have to confirm your password and the values must be identical of course.
After you'll choose your display name for the application and the photo that will be shown you'll get a massage that the form was submmited successfuly and you'll find yourself back in the sign in page.

#### Home page
Our feed page, you can see the top-ruler with the search box and the icons,the Home icon is for navigate for home page. <br>
On the right og the top-ruler you can see your profile image, when clicking on it you can edit your user or deleting it.<br>
In the middle of the feed you can see the posts (you will see 20 posts of your friends and 5 post of users that are not friend with you).<br>
 You can add posts with the "What's on your mind?" box and see the post that you added below the rest of the posts, you can also add picture from your computer to the post. In addition, you can delete or edit your posts.<br>
On the right you have logout button for logout to the signin page and you can see your friends.
On the left you have Profile option, and Friend request option.<br> 


#### Posts
Each post has its own data: author, content, number of likes and comments, you can add like by presing the like button, you can add comments by pressing the comments button and right after to enter you comment and submit it. you can also delete and edit your comment.<br> 
Every change of the post is being saved in the MongoDB(exept from the comments).<br> 
when clicking on the autor of the post, if the autor is your friend you will see is profile page, if the author is not your friend you will have a option the send him a friend request.

#### Profile
You can enter to every one of your friends proifle. Overthere, you'll see all of the spesific friend posts. You are not able to edit or delete any of them.<br> 
Also, if you would like to see all of your friend friends just click on the friends icon and select Profile Friends.<br> 
If you'll enter your own profile you'll be able to edit or delete your posts.
If you want to get back to the main feed please return from the android back button.

#### Friends
In our facebook as mentions above you'll be able to see who are your friends at the main page on the right.<br> 
Moreover,  you can press on his photo and you'll be able to choose if you want to remove this friend from your friends list or to to see his friend list.<br> 
If you suddenly, encounter with a post of someome who isn't your friend and you want to add him as a friend, just click on his name and you'll have the option to add him as a friend by seding him a friend request and wait until he will either approve it or reject.<br> 
on the right menu of the page you have a Friend request option, when you click on it you will have a window with all your friends request, you can apprive or reject each on. <br> 
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
Afterwards, we started doing the most basic interactions with the server - to add a profile, to sign in and create a token to see it all works. and then we started to work on the Posts and friends option.
When everything worked as we expected we upload our program. <br>

 #### Important Things

In order, for the application to run successfully without sudden crushes, please make sure you dont uplaod any photo that has a size larger than 140 KB either for profile image or for a post.










