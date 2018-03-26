console.log("Sanity Check: JS is working!");

$(document).ready(function(){


  // code in here
  $.ajax({
   method: 'GET',
   url: 'http://localhost:3000/api/albums',
   success: handleSuccess,
   error: handleError
 });

 function handleSuccess(json) {
   console.log(json);
   json.forEach(function(album){
     $('.container').append(`<ul><li><h5>${album.title} --> "${album.artist}"<h5></li></ul>`)
   })

 }

 function handleError(xhr, status, errorThrown) {
   console.log('uh oh');
 }

 $.ajax({
  method: 'GET',
  url: 'http://localhost:3000/api/taquerias',
  success: handleTaqo,
  error: handleError
});

function handleTaqo(json) {
  console.log(json);
  json.forEach(function(taqueria){
    $('.container').append(`<ul><li><h5>${taqueria.name}<h5></li></ul>`)
  })

}

function handleError(xhr, status, errorThrown) {
  console.log('uh oh');
}


});
