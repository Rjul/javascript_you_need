
class ComputedStore {
    constructor(computedArray){
        this.computedArray = computedArray
        computedArray.forEach(computed => {
            eval(`this.${computed.name} = `.computed);
        });
    }
}
export default ComputedStore;