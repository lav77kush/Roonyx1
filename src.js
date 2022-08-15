

//1. Solution 1. HTTP Request Handling




const allEpisodeEndPoint = 'https://rickandmortyapi.com/api/episode';
let allEpisodes = [];
// get All Episodes
function getAllEpisodes() {
  fetch(allEpisodeEndPoint).then(function (response) {
    return response.json();
  }).then(function (data) {
    console.log(data)
      allEpisodes = data.results;
      transformUrlWithCharacterData();
  }).catch(function (err) {
    console.log("something went wrong"+ err);
  });
}

// call the function
getAllEpisodes();



// to change the characters array
function transformUrlWithCharacterData() {
  allEpisodes.map((element) => {
    let urls = element.characters;
    if (urls.length) {
      Promise.all(urls.map(url =>  // require to allow CORS policy for http://localhost:5500/ from BE to access this API url in browser using local environment
          fetch(url,
          {
           headers:{
            "authority": "rickandmortyapi.com",
            "method": "GET"

           }
          }
          )
      ))
        .then(response => {
          element.characters = response;
        })
        .catch(err => {
          console.log(err)
         })
        

    }

  })
  // this is the expected data with modified character array
  console.log(allEpisodes);
}


