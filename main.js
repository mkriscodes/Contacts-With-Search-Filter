let filterInput = document.getElementById('filter-input');
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    let filterValue = document.getElementById("filter-input").value.toUpperCase();

    //get ul
    let ul = document.getElementById("names");
    // get li from ul
    let li = ul.querySelectorAll("li.collection-item");

    //loop through collection items
    for(let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName('a')[0];

    //if matches
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
        li[i].style.display = '';
    }
    else {
        li[i].style.display = 'none';
            }
        }
    }