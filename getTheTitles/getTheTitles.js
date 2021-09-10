const getTheTitles = function(array) {
   let newArray = array.map(function(key){
        return key.title;
    })
    return newArray;
};

module.exports = getTheTitles;
