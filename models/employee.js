const mongoose = require("mongoose");
const Schema = mongoose.Schema;



// create user Schema & model
const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name field is required"]
    },
    employeeID: {
        type: Number,
        required: [true, "ID required"]
    },
    dept: {
        type: String,
        required: [true, "Department required"]
    },
    time: {
        clockIn: Number,
        clockOut: Number
    }
});


const Employee = mongoose.model("employee", EmployeeSchema);

module.exports = Employee;