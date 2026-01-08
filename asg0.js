function main(){
  //retrieve the <canvas> element
  //var canvas = document.getElementById('example');
  //if (!canvas){
    //console.log('Failed to retrieve the <canvas> element');
    //return false;
  //}

  //get the rendering context for 2DCG
  //var ctx = canvas.getContext('2d');

  //draw a blue rectangle
  //ctx.fillStyle = 'rgba(0,0,255,1.0)'; //set to blue color
  //ctx.fillRect(120, 10, 150, 150);

  //instantiate a vector
  const v1 = new Vector3([2.25,2.25,0]);

  //call drawVector using v1
  drawVector(v1, "red")  
}


//drawVector function
function drawVector(v, color){
  //retrieve the <canvas> element
  var canvas = document.getElementById('example');
  
  //get the rendering context for 2DCG
  var ctx = canvas.getContext('2d');

  //make canvas black
  ctx.fillStyle = "black"
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.beginPath();
 
  //start at the center of canvas (200,200) if canvas is (400,400)
  ctx.moveTo(200,200);

  //scale v by 20
  v.elements[0] = v.elements[0] * 20
  v.elements[1] = v.elements[1] * 20
   
  //the end point of (x,y) is the length of vector v offset by origin
  ctx.lineTo(v.elements[0] + 200, 200-v.elements[1]);
  //ctx.lineWidth = 5;
  ctx.strokeStyle = color;
  ctx.stroke();

}