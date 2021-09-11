$(document).ready(function(){
    let add_button=$('#todo_add');
    let data_id=1;
   
   
     /* 
     todo  Kontroller yapılacak clicl functinu içinde
     ve toast metodu çalışacak
     */
    add_button.on('click',function(e){
       let todo_text=$('#todo_input');
       data_id++;
       $('.down__ul').append(
           `<li id="todo_done" data-id=${data_id} class="down__text todo_done">${todo_text.val()}
           <span class="todo_remove" data-id=${data_id}>X</span>
           </li>`
       );
       todo_text.val('')
    });
    $('.down__ul').on('click','.todo_remove',function(e){
       $(this).parents('li').remove();
    })


})