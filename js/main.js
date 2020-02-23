// get search value
let search = document.getElementById("search_input");
let suggestions = document.getElementById("search-data");

let data = [
  {
    name: "Where to learn CSS"
  },
  {
    name: "Learning HTML5 in 2020"
  },
  {
    name: "Learn Javascript"
  },
  {
    name: "How to cook fried rice"
  },
  {
    name: "Who is the president of America?"
  },
  {
    name: "Symptoms of malaria"
  },
  {
    name: "Is the corona virus in Africa?"
  },
  {
    name: "Why was Trump no impeached?"
  },
  {
    name: "Reasons for having a pet"
  },
  {
    name: "React or Angular"
  }
];

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

// populate the search data
function populateData() {
  data.forEach(element => {
    // Create option element.
    var option = document.createElement("option");
    // Set the value using the name key in data array.
    option.value = element.name;
    // populate datalist with options.
    suggestions.appendChild(option);
  });
}

populateData();

// get search term from localstorage
function getSearchTerm() {
  console.log(window.localStorage["search-term"]);
  let searchTerm = "";
  if (window.localStorage["search-term"] !== undefined) {
    searchTerm = window.localStorage["search-term"];
  } else {
    searchTerm = "";
  }
  document.getElementById("search_input").value = searchTerm;

  // search term for related searches
  if (document.getElementById("related-search-term") !== null) {
    document.getElementById("related-search-term").innerText = searchTerm;
  }
  document.getElementById("search_input").focus();
}

getSearchTerm();
