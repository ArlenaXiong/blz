<script src="../js/jquery-1.10.2.js"></script>
	<script src="../bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript">
		 $("#submit").on('click',function(){
			 var user = {
	       		account : {
	          		username:$("#username").val(),
	             	password:$("#password").val()
	         		}};
           			 $.ajax({
				 type:"post",
				 url: "http://localhost:8080/loginAction.action",
						 dataType:"json",
               			 contentType : "application/json;charset=UTF-8",
               			 data:JSON.stringify(user),
				success: function() {
					location.href="adminHomepage.html";
				},
				error:function()
					alert("异常！")
				}
			});
		});
	</script>