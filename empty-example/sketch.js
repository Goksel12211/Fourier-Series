function setup() {
background(0);
   createCanvas(1000, 400);
  }

  let radius=50;
  let angle=0;
  let wave=[];
  let x,y;
  /*  First circle:4 (sin * x ) / PI 
      Second circle:4 (sin * 3x ) / 3*PI
      Third circle:4 (sin * 5x ) / 5*PI
  */

function setupHelper(){
  background(255 ,255,255);
  translate(200,200);
  stroke(255);
  fill(0);

}
function draw() {
  
  setupHelper();
  firstEllipse();
  waveDrawer();
  angle=angle+0.1;

}

function waveDrawer()
{

  translate(200,0);
  beginShape();
    noFill();
    for( let i=0;i<wave.length;i++){
    vertex(i,wave[i]);
  stroke(0);
      line(x-200,y,0,wave[0]);

    }

  endShape();




}



function firstEllipse(){
   ellipse(0,0,radius*2);
   x=radius*cos(angle);
   y=radius*sin(angle);
  

   
  wave.unshift(y);
  
  ellipse(x,y,5);
  stroke(255,0,0);
  line(0,0,x,y);


}
