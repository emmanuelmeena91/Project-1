// Get references to the form elements
const form = document.getElementById("user-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const skillInputs = document.getElementsByName("skill");
const projectInputs = document.getElementsByName("project");

// Get reference to the reset button
const resetButton = document.getElementById("reset-button");

// Add event listener for form submission
form.addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Get the values from the form inputs
  const name = nameInput.value;
  const email = emailInput.value;
  const skills = [];
  const projects = [];

  for (let i = 0; i < skillInputs.length; i++) {
    if (skillInputs[i].checked) {
      skills.push(skillInputs[i].value);
    }
  }

  for (let i = 0; i < projectInputs.length; i++) {
    if (projectInputs[i].checked) {
      projects.push(projectInputs[i].value);
    }
  }

  // Create a new element to display the data
  const newData = document.createElement("div");

  // Create and append the heading element
  const headingElement = document.createElement("h1");
  headingElement.textContent = "YOUR DETAILS";
  newData.appendChild(headingElement);

  // Create and append the name element
  const nameElement = document.createElement("p");
  nameElement.textContent = "Name: " + name;
  newData.appendChild(nameElement);

  // Create and append the email element
  const emailElement = document.createElement("p");
  emailElement.textContent = "Email: " + email;
  newData.appendChild(emailElement);

  // Create and append the skills element
  const skillsElement = document.createElement("p");
  skillsElement.textContent = "Skills: " + skills.join(", ");
  newData.appendChild(skillsElement);

  // Create and append the projects element
  const projectsElement = document.createElement("p");
  projectsElement.textContent = "Projects: " + projects.join(", ");
  newData.appendChild(projectsElement);

  // Get reference to the container for the new data
  const container = document.getElementById("data-container");

  // Append the new data to the container
  container.appendChild(newData);
  
  // Reset the form
  form.reset();
});

// Add event listener for reset button
resetButton.addEventListener("click", function(event) {
  // Prevent the default button behavior
  event.preventDefault();
  
  // Get reference to the container for the new data
  const container = document.getElementById("data-container");

  // Remove all the child elements from the container
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
});