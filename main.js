//initialize materializecss
document.addEventListener('DOMContentLoaded', function() {
    var sidenav = document.querySelectorAll('.sidenav');
    var sideNavInstances = M.Sidenav.init(sidenav);
    var paralax = document.querySelectorAll('.parallax');
    var paralaxInstances = M.Parallax.init(paralax);
    var tabs = document.querySelectorAll('.tabs')
    var TabsInstance = M.Tabs.init(tabs);
  });
