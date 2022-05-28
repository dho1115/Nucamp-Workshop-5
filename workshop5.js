class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Bootcamp {
    constructor(name, level, students=[]) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(studentToRegister) {
        if (!studentToRegister.name || !studentToRegister.email) {
            console.log("Invalid name and/or email.");

            return false;
        } else if (this.students.length === 0) {
            this.students = [...this.students, studentToRegister];
            console.log(`Successfully registered ${studentToRegister.name} with an email of ${studentToRegister.email}.`);

            return Boolean(this.students.length);
        } else {
            const findMatch = this.students.find(val => val.email == studentToRegister.email);

            console.log(findMatch ? "Email already registered." : `Successfully registered ${studentToRegister.name} with an email of ${studentToRegister.email}.`);

            return !findMatch;
        }
    }

    listStudents() {
        const AllStudents = this.students;

        if (this.students.length) {
            console.log(`The students registered in ${this.name} are: `)
            AllStudents.forEach(val => console.log(val));
        } else {
            console.log(`No students are registered to the ${this.name} bootcamp.`);
        }

        return this.students.length > 0;
    }

    getInfo() {
        console.log(`Bootcamp name: ${this.name} == Bootcamp level: ${this.level}.`);
    }

    getStudentInfo(email) {
        return false || this.students.find(val => val.email === email);
    }

    removeStudent(emailOfStudentToRemove) {
        if (this.students.length > 0) {
            const remainingStudents = this.students.filter(val => val.email !== emailOfStudentToRemove);
            console.log({remainingStudents});
        } else {
            console.log('Student array is empty.');
        }

    }
}

const testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent);
if ( testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
    console.log('TASK 1: PASS');
}

const reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if ( reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced'
        && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
    console.log('TASK 2: PASS');
}

const runTest = (bootcamp, student) => {
    const attemptOne = bootcamp.registerStudent(student);
    const attemptTwo = bootcamp.registerStudent(student);
    const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
    if ( attemptOne && !attemptTwo && !attemptThree) {
        console.log("TASK 3: PASS");
    } else {
        console.log('=== TASK 3 FAILED!!! ===');
        console.log({attemptOne});
        console.log({attemptTwo});
        console.log({attemptThree});
        console.log('========================');
    }

    bootcamp.registerStudent(new Student('Babs Bunny', 'babs@bunny.com'));
    if (bootcamp.listStudents()) {
        console.log("TASK 4: PASS 1/2");
    }
    bootcamp.students = [];
    if (!bootcamp.listStudents()) {
        console.log("TASK 4: PASS 2/2");
    }
};

runTest(reactBootcamp, testStudent);