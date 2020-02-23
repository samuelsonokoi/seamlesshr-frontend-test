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

// populate the search data
function populateData() {
  data.forEach(element => {
    suggestions.innerHTML +=
      `<option value="${element.name}"> </option>` + "<br />";
  });
}

populateData();
