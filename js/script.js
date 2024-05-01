
  let selectedColor = "";

  document.getElementById("red").addEventListener("click", function() {
      selectedColor = "#d52027";
  });

  document.querySelectorAll(".clickable-column").forEach(function(column) {
      column.addEventListener("click", function() {
          this.style.backgroundColor = selectedColor;
      });
  });

    document.getElementById("green").addEventListener("click", function() {
        selectedColor = "#419B3F";
    });
  
    document.querySelectorAll(".clickable-column").forEach(function(column) {
        column.addEventListener("click", function() {
            this.style.backgroundColor = selectedColor;
        });
    });

     document.getElementById("yellow").addEventListener("click", function() {
        selectedColor = "#FDC024";
    });
  
    document.querySelectorAll(".clickable-column").forEach(function(column) {
        column.addEventListener("click", function() {
            this.style.backgroundColor = selectedColor;
        });
    });

     document.getElementById("blue").addEventListener("click", function() {
        selectedColor = "#3237AF";
    });
  
    document.querySelectorAll(".clickable-column").forEach(function(column) {
        column.addEventListener("click", function() {
            this.style.backgroundColor = selectedColor;
        });
    });

    document.getElementById("black").addEventListener("click", function() {
        selectedColor = "black";
    });
  
    document.querySelectorAll(".clickable-column").forEach(function(column) {
        column.addEventListener("click", function() {
            this.style.backgroundColor = selectedColor;
        });
    });

    document.getElementById("eraser").addEventListener("click", function() {
        selectedColor = "white";
    });
  
    document.querySelectorAll(".clickable-column").forEach(function(column) {
        column.addEventListener("click", function() {
            this.style.backgroundColor = selectedColor;
        });
    });

