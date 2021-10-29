// require the express module
import express from 'express';
 
// require the cors module
import cors from "cors";

import roster from './routes/roster';

import path from 'path';



 
// creates an instance of an Express server
const app = express();
 
// enable Cross Origin Resource Sharing so this API can be used from web-apps on other domains
app.use(cors())

// Settings for web pages
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
 
// allow POST and PUT requests to use JSON bodies
app.use(express.json())
 
// define the port
const port = 3000;
 
// construct a fantasy football roster
app.use('/roster/', roster);
// array of players

// add players

// edit player information

// delete players

// get all players
// roster.get('/', (req,res) =>{

// })
// get player by id

// get players that have specific position


// run the server
app.listen(port, () =>{
    console.log('listening at http://localhost:' +port)
} );