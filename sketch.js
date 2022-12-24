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
