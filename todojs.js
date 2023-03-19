//-1 show the input box الاكشن يتطبق على العلامه
//احط onclick عشان تتطبق عل  اي شئ لو صار جديد
$(".fa-plus").click(function(){ 
    $("input").fadeToggle();
})

  //fade تخفي وتظهر بشويش
//2- check off tasks اشطب التاسك

$("li").click(function(){
   // اذا الشئ موجود شيله واذا موجود حطهtoggle
    $(this).toggleClass("checked");
})
//3- show delete icone
$("ul").on("mouseover","li span",(function(){
    $(this).css("width","40px");
    $(this).css("opacity","1.0");//  لما تطلع
    
}))
//عشان ترجع مره ثانيه
$("ul").on("mouseout","li span",(function(){
    $(this).css("width","0px");
    $(this).css("opacity","0.0");

}))
//4-delete task
//اختار الايقونه عشان تنحذف لما اضغط عليها
$("ul").on("click","li span",(function(){
    //parent يعني روح للي قبله
    //fadeout اعطيها قيمتين مدة المدة وفنكشن احط الاكشن
    $(this).parent().fadeOut(500,function(){
$(this).remove();
    });
}))

//5-add new task
//راح  ياخذ قيمة الشئ اللي انكتب عشان يضيفه للسته اللي قبل الفنكشن ماتاخذ$("input").keypress(function(event){
    // اذا الايفنت كان 13 يعني ضغط الانتر اللي هو في الجافا سكريبت  رمزه 13if(event.w===13){
        //الايفنت يعني ايش الضغطه لما يكتب هي ايفنت ويضغط انتر  اما فال اي حاجه تجيب لي القيم اللي موجوده في الانبتlet newTask =(this).val();
        //وضيف لي عليها القيمهul اختار ال 
        //  واضيف التاسك كنص جديدliاعطيها تنسيق ال $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>"+newTask+"</li>");
        //لما اعطيها قيمه تصير زي فنشكن الست تغير لي المخزن لان هي اللي فالاساس فيها القيمه$("input").val("");}})

        $("input").keypress(function(event){

            if(event.which === 13){
                let newTask = $(this).val();
            $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" +newTask+" </li>");
          
            
            }
            
            })