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
    var resumeHtml = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n     <p><b>email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n      <p><b>phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n       <p><b>education:</b><span contenteditable=\"true\">").concat(education, "</span></p>\n        <p><b>experience:</b><span contenteditable=\"true\">").concat(experience, "</span></p>\n         <p><b>skills:</b><span contenteditable=\"true\">").concat(skills, "</span></p>\n\n         <h3>Education</h3>\n         <p <span contenteditable=\"true\">>").concat(education, "</p> \n\n         <h3>Experience</h3>\n         <p <span contenteditable=\"true\">>").concat(experience, "</p>\n\n         <h3>Skills</h3>\n         <p <span contenteditable=\"true\">>").concat(skills, "</p>\n    ");
    if (resumeDisplyElement) {
        resumeDisplyElement.innerHTML = resumeHtml;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
