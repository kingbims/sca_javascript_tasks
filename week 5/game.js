class RoshamboPlayers {
    constructor(playerOne, playerTwo,) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
    };
}

let Game = new RoshamboPlayers("Moremi", "Dami");
Game = {
    score: 0,
    playGame([rock, paper, scissors], [paper, rock, scissors]) {
        if(Moremi === rock && Dami === paper){
            Moremi = this.score;
            Dami = this.score++;
            return 'Dami wins';
        }else if(Moremi === rock && Dami === scissors){
            Moremi = this.score++;
            Dami = this.score;
            return 'Moremi wins';
        }else if(Moremi === paper && Dami === rock){
            Moremi = this.score++;
            Dami = this.score;
            return 'Moremi wins';
        }else if(Moremi === paper && Dami === scissors){
            Moremi = this.score;
            Dami = this.score++;
            return 'Dami wins';
        }else if(Moremi === scissors && Dami === paper){
            Moremi = this.score++;
            Dami = this.score;
            return 'Moremi wins';
        }else if(Moremi === scissors && Dami === rock){
            Moremi = this.score;
            Dami = this.score++;
            return 'Dami wins';
        }else{
            return 'Replay';
        };
    }
};


Game.playGame();