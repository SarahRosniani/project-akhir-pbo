let gameover = false;
let p = false;
let bg,
  fl,
  ab_l,
  ab_r,
  ab_u,
  ab_d,
  hint,
  lv,
  m = [];
let mp,
  hero,
  level,
  vs = [];
let isAttack = false,
  isvAttack = [];
let atv_x = [],
  atv_y = [],
  atv_pos = [],
  at_x,
  at_y,
  at_pos;
let virus_count = 0;
let count_onplay = 0;
let h_pos = 2;

function preload() {
  bg = loadImage("assets/bg.png");
  fl1 = loadImage("assets/back.png");
  fl2 = loadImage("assets/back2.png");
  fl3 = loadImage("assets/back3.png");
  ab_l = loadImage("assets/amb_left.png");
  ab_r = loadImage("assets/amb_right.png");
  ab_u = loadImage("assets/amb_up.png");
  ab_d = loadImage("assets/amb_down.png");
  hint = loadImage("assets/hint.png");
  at = loadImage("assets/attck.png");
  atv = loadImage("assets/attck_m.png");
  lv = loadImage("assets/life.png");
  m[0] = loadImage("assets/m1.png");
  m[1] = loadImage("assets/m2.png");
  m[2] = loadImage("assets/m3.png");
  m[3] = loadImage("assets/m4.png");
}

function setup() {
  createCanvas(600, 500);
  mp = new Map(600, 500);
  level = new Level(10);
  // melakukan set level awal ke 1
  level.setLevel(1);
  hero = new Hero(90, 60);
  hero.initImg(ab_u, ab_r, ab_d, ab_l, 50, 250);
  mp.init(fl1, fl2, fl3);
}
function keyPressed() {
  if (p == false) {
    if (keyCode === ENTER) {
      show_hint();
      level.setLevel(1);
      hero.life = 5;
      hero.score = 0;
      p = true;
    }
  }
  if (gameover) {
    if (keyCode === ENTER) {
      gameover = false;
      p = false;
    }
  }
}

function show_hint() {
  background(255);
  textSize(100);
  textFont("Comic Sans MS");
  fill(0, 0, 0);
  text("3", 280, 120);
  hint.resize(500, 200);
  image(hint, 50, 150);
  setTimeout(function () {
    background(255);
    fill(0, 0, 0);
    text("2", 280, 120);
    hint.resize(500, 200);
    image(hint, 50, 150);
  }, 750);
  setTimeout(function () {
    background(255);
    fill(0, 0, 0);
    text("1", 280, 120);
    hint.resize(500, 200);
    image(hint, 50, 150);
  }, 1500);
}

function draw() {
  if (gameover) {
    m[0].resize(60, 60);
    m[1].resize(60, 60);
    m[2].resize(60, 60);
    m[3].resize(60, 60);
    background(255);
    image(m[0], 100, 10);
    image(m[1], 450, 120);
    image(m[2], 250, 180);
    image(m[3], 300, 350);
    image(m[0], 20, 350);
    fill(200, 40, 40);
    textFont("Comic Sans MS");
    textSize(80);
    text("Game Over!", 90, 300);
    fill(250, 200, 100);
    textSize(30);
    text("Score : " + hero.score, 250, 120);
    fill(0, 0, 0);
    textSize(20);
    text("enter to return to main menu..", 300, 470);
  } else {
    if (!p) {
      bg.resize(600, 500);
      image(bg, 0, 0);
    } else {
      setTimeout(function () {
        background(0);
        playGame();
      }, 2250);
    }
  }
}
