function setup() {
  createCanvas(400, 400);
  background(175, 194, 239);
  
  
  let numShapes = 4;
  let beeX = 0;
  let beeY = 0;
  var exp = 0;
  
  function makeBee(){
    //wings
    strokeWeight(1.5);
    fill(220, 222, 231);
    ellipse(beeX-5, beeY-25, 25, 30);
    fill(220, 242, 251);
    ellipse(beeX+10, beeY-25, 25, 30);
    
    //body and face
    fill(255, 158, 58);
    ellipse(beeX, beeY, 60, 50);
    fill(255, 210, 58);
    strokeWeight(0);
    ellipse(beeX - 4, beeY - 3, 50, 40);
    strokeWeight(2);
    
    //feet
    line(beeX-20, beeY+20 ,beeX-22, beeY+22);
    line(beeX-10, beeY+24 ,beeX-11, beeY+27);
    line(beeX+5, beeY+25 ,beeX+6, beeY+28);
    line(beeX+15, beeY+22 ,beeX+17, beeY+25);
    
    
    fill(0);
    circle(beeX + 5, beeY, 5);
    circle(beeX - 25, beeY, 5);
    strokeWeight(1);
    triangle(beeX+31, beeY+3, beeX+31, beeY-2, beeX+37, beeY);
    noFill();
    strokeWeight(3);
    bezier(beeX+10, beeY-22, beeX+20, beeY-10, beeX+20, beeY+10, beeX+10, beeY+22);
    bezier(beeX+20, beeY-18, beeX+27, beeY-10, beeX+27, beeY+10, beeX+20, beeY+18);
  }
  
  
  
  function giveExpression (){
    //happy
    if(exp == 0){
      fill(255, 210, 58);
      strokeWeight(2);
      arc(beeX - 10, beeY, 10, 10, TWO_PI, PI, OPEN);
    }
    //sad
    else if (exp == 1) {
      fill(255, 210, 58);
      strokeWeight(2);
      arc(beeX - 10, beeY + 5, 10, 10, PI, TWO_PI, OPEN);
      line(beeX-30, beeY-5, beeX-22, beeY-10);
      line(beeX, beeY-10, beeX+10, beeY-5);
    }
    //angry
    else{
      fill(255, 210, 58);
      strokeWeight(2);
      line(beeX-15, beeY+5, beeX-5, beeY+5);
      line(beeX-30, beeY-10, beeX-20, beeY-5);
      line(beeX, beeY-5, beeX+10, beeY-10);
    }
  }
  
  
  for (var i=0; i< numShapes; i++) {
    
    beeX = (width / numShapes) * i + 50;
    beeY = (height / numShapes) * i + 50;
    
    makeBee();
    exp = int(random(0, 3));
    giveExpression();
  }
  
  numShapes = 2
  
  for(i=0; i<numShapes; i++){
    beeX = (width / numShapes / 2) * i + 50;
    beeY = (height / numShapes / 2) * i + 250;
    
    makeBee();
    exp = int(random(0, 3));
    giveExpression();
  }
  for(i=0; i<numShapes; i++){
    beeX = (width / numShapes / 2) * i + 250;
    beeY = (height / numShapes / 2) * i + 50;
    
    makeBee();
    exp = int(random(0, 3));
    giveExpression();
  }
}