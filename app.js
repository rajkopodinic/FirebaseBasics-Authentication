(function () {
    var firebaseConfig = {
        apiKey: "AIzaSyBXXERU9Dliv813_nM7shCBMXkurEYiCU8",
        authDomain: "devprojects-17a62.firebaseapp.com",
        databaseURL: "https://devprojects-17a62.firebaseio.com",
        projectId: "devprojects-17a62",
        storageBucket: "devprojects-17a62.appspot.com",
        messagingSenderId: "555856504141",
        appId: "1:555856504141:web:52dbf75f59fb3adf238304",
        measurementId: "G-HCRVEZR1L5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    const welcomeUser = document.getElementById('welcomeUser');
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogOut = document.getElementById('btnLogOut');

    btnLogin.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    btnSignUp.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    btnLogOut.addEventListener('click', e => {
        firebase.auth().signOut();
    })

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            welcomeUser.innerHTML = 'Welcome ' + firebaseUser.email;
            txtEmail.style.setProperty('display', 'none');
            txtPassword.style.setProperty('display', 'none');
            btnLogOut.style.removeProperty('display');
            btnLogin.style.setProperty('display', 'none');
            btnSignUp.style.setProperty('display', 'none');
        } else {
            console.log('Not logged in...');
            welcomeUser.innerHTML = 'Sign In'
            btnLogOut.style.setProperty('display', 'none');
            txtEmail.style.removeProperty('display');
            txtPassword.style.removeProperty('display');
            btnLogin.style.removeProperty('display');
            btnSignUp.style.removeProperty('display');
        }
    })





}());