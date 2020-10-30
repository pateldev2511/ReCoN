function myFunction() {
  var email;

  email = document.getElementById("textEmail").value;

      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

      if (reg.test(textEmail.value) == false) 
      {
      document.getElementById("demo").style.color = "red";
          document.getElementById("demo").innerHTML ="Invalid E-Mail";

          setTimeout(function () {
            document.getElementById('demo').style.display='none';
        }, 2000);
      }

 return true;
}
