alert("Made by King404 2022-11-20")


//ORDER_CODE
// 0strike.
// 1defend.
// 2arrow.
// 3thinkingahead.
// 4stonewall.
// 5targetpractice.
// 6strike1.
// 7defend1.
// 8strike2.
// 9defend2.
// 10stormsteel.
// 11burn.
// 12blizzard.
// 13heal.
// 14masterstrategy
// 001sword


//MUSIC VARIBLES
var lose = document.getElementById("Lose")
var backgroundMusic = document.getElementById("BackgroundMusic")
var playCard = document.getElementById("PlayCard");
var victory = document.getElementById("Victory");
var fire = document.getElementById("Fire")
var talk1 = document.getElementById("Talk1")
var talk2 = document.getElementById("Talk2")
var talk3 = document.getElementById("Talk3")

//PLAYER VARIBLES
var card1;
var card2;
var card3;
var card4;
var card5;
var energy = 3
var playerDeck1;
var addDeck1 = [];
var finalDeck;
var finalDeck1;
var playerShield = 0;
var playerHealth = 83;
var difficulty = 0;
var floor = 1
//ENEMY VARIBLES
var Occupied = false;
var hash = "";
var enemyShield2 = "";
var enemyHp2 = "";
var enemyMaxHp2 = enemyHp2;
var defineNewCard;
var defineNewCard1;

var enemyType = ['ball', 'cube']
var enemyShield = 7;
var enemyHp = 24;
var enemyMaxHp = enemyHp;
var skillCardsPlayed = 0;
var attackCardsPlayed = 0;
var powerCardsPlayed = 0;
var skillCounter = 0;
var attackCounter = 0;
var powerCounter = 0;
var enemyDeck1;      // Standard Deck
var enemyDeck2;       // Defense Deck
var enemyDeck3;       // Attack Deck
var enemyDeck4;       // Boss Deck (Earth)
var enemyDeck5;       // Boss Deck (Fire)
var enemyDeck6;       // Boss Deck (Water)
var enemyDeck7;       // Boss Deck (Ice)
var enemyDeck8;       // Boss Deck (Lightning)
var enemyDeck9;       // Boss Deck (Elemental)
var enemyDeck10;       // Boss Deck (Elemental Phase 2)
var enemyChosenDeck;


//UPDATE
document.getElementById("EnemyShield2").style.backgroundImage = "url('Code/Blank.png')"
document.getElementById("EnemyHealth2").style.backgroundImage = "url('Code/Blank.png')"
document.getElementById('PlayerHealth').innerHTML = playerHealth + '/295'
document.getElementById("Enemy2").style.backgroundImage = "url('Code/Blank.png')"
document.getElementById("EnemyShield2").innerHTML = enemyShield2
document.getElementById("EnemyHealth2").innerHTML = enemyHp2 + hash + enemyMaxHp2
playCard.volume = 0.5;
document.body.style.backgroundImage = "url('Code/Background.png')";
document.getElementById("EnemyShield").innerHTML = enemyShield

function Music() {
    fire.loop = true;
    fire.load();
    fire.play();
    fire.volume = 0.05
    backgroundMusic.volume = 0.1
    backgroundMusic.loop = true;
    backgroundMusic.load();
    backgroundMusic.play();
}

function Yammering() {
    switch (floor) {
        case 4:
            var ask1 = prompt('Zzz..')
            if (ask1 === '') {
            } else {
                talk1.play()
                alert('Ok...this enemy can get pretty powerful if you let it have over than 20 turns. Put your arrows and strikes to good use.')
                alert('Oh yeah and the turtle has got some other tricks up his uh..sleeve？ Hm do turtles have sleeves? zzz...')
                alert("ZZZZZZZ....And don't ask me again!")
            }
            break;
        case 8:
            var ask2 = prompt('Snore...')
            if (ask2 === '') {
            } else {
                talk2.play()
                alert('..Hmm...this enemy likes to attack a lot. Better prepare 30 block to defend against the fire staff.')
                alert("I'm going back to sleep.")
            }
            break;
        case 12:
            var ask3 = prompt('Zzz...')
            if (ask3 === '') {
            } else {
                talk3.play()
                alert('This enemy is very powerful...Prepare 16 block and deal 15 damage in every turn to beat this boss more easily.')
                alert("Oh and that's just a suggestion. Zzz..")
            }
            break;
        case 16:
            var ask3 = prompt('Snore...')
            if (ask3 === '') {
            } else {
                talk1.play()
                alert('Oh yeah this one used to be farts but now it isnt and ur gonna get reky probably')
                alert('This enemy will damage itself. Just block and you should be fine. SHOULD.')
                alert('Yeah that probably will NOT work, try and attack too with strikes and stuff.')
            }
            break;
            case 20:
            var ask4 = prompt('Snore...')
            if (ask3 === '') {
            } else {
                talk2.play()
                alert('Its fat, its ugly, itll mash you into pieces if ur not careful.')
                alert('Unless you got heal, ur pretty doomed, so uh, yeah.')
            }
            break;
    }

}

function MessageConfirm() {
    document.getElementById("Message").innerHTML = ''
    document.getElementById("Message").style.backgroundImage = "url(Code/Blank.png)"
    document.getElementById("Message2").innerHTML = ''
    document.getElementById("Message2").style.backgroundImage = "url(Code/Blank.png)"
}

function select1() {
    switch (defineNewCard) {
        case 0:
            addDeck1.push('Strike')
            break;
        case 1:
            addDeck1.push('Defend')
            break;
        case 2:
            addDeck1.push('Strike1')
            break;
        case 3:
            addDeck1.push('Defend1')
            break;
        case 4:
            addDeck1.push('Thinking Ahead')
            break;
        case 5:
            addDeck1.push('StormSteel')
            break;
        case 6:
            addDeck1.push('Heal')
            break;
        case 7:
            addDeck1.push('Burn')
            break;
        case 8:
            addDeck1.push('Strike2')
            break;
        case 9:
            addDeck1.push('Defend2')
            break;
        case 10:
            addDeck1.push('Blizzard')
            break;
        case 11:
            addDeck1.push('MasterStrategy')
            break;
        case 12:
            addDeck1.push('Stonewall')
            break;
        case 13:
            addDeck1.push('Target Practice')
            break;
        case 14:
            addDeck1.push('Arrow')
            break;
    }

    closeForm()
}

