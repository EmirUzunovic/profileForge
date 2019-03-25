//initialize materializecss
document.addEventListener('DOMContentLoaded', function() {
    var sidenav = document.querySelectorAll('.sidenav');
    var sideNavInstances = M.Sidenav.init(sidenav);
    var paralax = document.querySelectorAll('.parallax');
    var paralaxInstances = M.Parallax.init(paralax);
    var tabs = document.querySelectorAll('.tabs')
    var TabsInstance = M.Tabs.init(tabs);
  });


filterSelection("all");

function filterSelection(selcection){
    let i;
    let projects = document.querySelectorAll('.projectCard');
    if (selcection == "all") selcection = "";
    for (i = 0 ; i < projects.length; i++){
        w3RemoveClass(projects[i], "show");
        if(projects[i].className.indexOf(selcection) > -1) w3AddClass(projects[i], "show");
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