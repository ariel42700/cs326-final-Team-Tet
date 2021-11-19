//import {database} from './jobApi.js';
function getDropdown(id) {
    let select = document.getElementById(id);
    let value = select.options[select.selectedIndex].value;
    return value;
}
function getChecklistItem(id) {
    let value = '';
    let radios = document.getElementsById(id);
    for (let i = 0, length = radios.length; i < radios.length; i++) {
        if (radios[i].checked) {
            // do whatever you want with the checked radio
            value = radios[i].value;

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }
    return value;   
}
// function getSearch() {
//     const response = await fetch('/search', {
//         method: 'POST',
//         database: JSON.stringify({
//             workStudy: getChecklistItem('checklist1'),
//             locationPreference: getChecklistItem('checklist2'),
//             jobType: getDropdown('dropdown')
//         })
//     })
//     window.location.replace("PopupSearch.html");
// }
// function getJobPage() {
//     const response = await fetch('/jobPage')
//     window.location.replace("job_page.html");
// }
// document.getElementById('search').addEventListener('click', getSearch);

// let tags = document.getElementsByTagName('a');

// for (let i = 0; i < tags.length ; i++) {
//     Anchors[i].addEventListener("click", getJobPage);
// }
document.getElementById('search').addEventListener("click", () => {
    window.location.href = "PopupSearch.html"
});

