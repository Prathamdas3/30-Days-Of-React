const arr = [];
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log(arr1.length);
console.log(arr1[0], arr1[parseInt(arr1.length / 2)], arr1[arr1.length - 1]);
console.log(arr1.toString());
console.log(arr1.includes(23));
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
let a = "apple";
console.log(itCompanies.includes(a) ? a : "company not found");
let counter = 0;
for (let i = 0; i < itCompanies.length; i++) {
  let company = itCompanies[i].split("");
  for (let j = 0; j < company.length; j++) {
    if (company[j] === "o") {
      counter++;
    }
  }
}
