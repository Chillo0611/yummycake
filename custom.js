$(document).ready(function(){
      $("#formValidation").validate({
        rules:{
            firstname:{
                minlength: 6
            },
            lastname:{
                minlength: 2
            },
            email:{
                email:true
            },
            phone:{
                number:true,
                minlength: 10,
                maxlength:10,
            },
            formMessage:{
                minlength: 100,
            }
        },
        messages:{
            firstname:{
            required: "Vui lòng nhập họ của bạn",
            minlength:"Vui lòng nhập họ ít nhất 6 ký tự"
            },
            lastname:{
                required: "Vui lòng nhập tên của bạn",
                minlength:"Vui lòng nhập tên ít nhất 2 ký tự"
            },
            email:"Vui lòng nhập email đủ '.@gmail.com' của bạn",
            phone:{
                required: "Vui lòng nhập SĐT của bạn",
                minlength:"Vui lòng nhập SĐT đủ 10 số",
                maxlength:"Vui lòng nhập SĐT đủ 10 số"
            },
            formMessage:{
                required: "Vui lòng nhập nội dung của bạn",
                minlength:"Vui lòng nhập nội dung ít nhất 100 ký tự"
            }
        },       

  submitHandler: function(form) {
    form.submit();
  }
 });
})
