import { Application, Assets, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1024,
	height: 1024
});

Assets.add("Clampy", "./clampy.png");
Assets.add("myHongo", "./hongo1.jpg");

//para que esten las imagenes precargadas:

Assets.load(["Clampy","myHongo"]).then(()=>{

	const clampy: Sprite = Sprite.from("myHongo");
	console.log ("Hola mundo!", clampy.width, clampy.height);

	app.stage.addChild(clampy);
    clampy.x = 0;
    clampy.y = 0;
});