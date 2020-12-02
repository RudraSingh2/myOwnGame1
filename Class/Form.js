class Form{
    constructor(){
        this.title = createElement("h1");
        this.rules = createElement("h3");
        this.button = createButton("Play");
        this.state = 0;
    }
    display(){
        background("pink");
        this.title.position(displayWidth/2-100,50);
        this.title.html("Mouse Escape ");
       // this.title.align = "left";
        this.rules.position(displayWidth/2-175,100);       
        this.rules.html("</br><center>Feed the mouse good food</center> </br>'Fish' is Bad Food do not let the mouse eat it!");
        this.button.position(displayWidth/2,displayHeight/2);       
     
        this.button.mousePressed(()=>{
            
            this.title.hide();
            this.rules.hide();
            this.button.hide();           
            game.gameState = 1;   
                 
        });

    }
}