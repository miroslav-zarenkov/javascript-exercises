const removeFromArray = function(myArray, ...removeValues) {
    for (const removeValue of removeValues){
        if (myArray.indexOf(removeValue) !==-1){
            myArray.splice(myArray.indexOf(removeValue), 1);
        }
    }
    return myArray;
};

module.exports = removeFromArray;