function select2() {
    switch (defineNewCard1) {
        case 0:
            addDeck1.push('Strike')
            break;
        case 1:
            addDeck1.push('Defend')
            break;
        case 2:
            addDeck1.push('Strike1')
            break;
        case 3:
            addDeck1.push('Defend1')
            break;
        case 4:
            addDeck1.push('Thinking Ahead')
            break;
        case 5:
            addDeck1.push('StormSteel')
            break;
        case 6:
            addDeck1.push('Heal')
            break;
        case 7:
            addDeck1.push('Burn')
            break;
        case 8:
            addDeck1.push('Strike2')
            break;
        case 9:
            addDeck1.push('Defend2')
            break;
        case 10:
            addDeck1.push('Blizzard')
            break;
        case 11:
            addDeck1.push('MasterStrategy')
            break;
        case 12:
            addDeck1.push('Stonewall')
            break;
        case 13:
            addDeck1.push('Target Practice')
            break;
        case 14:
            addDeck1.push('Arrow')
            break;
    }

    closeForm()
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function choose() {
    document.getElementById("myForm").style.display = "block";
    switch (Math.floor(Math.random() * 15)) {
        case 0:
            document.getElementById('OPT1').style.backgroundImage = "url(Code/Strike.png)"
            defineNewCard = 0
            break;
        case 1:
            document.getElementById('OPT1').style.backgroundImage = "url(Code/Defend.png)"
            defineNewCard = 1
            break;
        case 2:
            document.getElementById('OPT1').style.backgroundImage = "url(Code/StrikeLv1.png)"
            defineNewCard = 2
            break;
        case 3:
            document.getElementById('OPT1').style.backgroundImage = "url(Code/DefendLv1.png)"
            defineNewCard = 3
            break;
        case 4:
            document.getElementById('OPT1').style.backgroundImage = "url(Code/ThinkingAhead.png)"
            defineNewCard = 4
            break;
        case 5:
            document.getElementById('OPT1').style.backgroundImage = "url(Code/StormOfSteel.png)"
            defineNewCard = 5
            break;
        case 6:
            document.getElementById('OPT1').style.backgroundImage = "url(Code/Heal.png)"
            defineNewCard = 6
            break;
        case 7:
            document.getElementById('OPT1').style.backgroundImage = "url(Code/Burn.png)"
            defineNewCard = 7
            break;
        case 8:
            document.getElementById('OPT1').style.backgroundImage = "url(Code/StrikeLv2.png)"
            defineNewCard = 8
            break;
        case 9:
            document.getElementById('OPT1').style.backgroundImage = "url(Code/DefendLv2.png)"
            defineNewCard = 9
            break;
        case 10:
            document.getElementById('OPT1').style.backgroundImage = "url(Code/Blizzard.png)"
            defineNewCard = 10
            break;
        case 11:
            document.getElementById('OPT1').style.backgroundImage = "url(Code/MasterOfStrategy.png)"
            defineNewCard = 11
            break;
        case 12:
            document.getElementById('OPT1').style.backgroundImage = "url(Code/Stonewall.png)"
            defineNewCard = 12
            break;
        case 13:
            document.getElementById('OPT1').style.backgroundImage = "url(Code/TargetPractice.png)"
            defineNewCard = 13
            break;
        case 14:
            document.getElementById('OPT1').style.backgroundImage = "url(Code/Arrow.png)"
            defineNewCard = 14
            break;

    }
    switch (Math.floor(Math.random() * 15)) {
        case 0:
            document.getElementById('OPT2').style.backgroundImage = "url(Code/Strike.png)"
            defineNewCard1 = 0
            break;
        case 1:
            document.getElementById('OPT2').style.backgroundImage = "url(Code/Defend.png)"
            defineNewCard1 = 1
            break;
        case 2:
            document.getElementById('OPT2').style.backgroundImage = "url(Code/StrikeLv1.png)"
            defineNewCard1 = 2
            break;
        case 3:
            document.getElementById('OPT2').style.backgroundImage = "url(Code/DefendLv1.png)"
            defineNewCard1 = 3
            break;
        case 4:
            document.getElementById('OPT2').style.backgroundImage = "url(Code/ThinkingAhead.png)"
            defineNewCard1 = 4
            break;
        case 5:
            document.getElementById('OPT2').style.backgroundImage = "url(Code/StormOfSteel.png)"
            defineNewCard1 = 5
            break;
        case 6:
            document.getElementById('OPT2').style.backgroundImage = "url(Code/Heal.png)"
            defineNewCard1 = 6
            break;
        case 7:
            document.getElementById('OPT2').style.backgroundImage = "url(Code/Burn.png)"
            defineNewCard1 = 7
            break;
        case 8:
            document.getElementById('OPT2').style.backgroundImage = "url(Code/StrikeLv2.png)"
            defineNewCard1 = 8
            break;
        case 9:
            document.getElementById('OPT2').style.backgroundImage = "url(Code/DefendLv2.png)"
            defineNewCard1 = 9
            break;
        case 10:
            document.getElementById('OPT2').style.backgroundImage = "url(Code/Blizzard.png)"
            defineNewCard1 = 10
            break;
        case 11:
            document.getElementById('OPT2').style.backgroundImage = "url(Code/MasterOfStrategy.png)"
            defineNewCard1 = 11
            break;
        case 12:
            document.getElementById('OPT2').style.backgroundImage = "url(Code/Stonewall.png)"
            defineNewCard1 = 12
            break;
        case 13:
            document.getElementById('OPT2').style.backgroundImage = "url(Code/TargetPractice.png)"
            defineNewCard1 = 13
            break;
        case 14:
            document.getElementById('OPT2').style.backgroundImage = "url(Code/Arrow.png)"
            defineNewCard1 = 14
            break;
    }
}

function Update() {
    if (enemyHp < 1) {
        choose()


        victory.volume = 0.3
        victory.load();
        victory.play();
        enemyType = ['1', '2', '3']
        enemyHp = 0
        difficulty = difficulty + 3
        enemyMaxHp = Math.round(Math.random() * 100) + difficulty + floor
        enemyShield = Math.round(Math.random() * 10) + difficulty - (difficulty / 3)
        enemyHp = enemyMaxHp
        floor = floor + 1
        energy = 3
        document.getElementById("Reload").disabled = false;
        document.getElementById('Slot1').disabled = true;
        document.getElementById('Slot2').disabled = true;
        document.getElementById('Slot3').disabled = true;
        document.getElementById('Slot4').disabled = true;
        document.getElementById('Slot5').disabled = true;
        document.getElementById('Slot1').style.backgroundImage = "url(Code/Blank.png)";
        document.getElementById('Slot2').style.backgroundImage = "url(Code/Blank.png)";
        document.getElementById('Slot3').style.backgroundImage = "url(Code/Blank.png)";
        document.getElementById('Slot4').style.backgroundImage = "url(Code/Blank.png)";
        document.getElementById('Slot5').style.backgroundImage = "url(Code/Blank.png)";
        document.getElementById("Energy").innerHTML = energy + '/' + '3'
        document.getElementById("EnemyShield").innerHTML = enemyShield
        document.getElementById("EnemyHealth").innerHTML = enemyHp + '/' + enemyMaxHp
        document.getElementById("Message").innerHTML = ''
        document.getElementById("Message").style.backgroundImage = "url(Code/Blank.png)"
        document.getElementById("Enemy2").style.backgroundImage = "url(Code/Blank.png)"
        document.getElementById("EnemyHealth2").style.backgroundImage = "url(Code/Blank.png)"
        document.getElementById("EnemyShield2").style.backgroundImage = "url(Code/Blank.png)"
        enemyShield2 = "";
        enemyHp2 = "";
        enemyMaxHp2 = enemyHp2
        hash = "";
        document.getElementById("EnemyShield2").innerHTML = enemyShield2
        document.getElementById("EnemyHealth2").innerHTML = enemyHp2 + hash + enemyMaxHp2
        Occupied = false;
        enemyType = enemyType[Math.floor(Math.random() * enemyType.length)];
        switch (enemyType) {
            case '1':
                document.getElementById("Enemy").style.backgroundImage = "url(Code/Enemy1.jpg)"
                break;
            case '2':
                document.getElementById("Enemy").style.backgroundImage = "url(Code/Enemy2.jpg)"
                break;
            case '3':
                document.getElementById("Enemy").style.backgroundImage = "url(Code/Enemy3.jpg)"
                break;
        }
        switch (floor) {
            case 4:
                document.getElementById("Enemy2").style.backgroundImage = "url('Code/EnemyEarthAssist.jpg')"
                Occupied = true
                hash = "/"
                enemyShield2 = "10";
                enemyHp2 = "15";
                enemyMaxHp2 = enemyHp2;
                document.getElementById("Enemy2").style.backgroundImage = "url('Code/EnemyEarthAssist.jpg')"
                document.getElementById("EnemyShield2").innerHTML = enemyShield2
                document.getElementById("EnemyHealth2").innerHTML = enemyHp2 + hash + enemyMaxHp2
                document.getElementById("EnemyShield2").style.backgroundImage = "url('Code/Shield.png')"
                document.getElementById("EnemyHealth2").style.backgroundColor = "Crimson"
                document.getElementById("EnemyHealth2").style.backgroundImage = "None"
                enemyHp = 100
                enemyMaxHp = 117
                enemyShield = 30
                document.getElementById("Enemy").style.backgroundImage = "url(Code/EnemyEarth.jpg)"
                document.getElementById("EnemyShield").innerHTML = enemyShield
                document.getElementById("EnemyHealth").innerHTML = enemyHp + '/' + enemyMaxHp
                break;

            case 8:
                Occupied = true
                hash = "/"
                enemyShield2 = "40";
                enemyHp2 = "10";
                enemyMaxHp2 = enemyHp2;
                enemyHp = 35
                enemyMaxHp = 48
                enemyShield = 70
                document.getElementById("Enemy2").style.backgroundImage = "url('Code/EnemyFireAssist.jpg')"
                document.getElementById("EnemyShield2").innerHTML = enemyShield2
                document.getElementById("EnemyHealth2").innerHTML = enemyHp2 + hash + enemyMaxHp2
                document.getElementById("EnemyShield2").style.backgroundImage = "url('Code/Shield.png')"
                document.getElementById("EnemyHealth2").style.backgroundColor = "Crimson"
                document.getElementById("EnemyHealth2").style.backgroundImage = "None"
                document.getElementById("Enemy").style.backgroundImage = "url(Code/EnemyFire.jpg)"
                document.getElementById("EnemyShield").innerHTML = enemyShield
                document.getElementById("EnemyHealth").innerHTML = enemyHp + '/' + enemyMaxHp
                break;
            case 12:
                Occupied = true
                hash = "/"
                enemyShield2 = "16";
                enemyHp2 = "45";
                enemyMaxHp2 = enemyHp2;
                document.getElementById("Enemy2").style.backgroundImage = "url('Code/EnemyWaterAssist.jpg')"
                document.getElementById("EnemyShield2").innerHTML = enemyShield2
                document.getElementById("EnemyHealth2").innerHTML = enemyHp2 + hash + enemyMaxHp2
                document.getElementById("EnemyShield2").style.backgroundImage = "url('Code/Shield.png')"
                document.getElementById("EnemyHealth2").style.backgroundColor = "Crimson"
                document.getElementById("EnemyHealth2").style.backgroundImage = "None"
                enemyHp = 144
                enemyMaxHp = 163
                enemyShield = 50
                document.getElementById("Enemy").style.backgroundImage = "url(Code/EnemyWater.jpg)"
                document.getElementById("EnemyShield").innerHTML = enemyShield
                document.getElementById("EnemyHealth").innerHTML = enemyHp + '/' + enemyMaxHp
                break;
            case 16:
                enemyHp = 384
                enemyMaxHp = 386
                enemyShield = 55
                document.getElementById("Enemy").style.backgroundImage = "url(Code/EnemyIce.jpg)"
                document.getElementById("EnemyShield").innerHTML = enemyShield
                document.getElementById("EnemyHealth").innerHTML = enemyHp + '/' + enemyMaxHp
                break;
            case 20:
                Occupied = true
                hash = "/"
                enemyShield2 = "26";
                enemyHp2 = "212";
                enemyMaxHp2 = 413;
                document.getElementById("Enemy2").style.backgroundImage = "url('Code/DestroyerAssist.jpg')"
                document.getElementById("EnemyShield2").innerHTML = enemyShield2
                document.getElementById("EnemyHealth2").innerHTML = enemyHp2 + hash + enemyMaxHp2
                document.getElementById("EnemyShield2").style.backgroundImage = "url('Code/Shield.png')"
                document.getElementById("EnemyHealth2").style.backgroundColor = "Crimson"
                document.getElementById("EnemyHealth2").style.backgroundImage = "None"
                enemyHp = 348
                enemyMaxHp = 524
                enemyShield = 66
                document.getElementById("Enemy").style.backgroundImage = "url(Code/EnemyGuardian.jpg)"
                document.getElementById("EnemyShield").innerHTML = enemyShield
                document.getElementById("EnemyHealth").innerHTML = enemyHp + '/' + enemyMaxHp
                break;
        }
    }
    if (playerHealth < 1) {
        playerHealth = 0
        window.open("Retry.html");
    }
    document.getElementById("EnemyShield").innerHTML = enemyShield
    document.getElementById("EnemyHealth").innerHTML = enemyHp + '/' + enemyMaxHp
    document.getElementById("PlayerShield").innerHTML = playerShield
    document.getElementById("PlayerHealth").innerHTML = playerHealth + '/295'
    document.getElementById("Energy").innerHTML = energy + '/' + '3'
    //update
}

function Use1() {

    switch (card1) {
        case 0:
            if (energy > 0) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot1').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot1").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 6 < 0) {
                    enemyHp = enemyHp + enemyShield - 6
                    enemyShield = 0
                    Update();
                } else {
                    enemyShield = enemyShield - 6
                    Update();
                }
            } else {
            }

            break;
        case 1:
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot1').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot1").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                energy = energy - 1
                playerShield = playerShield + 6
                Update();
            } else {
            }
            break;
        case 2:
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot1').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot1").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 15 < 0) {
                    enemyHp = enemyHp + enemyShield - 15
                    enemyShield = 0
                    Update();
                } else {
                    enemyShield = enemyShield - 15
                    Update();
                }
            } else {
            }

            break;
        case 3:
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot1').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot1").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 4 < 0) {
                    enemyHp = enemyHp + enemyShield - 4
                    enemyShield = 0
                } else {
                    enemyShield = enemyShield - 4
                }
                playerShield = playerShield + 5
                Update();
            } else {
            }

            break;
        case 4:
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot1').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot1").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                energy = energy - 1
                playerShield = playerShield + 8
                Update();
            } else {
            }
            break;
        case 5:
            playCard.play();
            document.getElementById('Slot1').style.backgroundImage = "url(Code/Blank.png)";
            document.getElementById("Slot1").disabled = true;
            powerCardsPlayed = powerCardsPlayed + 1
            card5 = 0
            document.getElementById("Slot5").style.backgroundImage = "url(Code/Strike.png)"
            document.getElementById("Slot5").disabled = false;
            Update()
            break;
        case 6:
            if (energy > 0) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot1').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot1").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 9 < 0) {
                    enemyHp = enemyHp + enemyShield - 9
                    enemyShield = 0
                    Update();
                } else {
                    enemyShield = enemyShield - 9
                    Update();
                }
            } else {
            }

            break;
        case 7:
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot1').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot1").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                energy = energy - 1
                playerShield = playerShield + 7
                Update();
            } else {
            }
            break;
        case 8:
            if (energy > 0) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot1').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot1").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 12 < 0) {
                    enemyHp = enemyHp + enemyShield - 12
                    enemyShield = 0
                    Update();
                } else {
                    enemyShield = enemyShield - 12
                    Update();
                }
            } else {
            }

            break;
        case 9:
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot1').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot1").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                energy = energy - 1
                playerShield = playerShield + 9
                Update();
            } else {
            }
            break;
        case 10:
            if (energy > 2) {
                playCard.play();
                document.getElementById('Slot1').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot1").disabled = true;
                powerCardsPlayed = powerCardsPlayed + 1
                energy = energy - 3
                document.getElementById('Slot2').style.backgroundImage = "url(Code/Sword.png)";
                card2 = 100;
                document.getElementById('Slot3').style.backgroundImage = "url(Code/Sword.png)";
                card3 = 100;
                document.getElementById('Slot4').style.backgroundImage = "url(Code/Sword.png)";
                card4 = 100;
                document.getElementById('Slot5').style.backgroundImage = "url(Code/Sword.png)";
                card5 = 100;
                Update();
            } else {
            }
            break;
        case 11:
            if (energy > 1) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot1').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot1").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 2
                if (enemyShield === 0) {
                    enemyHp = enemyHp - 13
                    Update();
                } else {
                    Update();
                }
            } else {
            }

            break;
        case 12:
            if (energy > 1) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot1').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot1").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 2
                if (enemyShield - 26 < 0) {
                    enemyHp = enemyHp + enemyShield - 26
                    enemyShield = 0
                    Update();
                } else {
                    enemyShield = enemyShield - 26
                    Update();
                }
                playerHealth = playerHealth - 13
                document.getElementById("PlayerHealth").innerHTML = playerHealth + '/295'
            } else {
            }
            break;
        case 13:
            if (energy > 0) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot1').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot1").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                playerHealth = playerHealth + 12
                document.getElementById("PlayerHealth").innerHTML = playerHealth + '/295'
            } else {
            }
            break;
        case 14:
            if (energy > 0) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot1').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot1").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                skillCardsPlayed = skillCardsPlayed + 1
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 6 < 0) {
                    enemyHp = enemyHp + enemyShield - 6
                    enemyShield = 0
                } else {
                    enemyShield = enemyShield - 6
                }
                playerShield = playerShield + 8
                Update();
            } else {
            }
            break;
        case 100:
            playCard.pause();
            playCard.play();
            document.getElementById('Slot1').style.backgroundImage = "url(Code/Blank.png)";
            document.getElementById("Slot1").disabled = true;
            attackCardsPlayed = attackCardsPlayed + 1
            if (enemyShield - 4 < 0) {
                enemyHp = enemyHp + enemyShield - 4
                enemyShield = 0
                Update();
            } else {
                enemyShield = enemyShield - 4
                Update();
            }
            break;
    }


}

