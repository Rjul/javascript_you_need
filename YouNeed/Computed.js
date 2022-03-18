
class Computed {
    constructor(name, atEval, updatorEventsNames) {
        this.name = name
        this.computed = atEval
        this.values = '';
        const values = '';
        eval(`
                this.function${name} = function (){
                    try{
                        ${atEval}
                        console.log('${name}')
                        Array.from(document.getElementsByClassName('${name}')).forEach(target => {
                            try{
                                target.innerHTML = this.values
                            }catch{
                                console.error("Class target :" + target + " Invalid result")
                            }
                        })
                    }catch
                    {
                        
                    }
                }
            `)
        eval(`
                this.set = function (value) {
                    this.value = value
                    document.dispatchEvent(new CustomEvent('event${name}'))
                }
                this.get = function () {
                    return this.value
                }
                `)
        let computedEventListener = '';
        Array.from(updatorEventsNames).forEach(eventName => {
            computedEventListener += `document.addEventListener('${eventName}', function (){
                console.log('test')
                try{
                    eval(computedStore.${name}.atEval);
                    Array.from(document.getElementsByClassName('${name}')).forEach(target => {
                        try{
                            console.log(target)
                            target.innerHTML = this.computedStore.${name}.get
                        }catch{
                            console.error("Class target :" + target + " Invalid result")
                        }
                    })
                }catch(exception)
                {
                    console.error(exception)
                }
            },1);
            `
        })
        this.computedEventListener = computedEventListener;

    }
}
export default Computed;