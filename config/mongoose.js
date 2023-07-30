// const mongoose = require('mongoose'); //we reqire mongoose library

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost/contacts_list_db');
// }






    //Coding Ninjas OLD Concept 
// mongoose.connect('mongodb://localhost/contacts_list_db'); //we connected to the "database"
// const db = mongoose.connection; // the connection which are there present between the "database" and "mongoose" is now are in variable "db"
 
// //if it is error, printing error
// db.on('error', console.error.bind(console, 'error connecting to db'));

// //if it is up and running print the message
// db.once('open', function(){
//     console.log('Successfully connected to the database');
// });



    //Chat-GPT
// async function connectToDatabase() {
//   try {
//     await mongoose.connect('mongodb://localhost/contacts_list_db');
//     console.log('Successfully connected to the database');
//   } catch (error) {
//     console.error('Error connecting to the database:', error.message);
//     process.exit(1); // Exit the process on connection error
//   }
// }

// module.exports = connectToDatabase;