function Use2() {
    switch (card2) {
        case 0:
            if (energy > 0) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot2').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot2").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 6 < 0) {
                    enemyHp = enemyHp + enemyShield - 6
                    enemyShield = 0
                    Update();
                } else {
                    enemyShield = enemyShield - 6
                    Update();
                }
            } else {
            }

            break;
        case 1:
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot2').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot2").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                energy = energy - 1
                playerShield = playerShield + 6
                Update();
            } else {
            }
            break;
        case
        2
        :
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot2').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot2").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 15 < 0) {
                    enemyHp = enemyHp + enemyShield - 15
                    enemyShield = 0
                    Update();
                } else {
                    enemyShield = enemyShield - 15
                    Update();
                }
            } else {
            }

            break;
        case 3:
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot2').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot2").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 4 < 0) {
                    enemyHp = enemyHp + enemyShield - 4
                    enemyShield = 0
                } else {
                    enemyShield = enemyShield - 4
                }
                playerShield = playerShield + 5
                Update();
            } else {
            }

            break;
        case 4:
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot2').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot2").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                energy = energy - 1
                playerShield = playerShield + 8
                Update();
            } else {
            }
            break;
        case
        5
        :
            playCard.play();
            document.getElementById('Slot2').style.backgroundImage = "url(Code/Blank.png)";
            document.getElementById("Slot2").disabled = true;
            powerCardsPlayed = powerCardsPlayed + 1
            card5 = 0
            document.getElementById("Slot5").style.backgroundImage = "url(Code/Strike.png)"
            document.getElementById("Slot5").disabled = false;
            Update()
            break;
        case
        6
        :
            if (energy > 0) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot2').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot2").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 9 < 0) {
                    enemyHp = enemyHp + enemyShield - 9
                    enemyShield = 0
                    Update();
                } else {
                    enemyShield = enemyShield - 9
                    Update();
                }
            } else {
            }

            break;
        case
        7
        :
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot2').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot2").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                energy = energy - 1
                playerShield = playerShield + 7
                Update();
            } else {
            }
            break;
        case
        8
        :
            if (energy > 0) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot2').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot2").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 12 < 0) {
                    enemyHp = enemyHp + enemyShield - 12
                    enemyShield = 0
                    Update();
                } else {
                    enemyShield = enemyShield - 12
                    Update();
                }
            } else {
            }

            break;
        case
        9
        :
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot2').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot2").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                energy = energy - 1
                playerShield = playerShield + 9
                Update();
            } else {
            }
            break;
        case
        10
        :
            if (energy > 2) {
                playCard.play();
                document.getElementById('Slot2').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot2").disabled = true;
                powerCardsPlayed = powerCardsPlayed + 1
                energy = energy - 3
                document.getElementById('Slot1').style.backgroundImage = "url(Code/Sword.png)";
                card1 = 100;
                document.getElementById('Slot3').style.backgroundImage = "url(Code/Sword.png)";
                card3 = 100;
                document.getElementById('Slot4').style.backgroundImage = "url(Code/Sword.png)";
                card4 = 100;
                document.getElementById('Slot5').style.backgroundImage = "url(Code/Sword.png)";
                card5 = 100;
                Update();
            } else {
            }
            break;
        case
        11
        :
            if (energy > 1) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot2').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot2").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 2
                if (enemyShield === 0) {
                    enemyHp = enemyHp - 13
                    Update();
                } else {
                    Update();
                }
            } else {
            }

            break;
        case
        12
        :
            if (energy > 1) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot2').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot2").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 2
                if (enemyShield - 26 < 0) {
                    enemyHp = enemyHp + enemyShield - 26
                    enemyShield = 0
                    Update();
                } else {
                    enemyShield = enemyShield - 26
                    Update();
                }
                playerHealth = playerHealth - 13
                document.getElementById("PlayerHealth").innerHTML = playerHealth + '/295'
            } else {
            }
            break;
        case
        13
        :
            if (energy > 0) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot2').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot2").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                playerHealth = playerHealth + 12
                document.getElementById("PlayerHealth").innerHTML = playerHealth + '/295'
            } else {
            }
            break;
        case
        14
        :
            if (energy > 0) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot2').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot2").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                skillCardsPlayed = skillCardsPlayed + 1
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 6 < 0) {
                    enemyHp = enemyHp + enemyShield - 6
                    enemyShield = 0
                } else {
                    enemyShield = enemyShield - 6
                }
                playerShield = playerShield + 8
                Update();
            } else {
            }
            break;
        case
        100
        :
            playCard.pause();
            playCard.play();
            document.getElementById('Slot2').style.backgroundImage = "url(Code/Blank.png)";
            document.getElementById("Slot2").disabled = true;
            attackCardsPlayed = attackCardsPlayed + 1
            if (enemyShield - 4 < 0) {
                enemyHp = enemyHp + enemyShield - 4
                enemyShield = 0
                Update();
            } else {
                enemyShield = enemyShield - 4
                Update();
            }
            break;
    }


}

