// lower case
let personName : string = "Shehnila";
console.log("lowercase:",personName.toLowerCase());

// upper case
console.log("uppercase:", personName.toLocaleUpperCase());


// Tittle case
console.log("tittlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));


