const damageRange = 0.3;

const playerData = {
  name: "taka",
  hp: 100,
  attack: 5,
  deffence: 2
}

const enemyData = {
  name: "obachan",
  hp: 50,
  attack: 4,
  deffence: 1
}

function insertText(id, text) {
  document.getElementById(id).textContent = text;
}

function damageCalculation(attack, deffence) {
  const maxDamage = attack * (1 + damageRange),
        minDamage = attack * (1 - damageRange),
        attackDamage = Math.floor(Math.random() * (maxDamage - minDamage) + minDamage);
  const damage = attackDamage - deffence;
  if (damage < 1) {
    return 0
  } else {
    return damage;
  }
}

insertText("playerName", playerData["name"]);
insertText("curenntPlayerHp", playerData["hp"]);
insertText("maxPlayerHp", playerData["hp"]);

insertText("enemyName", enemyData["name"]);
insertText("curenntEnemyHp", enemyData["hp"]);
insertText("maxEnamyHp", enemyData["hp"]);

document.getElementById("attack").addEventListener("click", function() {
  let endGame = false;
  const playerDamage = damageCalculation(playerData["attack"], enemyData["deffence"]),
        enemyDamage = damageCalculation(enemyData["attack"], playerData["deffence"]);


  enemyData["hp"] -=  playerDamage;
  playerData["hp"] -= enemyDamage;

  insertText("curenntEnemyHp", enemyData["hp"]);
  insertText("curenntPlayerHp", playerData["hp"]);

  if (enemyData["hp"] <= 0) {
    alert("Win！");
    endGame = true;

    enemyData["hp"] = 0;
    insertText("curenntEnemyHp", enemyData["hp"]);

  } else if (playerData["hp"] <= 0) {
    alert("Lose...");
    endGame = true;

    playerData["hp"] = 0;
    insertText("curenntEnemyHp", playerData["hp"]);
  }

  if (endGame) {
    this.classList.add("deactive");
  }
});