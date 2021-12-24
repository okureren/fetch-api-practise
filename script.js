const rowDOM = document.querySelector(".row");
// rowDOM.setAttribute("class", "justify-content-center");

// fetch("https://jsonplaceholder.typicode.com/photos")
//   .then((response) => response.json())
//   .then((photos) => {
//     for (let i = 0; i < 21; i++) {
//       let colDom = document.createElement("div");
//       colDom.setAttribute("class", "col-6");
//       colDom.innerHTML = photos[i].title;
//       colDom.style.backgroundImage = "url(" + photos[i].url + ")";
//       rowDOM.appendChild(colDom);
//     }
//   });

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((photos) => {
    for (let i = 0; i < 21; i++) {
      let colDom = document.createElement("div");
      colDom.setAttribute("class", "col-8");
      let titleDOM = document.createElement("h1");
      titleDOM.setAttribute("class", "text-primary");
      titleDOM.innerHTML = photos[i].title;
      let imgDOM = document.createElement("img");
      imgDOM.setAttribute("src", photos[i].thumbnailUrl);
      rowDOM.appendChild(colDom);
      colDom.appendChild(titleDOM);
      colDom.appendChild(imgDOM);
    }
  });
