const firebaseConfig = {
    apiKey: "AIzaSyAy9HqfdfB4GI4g3y3FpEMl4BVR5vwGSmk",
    authDomain: "guilhermediasti.firebaseapp.com",
    databaseURL: "https://guilhermediasti-default-rtdb.firebaseio.com",
    projectId: "guilhermediasti",
    storageBucket: "guilhermediasti.appspot.com",
    messagingSenderId: "927090867966",
    appId: "1:927090867966:web:1e171f121b1ae6d9a6efaf",
    measurementId: "G-CEXW7J1PLX"
  };

  firebase.initializeApp(firebaseConfig);  

  var contactFormDB = firebase.database().ref('contactForm'); 

  document.getElementById('contactForm').addEventListener('submit', submitForm);

  function submitForm(e) {
    e.preventDefault();    
    var name = getElementVal('name');
    var email = getElementVal('email');
    var message = getElementVal('message');
    saveMessages(name, email, message);    

    //   enable alert
    document.querySelector(".alert").style.display = "block";    

    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("contactForm").reset();    
 
    };   

  const saveMessages = (name, email, message) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
      name : name,
      email : email,
      message : message

    });

  };

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };