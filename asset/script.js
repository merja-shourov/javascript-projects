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
        "live" : "https://merja-shourov.github.io/javascript-proejcts/palindrome-chacker/",
    },
    {
        "id": 4,
        "project_title": "Landing Page( Time Planner )",
        "code" : "https://github.com/merja-shourov/landing-page-1",
        "live" : "https://merja-shourov.github.io/landing-page-1/",
    },
    {
        "id": 5,
        "project_title": "Landing Page (BeGrocery)",    
        "code" : "https://github.com/merja-shourov/landing-page-2",
        "live" : "https://merja-shourov.github.io/landing-page-2/",
    },
    {
        "id": 6,
        "project_title": "Landing Page (Smooth Bekary)",
        "code" : "https://github.com/merja-shourov/landing-page-3",
        "live" : "https://merja-shourov.github.io/landing-page-3/",
    },
    {
        "id": 7,
        "project_title": "To-Do List",
        "code" : "https://github.com/merja-shourov/javascript-proejcts/tree/main/to-do-list",
        "live" : "https://merja-shourov.github.io/javascript-proejcts/to-do-list/", 
    }
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