const collectionNameGenerator = function(name) {
    console.log(name);
    let lastLetter = name.charAt(name.length-1);
    let multiplier = "s";

    if(lastLetter === "s"){
        multiplier = "es";
    }

    return name+multiplier;
};

export default collectionNameGenerator;