function Use3() {
    switch (card3) {
        case 0:
            if (energy > 0) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot3').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot3").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 6 < 0) {
                    enemyHp = enemyHp + enemyShield - 6
                    enemyShield = 0
                    Update();
                } else {
                    enemyShield = enemyShield - 6
                    Update();
                }
            } else {
            }

            break;
        case 1:
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot3').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot3").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                energy = energy - 1
                playerShield = playerShield + 6
                Update();
            } else {
            }
            break;
        case
        2
        :
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot3').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot3").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 15 < 0) {
                    enemyHp = enemyHp + enemyShield - 15
                    enemyShield = 0
                    Update();
                } else {
                    enemyShield = enemyShield - 15
                    Update();
                }
            } else {
            }

            break;
        case 3:
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot3').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot3").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 4 < 0) {
                    enemyHp = enemyHp + enemyShield - 4
                    enemyShield = 0
                } else {
                    enemyShield = enemyShield - 4
                }
                playerShield = playerShield + 5
                Update();
            } else {
            }

            break;
        case 4:
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot3').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot3").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                energy = energy - 1
                playerShield = playerShield + 8
                Update();
            } else {
            }
            break;
        case
        5
        :
            playCard.play();
            document.getElementById('Slot3').style.backgroundImage = "url(Code/Blank.png)";
            document.getElementById("Slot3").disabled = true;
            powerCardsPlayed = powerCardsPlayed + 1
            card5 = 0
            document.getElementById("Slot5").style.backgroundImage = "url(Code/Strike.png)"
            document.getElementById("Slot5").disabled = false;
            Update()
            break;
        case
        6
        :
            if (energy > 0) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot3').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot3").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 9 < 0) {
                    enemyHp = enemyHp + enemyShield - 9
                    enemyShield = 0
                    Update();
                } else {
                    enemyShield = enemyShield - 9
                    Update();
                }
            } else {
            }

            break;
        case
        7
        :
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot3').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot3").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                energy = energy - 1
                playerShield = playerShield + 7
                Update();
            } else {
            }
            break;
        case
        8
        :
            if (energy > 0) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot3').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot3").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 12 < 0) {
                    enemyHp = enemyHp + enemyShield - 12
                    enemyShield = 0
                    Update();
                } else {
                    enemyShield = enemyShield - 12
                    Update();
                }
            } else {
            }

            break;
        case
        9
        :
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot3').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot3").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                energy = energy - 1
                playerShield = playerShield + 9
                Update();
            } else {
            }
            break;
        case
        10
        :
            if (energy > 2) {
                playCard.play();
                document.getElementById('Slot3').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot3").disabled = true;
                powerCardsPlayed = powerCardsPlayed + 1
                energy = energy - 3
                document.getElementById('Slot1').style.backgroundImage = "url(Code/Sword.png)";
                card1 = 100;
                document.getElementById('Slot2').style.backgroundImage = "url(Code/Sword.png)";
                card2 = 100;
                document.getElementById('Slot4').style.backgroundImage = "url(Code/Sword.png)";
                card4 = 100;
                document.getElementById('Slot5').style.backgroundImage = "url(Code/Sword.png)";
                card5 = 100;
                Update();
            } else {
            }
            break;
        case
        11
        :
            if (energy > 1) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot3').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot3").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 2
                if (enemyShield === 0) {
                    enemyHp = enemyHp - 13
                    Update();
                } else {
                    Update();
                }
            } else {
            }

            break;
        case
        12
        :
            if (energy > 1) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot3').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot3").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 2
                if (enemyShield - 26 < 0) {
                    enemyHp = enemyHp + enemyShield - 26
                    enemyShield = 0
                    Update();
                } else {
                    enemyShield = enemyShield - 26
                    Update();
                }
                playerHealth = playerHealth - 13
                document.getElementById("PlayerHealth").innerHTML = playerHealth + '/295'
            } else {
            }
            break;
        case
        13
        :
            if (energy > 0) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot3').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot3").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                playerHealth = playerHealth + 12
                document.getElementById("PlayerHealth").innerHTML = playerHealth + '/295'
            } else {
            }
            break;
        case
        14
        :
            if (energy > 0) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot3').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot3").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                skillCardsPlayed = skillCardsPlayed + 1
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 6 < 0) {
                    enemyHp = enemyHp + enemyShield - 6
                    enemyShield = 0
                } else {
                    enemyShield = enemyShield - 6
                }
                playerShield = playerShield + 8
                Update();
            } else {
            }
            break;
        case
        100
        :
            playCard.pause();
            playCard.play();
            document.getElementById('Slot3').style.backgroundImage = "url(Code/Blank.png)";
            document.getElementById("Slot3").disabled = true;
            attackCardsPlayed = attackCardsPlayed + 1
            if (enemyShield - 4 < 0) {
                enemyHp = enemyHp + enemyShield - 4
                enemyShield = 0
                Update();
            } else {
                enemyShield = enemyShield - 4
                Update();
            }
            break;
    }


}

