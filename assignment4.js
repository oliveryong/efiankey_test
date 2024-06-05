const itemTiers = [1, 2, 3, 4, 5]; // 1 = common, 5 = legend
const vipRanks = [1, 2, 3, 4, 5]; // v1 = lowest rank, v5 = highest rank

function roll_item(vip_rank) {
    const itemsArray = itemTiers.map(tier => {
        // Generate a random number between 0 and 100 then mapped number to array with the function
        const baseRandomNum = Math.random() * 100;
        const scaledRandomNum = baseRandomNum * (vip_rank / vipRanks.length);
        // the bigger the rank in vip rank array divide by a random number to make sure that higher ranks gets higher numbers
        return Math.min(Math.floor(scaledRandomNum), 100); 
        // Make sure random number doesn't exceed 100 and it is an integer
    });
    return itemsArray;
}

function simulateRolls(vip_rank, numRolls = 100) {//sets numRolls by default 100 
    const results = new Array(itemTiers.length).fill(0); // set elements in array a default 0
    
    // loop the item 'numRolls' times, then store in the array 
    for (let i = 0; i < numRolls; i++) {
        const itemsArray = roll_item(vip_rank);
        itemsArray.forEach((item, index) => {
            results[index] += item;
        });
    }

    // Average the results by dividing by numRolls
    const averageResults = results.map(result => Math.floor(result / numRolls));

    // Print the result according to the example given
    console.log(`\n[vip${vip_rank}] => Array `);
    itemTiers.forEach((tier, index) => {
        console.log(`\t [${tier}] => ${averageResults[index]}`);
    });
}

// Loop through each VIP rank and simulate the rolls
console.log(`Array`);
vipRanks.forEach(vip_rank => {
    simulateRolls(vip_rank);
});


