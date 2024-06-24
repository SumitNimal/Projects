const URL = 'http://www.omdbapi.com/?';
const key = '&apikey=d0cc2317';

async function getMovieByID(imdbId){
    let url = `${URL}i=${imdbId}${key}`;;
    let p = await fetch(url);
    let data= await p.json();
    document.querySelector('.movie-poster').src = data.Poster;
    document.querySelector('.title').innerHTML = data.Title;
    document.querySelector('.release-date').innerHTML = data.Year;
    document.querySelector('.age-rating').innerHTML = data.Rated;
    document.querySelector('.runtime').innerHTML = data.Runtime;
    document.querySelector('.runtime').innerHTML = data.Runtime;

}

const searchBar = document.querySelector('.movie-title-search');
const resultGrid = document.querySelector('.search-result');
searchBar.addEventListener('keyup',async () => {
    let titleSearched = (searchBar.value).trim();
    if(titleSearched.length > 0){
        document.querySelector('.search-result').classList.remove('search-result-not-active');
        let html = '';
        console.log('Searched For : ' + titleSearched);
        let url = `${URL}s=${titleSearched}${key}`;
        let response = await fetch(url);
        let data = await response.json();
        if(data.Response === 'True'){
            console.log(data.Search);
            data.Search.forEach((item) => {
                let moviePoster = item.Poster;
                if(moviePoster === 'N/A')  moviePoster = 'NA.jpg';
                html += `<div class="search-result-item" data-imdb-id = '${item.imdbID}'>
                            <img src="${moviePoster}"
                                class="searched-poster">
                            <div class="searched-item-info">
                                <h3 class="searched-item-title">${item.Title}</h3>
                                <h4 class="searched-item-year">${item.Year}</h4>
                            </div>
                        </div>`;
                resultGrid.innerHTML = html; 
                document.querySelectorAll('.search-result-item').forEach((movie) =>{
                    movie.addEventListener('click',()=>{
                        console.log(movie.dataset.imdbId);
                        document.querySelector('.search-result').classList.add('search-result-not-active');
                    });
                }); 
            });  
        }
        
    }
    else{
        document.querySelector('.search-result').innerHTML = '';
        document.querySelector('.search-result').classList.add('search-result-not-active');
    }
});