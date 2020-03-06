var resultsID = [];
var plots = [];
var ratings = [];
isResult = Boolean(true);

$(document).ready(function(){
    $('#movie-search-form').on('submit', function(e) { 

        $(".search-button").click();    //it just slides the navbar...
console.log(isResult)
        if(!isResult) {
            $('.noresults').remove();
            isResult = true;
        }

        $('#ddt23').remove();
        $('.lio').remove();
        $('.top-content').remove();

                    resultsID = []; //cleans array with previous results
                    let query = $('#searchBar1').val();
                    console.log(query)
        
                    
                    $.get('https://www.omdbapi.com?apikey=fc4d8629&s='+query+'&plot=short', function(result) {
                        console.log(result);
  
                         if(result.Response == "False"){
                            $('#dd1').append('<a class="noresults"><br></br><br></br>Sorry, no movies matching search query<br></br><br></br></a>');
                            isResult = false;
                         }
        

                         for(let i = 0; i < result.Search.length; i++ ) { 
                            
                            
                           // $('#dd1').append(`<li><a href=#}>${result.Search[i].Title}</a><br><img src=${result.Search[i].Poster}></li><br><br>`);
                           
                           $('#dd1').append(`<li class="lio" id='f${i}'><br><a class="titleS" onclick="getPlot(${i})">${result.Search[i].Title} (${result.Search[i].Year})<br></a><img class="poster" src=${result.Search[i].Poster}><br><p class='pf' id='pf${i}'>.</p><br></li>`);
                           resultsID[i]=result.Search[i].imdbID;console.log(ratings[i])
                           
                            // $('#dd1').append(`<li class="lio" id='f${i}'><br><a class="titleS" onclick="getPlot(${i})">${result.Search[i].Title} (${result.Search[i].Year})<br><img src='star.png'><p id='rt${i}'></p></a><img class="poster" src=${result.Search[i].Poster}><br><p class='pf' id='pf${i}'>.</p><br></li>`);
                            //   getRating(i);
                        }

                        
                    });

        
                    return false;
        
                });

            });

            function getPlot(i){
                    if($('#pf'+i).html()=='.'){                                                                 //if description not toggled...
                     $.get('https://www.omdbapi.com?apikey=fc4d8629&i='+resultsID[i]+'&plot=full', function(result) {
                    console.log(result.Plot) 
                     $('#pf'+i).html(result.Plot+'<br><br><p id="rt${i}">'+result.imdbRating+'/10 <img src="star.png"></p><a href=http://imdb.com/title/'+resultsID[i]+'><img src=assets/ico/imdb.png></a>');
                    //appends plot + link to imdb 
      
                    });
                    }
                     else{
                    $('#pf'+i).html('.');
                    }
                     
            };
            function getRating(i){
                     $.get('https://www.omdbapi.com?apikey=fc4d8629&i='+resultsID[i], function(result) {
                    console.log(result.imdbRating) 
                     $('#rt'+i).html(result.imdbRating+'/10')
                    });
                     
            };
     