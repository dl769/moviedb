// var movie;

// function click(){

//     movie = document.getElementsByName("search").value;
//     alert(movie);
// }



var ele;




$( document ).ready(function() {
    
    console.log( "ready!" );

    $(document).on('keypress', function(e) {        //When enter pressed, get value of searchbox
            if(e.which == 13){

             ele = document.getElementById("seekmovie").value;
             //console.log(ele);
             alert('I love Bedo');
            
///
            let query = $('#seekmovie').val();
            var container = $('#film-container');
            $.get('https://www.omdbapi.com/?i=tt3896198&apikey=85e776f0', function(response) {
           console.log('Response from Open database %o', response);        
       //    $('#movie-title').text(response.Title);
         //  $('#movie-poster').prop('src', response.Poster);        
          });
///


    }

;});

;});
