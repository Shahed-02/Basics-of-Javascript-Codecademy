const team = {

    _players: [
        {firstName: 'Lionel', lastName: 'Messi', age: 34},
        {firstName: 'Gabriel', lastName: 'Jesus', age: 26},
        {firstName: 'Martin', lastName: 'Odegaard', age: 21},
 ], 

    _games: [
        {opponent: 'Chelsea', teamPoints: 3, opponentPoints: 1},
        {opponent: 'Liverpool', teamPoints: 4, opponentPoints: 3},
        {opponent: 'Man City', teamPoints: 1, opponentPoints: 1},

    ],
    get players(){
        return this._players;
    },
    get games(){
        return this._games;
    },
    addPlayer (newFirstName, NewLastName, newAge){
         let player = {
            firstName: newFirstName,
            lastName: NewLastName,
            age: newAge
         };

         this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
        let game = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        };
        this.games.push(game)
    }
};


team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);

team.addGame('Titans', 100, 98);
console.log(team.games);