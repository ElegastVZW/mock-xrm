const collectionNameGenerator = function(name) {
    if(name){
    let lastLetter = name.charAt(name.length-1);
    let multiplier = "s";

    if(lastLetter === "s"){
        multiplier = "es";
    }

    
    if(name === "savedquery"){
        name = "savedquerie";
    }
    
    return name+multiplier;
    }
    return name;
};

export default collectionNameGenerator;