var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while(slaying) {
    if (youHit === 1) {
        console.log("Hooray! You hit the dragon!");
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            console.log("You've slain the dragon");
            slaying = false;
            }
    } else {
        console.log("Oh no, the dragon has slain thee!");
    }
    slaying = false;
}
