class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    play1 = createSprite(width / 2 - 50, height - 100);
    play1.addImage("car1", play2_img);
    play1.scale = 0.07;

    play2 = createSprite(width / 2 + 100, height - 100);
    play2.addImage("car2", play2_img);
    play2.scale = 0.07;

    plays = [play1, play2];
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play() {
    this.handleElements();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      image(track, 0, -height * 5, width, height * 6);

      drawSprites();
    }



  }
}
