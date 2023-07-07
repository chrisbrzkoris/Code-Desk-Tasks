    var items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"];


    var itemsPerPage = 3;


    var totalPages = Math.ceil(items.length / itemsPerPage);


    function displayItems(pageNumber) {

      var startIndex = (pageNumber - 1) * itemsPerPage;
      var endIndex = Math.min(startIndex + itemsPerPage, items.length);
      var container = document.getElementById("itemContainer");

      container.innerHTML = "";

      for (var i = startIndex; i < endIndex; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = items[i];
        container.appendChild(listItem);
      }


      document.getElementById("pageNumber").textContent = "Page " + pageNumber + " of " + totalPages;
    }


    window.onload = function() {
      displayItems(1);
    }