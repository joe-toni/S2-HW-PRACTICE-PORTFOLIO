const firstProject = document.querySelector(".first-project");
const dayPlanner = document.querySelector(".day-planner");
const weatherDash = document.querySelector(".weather-dashboard");
const Info = document.querySelectorAll(".project-info");

console.log(firstProject);
console.log(dayPlanner);
console.log(weatherDash);

var focused = false;

function focusProject(element, info)
{
    element.classList.toggle("focused");
    info.classList.toggle("hideInfo");
}