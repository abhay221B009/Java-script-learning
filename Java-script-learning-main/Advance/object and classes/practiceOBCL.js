let data = "secret information";

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("website data = ", data);
  }
}

let stud1 = new User("Abhay", "abhay@gmail.com");
let stud2 = new User("Rohan", "rohan@gmail.com");
let teach1 = new User("Mr. Sharma", "sharma@gmail.com");

class Admin extends User {
  constructor(name, email) {
    // ✅ use constructor
    super(name, email); // ✅ calls parent User constructor
  }

  editData() {
    data = "updated secret information";
  }
}

let admin1 = new Admin("Admin", "admin@gmail.com");

// Testing
stud1.viewData(); // website data = secret information
admin1.editData();
stud1.viewData(); // website data = updated secret information
