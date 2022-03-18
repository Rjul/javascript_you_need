import Conf from './Conf.js';
let conf = new Conf(true, true);

// defined states like

class States {
    store = {};

    // getter = new GetterLike;

    constructor(store, computedStore) {
        this.store = store;
        this.computedStore = computedStore;
        console.log(computedStore)
        computedStore.arrayForListener.forEach(computed => {
            eval(computed)
            console.log(computed)
        })
        // Update after set
        this.updateOnce = function (key, value) {
            try {
                Array.from(document.getElementsByClassName(key)).forEach(target => {
                    try {
                        target.innerHTML = value
                    } catch {
                        console.error("Class target :" + target + " Invalid result")
                    }
                })
            }
            catch {
                console.error("Class target :" + target + " Invalid result")
            }

        }
        for (const [key, value] of Object.entries(store)) {
            try {
                eval(`
                    this.set${key} = function (value) {
                        this.store.${key} = value
                        this.updateOnce("${key}", value)
                        document.dispatchEvent(new Event('event${key}'))
                    }
                    this.get${key} = function () {
                        return this.store.${key}
                    }
                    `
                );
            }
            catch (error) {
                if (conf._debug_verbose) {
                    console.error('[YOU NEED] Verbose ' + conf._debug_verbose)
                    console.error('[YOU NEED] ' + error)
                }
            }
        };

    }
    get getStored() {
        return this.store;
    }

}

export default States;