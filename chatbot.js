$(document).ready(function(){
    $('#sendbtn').bind("click",sendmsg);
    //bind "send" action with button
    function sendmsg(){
            var txt=$("#quest").val();            
            //Get input message
            if (txt.length===0){
                alert("The sending messege can not be empty!");
            }
            else{

            var option=$("<option></option>");
            //Set a new option
            var len=txt.length;
            option.css("width",len*8+"px");
            option.css("marginLeft",340-len*8-50+"px");
            //Setting option form
            option.html(txt);
            //Get the continer of the option
            $("#clicontent").append(option);
            //Add option on the page

            $(".sendtext").val("");
            //Clear text
            
            var apigClient = apigClientFactory.newClient({
                accessKey: 'AKIAJPNA77FOQV73WOVA',
               
            });
            var body={
                    "question":txt
      
             };

             var params={}
             var additionalParams={}
            apigClient.chatbotPost(params,body,additionalParams)
                .then(function(data){
                    
                    data=data['data']
                    var option=$("<option></option>");
                    
                    var len=data.length;
                    option.css("width",len*6.8+"px");
                    option.css("marginleft",5+"px");
                    //option.css("background",rgba(220,220,220) );
                    //Setting option form
                    option.html(data);
                    //Get the continer of the option
                    $("#clicontent").append(option);
              }).catch(function(data){
                    console.log(data)
                });

            }        
    }    

    $(document).keydown(function(event){
           var text = $("#quest").val();
           if(event.keyCode == 13){
                           sendmsg();
                  }
            });
});
