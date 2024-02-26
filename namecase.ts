const personName: string = "Muhammad Naveed";
console.log("Lowercase: " + personName.toLowerCase());
console.log("Uppercase: " + personName.toUpperCase());
console.log("Titlecase: " + toTitleCase(personName));
function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, (txt: string) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
