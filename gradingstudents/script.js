function gradingStudents(grades) {
    return grades.map(grade => {
        if (grade < 38) return grade;
        const nextMultipleOf5 = Math.ceil(grade / 5) * 5;
        return (nextMultipleOf5 - grade < 3) ? nextMultipleOf5 : grade;
    });
}