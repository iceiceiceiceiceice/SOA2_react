$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

$(document).ready(function(){
    $("button").on('click',function(){
        var name = $("#user").val();
        var pass = $("#pass").val();
        
        // $.ajax({
        //     type: 'POST',
        //     url:"data.json",
        //     data: { 
        //         name: name,
        //         pass: pass    
        //         }, 
        //     dataType:'JSON',
        //     success:function(data){
                   
                        $("body").addClass("w3-light-grey");
                        var htmlcode;
                        htmlcode ='<div class="w3-bar w3-top w3-black w3-large" style="z-index:4">'
                                    +'<button class="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onclick="w3_open();"> Menu</button>'
                                    +'<span class="w3-bar-item w3-right">Logo</span>'
                                +'</div>'
                                +'<nav class="w3-sidebar w3-collapse w3-white w3-animate-left" style="z-index:3;width:300px;" id="mySidebar">'+'<br>'
                                    +'<div class="w3-container w3-row">'
                                    +'<div class="w3-col s4">'
                                    +'</div>'
                                    +'<div class="w3-col s8 w3-bar">'
                                        +'<span>Welcome<strong></strong></span><br>'
                                        +'<br>'
                                        +'<a href="#" class="w3-bar-item w3-button">'+'<i class="fa fa-envelope">'+'</i>Home</a>'
                                        +'<a href="#" class="w3-bar-item w3-button">'+'<i class="fa fa-cog">'+'</i>Logout</a>'
                                    +'</div>'
                                    +'</div>'
                                    +'<hr>'
                                    +'<div class="w3-container">'
                                
                                    +'</div>'
                                    +'<div class="w3-bar-block">'
                                    +'<a href="#" class="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" onclick="w3_close()" title="close menu">'+'<i class="fa fa-remove fa-fw">'+'</i>  Close Menu</a>'
                                    +'<a href="#" class="w3-bar-item w3-button w3-padding w3-blue" onclick="change()">'+'<i class="fa fa-users fa-fw">'+'</i>  Overview</a>'
                                    +'<a href="#" class="w3-bar-item w3-button w3-padding" >'+'<i class="fa fa-eye fa-fw">'+'</i>  Views</a>'
                                    +'<a href="#" class="w3-bar-item w3-button w3-padding">'+'<i class="fa fa-users fa-fw">'+'</i>  Traffic</a>'
                                    +'<a href="#" class="w3-bar-item w3-button w3-padding">'+'<i class="fa fa-bullseye fa-fw">'+'</i> Geo</a>'
                                    +'</div>'
                                +'</nav>'
                                
                                

                                +'<div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay">'+'</div>'
                                
                        
                                +'<div class="w3-main" style="margin-left:300px;margin-top:43px;">'
                                
                            
                                    +'<header class="w3-container" style="padding-top:22px">'
                                    +'<h5>'+'<b>'+'<i class="fa fa-dashboard">'+'</i> My Dashboard </b>'+'</h5>'
                                    +'</header>'
                                
                                +'</div>';
                        $('#root').html(htmlcode);        
                    }); 
                
      //  });
//    });

});