window.onload = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyDO2iqy7nGP65qHijMlY0dZ-3PeyTJdO_Y",
        authDomain: "tech-matcha.firebaseapp.com",
        databaseURL: "https://tech-matcha.firebaseio.com",
        projectId: "tech-matcha",
        storageBucket: "tech-matcha.appspot.com",
        messagingSenderId: "495426794135",
        appId: "1:495426794135:web:2e9a32f138a1d7d1956fd2"
    };
    firebase.initializeApp(firebaseConfig);
    view.setActiveScreen("mainPage")
}
// let storage = firebase.storage()
    // let storage = firebase.app().storage("gs://tech-matcha.appspot.com");
    // let storageRef = storage.ref();
    // const url = await storageRef.getDownloadURL();
    // getPicFromDatabase()
    // console.log(storageRef)
    // uploadFileBySubmit()
// uploadFileBySubmit = () => {
//     const uploadFileForm = document.getElementById('upload-file')
//     uploadFileForm.addEventListener('submit', (e) => {
//       e.preventDefault()
//       const files = uploadFileForm.file.files
//       if(files.length === 0) {
//         alert('Please choose file!')
//       } else {
//         uploadFile(files[0])
//       }
//     })
//   }
//   uploadFileOnChange = () => {
//     const uploadFile = document.querySelector('#upload-file input[type=file]')
//     uploadFile.addEventListener('change', (e) => {
//       console.log(uploadFile.files[0])
//     })
//   }

//   uploadFile = (file) => {
//     const fileName = file.name
//     const filePath = `files/${fileName}`
//     const fileRef = firebase.storage().ref().child(filePath)
//     fileRef.put(file).then(res => {
//       console.log(getFileUrl(fileRef))
//     })
//   }

//   function getFileUrl(fileRef) {
//     return `https://firebasestorage.googleapis.com/v0/b/${fileRef.bucket}/o/${encodeURIComponent(fileRef.fullPath)}?alt=media`
//   }
// const getPicFromDatabase = async () => {
//     let storage = firebase.app().storage("gs://tech-matcha.appspot.com");
//     let storageRef = storage.ref();
//     const url = await storageRef.getDownloadURL();
//     console.log(url)
// }
const getManyDocument = (response) => {
    const listData = []
    for (const doc of response.docs) {
        listData.push(getOneDocument(doc))
    }
    return listData
  }
  const getOneDocument = (response) => {
    const data = response.data()
    data.id = response.id
    return data
  }