// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the button that opens the modal
var btn_2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

btn_2.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    $('#error').html("");
    $('#success').html("");
    $("#mc_embed_signup").removeClass("blurred");
    $('input[type="submit"]').prop('disabled', false);
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        $('#error').html("");
        $('#success').html("");
        $("#mc_embed_signup").removeClass("blurred");
        $('input[type="submit"]').prop('disabled', false);
    }
}


function sendContactForm(){
  alert("Hello");
}

$('#mc-embedded-subscribe-form').submit(function (e) {
  e.preventDefault();
  $('#error').html("");
  $('#success').html("");
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
                  $("#mc_embed_signup").addClass("blurred");
                  $('input[type="submit"]').prop('disabled', true);
                  $('#success').html("Thank you for joining Start a Movement.</br> We'll be in touch very soon.");

             }
          }
        }
        );
  return false;
});
