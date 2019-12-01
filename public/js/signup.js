$(document).ready(function () {
  // get references to form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // when signup button is clicked, validate email and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      alert('Must enter email and password.')
      return;
    }
    // if email and password in form, run signUpUser function
    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // posts to signup route. if successful, redirected to the calendar page
  // otherwise log any errors
  function signUpUser(email, password) {
    $.post("/api/signup", {
        email: email,
        password: password
      })
      .then(function (data) {
        window.location.replace("/calendar");
        // if error, handle by throwing bootstrap alert
      })
      .catch(handleLoginErr);
  }
  // shows alert with error message
  function handleLoginErr(err) {
    $("#alert.msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});