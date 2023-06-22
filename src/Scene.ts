import { AnimatedSprite, Container, Sprite, Texture } from "pixi.js";
import { ElfJumpHongo } from "./ElfJumpHongo";


export class Scene extends Container{

    constructor(){

        super();
        const elfJumpHongo: ElfJumpHongo = new ElfJumpHongo();
	
	    elfJumpHongo.scale.set(0.9);
	    elfJumpHongo.x = 350;
	    elfJumpHongo.y = 350;
        
        //this.addChild(elfJumpHongo);
        const Camino: Sprite = Sprite.from("CaminoD");
        Camino.scale.set(0.19,0.23);
        this.addChild(Camino);
        const gatoAnimated: AnimatedSprite = new AnimatedSprite([

                Texture.from("GatoJump1"),
                Texture.from("GatoJump2"),
                Texture.from("GatoJump3"),
                Texture.from("GatoJump4"),
                Texture.from("GatoJump5"),
                Texture.from("GatoJump6")

        ],true
        );
        gatoAnimated.scale.set(0.3);
	    gatoAnimated.x = 250;
	    gatoAnimated.y = 450;
        gatoAnimated.play();
        gatoAnimated.animationSpeed = 0.2;
        this.addChild(gatoAnimated);
        
	   
    }

}