import { Container, Sprite } from "pixi.js";


export class ElfJumpHongo extends Container{

    constructor(){
        super();
        const myHongo: Sprite = Sprite.from("myHongo");
        const myElf: Sprite = Sprite.from("myElf");
	    
        myHongo.position.set(0,120);
	    myHongo.scale.set(0.2,0.2);//misma forma de scale
        
        this.addChild(myHongo);
        this.addChild(myElf);

    //myHongo.x = 250;
    //myHongo.y = 350;
	//myElf.x = 300;
    //myElf.y = 100;
	
	
	//myHongo.scale.x = 0.3;
	//myHongo.scale.y = 0.3;
    
	//myElf.scale.set(2,2); //misma forma de scale
	//myElf.scale.x = 2;
	//myElf.scale.y = 2;
    //myHongo.toGlobal(new Point);//saber donde esta posicionado.
	//console.log(myHongo.parent.toGlobal(myHongo.position));// a partir del padre preguntamos donde esta ubicado el hongo.
	
	//consigo el punto del hongo en la posicion que quiero ponerlo.
	//const aux = myHongo.parent.toLocal(new Point(640,360));
	//sete la nueva posicion.
	//myHongo.position.x = aux.x;
	//myHongo.position.y = aux.y;
    }


}