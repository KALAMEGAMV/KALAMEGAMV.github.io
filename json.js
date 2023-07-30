

function sendmail(){
    let fullName =document.getElementById("name").value;
    let userEmail =document.getElementById("email").value;
    let userMessage =document.getElementById("message").value;
      var contactParams={
        from_name:fullName,
        to_mail:userEmail,
        message:userMessage};

      
      emailjs.send("service_wlr75pm","template_kpnfddr",contactParams,"5ccNrXPhuNNAhiDg0")
      .then(function(res){
        alert("Success "+res.status);
      },function(err){
        alert("failed "+err.status);
      });
    }