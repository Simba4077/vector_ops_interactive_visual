/*
Name: Mira Saini
Email: misaini@ucsc.edu
Notes to Grader: Check console log for necessary prints.
*/

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

  //retrieve the <canvas> element
  var canvas = document.getElementById('example');
  
  //get the rendering context for 2DCG
  var ctx = canvas.getContext('2d');

  //make canvas black
  ctx.fillStyle = "black"
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //call drawVector using v1
  drawVector(v1, "red")  ;
}


//drawVector function
function drawVector(v, color){
  //retrieve the <canvas> element
  var canvas = document.getElementById('example');
  
  //get the rendering context for 2DCG
  var ctx = canvas.getContext('2d');

  //make canvas black
  //ctx.fillStyle = "black"
  //ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.beginPath();
 
  //start at the center of canvas (200,200) if canvas is (400,400)
  ctx.moveTo(200,200);

  //scale v by 20
  v.elements[0] = v.elements[0] * 20;
  v.elements[1] = v.elements[1] * 20;
   
  //the end point of (x,y) is the length of vector v offset by origin
  ctx.lineTo(v.elements[0] + 200, 200-v.elements[1]);
  //ctx.lineWidth = 5;
  ctx.strokeStyle = color;
  ctx.stroke();

}


function handleDrawEvent(){
  //retrieve the <canvas> element
  var canvas = document.getElementById('example');

  //get the rendering context for 2DCG
  var ctx = canvas.getContext('2d');


  //called when user clicks on Draw button
  //clear canvas (so delete all vectors)
  ctx.rect(0,0,canvas.width, canvas.height);
  ctx.fillStyle='black';
  ctx.fill();
  
  //get values from text boxes to create new v1
  var xvalue = document.getElementById('x').value;
  var yvalue = document.getElementById('y').value;

  //get values from text boxes to create new v2
  var x2value = document.getElementById('x2').value;
  var y2value = document.getElementById('y2').value;
  
  //make v1 from values
  const v1 = new Vector3([xvalue, yvalue, 0]);

  //make v2 from values
  const v2 = new Vector3([x2value, y2value, 0]);

  //call drawVector
  drawVector(v1, "red");
  drawVector(v2, "blue");
}


function angleBetween(v1, v2){
  var dotproduct = Vector3.dot(v1, v2);
  //dot(v1,v2) = ||v1|| * ||v2|| * cos(alpha)
  //dot(v1,v2) / (||v1|| * ||v2||) = cos(alpha)
  //cos^-1(dot(v1,v2) / (||v1|| * ||v2||)) = alpha
  const angle = (Math.acos(dotproduct / (v1.magnitude() * v2.magnitude()))) * (180/Math.PI); 
  console.log("Angle: ",angle);
}

function areaTriangle(v1,v2){
  var crossproduct = Vector3.cross(v1,v2);
  var para_area = crossproduct.magnitude();
  const tri_area = para_area / 2;
  console.log("Area of the triangle: ",tri_area);
}


function handleDrawOperationEvent(){
  //called when second draw button is clicked
  //retrieve the <canvas> element
  var canvas = document.getElementById('example');

  //get the rendering context for 2DCG
  var ctx = canvas.getContext('2d');

  //clear canvas (so delete all vectors)
  ctx.rect(0,0,canvas.width, canvas.height);
  ctx.fillStyle='black';
  ctx.fill();
  
  //read values from text boxes to create new v1/v2 and draw
  handleDrawEvent();

  //read value of selector 
  var operation = document.getElementById('operations').value;

  //get values from text boxes to create new v1
  var xvalue = document.getElementById('x').value;
  var yvalue = document.getElementById('y').value;

  //get values from text boxes to create new v2
  var x2value = document.getElementById('x2').value;
  var y2value = document.getElementById('y2').value;
  
  //make v1 from values
  const v1 = new Vector3([xvalue, yvalue, 0]);

  //make v2 from values
  const v2 = new Vector3([x2value, y2value, 0]);

  if(operation==='add'){
    const v3 = v1.add(v2);
    drawVector(v3, "green");
  }

  if(operation==='sub'){
    const v3 = v1.sub(v2);
    drawVector(v3, "green");
  }

  if(operation==='mul'){
    var scalar = document.getElementById('scalar').value;
    const v3 = v1.mul(scalar);
    const v4 = v2.mul(scalar);
    drawVector(v3, "green");
    drawVector(v4, "green");
  }

  if(operation==='div'){
    var scalar = document.getElementById('scalar').value;
    const v3 = v1.div(scalar);
    const v4 = v2.div(scalar);
    drawVector(v3, "green");
    drawVector(v4, "green");
  }

  if(operation==='mag'){
    const v1mag = v1.magnitude();
    const v2mag = v2.magnitude();
    console.log("Magnitude v1: ",v1mag);
    console.log("Magnitude v2: ",v2mag);
  }

  if(operation==='norm'){
    const v1norm = v1.normalize();
    const v2norm = v2.normalize();
    drawVector(v1norm, "green");
    drawVector(v2norm, "green");
  }

  if(operation==='angle'){
    angleBetween(v1,v2);
  }

  if(operation==='area'){
    areaTriangle(v1,v2);
  }

}


