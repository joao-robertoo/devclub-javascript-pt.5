const number = [1, 2, 3, 4, 5, 6, 7];
const double = number.map((item) => item * 2)

const list = [
    { name: 'Luiz', vip: true },
    { name: 'Maria', vip: false },
    { name: 'Eduardo', vip: true },
    { name: 'Letícia', vip: false },
    { name: 'Rosana', vip: true },
    { name: 'Wallace', vip: false },
]

const newList = list.map(user => {
    const newUser = {
        name: user.name,
        braceletColor: user.vip ? 'Gold' : 'Silver',
    }
    return newUser
})

const students = [
    { name: 'Luiz', testGrade: 25 },
    { name: 'Maria', testGrade: 19 },
    { name: 'Eduardo', testGrade: 32 },
    { name: 'Letícia', testGrade: 21 },
    { name: 'Rosana', testGrade: 43 },
    { name: 'Wallace', testGrade: 18 },
]

const newStudents = students.map(student => {
    return {
        name: student.name,
        studentStatus: student.testGrade >= 5 ? 'Approved' : 'Disapproved'
    }
})