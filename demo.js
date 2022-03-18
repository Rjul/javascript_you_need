import Conf from './YouNeed/Conf.js';
import States from './YouNeed/States.js';
import YouNeed from './YouNeed/YouNeed.js';
import Computed from './YouNeed/Computed.js';
import ComputedStore from './YouNeed/ComputedStore.js';

/**
 *  INIT Conf ("prod" / "dev", Bool verbose)
 */
let conf = new Conf('dev', true);

/**
 *  INIT Computed value
 */
let computed = new Computed("_variableAssambledDemo",
    "this.computedStore._variableAssambledDemo.values = this.get_variableForTesting + ' ' + this.get_bindingVariable",
    ["event_variableForTesting", "event_bindingVariable"]
);
let computedStore = new ComputedStore([computed]);
/**
 *  Construct States 
 */
let states = new States({
    _variableForTesting: 'test',
    _creatorName: 'hummel',
    _bindingVariable: '',
}, computedStore)


const youNeed = new YouNeed(conf, states);

/**
 * function set{variableName} is auto-created 
 * USE this for aplied and dispatch to DOM 
 */
document.getElementById('change').addEventListener('click', (e) => {
    states.computedStore._variableAssambledDemo.set(Math.random(0, 999) * 100000000)
    console.log(states)
})




