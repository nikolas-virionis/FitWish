export function numberBtnsOverwriteEn() {
  import("./iniciateIndexLang.js").then(({ contentArray }) => {
    if (contentArray?.length >= 1) {
      firstPageBtn1stTry.value = `See the test made in ${contentArray[0].day}`;
      firstPageBtn1stTryOverwrite.value = `Overwrite test made in ${contentArray[0].day}`;
    }
    if (contentArray?.length == 2) {
      if (
        contentArray[0].inputName.toLowerCase() ==
        contentArray[1].inputName.toLowerCase()
      ) {
        firstPageH13rd.innerHTML = `We detected that you have already tried our test twice as ${contentArray[0].inputName}, once made in ${contentArray[0].day}, and once made in ${contentArray[1].day}. Choose what you would like to do below`;
        firstPageBtn2ndTry.value = `See the test made in ${contentArray[1].day}`;
        firstPageBtn2ndTryOverwrite.value = `Overwrite test made in ${contentArray[1].day}`;
      } else {
        firstPageH13rd.innerHTML = `We detected that you have already tried our test twice, once as ${contentArray[0].inputName} made in ${contentArray[0].day}, and once as ${contentArray[1].inputName} made in ${contentArray[1].day}. Choose what you would like to do below`;
        firstPageBtn1stTry.value = `See the test made by ${contentArray[0].inputName}`;
        firstPageBtn2ndTry.value = `See the test made by ${contentArray[1].inputName}`;
        firstPageBtn1stTryOverwrite.value = `Overwrite test made by ${contentArray[0].inputName}`;
        firstPageBtn2ndTryOverwrite.value = `Overwrite test made by ${contentArray[1].inputName}`;
      }
    }
  });
}
export function numberBtnsOverwritePt() {
  import("./iniciateIndexLang.js").then(({ contentArray }) => {
    if (contentArray?.length >= 1) {
      firstPageBtn1stTry.value = `Ver o teste feito em ${contentArray[0].day}`;
      firstPageBtn1stTryOverwrite.value = `Sobrescrever o teste de ${contentArray[0].day}`;
    }
    if (contentArray?.length == 2) {
      if (
        contentArray[0].inputName.toLowerCase() ==
        contentArray[1].inputName.toLowerCase()
      ) {
        firstPageH13rd.innerHTML = `Detectamos que você já tentou nosso teste duas vezes como ${contentArray[0].inputName}, uma vez feito em ${contentArray[0].day}, e uma vez feito em ${contentArray[1].day}. Escolha o que você gostaria de fazer abaixo`;
        firstPageBtn2ndTry.value = `Ver o teste feito em ${contentArray[1].day}`;
        firstPageBtn2ndTryOverwrite.value = `Sobrescrever o teste de ${contentArray[1].day}`;
      } else {
        firstPageBtn1stTry.value = `Ver o teste feito por ${contentArray[0].inputName}`;
        firstPageBtn1stTryOverwrite.value = `Sobrescrever o teste de ${contentArray[0].inputName}`;
        firstPageH13rd.innerHTML = `Detectamos que você já tentou nosso teste duas vezes, uma vez como ${contentArray[0].inputName} feito em ${contentArray[0].day}, e uma vez como ${contentArray[1].inputName} feito em ${contentArray[1].day}. Escolha o que você gostaria de fazer abaixo`;
        firstPageBtn2ndTry.value = `Ver o teste feito por ${contentArray[1].inputName}`;
        firstPageBtn2ndTryOverwrite.value = `Sobrescrever o teste de ${contentArray[1].inputName}`;
      }
    }
  });
}
export function numberBtnsOverwriteFr() {
  import("./iniciateIndexLang.js").then(({ contentArray }) => {
    if (contentArray?.length >= 1) {
      firstPageBtn1stTry.value = `Voir le test réalisé en ${contentArray[0].day}`;
      firstPageBtn1stTryOverwrite.value = `Écraser le test dans ${contentArray[0].day}`;
    }
    if (contentArray?.length == 2) {
      if (
        contentArray[0].inputName.toLowerCase() ==
        contentArray[1].inputName.toLowerCase()
      ) {
        firstPageH13rd.innerHTML = `Nous avons détecté que vous avez déjà essayé notre test deux fois plus ${contentArray[0].inputName}, une fois fait en ${contentArray[0].day}, et une fois fait en ${contentArray[1].day}. Choisissez ce que vous souhaitez faire ci-dessous`;
        firstPageBtn2ndTry.value = `Voir le test réalisé en ${contentArray[1].day}`;
        firstPageBtn2ndTryOverwrite.value = `Écraser le test dans ${contentArray[1].day}`;
      } else {
        firstPageH13rd.innerHTML = `Nous avons détecté que vous avez déjà essayé notre test deux fois, une fois comme ${contentArray[0].inputName} fabriqué en ${contentArray[0].day}, et une fois comme ${contentArray[1].inputName} fabriqué en ${contentArray[1].day}. Choisissez ce que vous souhaitez faire ci-dessous`;
        firstPageBtn1stTry.value = `Voir le test ${contentArray[0].inputName}`;
        firstPageBtn2ndTry.value = `Voir le test ${contentArray[1].inputName}`;
        firstPageBtn1stTryOverwrite.value = `Écraser le test ${contentArray[0].inputName}`;
        firstPageBtn2ndTryOverwrite.value = `Écraser le test ${contentArray[1].inputName}`;
      }
    }
  });
}
export function numberBtnsOverwriteEs() {
  import("./iniciateIndexLang.js").then(({ contentArray }) => {
    if (contentArray?.length >= 1) {
      firstPageBtn1stTry.value = `Ver la prueba de ${contentArray[0].day}`;
      firstPageBtn1stTryOverwrite.value = `Sobrescribir la prueba de ${contentArray[0].day}`;
    }
    if (contentArray?.length == 2) {
      if (
        contentArray[0].inputName.toLowerCase() ==
        contentArray[1].inputName.toLowerCase()
      ) {
        firstPageH13rd.innerHTML = `Detectamos que ya ha realizado nuestra prueba dos veces más ${contentArray[0].inputName}, una vez hecho en ${contentArray[0].day}, y una vez hecho en ${contentArray[1].day}. Elija lo que le gustaría hacer a continuación`;
        firstPageBtn2ndTry.value = `Ver la prueba de ${contentArray[1].day}`;
        firstPageBtn2ndTryOverwrite.value = `Sobrescribir la prueba de ${contentArray[1].day}`;
      } else {
        firstPageH13rd.innerHTML = `Detectamos que ya ha realizado nuestra prueba dos veces, una vez como ${contentArray[0].inputName} hecho en ${contentArray[0].day}, y una vez como ${contentArray[1].inputName} hecho en ${contentArray[1].day}. Elija lo que le gustaría hacer a continuación`;
        firstPageBtn1stTry.value = `Ver la prueba de ${contentArray[0].inputName}`;
        firstPageBtn2ndTry.value = `Ver la prueba de ${contentArray[1].inputName}`;
        firstPageBtn1stTryOverwrite.value = `Sobrescribir la prueba de ${contentArray[0].inputName}`;
        firstPageBtn2ndTryOverwrite.value = `Sobrescribir la prueba de ${contentArray[1].inputName}`;
      }
    }
  });
}
