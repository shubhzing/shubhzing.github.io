
/*let xhr = new XMLHttpRequest;
    //Call the open function, GET-type of request, url, true-asynchronous
    xhr.open('POST', 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=26.7762903,75.87817629999999&radius=10000&types=doctor&keyword=Neurologist&key=AIzaSyDIH6VyEfL8bbFi5F5Srn5r3pFfYFyPpf0', true)
    //call the onload 
    xhr.onload = function() 
        {
            //check if the status is 200(means everything is okay)
            if (this.status === 200) 
                {
                    //return server response as an object with JSON.parse
                    var obj=JSON.parse(this.responseText);
            console.log(obj.results[0].name);
        }
                }
    //call send
    xhr.send();
function createCORSRequest('POST','https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=26.7762903,75.87817629999999&radius=10000&types=doctor&keyword=Neurologist&key=AIzaSyDIH6VyEfL8bbFi5F5Srn5r3pFfYFyPpf0') {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
     xhr.open('POST', 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=26.7762903,75.87817629999999&radius=10000&types=doctor&keyword=Neurologist&key=AIzaSyDIH6VyEfL8bbFi5F5Srn5r3pFfYFyPpf0', true)
        xhr.onload = function() 
        {
            //check if the status is 200(means everything is okay)
            if (this.status === 200) 
                {
                    //return server response as an object with JSON.parse
                    var obj=JSON.parse(this.responseText);
            console.log(obj.results[0].name);
        }
                }
  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
     xhr.open('POST', 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=26.7762903,75.87817629999999&radius=10000&types=doctor&keyword=Neurologist&key=AIzaSyDIH6VyEfL8bbFi5F5Srn5r3pFfYFyPpf0')
    
  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

var xhr = createCORSRequest('GET', url);
if (!xhr) {
  throw new Error('CORS not supported');
}
*/
/*
function searchfunction(){
  var search= document.getElementById("searchInput").value;
alert(search);

 var database = firebase.database();
var ref=firebase.database().ref().child("Doctors")
ref.on("child_added",snap=>{
  //var Speciality=snap.child("Ayurveda");
  var name=snap.child("name").val();
  var address=snap.child("address").val();
  var qualifications=snap.child("qualifications").val();
var Fees=snap.child("Fees").val();
var consultant=snap.child("consultant").val();
var url=snap.child("url").val();

 

    if (consultant==search) {
 var htmlText = '';
      

htmlText +='<div class="dd_doctor_box">';
htmlText += '<div class="doc_image" style="background-image:url('+url+');"><img src="'+url+'" alt=""></div>';
htmlText +='<div class="doc_detail"><h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">'+name+'</font></font></h3>';
htmlText +='<p id="doc-education">'+qualifications+'</p>'
htmlText +='<p id="doc-spaclility"style="color:grey">'+consultant+'</p>'
htmlText +='<p id="doc-hospitaladd">'+address+'</p>'
htmlText +='<div class="dd_review_rating"><ul><li><span class="star active"></span></li><li><span class="star active"></span></li><li><span class="star active"></span></li><li><span class="star active"></span></li><li><span class="star "></span></li></ul></div><h4><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">'+Fees+'</font></font></h4><div class="btn_wrapper"><font style="vertical-align: inherit;"><a href="./book-appointment/aa-salah-eldin-ahmed/?practice_id=Mjkx" class="dd_btn dd_btn_small" title="Rendez-vous au livre"><font style="vertical-align: inherit;">Book Appointment </font></a><a href="./doctor-details/aa-salah-eldin-ahmed/?practice_id=Mjkx" class="dd_btn dd_btn_small" title="Vues"><font style="vertical-align: inherit;">Views</font></a></font></div>';
htmlText += '</div>';
htmlText += '</div>';
        /*htmlText +='<div class="dd_doctor_box">';
                htmlText += '<div class="doc_image" style="background-image:url(./9b31fc0637.jpg);"><img src="./9b31fc0637.jpg" alt=""></div>';
                htmlText += '<div class="doc_detail"><h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">' +name+ '</font></font></h3>';
        htmlText += '<p id="doc-education">'+Education+'</p>'
        htmlText += '<p id="doc-spaclility"style="color:grey">'+Consultant+'</p>'
        htmlText += '<p id="doc-hospitaladd">'+Hospital+'</p>'
                htmlText += '<div class="dd_review_rating"><ul><li><span class="star active"></span></li><li><span class="star active"></span></li><li><span class="star active"></span></li><li><span class="star active"></span></li><li><span class="star "></span></li></ul></div><h4><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Fees - 100</font></font></h4><div class="btn_wrapper"><font style="vertical-align: inherit;"><a href="./book-appointment/aa-salah-eldin-ahmed/?practice_id=Mjkx" class="dd_btn dd_btn_small" title="Rendez-vous au livre"><font style="vertical-align: inherit;">Book Appointment </font></a><a href="./doctor-details/aa-salah-eldin-ahmed/?practice_id=Mjkx" class="dd_btn dd_btn_small" title="Vues"><font style="vertical-align: inherit;">Views</font></a></font></div>';
                htmlText += '</div>';
        htmlText += '</div>';
            */

 /*           
 $(".dd_access_doctor_data").replaceWith(htmlText);

    }
    
  
  
});
}*/
var latitude;
var longitude;
var x = document.getElementById("getLocation");
function locationFunction(){
 if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    alert("Can't Find")
  }
}
function showPosition(position) {
  //alert("Latitude=" + position.coords.latitude + "<br>Longitude: " + position.coords.longitude );
  latitude=position.coords.latitude;
  longitude=position.coords.longitude;
alert(latitude)
}
var globalVariable={

  latt:latitude
};








                   
