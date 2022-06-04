// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
};
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const cloneUpdateEmployee = {...obj};
    cloneUpdateEmployee[key]= value;
    return cloneUpdateEmployee;
}
updateEmployeeWithKeyAndValue();
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}
const updateAddress = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");
function deleteFromEmployeeByKey(obj, key) {
    const newCloneUpdateEmployee = {...obj};
    delete newCloneUpdateEmployee.name;
    return newCloneUpdateEmployee;

}
function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete employee.name;
    return obj;
}