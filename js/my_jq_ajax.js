

$(document).ready(function(){



    function showDpt(){
        $.ajax({
            url:"showDpt.php",
            method:"GET",
            dataType:"json",
            success:function(data){
               
                let msg;
    
                for(i=0;i<data.length;i++){
                     msg +="<option value="+ data[i].id +">"+ data[i].dpt+"</option>";
                     //console.log(data[i].id);
                }
                $("#dpt").html(msg);
                $("#Edpt").html(msg);
                
            }
        });
    }
    
    showDpt();

///////// Read data from database /////////
function showData(){
    $.ajax({
        url:"showData.php",
        method:"GET",
        dataType:"json",
        success:function(data){
           
            let msg;

            for(i=0;i<data.length;i++){
                 msg += "<tr>"+ 

                "<td>"+ data[i].sid +"</td>"+
                "<td>"+ data[i].name +"</td>"+
                "<td>"+ data[i].dpt +"</td>"+
                "<td>"+ "<a class='btn btn-success row_edit' data-bs-toggle='modal' data-bs-target='#exampleModalEdit' edit_id=" + data[i].id + " href='#' role='button'>EDIT</a>" +"</td>"+
                "<td>"+ "<a class='btn btn-danger row_del' del_id=" + data[i].id + " href='#' role='button'>DELETE</a>" +"</td>"+
                
                "</tr>";

            }
            $("#tbody").html(msg);
            
        }
    });
}

showData();


// insert student information 

$("#btn").click(function(e){
    e.preventDefault();
    console.log("Button Clicked");

    let sid=$("#sid").val();
    let name=$("#name").val();
    let dpt=$("#dpt").val();

    console.log(dpt);

    mydata={sid:sid,name:name,dpt:dpt};  // Create object
    
    // Ajax code //

    $.ajax({
        url:"insert.php",
        method:"POST",
        data:JSON.stringify(mydata),
        success:function(data){
           // console.log(data);
            let msg= "<div style='text-align: center;font-family: auto;font-size: 20px;color: green;'>"+ data +"</div>";
            $("#msg").html(msg);
            $("#insert_form")[0].reset();
            showData();
            
        }
    });

    
   

});


////// Delete Student /////////

$("#tbody").on("click",".row_del",function(){

   // console.log("sddfwefdwede");

    let id=$(this).attr("del_id"); /// finding delete row id
   // console.log(id);
    mydata={id:id};
    $.ajax({
        url:"delete.php",
        method:"POST",
        data:JSON.stringify(mydata),
        success:function(data){
            let msg="<h3 class='del-msg' style='text-align: center;margin-top: -18px;margin-bottom: 18px;font-family: initial;color: orange;font-weight: 600;'>"+data+"</h3>";

            $("#delete_msg").html(msg);
            showData();
        }

    });

   

});

////////// Edit Student ///////

$("#tbody").on("click",".row_edit",function(){
   
    // console.log("sddfwefdwede");
   
 
     let id=$(this).attr("edit_id"); /// finding delete row id

     /// Finding Specific Id based DATA

     mydata={id:id};

     function showIdBasedData(){
        $.ajax({
            url:"showIdBasedData.php",
            method:"POST",
            data:JSON.stringify(mydata),
            dataType:"json",
            success:function(data){
               // 
               showDpt();
                $("#Esid").val(data.sid);
                $("#Ename").val(data.name);
                $("#dpt").val(data.dpt);
                
               // console.log(data.dpt);

            }
        });
    }

    // 
    showIdBasedData();
   
    //// Edit Information Change
    $("#Editbtn").click(function(e){
        e.preventDefault();
        console.log("Edit Button Clicked");
    
        let sid=$("#Esid").val();
        let name=$("#Ename").val();
        let dpt=$("#Edpt").val();
    
        console.log(sid);
    
        mydata={id:id,sid:sid,name:name,dpt:dpt};  // Create object
        
        // Ajax code //
        
    
        $.ajax({
            url:"edit.php",
            method:"POST",
            data:JSON.stringify(mydata),
            success:function(data){
               // console.log(data);
                let msg= "<div style='text-align: center;font-family: auto;font-size: 20px;color: green;'>"+ data +"</div>";
                $("#Emsg").html(msg);
                $("#insert_form")[0].reset();
                showData(); 
                
            }
        });
    
       
       
    
    });
    
 
 });


/////////// showing all department for input field ////


showData();



});