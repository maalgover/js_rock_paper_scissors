

const game = ()=>{
    let pScore= 0;
    let cScore=0;

    const startGame = () =>{
        const playButton = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro")
        const match = document.querySelector(".match")

        playButton.addEventListener("click", ()=>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands span");

        hands.forEach(hand=>{
            hand.addEventListener("animationend", function(){
                this.style.animation="";
            })
        })
        //Computer options
        const computerOptions = ["rock","paper","scissors"];
        const computerNumber = Math.floor(Math.random()*3);

        options.forEach((options)=>{
            options.addEventListener("click", function(){
                
                const computerNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(()=>{
                    //Comparing hands
                    compareHands(this.textContent.split(" ")[0], computerChoice);

                    //Update emojis ✊ ✋ ✌
                    let emojiArr=["✊","✋","✌"];
                    playerHand.textContent=`${this.textContent.match(/.$/)}`;
                    computerHand.textContent=`${emojiArr[computerNumber]}`;
                    console.log(this.textContent.split(" ")[0]);
                },1000)
                

                playerHand.style.animation = "shakePlayer 1s ease";
                computerHand.style.animation = "shakeComputer 1s ease";

            })
        })

    }
    const updateScore = () =>{
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands=(playerChoice, computerChoice)=>{
        //Updating text
        const winner = document.querySelector(".winner");
        if (playerChoice===computerChoice){
            winner.textContent ="It's a tie!";
            return ;
        }
        if (playerChoice==="rock"){
            if (computerChoice==="scissors"){
                winner.textContent="Player wins!";
                pScore++;
                updateScore();
                return ;
            } else {
                winner.textContent="Computer wins!";
                cScore++;
                updateScore();
                return ;
            }
            
        }
        if (playerChoice==="paper"){
            if (computerChoice==="scissors"){
                winner.textContent="Computer wins!";
                cScore++;
                updateScore();
                return ;
            } else {
                winner.textContent="Player wins!";
                pScore++;
                updateScore();
                return ;
            }
            
        }
        if (playerChoice==="scissors"){
            if (computerChoice==="paper"){
                winner.textContent="Player wins!";
                pScore++;
                updateScore();
                return ;
            } else {
                winner.textContent="Computer wins!";
                cScore++;
                updateScore();
                return ;
            }
            
        }
    }
    //Summons
    startGame();
    playMatch();


}

game()