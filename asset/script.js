const all_info = [
    {
        "id": 1,
        "project_title": "Digital Clock( Working )",
        "code" : "https://github.com/merja-shourov/javascript-proejcts/tree/main/digital-clock",
        "live" : "https://merja-shourov.github.io/javascript-proejcts/digital-clock/",
    },
    {
        "id": 2,
        "project_title": "Palindrome Checker",
        "code" : "https://github.com/merja-shourov/javascript-proejcts/tree/main/palindrome-checker",
        "live" : "https://merja-shourov.github.io/javascript-proejcts/palindrome-checker/",
    },
    {
        "id": 4,
        "project_title": "Landing Page( Time Planner )",
        "code" : "https://github.com/merja-shourov/javascript-projects/tree/main/timePlanner-landing",
        "live" : "https://merja-shourov.github.io/javascript-proejcts/timePlanner-landing/",
    },
    {
        "id": 5,
        "project_title": "Landing Page (BeGrocery)",    
        "code" : "https://github.com/merja-shourov/javascript-projects/tree/main/grocery-landing",
        "live" : "https://merja-shourov.github.io/javascript-projects/grocery-landing",
    },
    {
        "id": 6,
        "project_title": "Landing Page (Smooth Bekary)",
        "code" : "https://github.com/merja-shourov/javascript-projects/tree/main/bakery-landing",
        "live" : "https://merja-shourov.github.io/javascript-projects/bakery-landing/",
    },
    {
        "id": 7,
        "project_title": "To-Do List",
        "code" : "https://github.com/merja-shourov/javascript-proejcts/tree/main/to-do-list",
        "live" : "https://merja-shourov.github.io/javascript-proejcts/to-do-list/", 
    },
    {
        "id": 8,
        "project_title": "Modal Design",
        "code" : "https://github.com/merja-shourov/javascript-projects/tree/main/modal-design",
        "live" : "https://merja-shourov.github.io/javascript-proejcts/modal-design/",
    },
]

const list = document.getElementById("project-list");

all_info.map( (info) =>{
    list.innerHTML += `
        <li>
            <span class="txt">${info.project_title}</span> 
            <span class="btn"><a href="${info.code}" class="code" target="_blank">Code</a> <a href="${info.live}" class="live">Live</a></span>
        </li>
    `;
    console.log(info);
    
});
