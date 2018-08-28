import TimesteppedScene from "./base/TimesteppedScene";
import { Keyboard, Sprite, TileSprite, Input, Tileset } from "phaser-ce";
import Player from "./object/Player";
import Enemy from "./object/enemy";
import StageManager from "./stage/StageManager";

export default class GameScene extends TimesteppedScene {
	private player: Player;
	private enemy: Enemy;
	private stageManager: StageManager;

	preload() {
		// Load images
		this.game.load.atlasJSONHash("player", "assets/player/player4.png", "assets/player/player4.json");
		this.game.load.image('bullet', 'assets/player/bullet.png');
		this.game.load.image('demon', 'assets/enemy/demon.png');
		this.game.load.image('background', 'assets/stage1.png');
		this.game.load.atlasJSONHash("playerLife", "assets/player/player_life.png", "assets/player/player_life.json");

		this.game.load.image('background', 'assets/stage1.png');
		this.game.load.image('collision', 'assets/collision.png');

		// Load tilemap layer
		this.game.load.tilemap("stage1", "assets/Tilemap/maptest6.json", null, Phaser.Tilemap.TILED_JSON);
	}

	create() {
		// For showing FPS
		this.time.advancedTiming = true;

		// Add player
		this.player = new Player(this.game);
		this.player.create();

		// Add enemy
		this.enemy = new Enemy(this.game, this.player);
		this.enemy.create();

		// Add stage
		this.stageManager = new StageManager(this.game, this.player, this.enemy,1);
		this.stageManager.create();

		this.game.world.sendToBack(this.stageManager.background);
		this.game.world.bringToTop(this.player.playerSprite);
		this.game.world.bringToTop(this.player.lifeGroup);
	}

	// fixedUpdate is not working
	fixedUpdate(dt: number) {
		console.log("FIXED UPDATE!");
	}

	update() {
		this.game.debug.text(this.time.fps.toString(), 20, 50); // Show FPS on screen
		this.player.update();
		this.stageManager.update();
		this.enemy.update();
	}
}
