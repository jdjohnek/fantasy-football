import express from "express";
import IPlayer from "../models/InterfacePlayer";
import Player from "../models/Player";

const roster = express.Router();

// array of players
const players: IPlayer[ ] = [ ];

// add players
roster.post(' / ', (req, res) => {
    console.log(req.body)
    const player = new Player(
        req.body.name, 
        req.body.team, 
        req.body.position, 
        true, 
        false
        );

        players.push(player);

        // res.json(player);
        res.render('roster', {player});
});

// edit player information
// .splice()

// delete players
// splice()

// get all players
roster.get( ' / ', (req, res) => {
    // res.json(players);

    res.render('roster', { players } );
});

roster.get('/add', (req, res) => {
    res.render('add');
})

// get player by name
 // for , forEach, find()


// get player by id

// get players that have specific position
// for, forEach, filter()
export default roster;

