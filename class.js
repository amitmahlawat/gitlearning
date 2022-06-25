class Students{
    constructor(firstName,lastName,dob,sex){
        this.firstName=firstName;
        this.lastName=lastName;
        this.dob = new Date(dob);
        this.sex= sex; 
} getBirthyear(){
    return this.dob.getFullYear();
}
getFullname(){
    return `${this.firstName} ${this.lastName}`;
}
}

const Student1 = new Students('john','doe',10,'male');
const student2 = new Students('marry','james',02-01-1992,'female');

console.log(student2.getFullname());
console.log(student2.dob.getFullYear());