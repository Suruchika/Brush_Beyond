const firebaseConfig = {
    apiKey: "AIzaSyBWqs-3tyIxzP5bkxHR2XR8wWzrdwNezqQ",
    authDomain: "brush-beyond.firebaseapp.com",
    databaseURL: "https://brush-beyond-default-rtdb.firebaseio.com",
    projectId: "brush-beyond",
    storageBucket: "brush-beyond.appspot.com",
    messagingSenderId: "37631417170",
    appId: "1:37631417170:web:a8d82d0fa53414065ff88b",
    measurementId: "G-FJ7GTE8F4R"
  };

  //initializing firebase
  firebase.initializeApp(firebaseConfig);

  //referenceing database
  var contactFormDB = firebase.database().ref('contactForm');

  document.getElementById('contactForm').addEventListener('submit', submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var message = getElementVal('message');

    // console.log(name,email,message);

    saveMessages(name,email,message);

    // enable alert
    document.querySelector('.alert').style.display = "block";

    // removeing alert message
    setTimeout(()=>{
        document.querySelector('.alert').style.display = "none";
    },3000); 

    //reseting the form
    document.getElementById('contactForm').reset();
  }

  const saveMessages = (name,email,message) =>{
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name : name,
        email: email,
        message : message,
    });
  };

  const getElementVal = (id) =>{
    return document.getElementById(id).value;
  }

