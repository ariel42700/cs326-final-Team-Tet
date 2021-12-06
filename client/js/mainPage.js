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

document.getElementById('search').addEventListener("click", () => {
    window.location.href = "popupsearch.html"
});
