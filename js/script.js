
$(document).ready(function(){
    $(".click1").click(function(){
        $(".panel1").slideToggle("slow");
    });
    $(".click2").click(function(){
        $(".panel2").slideToggle("slow");
    });
    $(".click3").click(function(){
        $(".panel3").slideToggle("slow");
    });
    $(".click4").click(function(){
        $(".panel4").slideToggle("slow");
    });
    $(function () {
  $('[data-toggle="tooltip"]').tooltip()
});
        $('[data-toggle="popover"]').popover();





            $("form[name='registration']").validate({
          rules: {
            name: {
              required: true,
             minlength: 3
            },

            email: {
              required: true,
              email: true
            },
            message: {
              required: true
            }
          },
          messages: {


            name: {
       required: "Please specify your name",
       minlength: "Your Name must be at least 3 characters long"
     },
            email: "Please specify a valid email address",
           message: "Please specify your message"
          },
          submitHandler: function() {
            alert("Form Submitted successfully");
          }
        });


});