function Use4() {

    switch (card4) {
        case 0:
            if (energy > 0) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot4').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot4").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 6 < 0) {
                    enemyHp = enemyHp + enemyShield - 6
                    enemyShield = 0
                    Update();
                } else {
                    enemyShield = enemyShield - 6
                    Update();
                }
            } else {
            }

            break;
        case 1:
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot4').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot4").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                energy = energy - 1
                playerShield = playerShield + 6
                Update();
            } else {
            }
            break;
        case
        2
        :
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot4').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot4").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 15 < 0) {
                    enemyHp = enemyHp + enemyShield - 15
                    enemyShield = 0
                    Update();
                } else {
                    enemyShield = enemyShield - 15
                    Update();
                }
            } else {
            }

            break;
        case 3:
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot4').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot4").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 4 < 0) {
                    enemyHp = enemyHp + enemyShield - 4
                    enemyShield = 0
                } else {
                    enemyShield = enemyShield - 4
                }
                playerShield = playerShield + 5
                Update();
            } else {
            }

            break;
        case 4:
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot4').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot4").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                energy = energy - 1
                playerShield = playerShield + 8
                Update();
            } else {
            }
            break;
        case
        5
        :
            playCard.play();
            document.getElementById('Slot4').style.backgroundImage = "url(Code/Blank.png)";
            document.getElementById("Slot4").disabled = true;
            powerCardsPlayed = powerCardsPlayed + 1
            card5 = 0
            document.getElementById("Slot5").style.backgroundImage = "url(Code/Strike.png)"
            document.getElementById("Slot5").disabled = false;
            Update()
            break;
        case
        6
        :
            if (energy > 0) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot4').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot4").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 9 < 0) {
                    enemyHp = enemyHp + enemyShield - 9
                    enemyShield = 0
                    Update();
                } else {
                    enemyShield = enemyShield - 9
                    Update();
                }
            } else {
            }

            break;
        case
        7
        :
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot4').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot4").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                energy = energy - 1
                playerShield = playerShield + 7
                Update();
            } else {
            }
            break;
        case
        8
        :
            if (energy > 0) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot4').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot4").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 12 < 0) {
                    enemyHp = enemyHp + enemyShield - 12
                    enemyShield = 0
                    Update();
                } else {
                    enemyShield = enemyShield - 12
                    Update();
                }
            } else {
            }

            break;
        case
        9
        :
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot4').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot4").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                energy = energy - 1
                playerShield = playerShield + 9
                Update();
            } else {
            }
            break;
        case
        10
        :
            if (energy > 2) {
                playCard.play();
                document.getElementById('Slot4').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot4").disabled = true;
                powerCardsPlayed = powerCardsPlayed + 1
                energy = energy - 3
                document.getElementById('Slot1').style.backgroundImage = "url(Code/Sword.png)";
                card1 = 100;
                document.getElementById('Slot2').style.backgroundImage = "url(Code/Sword.png)";
                card2 = 100;
                document.getElementById('Slot3').style.backgroundImage = "url(Code/Sword.png)";
                card3 = 100;
                document.getElementById('Slot5').style.backgroundImage = "url(Code/Sword.png)";
                card5 = 100;
                Update();
            } else {
            }
            break;
        case
        11
        :
            if (energy > 1) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot4').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot4").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 2
                if (enemyShield === 0) {
                    enemyHp = enemyHp - 13
                    Update();
                } else {
                    Update();
                }
            } else {
            }

            break;
        case
        12
        :
            if (energy > 1) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot4').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot4").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 2
                if (enemyShield - 26 < 0) {
                    enemyHp = enemyHp + enemyShield - 26
                    enemyShield = 0
                    Update();
                } else {
                    enemyShield = enemyShield - 26
                    Update();
                }
                playerHealth = playerHealth - 13
                document.getElementById("PlayerHealth").innerHTML = playerHealth + '/295'
            } else {
            }
            break;
        case
        13
        :
            if (energy > 0) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot4').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot4").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                playerHealth = playerHealth + 12
                document.getElementById("PlayerHealth").innerHTML = playerHealth + '/295'
            } else {
            }
            break;
        case
        14
        :
            if (energy > 0) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot4').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot4").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                skillCardsPlayed = skillCardsPlayed + 1
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 6 < 0) {
                    enemyHp = enemyHp + enemyShield - 6
                    enemyShield = 0
                } else {
                    enemyShield = enemyShield - 6
                }
                playerShield = playerShield + 8
                Update();
            } else {
            }
            break;
        case
        100
        :
            playCard.pause();
            playCard.play();
            document.getElementById('Slot4').style.backgroundImage = "url(Code/Blank.png)";
            document.getElementById("Slot4").disabled = true;
            attackCardsPlayed = attackCardsPlayed + 1
            if (enemyShield - 4 < 0) {
                enemyHp = enemyHp + enemyShield - 4
                enemyShield = 0
                Update();
            } else {
                enemyShield = enemyShield - 4
                Update();
            }
            break;
    }


}

function Use5() {
    switch (card5) {
        case 0:
            if (energy > 0) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot5').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot5").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 6 < 0) {
                    enemyHp = enemyHp + enemyShield - 6
                    enemyShield = 0
                    Update();
                } else {
                    enemyShield = enemyShield - 6
                    Update();
                }
            } else {
            }

            break;
        case 1:
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot5').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot5").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                energy = energy - 1
                playerShield = playerShield + 6
                Update();
            } else {
            }
            break;
        case
        2
        :
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot5').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot5").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 15 < 0) {
                    enemyHp = enemyHp + enemyShield - 15
                    enemyShield = 0
                    Update();
                } else {
                    enemyShield = enemyShield - 15
                    Update();
                }
            } else {
            }

            break;
        case 3:
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot5').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot5").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 4 < 0) {
                    enemyHp = enemyHp + enemyShield - 4
                    enemyShield = 0
                } else {
                    enemyShield = enemyShield - 4
                }
                playerShield = playerShield + 5
                Update();
            } else {
            }

            break;
        case 4:
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot5').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot5").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                energy = energy - 1
                playerShield = playerShield + 8
                Update();
            } else {
            }
            break;
        case
        5
        :
            playCard.play();
            document.getElementById('Slot5').style.backgroundImage = "url(Code/Blank.png)";
            document.getElementById("Slot5").disabled = true;
            powerCardsPlayed = powerCardsPlayed + 1
            card5 = 0
            document.getElementById("Slot5").style.backgroundImage = "url(Code/Strike.png)"
            document.getElementById("Slot5").disabled = false;
            Update()
            break;
        case
        6
        :
            if (energy > 0) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot5').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot5").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 9 < 0) {
                    enemyHp = enemyHp + enemyShield - 9
                    enemyShield = 0
                    Update();
                } else {
                    enemyShield = enemyShield - 9
                    Update();
                }
            } else {
            }

            break;
        case
        7
        :
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot5').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot5").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                energy = energy - 1
                playerShield = playerShield + 7
                Update();
            } else {
            }
            break;
        case
        8
        :
            if (energy > 0) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot5').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot5").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 12 < 0) {
                    enemyHp = enemyHp + enemyShield - 12
                    enemyShield = 0
                    Update();
                } else {
                    enemyShield = enemyShield - 12
                    Update();
                }
            } else {
            }

            break;
        case
        9
        :
            if (energy > 0) {
                playCard.play();
                document.getElementById('Slot5').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot5").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                energy = energy - 1
                playerShield = playerShield + 9
                Update();
            } else {
            }
            break;
        case
        10
        :
            if (energy > 2) {
                playCard.play();
                document.getElementById('Slot5').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot5").disabled = true;
                powerCardsPlayed = powerCardsPlayed + 1
                energy = energy - 3
                document.getElementById('Slot1').style.backgroundImage = "url(Code/Sword.png)";
                card1 = 100;
                document.getElementById('Slot2').style.backgroundImage = "url(Code/Sword.png)";
                card2 = 100;
                document.getElementById('Slot3').style.backgroundImage = "url(Code/Sword.png)";
                card3 = 100;
                document.getElementById('Slot4').style.backgroundImage = "url(Code/Sword.png)";
                card4 = 100;
                Update();
            } else {
            }
            break;
        case
        11
        :
            if (energy > 1) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot5').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot5").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 2
                if (enemyShield === 0) {
                    enemyHp = enemyHp - 13
                    Update();
                } else {
                    Update();
                }
            } else {
            }

            break;
        case
        12
        :
            if (energy > 1) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot5').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot5").disabled = true;
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 2
                if (enemyShield - 26 < 0) {
                    enemyHp = enemyHp + enemyShield - 26
                    enemyShield = 0
                    Update();
                } else {
                    enemyShield = enemyShield - 26
                    Update();
                }
                playerHealth = playerHealth - 13
                document.getElementById("PlayerHealth").innerHTML = playerHealth + '/295'
            } else {
            }
            break;
        case
        13
        :
            if (energy > 0) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot5').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot5").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                playerHealth = playerHealth + 12
                document.getElementById("PlayerHealth").innerHTML = playerHealth + '/295'
            } else {
            }
            break;
        case
        14
        :
            if (energy > 0) {
                playCard.pause();
                playCard.play();
                document.getElementById('Slot5').style.backgroundImage = "url(Code/Blank.png)";
                document.getElementById("Slot5").disabled = true;
                skillCardsPlayed = skillCardsPlayed + 1
                skillCardsPlayed = skillCardsPlayed + 1
                attackCardsPlayed = attackCardsPlayed + 1
                energy = energy - 1
                if (enemyShield - 6 < 0) {
                    enemyHp = enemyHp + enemyShield - 6
                    enemyShield = 0
                } else {
                    enemyShield = enemyShield - 6
                }
                playerShield = playerShield + 8
                Update();
            } else {
            }
            break;
        case
        100
        :
            playCard.pause();
            playCard.play();
            document.getElementById('Slot5').style.backgroundImage = "url(Code/Blank.png)";
            document.getElementById("Slot5").disabled = true;
            attackCardsPlayed = attackCardsPlayed + 1
            if (enemyShield - 4 < 0) {
                enemyHp = enemyHp + enemyShield - 4
                enemyShield = 0
                Update();
            } else {
                enemyShield = enemyShield - 4
                Update();
            }
            break;
    }


}

