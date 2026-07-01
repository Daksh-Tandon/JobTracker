const Student = require("./models/Student");

const student = new Student({

    name:"Daksh",

    age:20,

    city:"Delhi"

});

await student.save();