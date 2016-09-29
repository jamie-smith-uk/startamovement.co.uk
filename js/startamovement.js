// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function sendContactForm(){
  alert("Hello");
}

$('#mc-embedded-subscribe-form').submit(function (e) {
console.log("Sending Form ...")
e.preventDefault();
$.ajax(
      {
        url: 'http://startamovement.us1.list-manage.com/subscribe/post-json?u=15cc8acac031e12c104e51725&amp;id=b9fecd1c28&c=?',
        data: $('#mc-embedded-subscribe-form').serialize(),
        dataType: 'jsonp',
        success: function (data) {
           if (data['result'] != "success") {
                //ERROR
                console.log(JSON.stringify(data));
                $('#error').html(data['msg']);
           } else {
                //SUCCESS - Do what you like here
                console.log("Success!")
           }
        }
      }
      );
  return false;
});
