$(document).ready(function () {
  // get references to form and inputs
  var loginForm = $("form.login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // when login form is submitted, validate there's an email
  // and password entered
  loginForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      alert('Must enter enter and password.')
      return;
    }

    // if email and password in database, run the loginUser function
    // and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser posts to "api/login" route and if successful,
  // redirects us the the calenedar/journal page
  function loginUser(email, password) {
    $.post("/api/login", {
        email: email,
        password: password
      })
      .then(function () {
        window.location.replace("/calendar");
        // if error, log the error
      })
      .catch(function (err) {
        alert('Invalid email/password combination.')
        console.log(err);
      });
  }
});