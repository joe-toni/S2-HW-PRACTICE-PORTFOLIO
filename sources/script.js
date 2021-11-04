const firstProject = document.querySelector(".first-project");
const dayPlanner = document.querySelector(".day-planner");
const weatherDash = document.querySelector(".weather-dashboard");
const Info = document.querySelectorAll(".project-info");

const bio = document.querySelector(".bio");
const aboutMe = document.querySelector(".aboutMe");


function focusProject(element, info)
{
    element.classList.toggle("focused");
    info.classList.toggle("hideInfo");
}

function expand()
{
    bio.classList.toggle("mini");
    aboutMe.classList.toggle("hideMe");
}