var fir,mor;
 function setup() { 
   createCanvas(800,800);
    fir= createSprite(400, 200, 100, 50);
     mor=createSprite(200,200,50,150);
      fir.debug=true;
       mor.debug=true;
        fir.shapeColor="green"; 
        mor.shapeColor="green";
       }
        function draw() {
          background("black");
           mor.x=World.mouseX; 
           mor.y=World.mouseY;
            console.log(mor.x,fir.x);
             if(mor.x-fir.x<mor.width/2+fir.width/2&&
              fir.x-mor.x<mor.width/2+fir.width/2&&
              mor.y-fir.y<mor.height/2+fir.height/2&&
              fir.y-mor.y<mor.height/2+fir.height/2){
                fir.shapeColor="blue"; mor.shapeColor="blue";
               }
                else{
                   fir.shapeColor="green";
                 mor.shapeColor="green";
                
                } 
                drawSprites();
               }