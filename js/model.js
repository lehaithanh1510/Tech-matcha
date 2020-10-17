model = {
    
}
model.quizChonNganh = []
model.quizChonTruong = []
model.schoolArray = []
model.getQuizOrientation = async () => {
    const response = await firebase.firestore().collection("Quiz chọn ngành").get()
    model.quizChonNganh = getManyDocument(response)
    console.log(model.quizChonNganh)
    view.showQuizChonNganh()
}
model.getQuizSchool = async () => {
    const response = await firebase.firestore().collection("Quiz chọn trường").get()
    const responseSchool = await firebase.firestore().collection("school").get()
    model.schoolArray = getManyDocument(responseSchool)
    model.quizChonTruong = getManyDocument(response)
    view.showQuizChonTruong()
}