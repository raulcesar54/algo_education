export default function bubbleSort(values){
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for(let i = 0; i < values.length; i++){
            if(values[i] > values[i + 1]){
                const actual = values[i]
                values[i] = values[i + 1]
                values[i + 1] = actual
                sorted = false;
            }
        } 
    }
    return values
}