import TimesteppedScene from "./base/TimesteppedScene";
import { Keyboard, Sprite, TileSprite, Input, Tileset } from "phaser-ce";
import Player from "./object/Player";
import Enemy from "./object/enemy";

type Vector2 = { x: number, y: number };

export default class GameScene extends TimesteppedScene {
	//private background: Phaser.TileSprite;
	private player: Player;
	private enermy: Enemy;

	private background: Phaser.TileSprite;
	private map: Phaser.Tilemap;
	private layer: Phaser.TilemapLayer;

	private bullet: Phaser.Sprite;

	preload() {
		// Load images
		this.game.load.image('player', 'assets/wizard1.png');
		this.game.load.image('bullet', 'assets/player/bullet.png');
		this.game.load.image('enemy', 'assets/enemy.png');
<<<<<<< HEAD
		this.game.load.image('background', 'assets/background.png');
		//this.game.load.image('playerlife',"assets/life.png");
		this.game.load.spritesheet('playerlife',"assets/life.png",120,35);
		

=======
		this.game.load.image('background', 'assets/stage1.png');
		this.game.load.image('collision', 'assets/collision.png');

		// Load tilemap layer
		this.game.load.tilemap("map", "assets/Tilemap/maptest6.json", null, Phaser.Tilemap.TILED_JSON);
>>>>>>> f162afac90d90aa28e21e4ad7f7b504391f8bda5
	}

	create() {
		// For showing FPS
		this.time.advancedTiming = true;

		// Set world dimensions
		this.game.world.setBounds(0, 0, 956, 538);

		// Add tilemap
		this.map = this.game.add.tilemap("map");
		this.map.addTilesetImage("collision", "collision");
		this.layer = this.map.createLayer("Collision");
		this.layer.resizeWorld();

		// Add background
		this.background = this.game.add.tileSprite(0, 0, 960, 540, "background");

		// Add player
		this.player = new Player(this.game);
		this.player.AddPlayer();
<<<<<<< HEAD
		this.player.AddPlayerLife();

		// Add enemy(For temp display)
		this.enemy = new enemy(this.game);
		this.enemy.Addenemy();
=======

		// Add enermy
		this.enermy = new Enemy(this.game);
		this.enermy.Addenemy();
>>>>>>> f162afac90d90aa28e21e4ad7f7b504391f8bda5

		
		// Add bullet(For temp display)
		this.bullet = this.game.add.sprite(this.game.width / 2.5, this.game.height / 2.5, 'bullet');
		this.bullet.smoothed = false;
		this.bullet.anchor.set(0.5, 0.5);
		this.bullet.scale.set(2, 2);

		

	}

	// fixedUpdate is not working
	fixedUpdate(dt: number) {
		console.log("FIXED UPDATE!");
	}

	update() {
		this.game.debug.text(this.time.fps.toString(), 20, 50); // Show FPS on screen
		this.player.PlayerMovement();
		this.BackgroundScrolling(this.background, 5);
<<<<<<< HEAD
<<<<<<< Updated upstream
		console.log(this.player.playerSprite.body.velocity);
=======

		if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
		 {
			this.game.load.spritesheet('playerlife',"assets/life.png",100,160);
		 }else
		 {
			this.game.load.spritesheet('playerlife',"assets/life.png",100,160);
		 }
>>>>>>> Stashed changes
=======
>>>>>>> f162afac90d90aa28e21e4ad7f7b504391f8bda5
	}

	// Make the background scrolling
	BackgroundScrolling(background: TileSprite, speed: number) {
		background.tilePosition.x -= speed;
	}
}
