const test = {
    name: 'yubor',
    lastName:'Molina'
}

let keys = Object.keys(test);
const setClause = keys.map((key, index) => `"${key}" = $${index + 1}`).join(", ");


console.log(setClause)