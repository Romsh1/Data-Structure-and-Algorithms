function LongestString(stringArray) {
    let longStr = "";
    for (i = 0; i < stringArray.length; i++) {
        const currentStr = stringArray[i];
        if (currentStr.length > longStr.length) {
            longStr = currentStr;
        }
    }
    console.log(longStr);
}
let arrayStr = ['apple', 'watermelon', 'peach', 'grapes', 'mango', 'pineapple'];
LongestString(arrayStr);
