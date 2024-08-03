// variavel do menu e telas
var tel;
var jogo;
var inst;
var cre;
var colX1 = 150;
var colY1 = 167;
var larcol1 = 115;
var altcol1 = 46;
var tela = 0;
var colY2 = 238;
var colY3 = 311;
var colX2 = 275;
var colY4 = 347;
// função usanda para carregar imagens e sons.
function preload() {
  tel = loadImage("inicio.png");
  jogo = loadImage("jogar.png");
  inst = loadImage("instrucao.png");
  cre = loadImage("creditos.png");
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (tela == 0) {
    background(tel);
    //função para encontrar a área do x e y
    push();
    fill(225);
    circle(mouseX, mouseY, 10);
    text(mouseX + ":" + mouseY, 30, 20);
    pop();
    // borda dos botões do menu só faltou do som
    if (
      mouseX >= colX1 &&
      mouseY >= colY1 &&
      mouseX <= colX1 + larcol1 &&
      mouseY <= colY1 + altcol1
    ) {
      noFill();
      stroke(0);
      rect(colX1, colY1, larcol1, altcol1, 16);
    }

    if (
      mouseX >= colX1 &&
      mouseY >= colY2 &&
      mouseX <= colX1 + larcol1 &&
      mouseY <= colY2 + altcol1
    ) {
      noFill();
      stroke(0);
      rect(colX1, colY2, larcol1, altcol1, 17);
    }
    if (
      mouseX >= colX1 &&
      mouseY >= colY3 &&
      mouseX <= colX1 + larcol1 &&
      mouseY <= colY3 + altcol1
    ) {
      noFill();
      stroke(0);
      rect(colX1, colY3, larcol1, altcol1, 19);
    }
  }
  //Condições da tela para ser cada uma
  else if (tela == 1) {
    background(jogo);
    rect(275, 348, 115, 46, 16);
  } else if (tela == 2) {
    background(inst);
    //função para encontrar a área do x e y
    push();
    fill(225);
    circle(mouseX, mouseY, 10);
    text(mouseX + ":" + mouseY, 30, 20);
    pop();
    rect(279, 349, 115, 46, 17);
  } else if (tela == 3) {
    background(cre);
    push();
    fill(225);
    circle(mouseX, mouseY, 10);
    text(mouseX + ":" + mouseY, 30, 20);
    pop();
    rect(279, 349, 115, 46, 17);
  }
}
//condição para os botões clicar para uma tela
function mouseClicked() {
  if (
    mouseX >= colX1 &&
    mouseY >= colY1 &&
    mouseX <= colX1 + larcol1 &&
    mouseY <= colY1 + altcol1
  ) {
    tela = 1;
  }
  if (
    mouseX >= colX1 &&
    mouseY >= colY2 &&
    mouseX <= colX1 + larcol1 &&
    mouseY <= colY2 + altcol1
  ) {
    tela = 2;
  }
  if (
    mouseX >= colX1 &&
    mouseY >= colY3 &&
    mouseX <= colX1 + larcol1 &&
    mouseY <= colY3 + altcol1
  ) {
    tela = 3;
  }
}
