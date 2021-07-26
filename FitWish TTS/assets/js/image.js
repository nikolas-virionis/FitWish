function english() {
  import("./script").then(({ english: defaultEnglish }) => defaultEnglish());
}
function portugûes() {
  import("./script").then(({ portugûes: defaultPortugûes }) =>
    defaultPortugûes()
  );
}
function español() {
  import("./script").then(({ español: defaultEspañol }) => defaultEspañol());
}
function français() {
  import("./script").then(({ français: defaultFrançais }) => defaultFrançais());
}
function themeTypeDark() {}
function themeTypeLight() {}
img = document.createElement("img");
if (gender == "male")
  setImg(
    "https://crossfitclandestine.files.wordpress.com/2019/05/xbody-fat-chart-men.png.pagespeed.ic_.57b54gdukq.jpg"
  );
else
  setImg(
    "https://crossfitclandestine.files.wordpress.com/2019/05/body-fat-chart-women.png.pagespeed.ce_.9463kejyyr.png"
  );

function setImg(link) {
  img.src = link;
  img.setAttribute("width", "500");
  img.setAttribute("height", "400");
  src = document.getElementById("bodyImageId");
  src.appendChild(img);
}
function changeColor9(
  clickedId,
  idleId1,
  idleId2,
  idleId3,
  idleId4,
  idleId5,
  idleId6,
  idleId7,
  idleId8
) {
  document.getElementById(clickedId).style.backgroundColor = "#7395AE";
  document.getElementById(idleId1).style.backgroundColor = "teal";
  document.getElementById(idleId2).style.backgroundColor = "teal";
  document.getElementById(idleId3).style.backgroundColor = "teal";
  document.getElementById(idleId4).style.backgroundColor = "teal";
  document.getElementById(idleId5).style.backgroundColor = "teal";
  document.getElementById(idleId6).style.backgroundColor = "teal";
  document.getElementById(idleId7).style.backgroundColor = "teal";
  document.getElementById(idleId8).style.backgroundColor = "teal";
}
function changeColor10(
  clickedId,
  idleId1,
  idleId2,
  idleId3,
  idleId4,
  idleId5,
  idleId6,
  idleId7,
  idleId8
) {
  if (
    (age >= 15 && age <= 40) ||
    (age < 15 && age >= 10 && goalBody > 3) ||
    (age > 40 && age <= 50 && goalBody > 2) ||
    (age > 50 && age <= 60 && goalBody > 3) ||
    (age > 60 && goalBody > 4)
  ) {
    document.getElementById(clickedId).style.backgroundColor = "#7395AE";
    document.getElementById(idleId1).style.backgroundColor = "teal";
    document.getElementById(idleId2).style.backgroundColor = "teal";
    document.getElementById(idleId3).style.backgroundColor = "teal";
    document.getElementById(idleId4).style.backgroundColor = "teal";
    document.getElementById(idleId5).style.backgroundColor = "teal";
    document.getElementById(idleId6).style.backgroundColor = "teal";
    document.getElementById(idleId7).style.backgroundColor = "teal";
    document.getElementById(idleId8).style.backgroundColor = "teal";
  } else {
    for (let element of arguments)
      document.getElementById(element).style.backgroundColor = "teal";
  }
}
const setCurrentBody = (body) => (currentBody = body);
// age conditionals function
const setGoalBody = (goal) => {
  goalBody = goal;
  if (
    !(
      (age >= 15 && age <= 40) ||
      (age < 15 && age >= 10 && goalBody > 3) ||
      (age > 40 && age <= 50 && goalBody > 2) ||
      (age > 50 && age <= 60 && goalBody > 3) ||
      (age > 60 && goalBody > 4)
    )
  ) {
    if (languageValue == 1) {
      if (age < 15 && age >= 10 && goalBody <= 3)
        alert(
          "For your age, it is not healthy to get this little body fat percentage, try a bit higher by now and soon enough you'll be able to get to this body goal of yours as safe as it gets."
        );
      else if (age < 10)
        alert(
          "I wouldn't recommend you would try to get to fit by now, of course, you should be healthy but I cannot see a way you can use this coding advice in your way, being this young, since it's purpose is people long term body goal, and by this, I get that the changes can likely be extreme for a 9 y/o or younger"
        );
      else if (age > 40 && age <= 50 && goalBody <= 2)
        alert(
          "For your age, it is not healthy to get this little body fat percentage, try a bit higher by now, since the amount of fat on your body naturally grows with aging. try instead of losing this much fat, gaining more muscle to compensate. This way you'll be able to get to a doable body goal in a path as safe as it can get."
        );
      else if (age > 50 && age <= 60 && goalBody <= 3)
        alert(
          "For your age, it is not healthy to get this little body fat percentage, try a bit higher by now, since the amount of fat on your body naturally grows with aging. try instead of losing this much fat, gaining more muscle to compensate. This way you'll be able to get to a doable body goal in a path as safe as it can get."
        );
      else if (age > 60 && goalBody <= 4)
        alert(
          "This won't be gladful to hear, it breaks my heart to say it too, because I appreciate your ferving will of getting in shape, however for your age it is not healthy to get this little body fat percentage, try a bit higher by now since the amount of fat on your body naturally grows with aging. try instead of losing this much fat, gaining more muscle to compensate. This way you'll be able to get to a doable body goal in a path as safe as it can get."
        );
    } else if (languageValue == 2) {
      if (age < 15 && age >= 10 && goalBody <= 3)
        alert(
          "Para a sua idade, não é saudável obter essa pequena porcentagem de gordura corporal, tente um pouco mais alto agora e em breve você será capaz de atingir esse seu objetivo corporal o mais seguro possível."
        );
      else if (age < 10)
        alert(
          "Eu não recomendaria que você tentasse entrar em forma agora, é claro, você deve estar saudável, mas não vejo uma maneira de usar este conselho de codificação do seu jeito, sendo tão jovem, já que seu propósito é o corpo das pessoas a longo prazo objetivo, e com isso, eu entendo que as mudanças podem provavelmente ser extremas para um jovem de 9 anos ou menos"
        );
      else if (age > 40 && age <= 50 && goalBody <= 2)
        alert(
          "Para a sua idade, não é saudável obter este pequeno percentual de gordura corporal, tente um pouco mais alto agora, já que a quantidade de gordura em seu corpo cresce naturalmente com o envelhecimento. tente em vez de perder essa quantidade de gordura, ganhando mais músculos para compensar. Desta forma, você será capaz de atingir um objetivo corporal factível em um caminho tão seguro quanto possível."
        );
      else if (age > 50 && age <= 60 && goalBody <= 3)
        alert(
          "Para a sua idade, não é saudável obter este pequeno percentual de gordura corporal, tente um pouco mais alto agora, já que a quantidade de gordura em seu corpo cresce naturalmente com o envelhecimento. tente em vez de perder essa quantidade de gordura, ganhando mais músculos para compensar. Desta forma, você será capaz de atingir um objetivo corporal factível em um caminho tão seguro quanto possível."
        );
      else if (age > 60 && goalBody <= 4)
        alert(
          "Não vou ficar feliz em ouvir isso, parte meu coração dizer isso também, porque eu aprecio sua fervorosa vontade de entrar em forma, porém para sua idade não é saudável obter este pequeno percentual de gordura corporal, tente um pouco mais alto até agora, uma vez que a quantidade de gordura em seu corpo cresce naturalmente com o envelhecimento. tente em vez de perder essa quantidade de gordura, ganhando mais músculos para compensar. Desta forma, você será capaz de atingir um objetivo corporal factível em um caminho tão seguro quanto possível."
        );
    } else if (languageValue == 3) {
      if (age < 15 && age >= 10 && goalBody <= 3)
        alert(
          "Pour votre âge, il n'est pas sain d'obtenir ce petit pourcentage de graisse corporelle, essayez un peu plus haut maintenant et vous serez bientôt en mesure d'atteindre votre objectif corporel aussi sûr que possible."
        );
      else if (age < 10)
        alert(
          "Je ne vous recommanderais pas d'essayer de vous mettre en forme maintenant, bien sûr, vous devriez être en bonne santé, mais je ne vois pas comment vous pouvez utiliser ces conseils de codage à votre manière, étant aussi jeune, car son but est le corps à long terme des gens objectif, et par là, je comprends que les changements peuvent probablement être extrêmes pour un 9 ans ou moins"
        );
      else if (age > 40 && age <= 50 && goalBody <= 2)
        alert(
          "Pour votre âge, il n'est pas sain d'obtenir ce petit pourcentage de graisse corporelle, essayez un peu plus haut maintenant, car la quantité de graisse sur votre corps augmente naturellement avec le vieillissement. essayez au lieu de perdre autant de graisse, gagnez plus de muscle pour compenser. De cette façon, vous serez en mesure d'atteindre un objectif corporel réalisable dans un chemin aussi sûr que possible."
        );
      else if (age > 50 && age <= 60 && goalBody <= 3)
        alert(
          "Pour votre âge, il n'est pas sain d'obtenir ce petit pourcentage de graisse corporelle, essayez un peu plus haut maintenant, car la quantité de graisse sur votre corps augmente naturellement avec le vieillissement. essayez au lieu de perdre autant de graisse, gagnez plus de muscle pour compenser. De cette façon, vous serez en mesure d'atteindre un objectif corporel réalisable dans un chemin aussi sûr que possible."
        );
      else if (age > 60 && goalBody <= 4)
        alert(
          "Ce ne sera pas heureux d'entendre, cela me brise le cœur de le dire aussi, car j'apprécie votre fervente volonté de vous mettre en forme, mais pour votre âge, ce n'est pas sain d'obtenir ce petit pourcentage de graisse corporelle, essayez un peu plus haut en maintenant puisque la quantité de graisse sur votre corps augmente naturellement avec le vieillissement. essayez au lieu de perdre autant de graisse, gagnez plus de muscle pour compenser. De cette façon, vous serez en mesure d'atteindre un objectif corporel réalisable dans un chemin aussi sûr que possible."
        );
    } else if (languageValue == 4) {
      if (age < 15 && age >= 10 && goalBody <= 3)
        alert(
          "Para su edad, no es saludable obtener este pequeño porcentaje de grasa corporal, intente un poco más alto ahora y muy pronto podrá alcanzar este objetivo corporal de la manera más segura posible."
        );
      else if (age < 10)
        alert(
          "No recomendaría que intentaras ponerte en forma a esta altura, por supuesto, deberías estar sano, pero no veo la manera en que puedas usar este consejo de codificación a tu manera, siendo tan joven, ya que su propósito es el cuerpo de las personas a largo plazo. objetivo, y con esto, entiendo que los cambios probablemente pueden ser extremos para un niño de 9 años o menos"
        );
      else if (age > 40 && age <= 50 && goalBody <= 2)
        alert(
          "Para su edad, no es saludable obtener este pequeño porcentaje de grasa corporal, intente un poco más alto a estas alturas, ya que la cantidad de grasa en su cuerpo crece naturalmente con el envejecimiento. intente en lugar de perder tanta grasa, ganando más músculo para compensar. De esta manera, podrá llegar a una meta corporal factible en un camino lo más seguro posible."
        );
      else if (age > 50 && age <= 60 && goalBody <= 3)
        alert(
          "Para su edad, no es saludable obtener este pequeño porcentaje de grasa corporal, intente un poco más alto a estas alturas, ya que la cantidad de grasa en su cuerpo crece naturalmente con el envejecimiento. intente en lugar de perder tanta grasa, ganando más músculo para compensar. De esta manera, podrá llegar a una meta corporal factible en un camino lo más seguro posible."
        );
      else if (age > 60 && goalBody <= 4)
        alert(
          "Esto no me alegrará escucharlo, me rompe el corazón decirlo también, porque agradezco tu ferviente voluntad de ponerte en forma, sin embargo para tu edad no es saludable obtener este pequeño porcentaje de grasa corporal, intenta un poco más alto ahora, dado que la cantidad de grasa en su cuerpo crece naturalmente con el envejecimiento. intente en lugar de perder tanta grasa, ganando más músculo para compensar. De esta manera, podrá llegar a una meta corporal factible en un camino lo más seguro posible."
        );
    }
  }
};
