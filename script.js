const rowDOM = document.querySelector(".row");

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((photos) => {
    for (let i = 0; i < 21; i++) {
      let colDom = document.createElement("div");
      let colRowDOM = document.createElement("div");
      let colTitle = document.createElement("div");
      let colIMG = document.createElement("div");
      let titleDOM = document.createElement("h5");
      let imgDOM = document.createElement("img");

      colDom.setAttribute("class", "col-12 ");
      colRowDOM.setAttribute("class", "row");
      colTitle.setAttribute("class", "col-4");
      colIMG.setAttribute("class", "col-4");
      titleDOM.setAttribute("class", "text-primary");
      imgDOM.setAttribute("src", photos[i].thumbnailUrl);
      imgDOM.setAttribute("class", "img-fluid");

      titleDOM.innerHTML = `${photos[i].id}) ${photos[i].title}`;

      rowDOM.appendChild(colDom);
      colDom.appendChild(colRowDOM);
      colRowDOM.appendChild(colTitle);
      colRowDOM.appendChild(colIMG);
      colTitle.appendChild(titleDOM);
      colIMG.appendChild(imgDOM);
    }
  });
