class YouNeed{

    constructor(conf, states) {
        const apliedVariableDynamic = function(targetClass, data) {
            Array.from(document.getElementsByClassName(targetClass)).forEach(target => {
                try{
                    target.innerHTML = data
                }catch{
                    console.error("Class target :" + target + " Invalid result")
                }
            })
        }
        // then document is ready lunch testing
        document.addEventListener('DOMContentLoaded', function () {

            /**
             * Init variable into dom part
             */ 
            console.log(states.getStored)
            for (const [key, value] of Object.entries(states.getStored)) {
                if (conf._debug_verbose){
                    console.log('[YouNeed] Variable :'+ key, value)
                }
                try{
                    apliedVariableDynamic(key, value);
                }
                catch(error){
                    if (conf._debug_verbose){
                        console.error('[YOU NEED] Verbose '+ conf._debug_verbose)
                        console.error('[YOU NEED] '+ error)
                    }          
                }
            };

            /**
             *  Part for _bind
             */
            
            document.querySelectorAll('[_bind]').forEach(bindingElms => {
                if (conf._debug_verbose){ console.log(bindingElms) };
                bindingElms.addEventListener('input', function (event){
                    let target = event.target.getAttribute('_bind')
                    console.log(states)
                    eval(`
                        states.computedStates.set${target}('${event.target.value}')
                    `)
                })
            })
        })
    }

}
export default YouNeed