const express = require('express'); // started the server with port 8000
const path = require('path');
const port = 8000;


//mongoose
// const mdb = require('./config/mongoose');



//Getting all the functionalities 
const app = express(); //this app has all functionality of this libraries, which are needed to run a server


//setting up to use EJS, we need to tell express that EJS is the template engine that will be used.
app.set('view engine', 'ejs'); //created "view engine" property and given it a value "ejs".
app.set('views', path.join(__dirname, 'views'));
//__dirname: This is a global variable in Node.js that represents the current directory of the script file in which it appears. It provides the absolute path of the directory containing the current script.

//This use() signifies the middleware
app.use(express.urlencoded()); //"express.urlencoded()" takes the "request", then it reads the data and analyse it, then it converts the form data into "req.body" which is keys-value pairs and puts it over there.

//Serving Static files 
app.use(express.static('assets'));


//making a contact list in array
var contactList = [
    {
        name: "Rajeev",
        phone: '123456789'
    },
    {
        name: "Tony",
        phone: '987456123'
    },
    {
        name: "Coder",
        phone: '564789123'
    }
]

//Controler:

//"get is a request" when ever the request comes in we need to send back something 
app.get('/', function(req, res){
    return res.render('home', { //render is a function which finds the file and renders it.
        title : "Contact List",
        contact_List: contactList
    }); //making a page dynamic- {} you need to create an object, put the "key" over here and the "value"
});

//creating another "controller" to get
app.get('/practice', function(req, res){
    return res.render('practice', { //render is a function which finds the file and renders it.
        title : "Let us play with EJS"
    });
});


//getting the data from input using post()
app.post('/create-contact', function(req, res){
    // return res.redirect('/practice'); //redirect() is a function which tell browser to take me to that route 

    // console.log(req.body);
    // console.log(req.body.name);
    // console.log(req.body.phone);

    //appending the list
    //1st way
    // contactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone
    // });

    //2nd way
    contactList.push(req.body);


    return res.redirect('back');
});


//For deleting a Contact
app.get('/delete-contact', function(req, res){

    //get the query from the url
    let phone = req.query.phone;

    let contactIndex = contactList.findIndex(contact => contact.phone == phone);

    if(contactIndex != -1){
        contactList.splice(contactIndex, 1);
    }

    return res.redirect('back');
});



//"listen()"- as a server is running, it is listening to the request and sending back the responses
app.listen(port, function(err){
    if(err){
        console.log("Erron in running the server", err)
    }
    //if there is no error
    console.log('Yup! My Express Server is running on port: ', port);
});






//Summary:

//We set up the "View/Template Engine", we do not need to do anything for the new file or everytime the path changes..it wont because we set up the "view" and for every team members it remain constant and whatever file name we give here it will go inside the "views folder", find the file and send it to the browser..filling in whatever data we want to.(for now it is static)




//intall ejs
//now some app.set used to set- first is the "view engine" & Second is the view path
//Third we setup the "views directory + file" , extention is ".ejs"
//now finally while doing those steps, renderd using "res.render()".



//Parser:
    //it takes data from browser and this goes to the parser. This parser their is something called "request" it creates a body inside it, it goes into the body and now body contains key value pairs.




//Steps:

//1. We created index.js then we installed "npm init".
//2. We installed expressJS "npm install express".
//3. We setup/started our server by line no.1 ,then we choose a port which is 8000 and initilized our "express()" with "app" variable and finally we told express to "listen" "app.listen()" and handled the error in it.
//4. In this step we started sending data from my server to my "ejs/html" file.
//5. We install Embedded JS Template "npm install ejs", then we tell express to use "ejs" 'view engine'-{app.set('view engine', 'ejs'); } and we tell to look for views inside the "views" folder with and specified path {app.set('views', path.join(__dirname, 'views')); }.
//6. Then we created a file inside the "views folder" named as "home.ejs" and extension would ".ejs" because our "view engine" needs that.
//7. Then we render our ".ejs" data through "aap.get()" where "/" is my "route" and "function(req, res)" is my "controller" using "return res.render()" and called "home" it will automatically go to the "views folder", it will find "home.ejs" and passes the "title" & "contact_List" 's keys-value pairs in "locals" like "title" and "contact_List".
//8. Then we setup our "middleware" to redirect request from "FORM" where we handled our first "POST" request. (First we create our "form" in home.ejs and we setup the method as "POST",). 
//9. When the "FORM" gets submitted the data came to "app.post('/create-contact')" and data was in request but we were not able to read and see the data. For that we have included our first "MIDDLEWARE" which was this { app.use(express.urlencoded()); }.
//10. When we recieve that keys-value pairs it is into "req.body"......so inserted those keys-value into "req.body" and that "req.body" is now being saved into your contactList.
//11. Finally we setted up "Static File"- {  app.use(express.static('assets'));  } ..."static()" will starts finding "assets" folder whenever the static file needed and then get the file.

///////////////Till Now "Adding Contacts"  has been done using "POST"///////////////////



// DELETING Contact Steps:

// First of all, I need to setup a route and controller- There has to be a controller with the route and a link which points to it and sends the data to it.
// For that process we will use the "app.get()" request. Where "app.get('/delete-contact', function(req, res))"... again "/delete-contact" is our route and "function(req, res)" is our contoller .
// Then this function finds the contact list for me which is stored in an "Array". This "array" has a phone no. of each of its item.
// Secondly, I need to find the item which matches the phone no. and if it matches the phone no. I will delete it. For deleting "items" from an "Array" we use a function-"Spilce()"
// Before "Deleting" lets get the value of the phone. There are 2 Ways first is "Query Params" & second is "String Params". We will be using "Query Params"-{ "let phone = req.query.phone;" }  For explaination- ReadMe.md
// In our "home.ejs" file, we have created a "For Loop" to itarate over my array. With help of for loop I will get the index of my array using the function "findIndex()".
// Now "findIndex()" will find the contact were the contact has a phone no. which is "==" my phone no. {  contactList.findIndex(contact => contact.phone == phone);  }
// Finally, if contactIndex != -1 then I will remove from contactList using splice() from contactIndex with 1 position { contactList.splice(contactIndex, 1); } 
// After that when delete button gets triggered which deletes the contact then I will redirect that same page using " return res.redirect('back'); "




// Summary of Delete:

//1. In our "home.ejs" we added a "div" with class name "delete-button". Inside that "div" tag we created "<a>" tag, there we added "url" to a's href with a our "Query Param" => "/delete-contact/?phone=<%= i.phone %>"

