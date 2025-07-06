let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log("Original companies array:", companies);
companies.shift(); // Remove the first element
console.log("After shift:", companies);
companies.splice(2, 1, "Ola");
console.log("removed uber and added ola in place of of it" + companies);
companies.push("Amazon");
console.log("After push:", companies);
