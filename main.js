
import { decide } from './decisions.js';
import { evolve } from './evolution.js';

var state = null, command = null, events = null;

state = {};
console.log('initial state:', state);

command = { type: 'DoSomething', data: { } };
console.log('command:', command);

events = decide(state, command);
console.log('decide result: events:', events);

state = evolve(state, events);
console.log('evolve result: state:', state);