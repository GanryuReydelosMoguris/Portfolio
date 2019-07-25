
function loadCppFile() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("body").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "c++.txt", true);
  xhttp.send();
}


function loadKotlinFile() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("body").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "kotlin.txt", true);
  xhttp.send();
}


function loadPythonFile() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("body").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "Python.txt", true);
  xhttp.send();
}
function loadOverviewFile() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("body").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "Overview.txt", true);
  xhttp.send();
}
