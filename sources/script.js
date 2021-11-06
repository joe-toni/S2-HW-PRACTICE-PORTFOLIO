//Started by selecting all the elements from the dom that will be manipulated in our fucntions
const firstProject = document.querySelector(".first-project");
const dayPlanner = document.querySelector(".day-planner");
const weatherDash = document.querySelector(".weather-dashboard");
const Info = document.querySelectorAll(".project-info");

const bio = document.querySelector(".bio");
const aboutMe = document.querySelector(".aboutMe");

//This function adjusts the display of the project container to bring focus on one project in particular
//Through the toggling of class names.
function focusProject(element, info)
{
    element.classList.toggle("focused");
    info.classList.toggle("hideInfo");
}
//This function performs similarly to the previous one but is intended to be used with the bio
//section of the page.
function expand()
{
    bio.classList.toggle("mini");
    aboutMe.classList.toggle("hideMe");
}