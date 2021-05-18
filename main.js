var mouse_Event="empty";
var current_position_of_Mouse_X,current_position_of_Mouse_Y,
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="Red";
width_of_line=1;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("Colour").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
    mouse_Event="mousedown";

}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouse_Event="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouse_Event="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){

    current_position_of_Mouse_X=e.clientX-canvas.offsetLeft;
    current_position_of_Mouse_Y=e.clientY-canvas.offsetTop;

    if(mouse_Event=="mousedown"){

console.log("last position of x and y coordinates are, ");
console.log("x= "+current_position_of_Mouse_X+"y= "+current_position_of_Mouse_Y);


ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
ctx.arc(current_position_of_Mouse_X,current_position_of_Mouse_Y,radius,0,2*Math.PI);
ctx.stroke();


    }
    
}


function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

}