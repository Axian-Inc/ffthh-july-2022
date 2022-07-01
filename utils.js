
export function shuffle(array) {
    // Fischer Yates Inside Out Shuffle algorithm
    const shuffled = new Array(array.length);
    for (var i=0; i < array.length; i++) {
        var j = randomBetween(0, i);
        if (j != i) {
            shuffled[i] = shuffled[j];
        }
        shuffled[j] = array[i];
    }
    return shuffled;
}

export function randomBetween(inclusiveMin, exclusiveMax) {
    var offset = inclusiveMin;
    var range = exclusiveMax - inclusiveMin;
    var value = offset + Math.floor(range * Math.random());
    return value;
}

// Super simplistic test runner
export function runTests(tests) {
    
    var runTest = function(fn) {
        try {
            fn();
        } catch {
            console.log("Failed", fn);
            return false;
        }
            console.log("Success", fn);
        return true;
    }
    
    var results = tests.reduce((r, test) => {
        var result = runTest(test)
        if (result) {
            r.success++
        } else {
            r.failed++
        }
        return r
    }, { success: 0, failed: 0 });

    console.log("\nTest Results");
    console.log("------------");
    console.log("Success:", results.success);
    console.log("Failed: ", results.failed);
}