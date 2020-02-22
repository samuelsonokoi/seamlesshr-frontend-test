// get search value
let search = document.getElementById("search_input");

// display the search page
document.getElementById("search-page").style.display = "block";

// check to see if the enter key was pressed and submit the form.
function checkSubmit(e) {
  if (e && e.keyCode == 13) {
    document.forms[0].submit();
  }
}

// submit and save searched data to localstorage
function onSearch() {
  window.localStorage["search-term"] = search.value;
  location = "search-results.html";
  // return false to cancel submit event
  return false;
}