function Reload() {
    MessageConfirm()
    document.getElementById('Slot1').disabled = false;
    document.getElementById('Slot2').disabled = false;
    document.getElementById('Slot3').disabled = false;
    document.getElementById('Slot4').disabled = false;
    document.getElementById('Slot5').disabled = false;
    playerDeck1 = ['Strike', 'Defend', 'Arrow', 'Thinking Ahead', 'Stonewall', 'Target Practice']
    finalDeck1 = playerDeck1.concat(addDeck1);
    finalDeck = finalDeck1[Math.floor(Math.random() * finalDeck1.length)];
    switch (finalDeck) {
        case 'Strike':
            document.getElementById('Slot1').style.backgroundImage = "url(Code/Strike.png)";
            card1 = 0;
            break;
        case 'Defend':
            document.getElementById('Slot1').style.backgroundImage = "url(Code/Defend.png)";
            card1 = 1;
            break;
        case 'Arrow':
            document.getElementById('Slot1').style.backgroundImage = "url(Code/Arrow.png)";
            card1 = 2;
            break;
        case 'Thinking Ahead':
            document.getElementById('Slot1').style.backgroundImage = "url(Code/ThinkingAhead.png)";
            card1 = 3;
            break;
        case 'Stonewall':
            document.getElementById('Slot1').style.backgroundImage = "url(Code/Stonewall.png)";
            card1 = 4;
            break;
        case 'Target Practice':
            document.getElementById('Slot1').style.backgroundImage = "url(Code/TargetPractice.png)";
            card1 = 5;
            break;
        case 'Strike1':
            document.getElementById('Slot1').style.backgroundImage = "url(Code/StrikeLv1.png)";
            card1 = 6;
            break;
        case 'Defend1':
            document.getElementById('Slot1').style.backgroundImage = "url(Code/DefendLv1.png)";
            card1 = 7;
            break;
        case 'Strike2':
            document.getElementById('Slot1').style.backgroundImage = "url(Code/StrikeLv2.png)";
            card1 = 8;
            break;
        case 'Defend2':
            document.getElementById('Slot1').style.backgroundImage = "url(Code/DefendLv2.png)";
            card1 = 9;
            break;
        case 'StormSteel':
            document.getElementById('Slot1').style.backgroundImage = "url(Code/StormOfSteel.png)";
            card1 = 10;
            break;
        case 'Burn':
            document.getElementById('Slot1').style.backgroundImage = "url(Code/Burn.png)";
            card1 = 11;
            break;
        case 'Blizzard':
            document.getElementById('Slot1').style.backgroundImage = "url(Code/Blizzard.png)";
            card1 = 12;
            break;
        case 'Heal':
            document.getElementById('Slot1').style.backgroundImage = "url(Code/Heal.png)";
            card1 = 13;
            break;
        case 'MasterStrategy':
            document.getElementById('Slot1').style.backgroundImage = "url(Code/MasterOfStrategy.png)";
            card1 = 14;
            break;
    }
    finalDeck = finalDeck1[Math.floor(Math.random() * finalDeck1.length)];
    switch (finalDeck) {
        case 'Strike':
            document.getElementById('Slot2').style.backgroundImage = "url(Code/Strike.png)";
            card2 = 0;
            break;
        case 'Defend':
            document.getElementById('Slot2').style.backgroundImage = "url(Code/Defend.png)";
            card2 = 1;
            break;
        case 'Arrow':
            document.getElementById('Slot2').style.backgroundImage = "url(Code/Arrow.png)";
            card2 = 2;
            break;
        case 'Thinking Ahead':
            document.getElementById('Slot2').style.backgroundImage = "url(Code/ThinkingAhead.png)";
            card2 = 3;
            break;
        case 'Stonewall':
            document.getElementById('Slot2').style.backgroundImage = "url(Code/Stonewall.png)";
            card2 = 4;
            break;
        case 'Target Practice':
            document.getElementById('Slot2').style.backgroundImage = "url(Code/TargetPractice.png)";
            card2 = 5;
            break;
        case 'Strike1':
            document.getElementById('Slot2').style.backgroundImage = "url(Code/StrikeLv1.png)";
            card2 = 6;
            break;
        case 'Defend1':
            document.getElementById('Slot2').style.backgroundImage = "url(Code/DefendLv1.png)";
            card2 = 7;
            break;
        case 'Strike2':
            document.getElementById('Slot2').style.backgroundImage = "url(Code/StrikeLv2.png)";
            card2 = 8;
            break;
        case 'Defend2':
            document.getElementById('Slot2').style.backgroundImage = "url(Code/DefendLv2.png)";
            card2 = 9;
            break;
        case 'StormSteel':
            document.getElementById('Slot2').style.backgroundImage = "url(Code/StormOfSteel.png)";
            card2 = 10;
            break;
        case 'Burn':
            document.getElementById('Slot2').style.backgroundImage = "url(Code/Burn.png)";
            card2 = 11;
            break;
        case 'Blizzard':
            document.getElementById('Slot2').style.backgroundImage = "url(Code/Blizzard.png)";
            card2 = 12;
            break;
        case 'Heal':
            document.getElementById('Slot2').style.backgroundImage = "url(Code/Heal.png)";
            card2 = 13;
            break;
        case 'MasterStrategy':
            document.getElementById('Slot2').style.backgroundImage = "url(Code/MasterOfStrategy.png)";
            card2 = 14;
            break;
    }
    finalDeck = finalDeck1[Math.floor(Math.random() * finalDeck1.length)];
    switch (finalDeck) {
        case 'Strike':
            document.getElementById('Slot3').style.backgroundImage = "url(Code/Strike.png)";
            card3 = 0;
            break;
        case 'Defend':
            document.getElementById('Slot3').style.backgroundImage = "url(Code/Defend.png)";
            card3 = 1;
            break;
        case 'Arrow':
            document.getElementById('Slot3').style.backgroundImage = "url(Code/Arrow.png)";
            card3 = 2;
            break;
        case 'Thinking Ahead':
            document.getElementById('Slot3').style.backgroundImage = "url(Code/ThinkingAhead.png)";
            card3 = 3;
            break;
        case 'Stonewall':
            document.getElementById('Slot3').style.backgroundImage = "url(Code/Stonewall.png)";
            card3 = 4;
            break;
        case 'Target Practice':
            document.getElementById('Slot3').style.backgroundImage = "url(Code/TargetPractice.png)";
            card3 = 5;
            break;
        case 'Strike1':
            document.getElementById('Slot3').style.backgroundImage = "url(Code/StrikeLv1.png)";
            card3 = 6;
            break;
        case 'Defend1':
            document.getElementById('Slot3').style.backgroundImage = "url(Code/DefendLv1.png)";
            card3 = 7;
            break;
        case 'Strike2':
            document.getElementById('Slot3').style.backgroundImage = "url(Code/StrikeLv2.png)";
            card3 = 8;
            break;
        case 'Defend2':
            document.getElementById('Slot3').style.backgroundImage = "url(Code/DefendLv2.png)";
            card3 = 9;
            break;
        case 'StormSteel':
            document.getElementById('Slot3').style.backgroundImage = "url(Code/StormOfSteel.png)";
            card3 = 10;
            break;
        case 'Burn':
            document.getElementById('Slot3').style.backgroundImage = "url(Code/Burn.png)";
            card3 = 11;
            break;
        case 'Blizzard':
            document.getElementById('Slot3').style.backgroundImage = "url(Code/Blizzard.png)";
            card3 = 12;
            break;
        case 'Heal':
            document.getElementById('Slot3').style.backgroundImage = "url(Code/Heal.png)";
            card3 = 13;
            break;
        case 'MasterStrategy':
            document.getElementById('Slot3').style.backgroundImage = "url(Code/MasterOfStrategy.png)";
            card3 = 14;
            break;
    }
    finalDeck = finalDeck1[Math.floor(Math.random() * finalDeck1.length)];
    switch (finalDeck) {
        case 'Strike':
            document.getElementById('Slot4').style.backgroundImage = "url(Code/Strike.png)";
            card4 = 0;
            break;
        case 'Defend':
            document.getElementById('Slot4').style.backgroundImage = "url(Code/Defend.png)";
            card4 = 1;
            break;
        case 'Arrow':
            document.getElementById('Slot4').style.backgroundImage = "url(Code/Arrow.png)";
            card4 = 2;
            break;
        case 'Thinking Ahead':
            document.getElementById('Slot4').style.backgroundImage = "url(Code/ThinkingAhead.png)";
            card4 = 3;
            break;
        case 'Stonewall':
            document.getElementById('Slot4').style.backgroundImage = "url(Code/Stonewall.png)";
            card4 = 4;
            break;
        case 'Target Practice':
            document.getElementById('Slot4').style.backgroundImage = "url(Code/TargetPractice.png)";
            card4 = 5;
            break;
        case 'Strike1':
            document.getElementById('Slot4').style.backgroundImage = "url(Code/StrikeLv1.png)";
            card4 = 6;
            break;
        case 'Defend1':
            document.getElementById('Slot4').style.backgroundImage = "url(Code/DefendLv1.png)";
            card4 = 7;
            break;
        case 'Strike2':
            document.getElementById('Slot4').style.backgroundImage = "url(Code/StrikeLv2.png)";
            card4 = 8;
            break;
        case 'Defend2':
            document.getElementById('Slot4').style.backgroundImage = "url(Code/DefendLv2.png)";
            card4 = 9;
            break;
        case 'StormSteel':
            document.getElementById('Slot4').style.backgroundImage = "url(Code/StormOfSteel.png)";
            card4 = 10;
            break;
        case 'Burn':
            document.getElementById('Slot4').style.backgroundImage = "url(Code/Burn.png)";
            card4 = 11;
            break;
        case 'Blizzard':
            document.getElementById('Slot4').style.backgroundImage = "url(Code/Blizzard.png)";
            card4 = 12;
            break;
        case 'Heal':
            document.getElementById('Slot4').style.backgroundImage = "url(Code/Heal.png)";
            card4 = 13;
            break;
        case 'MasterStrategy':
            document.getElementById('Slot4').style.backgroundImage = "url(Code/MasterOfStrategy.png)";
            card4 = 14;
            break;
    }
    finalDeck = finalDeck1[Math.floor(Math.random() * finalDeck1.length)];
    switch (finalDeck) {
        case 'Strike':
            document.getElementById('Slot5').style.backgroundImage = "url(Code/Strike.png)";
            card5 = 0;
            break;
        case 'Defend':
            document.getElementById('Slot5').style.backgroundImage = "url(Code/Defend.png)";
            card5 = 1;
            break;
        case 'Arrow':
            document.getElementById('Slot5').style.backgroundImage = "url(Code/Arrow.png)";
            card5 = 2;
            break;
        case 'Thinking Ahead':
            document.getElementById('Slot5').style.backgroundImage = "url(Code/ThinkingAhead.png)";
            card5 = 3;
            break;
        case 'Stonewall':
            document.getElementById('Slot5').style.backgroundImage = "url(Code/Stonewall.png)";
            card5 = 4;
            break;
        case 'Target Practice':
            document.getElementById('Slot5').style.backgroundImage = "url(Code/TargetPractice.png)";
            card5 = 5;
            break;
        case 'Strike1':
            document.getElementById('Slot5').style.backgroundImage = "url(Code/StrikeLv1.png)";
            card5 = 6;
            break;
        case 'Defend1':
            document.getElementById('Slot5').style.backgroundImage = "url(Code/DefendLv1.png)";
            card5 = 7;
            break;
        case 'Strike2':
            document.getElementById('Slot5').style.backgroundImage = "url(Code/StrikeLv2.png)";
            card5 = 8;
            break;
        case 'Defend2':
            document.getElementById('Slot5').style.backgroundImage = "url(Code/DefendLv2.png)";
            card5 = 9;
            break;
        case 'StormSteel':
            document.getElementById('Slot5').style.backgroundImage = "url(Code/StormOfSteel.png)";
            card5 = 10;
            break;
        case 'Burn':
            document.getElementById('Slot5').style.backgroundImage = "url(Code/Burn.png)";
            card5 = 11;
            break;
        case 'Blizzard':
            document.getElementById('Slot5').style.backgroundImage = "url(Code/Blizzard.png)";
            card5 = 12;
            break;
        case 'Heal':
            document.getElementById('Slot5').style.backgroundImage = "url(Code/Heal.png)";
            card5 = 13;
            break;
        case 'MasterStrategy':
            document.getElementById('Slot5').style.backgroundImage = "url(Code/MasterOfStrategy.png)";
            card5 = 14;
            break;
    }
    document.getElementById("Reload").disabled = true;
}

