const url = "https://api.tvmaze.com/search/shows?q=girls";

const container = document.getElementsByClassName("container");
const body = document.getElementById("body");
const getData = () => {
  fetch(url).then((response) =>
    response.json().then((json) => {
      console.log(json);
      displayData(json);
      //   body.innerHTML = JSON.stringify(json);
    })
  );
};

getData();

const displayData = (data) => {
  const div = document.createElement("div");
  div.classList.add("container");
  console.log(div);
  data.forEach((element) => {
    div.innerHTML += ` <div class="list-parent">
    <div class="img-part">
      <img
        class="image"
        src=${element.show.image.original}
        alt="image"
      />
    </div>
    <div class="desc-part">
      <h3 class="title">${element.show.name}</h3>
      <p>
        <span class="pg">PG- 14</span>
        <span class="duration">2h 34min</span>
        <span class="genre">${element.show.genres}</span>
      </p>
      <h3>Summary</h3>
      <p>${element.show.summary}</p>
      <a href=${element.show.officialSite}>Link to the movie</a>
    </div>
  </div>`;
  });
  body.appendChild(div);
};
