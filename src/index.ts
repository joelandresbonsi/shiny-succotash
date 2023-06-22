import { Application, Assets} from 'pixi.js'
import { assets } from './assets';
import { Scene } from './Scene';

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});


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

Assets.addBundle("myAssets", assets)
Assets.loadBundle(["myAssets"]).then(()=>{
	const myScene = new Scene();
	app.stage.addChild(myScene);
	
});