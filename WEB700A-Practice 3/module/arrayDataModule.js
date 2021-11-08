let namesArray = [
    {name: "Bob"},
    {name: "Claire"},
    {name: "Jason"},
    {name: "Martin"}
];

// CREATE

module.exports.addName = function(data){
    namesArray.push(data);
}

// READ

module.exports.getAllNames = function(){
    return namesArray;
}

module.exports.getNameByIndex = function(index){
    return namesArray[index];
}

// UPDATE

module.exports.updateNameByIndex = function(index, data){
    namesArray[index] = data;
}

// DELETE

module.exports.deleteNameByIndex = function(index){
    namesArray.splice(index,1);
}
