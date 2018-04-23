var page = 1;
$("document").ready(function(){
    //
        $.ajax({
                type: 'POST',
                url:"http:localhost:8080/webAPI/show-book-name",
                data: { 
                    bookNumber: 20,
                    page:1    
                    }, 
                dataType:'JSON',
                success:function(data){
                    $("#table-content").html(maketable(data));
                    var htmlcode = '<a onclick="topage('+2+')" class="active">Next Page</a>';
                    $("#paging").html(htmlcode);
                } 
            }
        );

    $("#start_search").on('click',function(){
        var keyword = $("#search_bar").val();
        $.ajax({
            type:'POST',
            url:'http:localhost:8080/webAPI/search-book-name',
            data:{
                keySearch:keyword
            },
            dataType:'JSON',
            success: function(data){
                $("#table-content").html(maketable(data));
            }
        });
    });
    
});


function maketable(data){
     var htmlcode ='<table id="list_table" class="table table-hover table-border">'
                     +'<thead>'
                         +'<td class="id" style="width:10%;"> ID </th>'
                         +'<td style="width:80%;"> Tên sách </th>'
                         +'<td style="width:10%;"> Số lượng </th>'
                         +'<td style="width:18%;"> </th>'
                     +'</thead>';
     htmlcode+=  '<tbody>';
   // var htmlcode = '';
    var i;
    for(i = 0 ; i < data.books.length;i++){
        htmlcode+='<tr >';
        htmlcode+='<td onclick="detail('+data.books[i].id+','+data.books[i].quantity+')" class="id">'+data.books[i].id+'</td>';
        htmlcode+='<td onclick="detail('+data.books[i].id+','+data.books[i].quantity+')">'+data.books[i].book_name+'</td>';
        htmlcode+='<td onclick="detail('+data.books[i].id+','+data.books[i].quantity+')" id="quantity">'+data.books[i].quantity+'</td>';
        htmlcode+='<td><button id="borrow" class="btn btn-primary" onclick="borrow('+data.books[i].id+','+data.books[i].quantity+')">Đặt sách</button></td>';
        htmlcode+='</tr>';
    }
    htmlcode+='</tbody>'+'</table>';
    return htmlcode;
}
function borrow(id,quantity){
        if(quantity>2){  
            $.ajax({
                type : 'POST',
                url:"http:localhost:8080/webAPI/borrow-book",
                data:{
                    bookID:id,
                    bookQuantity:1,
                },
                dataType:'JSON',
                success:function(data){
                    alert("success");
                }
            });
        }
        else{
            alert("fail");
        }
}

function detail(id){
    $.ajax({
        type : 'POST',
            url:"http:localhost:8080/webAPI/book-detail",
            data:{
                bookID:id
            },
            dataType:'JSON',
            success:function(data){
                showdetail(data);
            }
    });

}
function showdetail(data){
    var htmlcode = '<h4>'+data.book_detail[0].book_name+'</h4>'
                    +'<br>'
                    +'<p>'+data.book_detail[0].description+'</p>'
                    
    $("#contain-all").html(htmlcode);

}
function topage(number){
    $.ajax({
        type : 'POST',
            url:"http:localhost:8080/webAPI/show-book-name",
            data: { 
                bookNumber: 20,
                page:number   
                }, 
            dataType:'JSON',
            success:function(data){
                page = number;
                $("#table-content").html(maketable(data));
                if(page >1){
                var htmlcode = '<a onclick="topage('+(page-1)+')" class="active" href="#">Prev Page</a>';
                    htmlcode+='<a>';
                    htmlcode+= '<a onclick="topage('+(page+1)+')" class="active" href="#">Next Page</a>';
                $("#paging").html(htmlcode);
                }
                else{
                    var htmlcode = '<a onclick="topage('+page+1+')" class="active" href="#">Next Page</a>'
                    $("#paging").html(htmlcode);
                    
                }
            }
    });
}