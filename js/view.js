view = {

}
view.setActiveScreen = (page) => {
    switch (page) {
        case "mainPage":
            document.querySelector("#page-top").innerHTML = component.mainPage
            document.querySelector("#start_quiz_orientation_question").addEventListener("click", () => {
                view.setActiveScreen('quizOrientationPage')
            })
            document.querySelector("#start_quiz_school_question").addEventListener("click", () => {
                view.setActiveScreen('quizSchoolPage')
            })
            document.querySelector(".viewmore-job").addEventListener("click", () => {
                view.setActiveScreen('newspaperPage')

            })
            document.querySelector(".viewmore-tech-news").addEventListener("click", () => {
                view.setActiveScreen('newspaperPage')
            })
            break;
        case "quizOrientationPage":
            document.querySelector("#page-top").innerHTML = component.quizOrientationPage
            model.getQuizOrientation()
            document.querySelector('#quiz_form').addEventListener('submit', (e) => {
                e.preventDefault()
                const listOptions = document.querySelectorAll("input")
                console.log(listOptions)
                const listCheckedAnswers = []
                let finalPoint = 0
                for (option of listOptions) {
                    if (option.checked) listCheckedAnswers.push(option.id)
                }
                for (let i = 0; i < model.quizChonNganh.length; i++) {
                    for (let j = 0; j < model.quizChonNganh[i].answer.length; j++) {
                        if (listCheckedAnswers.includes(model.quizChonNganh[i].answer[j].id)) {
                            console.log('haha')
                            console.log(model.quizChonNganh[i].answer[j].type)
                            finalPoint += model.quizChonNganh[i].answer[j].type
                        }
                    }
                }
                document.querySelector('.notice_results').style.display = "flex"
                if (finalPoint === 6) {
                    document.querySelector('.content_results').innerText = "Bạn hoàn toàn phù hợp với ngành công nghệ thông tin "
                }
                if (finalPoint === 5 || finalPoint === 4) {
                    document.querySelector('.content_results').innerText = "Bạn khá phù hợp với ngành công nghệ thông tin "
                }
                if (finalPoint < 4) {
                    document.querySelector('.content_results').innerText = "Bạn cần cân nhắc kỹ trước khi chọn ngành công nghệ thông tin "
                }
                console.log(finalPoint)
                document.querySelector("#go-to-main-page").addEventListener("click", () => {
                    view.setActiveScreen("mainPage")
                })
            })
            break;
        case "quizSchoolPage":
            document.querySelector("#page-top").innerHTML = component.quizSchoolPage
            model.getQuizSchool()
            document.querySelector('#quiz_form').addEventListener('submit', (e) => {
                e.preventDefault()
                const listOptions = document.querySelectorAll("input")
                console.log(listOptions)
                const listCheckedAnswers = []
                for (option of listOptions) {
                    if (option.checked) listCheckedAnswers.push(option.id)
                }
                for (let i = 0; i < model.quizChonTruong.length; i++) {
                    for (let j = 0; j < model.quizChonTruong[i].answer.length; j++) {
                        if (listCheckedAnswers.includes(model.quizChonTruong[i].answer[j].id)) {
                            console.log(model.quizChonTruong[i].answer[j].type)
                            for (school of model.quizChonTruong[i].answer[j].type) {
                                console.log(school)
                                console.log(model.schoolArray)
                                let index = model.schoolArray.findIndex(element => element.sortname === school)
                                console.log(index)
                                model.schoolArray[index].count++
                            }
                        }
                    }
                }
                console.log(model.schoolArray)
                for (let i = 0; i < model.schoolArray.length; i++) {
                    for (let j = model.schoolArray.length - 1; j > i; j--) {
                        if (model.schoolArray[j - 1].count < model.schoolArray[j].count) {
                            let temp = undefined;
                            temp = model.schoolArray[j - 1];
                            model.schoolArray[j - 1] = model.schoolArray[j];
                            model.schoolArray[j] = temp;
                        }
                    }
                }
                console.log(model.schoolArray)
                document.querySelector('.notice_results').style.display = "flex"
                const contentWrapper = document.createElement('div')
                contentWrapper.innerText = `Bạn phù hợp với ${model.schoolArray[0].fullname} , ${model.schoolArray[1].fullname},${model.schoolArray[2].fullname}`
                document.querySelector('.content_results').appendChild(contentWrapper)
                document.querySelector("#go-to-main-page").addEventListener("click", () => {
                    view.setActiveScreen("mainPage")
                })
            })
            break;
        case "newspaperPage":
            document.querySelector("#page-top").innerHTML = component.newspaperPage
            break;

    }


}
view.showQuizChonNganh = () => {
    let j = 0;
    for (quiz of model.quizChonNganh) {
        view.addQuiz(quiz, j)
        j++
    }
    console.log(model.quizChonNganh)
}
view.addQuiz = (quiz, j) => {
    console.log('haha')
    const quizWrapper = document.createElement('div')
    quizWrapper.classList.add("quiz_wrapper")
    const questionHeadingWrapper = document.createElement('div')
    questionHeadingWrapper.classList.add("question-heading")
    questionHeadingWrapper.innerText = quiz.id
    quizWrapper.appendChild(questionHeadingWrapper)
    const questionWrapper = document.createElement('div')
    questionWrapper.classList.add("question")
    questionWrapper.innerText = quiz.value
    quizWrapper.appendChild(questionWrapper)
    const answerWrapper = document.createElement('div')
    answerWrapper.classList.add("answer")
    for (let i = 0; i < quiz.answer.length; i++) {
        const oneAnswerWrapper = document.createElement("div")
        oneAnswerWrapper.classList.add('answer_wrapper')
        const labelWrapper = document.createElement("label")
        labelWrapper.classList.add("radio")
        const inputWrapper = document.createElement('input')
        inputWrapper.type = "radio"
        inputWrapper.id = quiz.answer[i].id
        inputWrapper.name = `questions-${j}`
        labelWrapper.appendChild(inputWrapper)
        const spanWrapper = document.createElement("span")
        spanWrapper.innerText = quiz.answer[i].value
        labelWrapper.appendChild(spanWrapper)
        oneAnswerWrapper.appendChild(labelWrapper)
        answerWrapper.appendChild(oneAnswerWrapper)
    }
    const buttonWrapper = document.createElement('button')
    quizWrapper.appendChild(answerWrapper)
    document.querySelector(".main_quiz").appendChild(quizWrapper)
}
view.showQuizChonTruong = () => {
    let j = 0
    for (quiz of model.quizChonTruong) {
        view.addQuiz(quiz, j)
        j++
    }
}
