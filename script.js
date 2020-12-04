const damageRange = 0.3;
let logIndex = 0;

const playerData = {
  name: "taka",
  hp: 100,
  attack: 5,
  defence: 2
}

const enemiesData = [
  {
    name: "おじさん",
    hp: 50,
    attack: 4,
    defence: 1
  },
  {
    name: "kids",
    hp: 60,
    attack: 5,
    defence: 2
  },
  {
    name: "メンヘラ",
    hp: 30,
    attack: 15,
    defence: 1
  },
  {
    name: "おばちゃん",
    hp: 100,
    attack: 5,
    defence: 2
  }
];

const enemyData = enemiesData[Math.floor(Math.random() * enemiesData.length)];

playerData["maxHp"] = playerData["hp"]
enemyData["maxHp"] = enemyData["hp"]

function insertText(id, text) {
  document.getElementById(id).textContent = text;
}

function damageCalculation(attack, defence) {
  const maxDamage = attack * (1 + damageRange),
        minDamage = attack * (1 - damageRange),
        attackDamage = Math.floor(Math.random() * (maxDamage - minDamage) + minDamage);
  const damage = attackDamage - defence;
  if (damage < 1) {
    return 0
  } else {
    return damage;
  }
}

function insertLog(texts) {
  const logsElement = document.getElementById("logs"),
        createLog = document.createElement("li");
  logIndex ++;
  createLog.innerHTML = logIndex + ": " + texts;
  logsElement.insertBefore(createLog, logsElement.firstChild)
}

insertText("playerName", playerData["name"]);
insertText("curenntPlayerHp", playerData["hp"]);
insertText("maxPlayerHp", playerData["hp"]);

insertText("enemyName", enemyData["name"]);
insertText("curenntEnemyHp", enemyData["hp"]);
insertText("maxEnamyHp", enemyData["hp"]);

document.getElementById("attack").addEventListener("click", function() {
  let victory = false;
      defeat = false;

  const playerName = '<span style="color: blue;">' + playerData["name"] + "</span>";
        enemyName = '<span style="color: red;">' + enemyData["name"] + "</span>";


  const playerDamage = damageCalculation(playerData["attack"], enemyData["defence"]);
  enemyData["hp"] -=  playerDamage;
  insertText("curenntEnemyHp", enemyData["hp"]);
  document.getElementById("curenntEnemyHpGaugeValue").style.width = (enemyData["hp"] / enemyData["maxHp"] * 100) + "%";
  insertLog(playerName + "の攻撃！" + enemyName + "に" + playerDamage + "のダメージ！");

  if (enemyData["hp"] <= 0) {
    alert("Win！");
    victory = true;

    enemyData["hp"] = 0;
    insertText("curenntEnemyHp", enemyData["hp"]);
    document.getElementById("curenntEnemyHpGaugeValue").style.width = "0%";
  }

  if (!victory) {
    const enemyDamage = damageCalculation(enemyData["attack"], playerData["defence"]);
    playerData["hp"] -= enemyDamage;
    insertText("curenntPlayerHp", playerData["hp"]);
    document.getElementById("curenntPlayerHpGaugeValue").style.width = (playerData["hp"] / playerData["maxHp"] * 100) + "%";
    insertLog(enemyName + "の攻撃！" + playerName + "に" + enemyDamage + "のダメージ！");

    if (playerData["hp"] <= 0) {
      alert("Lose...");
      defeat = true;

      playerData["hp"] = 0;
      insertText("curenntEnemyHp", playerData["hp"]);
      document.getElementById("curenntPlayerHpGaugeValue").style.width = "0%";
    }
  }
  if (victory || defeat) {
    this.classList.add("deactive");
  }
});
