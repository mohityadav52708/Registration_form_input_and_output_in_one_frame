document.getElementById("profile-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var profilePic = document.getElementById("profile-pic").files[0];


      var skills = [];
var skillCheckboxes = document.querySelectorAll('input[name="skills"]:checked');
skillCheckboxes.forEach(function(skillCheckbox) {
  skills.push(skillCheckbox.value);
});

  var reader = new FileReader();
  reader.onload = function(e) {
    var profileImg = document.createElement("img");
    profileImg.src = e.target.result;

    var profileCard = document.getElementById("profile-card");
    profileCard.innerHTML = "";
    profileCard.innerHTML += "<h2><strong>Registration Details</strong> </h2>";
    profileCard.appendChild(profileImg);

    profileCard.innerHTML += "<p><strong>Name:</strong> " + name + "</p>";
    profileCard.innerHTML += "<p><strong>Email:</strong> " + email + "</p>";
    profileCard.innerHTML += "<p><strong>Password:</strong> " + password + "</p>";
    profileCard.innerHTML += "<p><strong>Gender:</strong> " + gender + "</p>";
    profileCard.innerHTML += "<p><strong>Skills:</strong> " + skills + "</p>";
  }

  if (profilePic) {
    reader.readAsDataURL(profilePic);
  }
});