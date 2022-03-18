
class ComputedStore {

    arrayForListener = []

    constructor(computedArray) {
        let arrayForListener = [];
        // this.computedArray = computedArray
        computedArray.forEach(computed => {
            console.log(computed.computedEventListener)
            eval(`this.${computed.name} = computed`);
            arrayForListener.push(computed.computedEventListener)
        });
        console.log(arrayForListener)
        this.arrayForListener = arrayForListener;
    }
}
export default ComputedStore;