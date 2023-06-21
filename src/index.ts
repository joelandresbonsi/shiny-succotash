import { Application, Assets, Container, Point, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 640
});

Assets.add("Clampy", "./clampy.png");
Assets.add("myHongo", "./hongo1.png");
Assets.add("myElf", "./elf.png");

//para que esten las imagenes precargadas:
window.addEventListener("resize", ()=>{
	console.log("resized!");	
	
	const scaleX = window.innerWidth / app.screen.width //1024
	const scaleY = window.innerHeight / app.screen.height //1024
	const scale = Math.min(scaleX, scaleY); // la menor entre las dos
	
	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);

	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2);
	const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2);



	app.view.style!.width = gameWidth + "px";
	app.view.style!.height = gameHeight + "px";
	const viewapp = app.view as HTMLCanvasElement;
	viewapp.style!.marginLeft = marginHorizontal + "px";
	viewapp.style!.marginRight = marginHorizontal + "px";
	viewapp.style!.marginTop = marginVertical + "px";
	viewapp.style!.marginBottom = marginVertical+ "px";

});

window.dispatchEvent(new Event("resize"));


Assets.load(["myHongo","myElf"]).then(()=>{

	const myHongo: Sprite = Sprite.from("myHongo");
	console.log ("Hola mundo!", myHongo.width, myHongo.height);

	const myElf: Sprite = Sprite.from("myElf");

	const elfJumpHongo: Container = new Container();
	
	elfJumpHongo.addChild(myHongo);
    elfJumpHongo.addChild(myElf);

	//myHongo.x = 250;
    //myHongo.y = 350;
	//myElf.x = 300;
    //myElf.y = 100;
	myHongo.position.set(0,120);
	myHongo.scale.set(0.2,0.2);//misma forma de scale
	
	//myHongo.scale.x = 0.3;
	//myHongo.scale.y = 0.3;
    
	//myElf.scale.set(2,2); //misma forma de scale
	//myElf.scale.x = 2;
	//myElf.scale.y = 2;
	
	elfJumpHongo.scale.set(0.9);
	elfJumpHongo.x = 350;
	elfJumpHongo.y = 350;
	
	myHongo.toGlobal(new Point);//saber donde esta posicionado.
	console.log(myHongo.parent.toGlobal(myHongo.position));// a partir del padre preguntamos donde esta ubicado el hongo.
	
	//consigo el punto del hongo en la posicion que quiero ponerlo.
	//const aux = myHongo.parent.toLocal(new Point(640,360));
	//sete la nueva posicion.
	//myHongo.position.x = aux.x;
	//myHongo.position.y = aux.y;

	
	
	
	
    
	app.stage.addChild(elfJumpHongo);
});