function EnemyTurn() {
    if (Occupied === true) {
        switch (floor) {
            case 4:
                document.getElementById('Message2').style.backgroundImage = "url('Code/TreeSlam.png')"
                if (playerShield - 6 < 0) {
                    playerHealth = playerHealth + (playerShield - 6)
                    playerShield = 0
                    Update()
                } else {
                    playerShield = playerShield - 6
                    Update()
                }
                break;
            case 8:
                document.getElementById('Message2').style.backgroundImage = "url('Code/Eruption.png')"
                if (playerShield - 10 < 0) {
                    playerHealth = playerHealth + (playerShield - 10)
                    playerShield = 0
                    Update()
                } else {
                    playerShield = playerShield - 10
                    Update()
                }
                break;
            case 12:
                switch (Math.round(Math.random() * 1)) {
                    case 0:
                        document.getElementById('Message2').style.backgroundImage = "url('Code/Protect.png')"
                        enemyShield = enemyShield + 10
                        Update()
                        break;
                    case 1:
                        document.getElementById('Message2').style.backgroundImage = "url('Code/StrikeLv2.png')"
                        if (playerShield - 10 < 0) {
                            playerHealth = playerHealth + (playerShield - 10)
                            playerShield = 0
                            Update()
                        } else {
                            playerShield = playerShield - 10
                            Update()
                        }
                }
                break;
            case 20:
                switch (Math.round(Math.random() * 2)) {
                    case 0:
                        document.getElementById('Message2').style.backgroundImage = "url('Code/Sword.png')"
                        if (playerShield - 4 < 0) {
                            playerHealth = playerHealth + (playerShield - 4)
                            playerShield = 0
                            Update()
                        } else {
                            playerShield = playerShield - 4
                            Update()
                        }
                        break;
                    case 1:
                        document.getElementById('Message2').style.backgroundImage = "url('Code/Strike.png')"
                        if (playerShield - 10 < 0) {
                            playerHealth = playerHealth + (playerShield - 10)
                            playerShield = 0
                            Update()
                        } else {
                            playerShield = playerShield - 10
                            Update()
                        }
                        break;
                    case 2:
                        document.getElementById('Message2').style.backgroundImage = "url('Code/Arrow.png')"
                        if (playerShield - 10 < 0) {
                            playerHealth = playerHealth + (playerShield - 10)
                            playerShield = 0
                            Update()
                        } else {
                            playerShield = playerShield - 10
                            Update()
                        }
                        break;
                }
                break;
        }
    }
    enemyDeck1 = [
        'Strike',
        'Defend',
        'Arrow',
        'Thinking Ahead',
        'Stonewall',
    ]  // Standard Deck
    enemyDeck2 = [
        'Defend',
        'Defend',
        'Strike',
        'Strike',
        'Stonewall',
        'Stonewall',
    ]  // Defense Deck
    enemyDeck3 = [
        'Strike',
        'Strike',
        'Arrow',
        'Arrow',
        'Defend',
    ]  // Attack Deck
    enemyDeck4 = [
        'Strike',
        'Defend',
        'Strike1',
        'Defend1',
        'Earth Staff',
        'Cactus Bomb'
    ]  // Earth Deck
    enemyDeck5 = [
        'Strike1',
        'Strike2',
        'Defend1',
        'Defend2',
        'Arrow',
        'Arrow'
    ]  // Fire Deck
    enemyDeck6 = [
        'Defend2',
        'Defend1',
        'Strike2',
        'Strike1',
        'Arrow'
    ]  // Water Deck
    enemyDeck7 = [
        'Blizzard',
        'Defend3',
        'Heal',
        'Water Staff',
        'Mighty Punch'
    ]  // Ice Deck
    enemyDeck8 = ['Strike3',
        'Strike3','Strike3','Earth Staff','Fire Staff','Defend3','Defend3','Defend3','Arrow']  // Guardian Deck
    enemyChosenDeck = enemyDeck1;
    switch (floor) {
        case 2:
            enemyChosenDeck = enemyDeck2
            break;
        case 3:
            enemyChosenDeck = enemyDeck3
            break;
        case 4:
            enemyChosenDeck = enemyDeck4
            if (enemyHp < 90) {
                document.getElementById("Enemy").style.backgroundImage = "url(Code/EnemyEarthAnger.jpg)"
                enemyChosenDeck = ['Earth Staff', 'Earth Staff', 'Earth Staff', 'Strike1', 'Defend1','Cactus Bomb','Cactus Bomb','Cactus Bomb']
            }
            break;
        case 8:
            enemyChosenDeck = enemyDeck5
            if (enemyShield < 5) {
                document.getElementById("Enemy").style.backgroundImage = "url(Code/EnemyFireAnger.jpg)"
                enemyChosenDeck = ['Fire Staff', 'Fire Staff', 'Arrow', 'Defend2','DieDieDie']
            }
            break;
        case 12:
            enemyChosenDeck = enemyDeck6
            if (enemyHp < 120) {
                document.getElementById("Enemy").style.backgroundImage = "url(Code/EnemyWaterAnger.jpg)"
                enemyChosenDeck = ['Defend2', 'Strike2', 'Strike2', 'Arrow', 'Arrow',]
            }
            if (enemyHp < 50) {
                document.getElementById("Enemy").style.backgroundImage = "url(Code/EnemyWaterAngerAnger.jpg)"
                enemyChosenDeck = ['Arrow','Arrow','Arrow','Arrow','Arrow','Water Staff']
            }
            break;
        case 16:
            enemyChosenDeck = enemyDeck7
            break;
        case 20:
            enemyChosenDeck = enemyDeck8
            if (enemyHp < 240) {
                document.getElementById("Enemy").style.backgroundImage = "url(Code/EnemyGuardianAnger.jpg)"
                enemyChosenDeck = ['Strike3', 'Earth Staff','Fire Staff','Defend3','Defend3','Defend3','Defend3']
            }
            if (enemyHp < 120) {
                document.getElementById("Enemy").style.backgroundImage = "url(Code/EnemyGuardianAngerAnger.jpg)"
                enemyChosenDeck = ['Earth Staff','Earth Staff','Fire Staff','Defend3','Defend3','Defend3','Fire Staff']
            }
            if (enemyHp < 60) {
                document.getElementById("Enemy").style.backgroundImage = "url(Code/EnemyGuardianAngerAngerAnger.jpg)"
                enemyChosenDeck = ['Heal','Defend3','Defend3','Earth Staff','Earth Staff','Fire Staff','DieDieDie']
            }
            break;
    }
    enemyChosenDeck = enemyChosenDeck[Math.floor(Math.random() * enemyChosenDeck.length)];
    switch (enemyChosenDeck) {
        case 'DieDieDie':
            document.getElementById("Message").style.backgroundImage = "url(Code/DieDieDie.png)"
            if (playerShield - 36 < 0) {
                playerHealth = playerHealth + (playerShield - 36)
                playerShield = 0
            } else {
                playerShield = playerShield - 36
            }
            Update()
            break;
        case 'Cactus Bomb':
            document.getElementById("Message").style.backgroundImage = "url(Code/CactusBomb.png)"
            if (playerShield - 20 < 0) {
                playerHealth = playerHealth + (playerShield - 20)
                playerShield = 0
            } else {
                playerShield = playerShield - 20
            }
            Update()
            break;
        case 'Mighty Punch':
            document.getElementById("Message").style.backgroundImage = "url(Code/MightyPunch.png)"
            if (playerShield - 50 < 0) {
                playerHealth = playerHealth + (playerShield - 50)
                playerShield = 0
            } else {
                playerShield = playerShield - 50
            }
            Update()
            break;
        case 'Water Staff':
            document.getElementById("Message").style.backgroundImage = "url(Code/WaterStaff.png)"
            if (playerShield - 13 < 0) {
                playerHealth = playerHealth + (playerShield - 13)
                playerShield = 0
            } else {
                playerShield = playerShield - 13
            }
            enemyShield = enemyShield + 30
            Update()
            break;
        case 'Fire Staff':
            document.getElementById("Message").style.backgroundImage = "url(Code/FireStaff.png)"
            if (playerShield - 30 < 0) {
                playerHealth = playerHealth + (playerShield - 30)
                playerShield = 0
            } else {
                playerShield = playerShield - 30
            }
            enemyShield = enemyShield + 10
            Update()
            break;
        case 'Earth Staff':
            document.getElementById("Message").style.backgroundImage = "url(Code/EarthStaff.png)"
            if (playerShield - 15 < 0) {
                playerHealth = playerHealth + (playerShield - 15)
                playerShield = 0
            } else {
                playerShield = playerShield - 15
            }
            enemyShield = enemyShield + 15
            Update()
            break;
        case 'Heal':
            document.getElementById("Message").style.backgroundImage = "url(Code/Heal.png)"
            enemyHp = enemyHp + 12
            Update()
            break;
        case 'Defend3':
            document.getElementById("Message").style.backgroundImage = "url(Code/DefendLv3.png)"
            enemyShield = enemyShield + 20
            Update()
            break;
        case 'Defend2':
            document.getElementById("Message").style.backgroundImage = "url(Code/DefendLv2.png)"
            enemyShield = enemyShield + 9
            Update()
            break;
        case 'Defend1':
            document.getElementById("Message").style.backgroundImage = "url(Code/DefendLv1.png)"
            enemyShield = enemyShield + 7
            Update()
            break;
        case 'Blizzard':
            document.getElementById("Message").style.backgroundImage = "url(Code/Blizzard.png)"
            if (playerShield - 26 < 0) {
                playerHealth = playerHealth + (playerShield - 26)
                playerShield = 0
                enemyHp = enemyHp - 13
                Update();
            } else {
                playerShield = playerShield - 26
                enemyHp = enemyHp - 13
                Update();
            }
            break;
        case 'Strike3':
            document.getElementById("Message").style.backgroundImage = "url(Code/StrikeLv3.png)"
            playerHealth=playerHealth-9;
            Update();

            break;
        case 'Strike2':
            document.getElementById("Message").style.backgroundImage = "url(Code/StrikeLv2.png)"
            if (playerShield - 12 < 0) {
                playerHealth = playerHealth + (playerShield - 12)
                playerShield = 0
                Update();
            } else {
                playerShield = playerShield - 12
                Update();
            }
            break;
        case 'Strike1':
            document.getElementById("Message").style.backgroundImage = "url(Code/StrikeLv1.png)"
            if (playerShield - 9 < 0) {
                playerHealth = playerHealth + (playerShield - 9)
                playerShield = 0
                Update();
            } else {
                playerShield = playerShield - 9
                Update();
            }
            break;
        case 'Strike':
            document.getElementById("Message").style.backgroundImage = "url(Code/Strike.png)"
            if (playerShield - 6 < 0) {
                playerHealth = playerHealth + (playerShield - 6)
                playerShield = 0
                Update();
            } else {
                playerShield = playerShield - 6
                Update();
            }
            break;
        case 'Defend':
            document.getElementById("Message").style.backgroundImage = "url(Code/Defend.png)"
            enemyShield = enemyShield + 6
            Update()
            break;
        case 'Arrow':
            document.getElementById("Message").style.backgroundImage = "url(Code/Arrow.png)"
            if (playerShield - 15 < 0) {
                playerHealth = playerHealth + (playerShield - 15)
                playerShield = 0
                Update();
            } else {
                playerShield = playerShield - 15
                Update();
            }
            break;
        case 'Thinking Ahead':
            document.getElementById("Message").style.backgroundImage = "url(Code/ThinkingAhead.png)"
            if (playerShield - 4 < 0) {
                playerHealth = playerHealth + (playerShield - 4)
                playerShield = 0
                Update();
            } else {
                playerShield = playerShield - 4
                Update();
            }
            enemyShield = enemyShield + 5
            Update();
            break;
        case 'Stonewall':
            document.getElementById("Message").style.backgroundImage = "url(Code/Stonewall.png)"
            enemyShield = enemyShield + 8
            Update()
            break;
    }
}

