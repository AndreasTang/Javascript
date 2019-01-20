//student score , total possible score
//15/20 --> you get a c(75%)!
//a(90-100) b(80-89) c(70-79) d(60-69) f(0-59)

const grade = (studentScore, totalScore) => {

    if (typeof studentScore !== 'number' || typeof totalScore !== 'number') {
        throw Error ('Please enter vaild "Number" !!')
    }

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

try {
    console.log(grade(80, 100)) // you can test your input here
} catch (e) {
    console.log(e.message)
}