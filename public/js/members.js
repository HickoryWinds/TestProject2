$(document).ready(function () {

  // src='../../../keys.js/yelpApiKey';
  // console.log('111111111111');
  // console.log(src);

  // find drugs stores using yelp api when 'drug store' button clicked
  $('#drugstore').click(findDrugStore);

  function findDrugStore() {
    // yelp works
    var yelpApiKey = 'oy6hhHsq3Rftgnl-vLTLO0vfP8VKnoGjq4a_AhrqhbfG4Q3Mothi8_PzIv_GmBntG9J0gBmx04lCPmhZi2xn4mJW_CRHtohDxdhGOoUS4GGErey7MesWAQLgAYWBXXYx';
    var queryURL = "https://cors-anywhere.herokuapp.com/http://api.yelp.com/v3/businesses/search?term=drugstores&location=Akron, OH";
    $.ajax({
      url: queryURL,
      headers: {
        "Authorization": "Bearer " + yelpApiKey + "",
      },
      method: "GET",
      dataType: "json",
    }).then(function (response) {
      Results = response;
      console.log("Results");
      console.log(Results.businesses);
      for (var i = 0; i < Results.businesses.length; i++) {
        // console.log(Results.businesses[i].name);
        // console.log(Results.businesses[i].location.address1);
        // console.log(Results.businesses[i].location.city);
        // console.log(Results.businesses[i].location.zip_code);
        // console.log(Results.businesses[i].location);
        // console.log(Results.businesses[i].phone);
        $('#results').append(Results.businesses[i].name)
        $('#results').append("<br>");
      }
    });
  }
});

// when 'x' or 'close' button clicked, remove search results
$('#closer1').click(clearIt);
$('#closer2').click(clearIt);
// clearIt removes search results
function clearIt() {
  console.log('???????????')
  $('#results').empty();
}


