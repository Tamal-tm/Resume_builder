// JavaScript to handle dynamic updates and form functionality

// Update resume preview in real-time
function updatePreview() {
    document.getElementById('previewName').textContent = document.getElementById('name').value || "Your Name";
    document.getElementById('previewEmail').textContent = document.getElementById('email').value;
    document.getElementById('previewPhone').textContent = document.getElementById('phone').value;
    document.getElementById('previewProfile').textContent = document.getElementById('profile').value;

    // Handle skills
    let skills = document.querySelectorAll('input[name="skills"]:checked');
    let skillList = "";
    skills.forEach((skill) => skillList += `<li>${skill.value}</li>`);
    document.getElementById('previewSkills').innerHTML = skillList;

    // Show the resume preview with animation
    document.getElementById('resumePreview').classList.add('show');
}

// Add dynamic education fields
function addEducation() {
    let div = document.createElement('div');
    div.innerHTML = `<input type="text" name="education" oninput="updateEducation()" placeholder="Enter education details">`;
    document.getElementById('educationSection').appendChild(div);
}

function updateEducation() {
    let educationInputs = document.querySelectorAll('input[name="education"]');
    let educationList = "";
    educationInputs.forEach((input) => educationList += `<li>${input.value}</li>`);
    document.getElementById('previewEducation').innerHTML = educationList;
}

// Add dynamic experience fields
function addExperience() {
    let div = document.createElement('div');
    div.innerHTML = `<input type="text" name="experience" oninput="updateExperience()" placeholder="Enter experience details">`;
    document.getElementById('experienceSection').appendChild(div);
}

function updateExperience() {
    let experienceInputs = document.querySelectorAll('input[name="experience"]');
    let experienceList = "";
    experienceInputs.forEach((input) => experienceList += `<li>${input.value}</li>`);
    document.getElementById('previewExperience').innerHTML = experienceList;
}

// Clear the form and preview
function clearPreview() {
    document.getElementById('previewName').textContent = "Your Name";
    document.getElementById('previewEmail').textContent = "";
    document.getElementById('previewPhone').textContent = "";
    document.getElementById('previewProfile').textContent = "";
    document.getElementById('previewEducation').innerHTML = "";
    document.getElementById('previewSkills').innerHTML = "";
    document.getElementById('previewExperience').innerHTML = "";
    document.getElementById('resumePreview').classList.remove('show');
}

// Download the resume as PDF
function downloadPDF() {
    const doc = new jsPDF();
    doc.text(`Name: ${document.getElementById('previewName').textContent}`, 10, 10);
    doc.text(`Email: ${document.getElementById('previewEmail').textContent}`, 10, 20);
    doc.text(`Phone: ${document.getElementById('previewPhone').textContent}`, 10, 30);
    doc.text(`Profile Summary: ${document.getElementById('previewProfile').textContent}`, 10, 40);

    // Add education details
    let educationItems = document.querySelectorAll('#previewEducation li');
    let eduText = 'Education:';
    educationItems.forEach((item) => eduText += `\n- ${item.textContent}`);
    doc.text(eduText, 10, 50);

    // Add skills
    let skillItems = document.querySelectorAll('#previewSkills li');
    let skillsText = 'Skills:';
    skillItems.forEach((item) => skillsText += `\n- ${item.textContent}`);
    doc.text(skillsText, 10, 70);

    // Add experience
    let experienceItems = document.querySelectorAll('#previewExperience li');
    let expText = 'Experience:';
    experienceItems.forEach((item) => expText += `\n- ${item.textContent}`);
    doc.text(expText, 10, 90);

    doc.save("resume.pdf");
}
