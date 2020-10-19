class BottomSide extends DustbinSide{//inheritance
    //the overriding part is done below
    constructor(x, y, width, height){
        super(x, y, width, height); //refers to the constructor of the parent class 
        this.image = loadImage("dustbin_green.png");    
    }

    display() {
        imageMode(CENTER);
        image(this.image, 1100, 580, 210, 200);
        super.display();//refers to the display function of the parent class
    }
}