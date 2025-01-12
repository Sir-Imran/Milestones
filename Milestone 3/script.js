var form = document.getElementById('resume-form');
var resumeDisplyElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHtml = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>name:</b>".concat(name, "</p>\n     <p><b>email:</b>").concat(email, "</p>\n      <p><b>phone:</b>").concat(phone, "</p>\n       <p><b>education:</b>").concat(education, "</p>\n        <p><b>experience:</b>").concat(experience, "</p>\n         <p><b>skills:</b>").concat(skills, "</p>\n\n         <h3>Education</h3>\n         <p>").concat(education, "</p>\n\n         <h3>Experience</h3>\n         <p>").concat(experience, "</p>\n\n         <h3>Skills</h3>\n         <p>").concat(skills, "</p>\n    ");
    if (resumeDisplyElement) {
        resumeDisplyElement.innerHTML = resumeHtml;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
