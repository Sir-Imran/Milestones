const form=document.getElementById('resume-form')as HTMLFormElement;
const resumeDisplyElement= document.getElementById('resume-display')as HTMLDivElement;

form.addEventListener('submit',(event:Event) => {
    event.preventDefault();

    const name=(document.getElementById('name')as HTMLInputElement).value
    const email=(document.getElementById('email')as HTMLInputElement).value
    const phone=(document.getElementById('phone')as HTMLInputElement).value
    const education=(document.getElementById('education')as HTMLInputElement).value
    const experience=(document.getElementById('experience')as HTMLInputElement).value
    const skills=(document.getElementById('skills')as HTMLInputElement).value

    const resumeHtml = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>name:</b>${name}</p>
     <p><b>email:</b>${email}</p>
      <p><b>phone:</b>${phone}</p>
       <p><b>education:</b>${education}</p>
        <p><b>experience:</b>${experience}</p>
         <p><b>skills:</b>${skills}</p>

         <h3>Education</h3>
         <p>${education}</p>

         <h3>Experience</h3>
         <p>${experience}</p>

         <h3>Skills</h3>
         <p>${skills}</p>
    `;

    if(resumeDisplyElement){
        resumeDisplyElement.innerHTML=resumeHtml;
    } else{
        console.error('The resume display element is missing.');
    }
})
