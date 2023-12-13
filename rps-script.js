
let score = JSON.parse(localStorage.getItem('score')) || {
          playersScore: 0,
          computersScore: 0
        };
    window.addEventListener('beforeunload', function(){
      localStorage.clear();
    });
  
    function playersPick (playerMove){
      setTimeout(() => { 
      document.querySelector('.players-pick')
      .innerHTML = `You:  <img src="images/${playerMove}-emoji.png" class="move-icon">`;
      },500);
    };
  
  
    function playGame (playersPick, computerMoveWins, computerMoveLoses){
      const randomNumber = Math.random();
      let computersPick = '';
      let addPlayerScore='';
      let addComputerScore='';
      if(randomNumber >= 0 && randomNumber < 1/3){
          computersPick = 'rock';
          } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
          computersPick = 'paper';
          } else if (randomNumber>= 2/3){
          computersPick = 'scissors';
          };
      setTimeout(() => { 
      document.querySelector('.computers-pick')
      .innerHTML = `Computers:  <img src="images/${computersPick}-emoji.png" class="move-icon">`;
      },1000);
      let result = '';
      if(computersPick === playersPick) {
            result = `It\'s a Tie...`
            addPlayerScore = 0;
            addComputerScore = 0;
          } else if (computersPick === computerMoveWins) {
            result = 'You LOST!'
            addPlayerScore = 0;
            addComputerScore = 1;
          } else if(computersPick === computerMoveLoses){
            result = `You Win!!`
            addPlayerScore = 1;
            addComputerScore = 0; 
          }
      setTimeout(() => {
      addScoreElement(addPlayerScore,addComputerScore);
      },2000);
      setTimeout(() => {
      document.querySelector('.js-result').innerHTML = result;
      },1500);
    };
  
    function hideMoveButtons(){
      const moveButtons = document.querySelectorAll('.move-button');
      moveButtons.forEach(button => {
        button.style.display = 'none';
      });
    };
  
    function showPlayAgainButton(){
      const playAgainButton = document.querySelector('.play-again');
      setTimeout(() => {
      playAgainButton.style.display = 'inline-block';
      }, 2500);
    };
  
  
  
    function playAgain(){
      const moveButtons = document.querySelectorAll('.move-button');
      moveButtons.forEach(button => {
        button.style.display = 'inline-block';
      });
     // const gameResult = document.querySelector('.js-result');
      const playersMove = document.querySelector('.players-pick');
      const computersMove = document.querySelector('.computers-pick');
  
      playersMove.innerHTML = ''; 
      computersMove.innerHTML = ''; 
      playersMove.style.display = 'block'; 
      computersMove.style.display = 'block'; 
      const playAgainButton = document.querySelector('.play-again');
      playAgainButton.style.display = 'none';
      
    };
  
    function clearResult(){
      const currentResult = document.querySelector('.js-result');
      currentResult.innerHTML = '';
      clearResult.style.display = 'block';
    };
   
  
    function addScoreElement(addPlayerScore, addComputerScore) {
      score.playersScore += addPlayerScore;
      score.computersScore += addComputerScore;
      document.querySelector('.js-score')
        .innerHTML = `The score of the game is Player: ${score.playersScore} to Computer: ${score.computersScore}`;
      localStorage.setItem('score', JSON.stringify(score));
    };
  
    function hideScore(){
      const currentScore = document.querySelector('.js-score');
      currentScore.innerHTML = '';
      hideScore.style.display = 'block';
    };
  
    function updateScoreElement (){
          document.querySelector('.js-score')
            .innerHTML = `The score of the game is Player: ${score.playersScore} to Computer: ${score.computersScore} `;
        };
  