const toggleEducationButton = document.getElementById("toggle-education") as HTMLButtonElement;
const toggleSkillsButton = document.getElementById("toggle-skills") as HTMLButtonElement;
const toggleExperienceButton = document.getElementById("toggle-experience") as HTMLButtonElement;

const educationSection = document.getElementById("education") as HTMLElement;
const skillsSection = document.getElementById("skills") as HTMLElement;
const workExperienceSection = document.getElementById("work-experience") as HTMLElement;

toggleEducationButton.addEventListener("click", () => {
  if (educationSection.style.display === "none") {
    educationSection.style.display = "block";
  } else {
    educationSection.style.display = "none";
  }
});

toggleSkillsButton.addEventListener("click", () => {
    if (skillsSection.style.display === "none") {
      skillsSection.style.display = "block";
    } else {
      skillsSection.style.display = "none";
    }
  });

toggleExperienceButton.addEventListener("click", () => {
  if (workExperienceSection.style.display === "none") {
    workExperienceSection.style.display = "block";
  } else {
    workExperienceSection.style.display = "none";
  }
});


    // Generate unique URL for sharing
    generateUniqueURL(name:);
});

// Generate Unique URL for the User
function generateUniqueURL(username: string) {
    const uniqueUrl = `${username}.vercel.app/resume`;
    const shareButton = document.getElementById('share-link') as HTMLButtonElement;

    shareButton.addEventListener('click', () => {
        alert(`Share this URL: ${uniqueUrl}`);
    });
