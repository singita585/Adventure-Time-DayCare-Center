// Initialize Firebase

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBO9odjzig7T4ZfJHt0sqt_5ZyT2mAm9so",
    authDomain: "form-db-c1db3.firebaseapp.com",
    databaseURL: "https://form-db-c1db3-default-rtdb.firebaseio.com",
    projectId: "form-db-c1db3",
    storageBucket: "form-db-c1db3.appspot.com",
    messagingSenderId: "757133952359",
    appId: "1:757133952359:web:67676cf4d12e534355dbc2",
    measurementId: "G-5G6H97CLDD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//Reference messages collection
let messagesRef = firebase.database().ref('messages');

//listen to form
document.getElementById('appForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    // get Values
    let name = getInputVal('first');
    let surname = getInputVal('last');
    let names = getInputVal('name');
    let city = getInputVal('city');
    let region = getInputVal('region');
    let postal = getInputVal('postal');
    let phone = getInputVal('phone');
    let childlives = getInputVal('childlives');
    let phoneS = getInputVal('phoneS');
    let email = getInputVal('email');
    let lang = getInputVal('lang');
    let otherlang = getInputVal('otherlang');
    let nameP = getInputVal('nameP');
    let homeP = getInputVal('homeP');
    let workP = getInputVal('workP');
    let nameR = getInputVal('nameR');
    let childR = getInputVal('childR');
    let prev = getInputVal('prev');
    let medical = getInputVal('medical');
    let medicalYes = getInputVal('medicalYes');
    let allergies = getInputVal('allergies');
    let allergiesYes = getInputVal('allergiesYes');
    let asthma = getInputVal('asthma');
    let asthmaYes = getInputVal('asthmaYes');
    let seizure = getInputVal('seizure');
    let seizureYes = getInputVal('seizureYes');
    let foods = getInputVal('foods');
    let foodsYes = getInputVal('foodsYes');
    let meds = getInputVal('meds');
    let time = getInputVal('time');
    let medR = getInputVal('medR');

    //save message

    saveMessage(name, surname, names, city, region, postal, phone, childlives, phoneS, email, lang, otherlang, nameP, homeP, workP, nameR,
                childR, prev, medical, medicalYes, allergies, allergiesYes, asthma, asthmaYes, seizure, seizureYes, foods, foodsYes, meds,
                time, medR);

    //show alert
    document.querySelector('.alert').style.display='block';

    //Hide alert after 3 s
    setTimeout(function(){
        document.querySelector('.alert').style.display='none';
    }, 3000)
    //clear form
    document.getElementById('appForm').reset();
}
//function to get form values

function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, surname, names, city, region, postal, phone, childlives, phoneS, email, lang, otherlang, nameP, homeP, workP, nameR,
    childR, prev, medical, medicalYes, allergies, allergiesYes, asthma, asthmaYes, seizure, seizureYes, foods, foodsYes, meds,
    time, medR){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        surname: surname,
        names: names,
        city: city,
        region: region,
        postal: postal,
        phone: phone,
        childlives: childlives,
        phoneS: phoneS,
        email: email,
        lang: lang,
        otherlang: otherlang,
        nameP: nameP,
        homeP: homeP,
        workP: workP,
        nameR: nameR,
        childR: childR,
        prev: prev,
        medical: medical,
        medicalYes: medicalYes,
        allergies: allergies,
        allergiesYes: allergiesYes,
        asthma: asthma,
        asthmaYes: asthmaYes,
        seizure: seizure,
        seizureYes: seizureYes,
        foods: foods,
        foodsYes: foodsYes,
        meds: meds,
        time: time,
        medR: medR
    })
}