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

let xhr = new XMLHttpRequest;
    //Call the open function, GET-type of request, url, true-asynchronous



var url= ''
    xhr.open('POST',"https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+latitude+","+longitude+"&radius=10000&types=doctor&keyword=Cardiologist&key=AIzaSyDIH6VyEfL8bbFi5F5Srn5r3pFfYFyPpf0", true)
    //call the onload 
    xhr.onload = function() 
        {
            //check if the status is 200(means everything is okay)
            if (this.status === 200) 
                {
                    //return server response as an object with JSON.parse
                    var obj=JSON.parse(this.responseText);
for (var i = 0; i < obj.results.length; i++){
var htmlText = '';
      
//var url=https://project-tideas.com/images250_/call-the-doctor-clipart-15.jpg
htmlText +='<div class="dd_doctor_box">';
htmlText += '<div class="doc_image" style="background-image:url("https://project-tideas.com/images250_/call-the-doctor-clipart-15.jpg");"><img src="https://project-tideas.com/images250_/call-the-doctor-clipart-15.jpg" alt=""></div>';
htmlText +='<div class="doc_detail"><h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">'+obj.results[i].name+'</font></font></h3>';
//htmlText +='<p id="doc-spaclility"style="color:grey">'+Cardiologist+'</p>'
htmlText +='<p id="doc-hospitaladd">'+obj.results[i].vicinity+'</p>'
htmlText +='<div class="dd_review_rating"><ul><li><span class="star active"></span></li><li><span class="star active"></span></li><li><span class="star active"></span></li><li><span class="star active"></span></li><li><span class="star "></span></li></ul></div><h4><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Rating:-'+obj.results[i].rating+'</font></font></h4><div class="btn_wrapper"><font style="vertical-align: inherit;"><a href="./book-appointment/aa-salah-eldin-ahmed/?practice_id=Mjkx" class="dd_btn dd_btn_small" title="Rendez-vous au livre"><font style="vertical-align: inherit;">Book Appointment </font></a><a href="./doctor-details/aa-salah-eldin-ahmed/?practice_id=Mjkx" class="dd_btn dd_btn_small" title="Vues"><font style="vertical-align: inherit;">Views</font></a></font></div>';
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

            
  $(".dd_access_doctor_data").append(htmlText);
        }}
                }
    //call send
    xhr.send();
}
$(document).ready(function() {
  $(".panel-body").click(function() {
    var test = $(this).find(".list-group-item.list_sub_cate").text();
    console.log(test);
  });
});
