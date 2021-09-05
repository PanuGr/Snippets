import Handlebars from "https://cdn.skypack.dev/handlebars?min";

const coursesList = {
    courses: [
        {
            title: "Sass",
            info: "This course contains lessons about Scss syntax, nesting, functions, partials.",

        }
    ]
};

function showCourses() {
    const source = document.getElementById("courses-template").innerHTML;
    const template = Handlebars.compile(source);
    const html = template(coursesList);
    document.querySelector("#courses").innerHTML = html;
}

export default showCourses