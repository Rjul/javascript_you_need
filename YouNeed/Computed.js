
class Computed {
    constructor(name, atEval, updatorEventsNames){
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
        updatorEventsNames.forEach(function (updatorEventName) {
            console.log(name)
            eval(`document.addEventListener('${updatorEventName}', function (){
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
            },1)`)
        });
    }
}
export default Computed;