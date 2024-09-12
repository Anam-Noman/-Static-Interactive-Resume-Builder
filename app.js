var toggleEducationButton = document.getElementById("toggle-education");
var toggleSkillsButton = document.getElementById("toggle-skills");
var toggleExperienceButton = document.getElementById("toggle-experience");
var educationSection = document.getElementById("education");
var skillsSection = document.getElementById("skills");
var workExperienceSection = document.getElementById("work-experience");
toggleEducationButton.addEventListener("click", function () {
    if (educationSection.style.display === "none") {
        educationSection.style.display = "block";
    }
    else {
        educationSection.style.display = "none";
    }
});
toggleSkillsButton.addEventListener("click", function () {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
    }
    else {
        skillsSection.style.display = "none";
    }
});
toggleExperienceButton.addEventListener("click", function () {
    if (workExperienceSection.style.display === "none") {
        workExperienceSection.style.display = "block";
    }
    else {
        workExperienceSection.style.display = "none";
    }
});
// Generate unique URL for sharing
generateUniqueURL(name);
;
// Generate Unique URL for the User
function generateUniqueURL(username) {
    var uniqueUrl = "".concat(username, ".vercel.app/resume");
    var shareButton = document.getElementById('share-link');
    shareButton.addEventListener('click', function () {
        alert("Share this URL: ".concat(uniqueUrl));
    });
}
