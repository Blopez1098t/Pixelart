  // Variable to store the selected color
  let selectedColor = "";

  // Function to handle button click
  document.getElementById("red").addEventListener("click", function() {
      // Set selected color to red
      selectedColor = "red";
  });

  // Function to handle column background click
  document.querySelectorAll(".clickable-column").forEach(function(column) {
      column.addEventListener("click", function() {
          // Change background color of the clicked column to the selected color
          this.style.backgroundColor = selectedColor;
      });
  });

    // Function to handle button click
    document.getElementById("green").addEventListener("click", function() {
        // Set selected color to red
        selectedColor = "#419B3F";
    });
  
    // Function to handle column background click
    document.querySelectorAll(".clickable-column").forEach(function(column) {
        column.addEventListener("click", function() {
            // Change background color of the clicked column to the selected color
            this.style.backgroundColor = selectedColor;
        });
    });

     // Function to handle button click
     document.getElementById("yellow").addEventListener("click", function() {
        // Set selected color to red
        selectedColor = "yellow";
    });
  
    // Function to handle column background click
    document.querySelectorAll(".clickable-column").forEach(function(column) {
        column.addEventListener("click", function() {
            // Change background color of the clicked column to the selected color
            this.style.backgroundColor = selectedColor;
        });
    });

     // Function to handle button click
     document.getElementById("blue").addEventListener("click", function() {
        // Set selected color to red
        selectedColor = "blue";
    });
  
    // Function to handle column background click
    document.querySelectorAll(".clickable-column").forEach(function(column) {
        column.addEventListener("click", function() {
            // Change background color of the clicked column to the selected color
            this.style.backgroundColor = selectedColor;
        });
    });

    // Function to handle button click
    document.getElementById("black").addEventListener("click", function() {
        // Set selected color to red
        selectedColor = "black";
    });
  
    // Function to handle column background click
    document.querySelectorAll(".clickable-column").forEach(function(column) {
        column.addEventListener("click", function() {
            // Change background color of the clicked column to the selected color
            this.style.backgroundColor = selectedColor;
        });
    });

    // Function to handle button click
    document.getElementById("eraser").addEventListener("click", function() {
        // Set selected color to red
        selectedColor = "white";
    });
  
    // Function to handle column background click
    document.querySelectorAll(".clickable-column").forEach(function(column) {
        column.addEventListener("click", function() {
            // Change background color of the clicked column to the selected color
            this.style.backgroundColor = selectedColor;
        });
    });