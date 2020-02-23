// get search term from localstorage
function getSearchTerm() {
  let searchTerm = "";
  if (
    window.localStorage["search-term"] !== undefined ||
    window.localStorage["search-term"] !== null
  ) {
    searchTerm = window.localStorage["search-term"];
  } else {
    searchTerm = "";
  }
  document.getElementById("sr-search-term").value = searchTerm;

  // search term for related searches
  document.getElementById("related-search-term").innerText = searchTerm;
  document.getElementById("sr-search-term").focus();
  console.log(searchTerm);
}

getSearchTerm();