function EndTurn() {
    document.getElementById("Reload").disabled = false;
    document.getElementById('Slot1').disabled = true;
    document.getElementById('Slot2').disabled = true;
    document.getElementById('Slot3').disabled = true;
    document.getElementById('Slot4').disabled = true;
    document.getElementById('Slot5').disabled = true;
    document.getElementById('Slot1').style.backgroundImage = "url(Code/Blank.png)";
    document.getElementById('Slot2').style.backgroundImage = "url(Code/Blank.png)";
    document.getElementById('Slot3').style.backgroundImage = "url(Code/Blank.png)";
    document.getElementById('Slot4').style.backgroundImage = "url(Code/Blank.png)";
    document.getElementById('Slot5').style.backgroundImage = "url(Code/Blank.png)";
    energy = 3
    Update()
    skillCardsPlayed = 0;
    attackCardsPlayed = 0;
    powerCardsPlayed = 0;
    skillCounter = 0;
    powerCounter = 0;
    attackCounter = 0;
    EnemyTurn();
}


window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return;
    }
    if (event.code === "KeyX") {
        x()
    } else if (event.code === "KeyC") {
        c()
    }
    event.preventDefault();
}, true);

function x() {
    alert('Exiting game...Press OK to continue.')
    window.close('CLICK_ME.html')
}

function c() {
}

