var users=[];
			axios.get("https://jsonplaceholder.typicode.com/users").then(function (response){
			users=response.data;
			
			var data="";
			var consimages=["pool/pic1.jpg","pool/pic2.jpg","pool/pic3.jpg","pool/pic4.jpg","pool/pic5.jpg","pool/pic6.jpg","pool/pic7.jpg","pool/pic8.jpg","pool/pic9.jpg","pool/pic10.jpg"];
			for(var i=0;i<users.length ;i++){
				
				data= data + `<div class="card col-lg-2 col-md-2 col-sm-2 well card1 " >
								<img class="card-img-top img-responsive img-rounded cardimg" src="${consimages[i]}" alt="Card image cap">
								<div class="card-body">
									<h4 class="card-title text-center">${users[i].name}</h4>
									<h5 class="text-center card-body">Company:${users[i].company.name}</h5>
									<button class="cardbutton" onclick="showdata(${i})" data-toggle="modal" data-target="#myModal" >Contact Info</button>
									
								</div>
							</div>`
			}
			document.getElementById("consult").innerHTML=data;
			
		});
		function showdata(index){
			var newdata=`<div id="myModal" class="modal fade" role="dialog">
							<div class="modal-dialog">
								<div class="modal-content">
									<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal">&times;</button>
											<h4 class="modal-title">Consultant Name : ${users[index].name}</h4>
									</div>
									<div class="modal-body">
										<span >Email Id:${users[index].email}</span><br>
										<span >Phone Number:${users[index].phone}</span><br>
										<span>Website:${users[index].website}</span>
									</div>
									<div class="modal-footer">
										<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
									</div>
								</div>

							</div>
						</div>`;
		
			document.getElementById("window").innerHTML=newdata;
		}
		
		function validate(){
			document.getElementById("error1").innerHTML="";
			document.getElementById("error2").innerHTML="";
			var name=document.getElementById("name").value;
			var email=document.getElementById("email").value;
			var flag=false;
			if(name==""){
				document.getElementById("error1").innerHTML= "Please enter a valid name";
				//alert("Please enter a valid name");
			}
			if(email==""){
				document.getElementById("error2").innerHTML="Please enter a valid  email";
				//alert("Please enter a valid email");
			}else{
				length=email.length;
				for(var i=0;i<length;i++){
					if(email.charAt(i)=="@"){
						flag=true;
					}
				}
			}
			if(flag==false)
			{
				document.getElementById("error2").innerHTML="Please enter a valid  email";
				//alert("Please enter a valid email");
				
			}
			if(name!=""&& flag==true){
				document.getElementById("success").innerHTML="Sucessfully submitted ";
			}
			
		}