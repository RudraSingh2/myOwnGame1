class Game{
    constructor(){
        this.gameState = 0;
    }
    start(){
        if(this.gameState === 0){
           form = new Form();
           form.display();
        }
        
    }
    play(){
       console.log("Inside play function"); 
    }
}