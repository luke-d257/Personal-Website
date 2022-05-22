$(document).ready(function(){
    $(window).on("scroll",function(){
        var scroll = $(window).scrollTop();
        if(scroll>=50){
            $(".sticky").addClass("stickyadd");
        }else{
           $(".sticky").removeClass("stickyadd"); 
        }
    });

})

function ValidateForm()
    {

        if(document.getElementById('Name').value.length==0)
        {
            alert("Please input a name");
            return false;
        }

        if(document.getElementById('email').value.length<4)
        {
            alert("Please input a valid email");
            return false;
        }
        
        if(document.getElementById('message').value.length == 0)
        {
            alert("What's your message?");
            return false;
        }

    }
