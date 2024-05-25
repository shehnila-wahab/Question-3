// lower case
var personName = "Shehnila";
console.log("lowercase:", personName.toLowerCase());
// upper case
console.log("uppercase:", personName.toLocaleUpperCase());
// Tittle case
console.log("tittlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
