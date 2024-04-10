import "./style.css";
import p5 from "p5";

new p5((p) => {
  const carre = (x, y, long, haut, color) => {
    p.fill(color);
    p.quad(x, y, x + long, y, x + long, y + haut, x, y + haut);
  };
  const cercle = (x, y, long, haut, color) => {
    p.fill(color);
    p.ellipse(x, y, long, haut);
  };
  const arche = (x, y, long, haut, color) => {
    p.fill(color);
    p.ellipse(x + long / 2, y - haut, long, haut);
    p.quad(x, y, x + long, y, x + long, y - haut, x, y - haut);
  };

  const torche = (x, y) => {
    p.fill("#6e2704");
    p.quad(x, y, x + 5, y, x + 3, y + 40, x, y + 40);
    p.fill("#fe0000");
    p.ellipse(x + 2, y - 5, 10, 25);
    p.fill("#fe6a00");
    p.ellipse(x + 2, y, 5, 15);
  };
  const mur = (x, y, long, haut, color, type = "") => {
    const longBrique = 30;
    const hautBrique = 15;
    for (let j = 0; j < haut; j++) {
      if (j != 0) {
        y -= hautBrique;
      }
      for (let i = 0; i < long; i++) {
        if (j % 2 == 0) {
          if (i != long - 1) {
            carre(
              x + longBrique / 2 + i * longBrique,
              y,
              longBrique,
              hautBrique,
              color
            );
          }
        } else {
          if (i == 0) {
            carre(x + longBrique / 2, y, longBrique / 2, hautBrique, color);
          } else if (i == long - 1) {
            carre(x + i * longBrique, y, longBrique / 2, hautBrique, color);
          } else {
            if (type == "tour" && j == haut - 1 && i % 2 != 0) {
            } else {
              carre(x + i * longBrique, y, longBrique, hautBrique, color);
            }
          }
        }
      }
    }
  };

  p.setup = () => {
    p.createCanvas(800, 800);
    p.background(0);
  };

  p.draw = () => {
    p.stroke("#000000");
    // ciel
    carre(0, 0, 800, 500, "#18ded7");

    // arc-en-ciel
    cercle(500, 500, 800, 750, "#fe0000");
    cercle(500, 500, 725, 675, "#fe6a00");
    cercle(500, 500, 650, 600, "#fffc01");
    cercle(500, 500, 575, 525, "#00bd39");
    cercle(500, 500, 500, 450, "#0368ff");
    cercle(500, 500, 425, 375, "#7600e8");
    cercle(500, 500, 350, 300, "#d300c9");
    cercle(500, 500, 275, 225, "#18ded7");

    // herbe
    carre(0, 500, 800, 300, "#086c26");

    // mur
    mur(230, 550, 5, 20, "#ec1818", "tour");
    mur(350, 550, 10, 15, "#ba1313");
    mur(620, 550, 5, 20, "#ec1818", "tour");

    // toit
    p.fill("#6e2704");
    p.triangle(335, 355, 670, 355, 500, 270);

    // porte
    arche(460, 565, 90, 75, "#000000");

    // fenetres
    arche(290, 500, 15, 30, "#000000");
    arche(290, 375, 15, 30, "#000000");
    arche(685, 500, 15, 30, "#000000");
    arche(685, 375, 15, 30, "#000000");
    arche(575, 425, 15, 30, "#000000");
    arche(425, 425, 15, 30, "#000000");

    //route
    p.fill("#9e3309");
    p.quad(460, 565, 550, 565, 500, 800, 250, 800);

    // lumieres
    torche(450, 475);
    torche(555, 475);

    //soleil
    p.noStroke();
    cercle(50, 50, 200, 200, "#fffc01");

    // nuage
    p.stroke("#ffffff");
    cercle(600, 50, 100, 60, "#ffffff");
    cercle(650, 50, 75, 80, "#ffffff");
    cercle(700, 60, 100, 60, "#ffffff");
  };
}, document.querySelector("#app"));
