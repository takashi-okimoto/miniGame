const playerData = {
  name: "taka",
  hp: 100
}

const enemyData = {
  name: "obachan",
  hp: 50
}

function insertText(id, text) {
  document.getElementById(id).textContent = text;
}

insertText("playerName", playerData["name"]);
insertText("curenntPlayerHp", playerData["hp"]);
insertText("maxPlayerHp", playerData["hp"]);

insertText("enemyName", enemyData["name"]);
insertText("curenntEnemyHp", enemyData["hp"]);
insertText("maxEnamyHp", enemyData["hp"]);

document.getElementById("attack").addEventListener("click", function() {
  let endGame = false;

  enemyData["hp"] -=  10;
  playerData["hp"] -= 10;

  insertText("curenntEnemyHp", enemyData["hp"]);
  insertText("curenntPlayerHp", playerData["hp"]);

  if (enemyData["hp"] <= 0) {
    alert("Win！");
    endGame = true;
  } else if (playerData["hp"] <= 0) {
    alert("Lose...");
    endGame = true;
  }

  if (endGame) {
    this.classList.add("deactive");
  }
});
