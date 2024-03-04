// coded by @stanley
const projectName = 'survey-form'

function todayDate() {
    var d = new Date();
    var n = d.getFullYear() + " ";
    
    return document.getElementById("date").innerHTML = n
}