//DOMSelectors
const DOMSelectors = {
  title: document.getElementById("title"),
  artist: document.getElementById("artist"),
  url: document.getElementById("url"),
  display: document.getElementById("display"),
};

//remove album
function removeAlbum(event) {
  event.target.parentElement.remove();
}

//Get User Input
document.getElementById("form").addEventListener("submit", function (e) {
  //Get Values
  e.preventDefault();
  let album = {};
  album.title = document.getElementById("title").value;
  album.artist = document.getElementById("artist").value;
  album.url = document.getElementById("url").value;
  console.log(album, "TEST");
  inject(album);
  clearFields();
  document.querySelectorAll(".remove").forEach((button) => {
    button.addEventListener("click", removeAlbum);
  });
});

//clear the fields
function clearFields() {
  DOMSelectors.title.value = "";
  DOMSelectors.artist.value = "";
  DOMSelectors.url.value = "";
}

//push object into DOM
function inject(album) {
  DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
    `<div class="display-card">
  <img class="display-img" src="${album.url}"/>
  <h2 class="display-artist">${album.artist}</h2>
  <h3 class="display-album">${album.title}</h3><button class="remove btn">Remove Album</button>`
  );
}
