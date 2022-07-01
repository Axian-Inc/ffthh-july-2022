import { decide } from "./decisions.js"
import { evolve } from "./evolution.js";
import { runTests } from "./utils.js";

function testDecisionDoSomething() {

    var state = {}
    var command = { type: 'DoSomething' }
    var events = decide(state, command);

    if (events.length !== 1) {
        throw new Error('Expected 1 event');
    }

    if (events[0].type !== 'SomethingHappened') {
        throw new Error('Expected SomethingHappened event');
    }
}

function testEvolveSomethingHappened() {
    
    var state = {};
    var events = [{ type: 'SomethingHappened' }];
    var newState = evolve(state, events);

    if (newState.something !== 1) {
        throw new Error('Expected something to be 1')
    }
}

runTests([
    testDecisionDoSomething,
    testEvolveSomethingHappened
])

