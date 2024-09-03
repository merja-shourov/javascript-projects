const all_info = [
    {
        "id": 1,
        "project_title": "Digital Clock",
        "code" : "https://github.com/merja-shourov/javascript-proejcts/tree/main/digital-clock",
        "live" : "https://merja-shourov.github.io/javascript-proejcts/digital-clock/",
    },
    {
        "id": 2,
        "project_title": "Palindrome Checker",
        "code" : "https://github.com/merja-shourov/javascript-proejcts/tree/main/palindrome-chacker",
        "live" : "https://merja-shourov.github.io/javascript-proejcts/palindrome-chacker/",
    },
    {
        "id": 3,
        "project_title": "Landing Page",
        "code" : "https://github.com/merja-shourov/javascript-proejcts/tree/main/palindrome-chacker",
        "live" : "https://merja-shourov.github.io/javascript-proejcts/digital-clock/",
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