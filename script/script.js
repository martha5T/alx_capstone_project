const header = document.querySelector("header")

windows.addEventListener ("scroll", function() {header.classList.toggle ("sticky", windows.scrolly > 120);});