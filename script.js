Object.prototype.getKeys = function() {
    return Object.keys(this);
}

let student = {
    name: "Debargha"
}

console.log(student.getKeys()); // This should log ["name"]