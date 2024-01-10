function showFirstWord (sentence){
    let arr = sentence.split(".");

    
    for (i = 0; i < arr.length; i++){
        arr2 = arr[i].split(" ");

        if (i > 0 && arr2.length > 1) {
            arr2.splice(0, 1);
        }
        console.log(arr2[0])
    }
}

console.log(showFirstWord("Привет меня зову максим. Второе предложение. И третье предложение!"));
