var mouseEvent="empty";


canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
line_width=2;
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    radius=document.getElementById("radius").value;
    line_width=document.getElementById("width").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
 current_x=e.clientX-canvas.offsetLeft;
 current_Y=e.clientY-canvas.offsetTop;

 if(mouseEvent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=line_width;
    ctx.arc(current_x,current_Y,radius,0,2*Math.PI)
    ctx.stroke();
 }

}
canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseLeave";
}