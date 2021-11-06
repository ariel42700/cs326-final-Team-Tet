import {database} from './jobApi.js';
function getSearch() {
    const response = await fetch('/search', {
        method: 'POST',
        body: JSON.stringify({
            locationPreference: document.getElementById('').value,
            name: cost.billname,
            cost: cost.cost * 100,
            contributors: cost.contributors
        })
        window.location.replace("PopupSearch.html");
}
document.getElementById('search').addEventListener('click', getSearch);