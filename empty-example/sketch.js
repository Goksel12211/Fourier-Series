
 let sliderForAmountCircle=5;
 let radius=50;
 let angle=0;
 let wave=[];
 let x,y;
 let boundry=5;

function setup() {
background(0);
   createCanvas(1000, 400);
  
   sliderForAmountCircle = createSlider(0, 255, 100);
   sliderForAmountCircle.position(130, 300);
  }
 
  /*  First circle:4 (sin * x ) / PI 
      Second circle:4 (sin * 3x ) / 3*PI
      Third circle:4 (sin * 5x ) / 5*PI
  */
 
function draw() {
  
  setupHelper();
  FourierSolves();
  waveDrawer();
  waveCleaner();
  angle=angle+0.04;

}

function addSliderForAmountCircle(){
  boundry=sliderForAmountCircle.value();
  if(boundry==0)
  boundry=1;
}


function setupForFourierSolves(){
  n=1;
  x=0;
  y=0;

}
function RegisterCurrentXandYtoPrevious(){
  previousx=x;
  previousy=y;
  
}
function FourierSolves(){
  setupForFourierSolves();
  addSliderForAmountCircle();
  
  for(let i=0;i<boundry;i++){
  radius=(4/(Math.PI*n)) * 50;
  RegisterCurrentXandYtoPrevious();
  ellipse(x,y,2*radius);
    
  noFill();

  x= radius*cos(angle*n)+x;
  y=radius*sin(angle*n)+y;

  drawLineCircleCenterToCircleCenter();
  n=n+2;

}
wave.unshift(y);

}

function drawLineCircleCenterToCircleCenter(){

  line(x,y,previousx,previousy);
  stroke(255,0,0);
  line(0,0,x,y);
  
}
function waveDrawer()
{

  translate(200,0);
  beginShape();
    noFill();
    for( let i=0;i<wave.length;i++){
    vertex(i,wave[i]);
  
      line(x-200,y,0,wave[0]);

    }

  endShape();

}

function waveCleaner(){
  if(wave.length>300){
    wave.pop();
  }
}

function setupHelper(){
  background(255 ,255,255);
  translate(200,200);
  stroke(255);
  fill(0);

}