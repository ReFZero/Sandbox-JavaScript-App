function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log(`+${points} pts`);
  }

  function decreaseScore(points) {
    score -= points;
    console.log(`-${points} pts`);
  }

  function getScore() {
    return score;
  }

  return {increaseScore, decreaseScore, getScore};
}

const game = createGame();
game.increaseScore(5);
game.increaseScore(10);

game.decreaseScore(4);

console.log(`final score: ${game.getScore()}`);
