//student score , total possible score
//15/20 --> you get a c(75%)!
//a(90-100) b(80-89) c(70-79) d(60-69) f(0-59)

const grade = function (studentScore, totalScore) {
    let = studentGrade = ''
    const percent = studentScore / totalScore
    if (percent >= 0.9 && percent <= 1) {
        studentGrade ='A'
    } else if (percent >= 0.8 && percent <= 0.89) {
        studentGrade ='B'
    } else if (percent >= 0.7 && percent <= 0.79) {
        studentGrade ='C'
    } else if (percent >= 0.6 && percent <= 0.69) {
        studentGrade ='D'
    } else if (percent >= 0 && percent <= 0.59) {
        studentGrade ='F'
    } else {
        return `Score range is from 0 to ${totalScore}, please enter a vild number`
    }

    return `You got ${studentGrade}(${percent * 100})% grade!!`

}

console.log(grade(10, 100))
console.log(grade(30,50))
console.log(grade(80, 80))
console.log(grade(20,25))
console.log(grade(120, 110))
console.log(grade(-100, 50))