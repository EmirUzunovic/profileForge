//initialize materializecss

// Slider
const sidenav = document.querySelectorAll('.sidenav');;
M.Sidenav.init(sidenav);

//Paralax
const paralax = document.querySelectorAll('.parallax');
M.Parallax.init(paralax);

//Tabs
const tabs = document.querySelectorAll('.tabs');
M.Tabs.init(tabs);

//ScrolSpy
const scrollSpay = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollSpay);

//Tooltip
const tooltip = document.querySelectorAll('.tooltipped');
M.Tooltip.init(tooltip); 


filterSelection("all");

function filterSelection(selection){
    let i;
    let projects = document.querySelectorAll('.projectCard');
    if (selection == "all") selection = "";
    for (i = 0 ; i < projects.length; i++){
        w3RemoveClass(projects[i], "show");
        if(projects[i].className.indexOf(selection) > -1) w3AddClass(projects[i], "show");
    }
}

//show filtered elements
function w3AddClass(element, name) {
  let i;
  let arr1;
  let arr2;

  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for( i = 0; i <arr2.length; i++){
      if(arr1.indexOf(arr2[i]) == -1) {
          element.className += " " + arr2[i];
      }
  }
}

//hide elements that are not selected 
function w3RemoveClass(element, name) {
  let i;
  let arr1; 
  let arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
