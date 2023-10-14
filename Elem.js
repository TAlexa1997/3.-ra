class Elem {
  /* az adattagoknak az a lényege hogy az osztályban az adattagokon végezzük a műveleteket */
  /* Megjelenítse az oldalon az elemet */
  constructor(szuloElem) {
    /* beállítja az adattagokat */
    this.szuloElem = szuloElem;
    this.htmlOsszeallit(); /* a this. a konkrét osztálypéldányra mutat */
    /* megfogjuk a html elemekhez ( csinálunk egy változót ) */
    this.divElem = this.szuloElem.children("div:last-child");
    this.pElem = this.divElem.children("p");
    //console.log(this.divElem);
    //console.log(this.pElem);
    this.divElem.on("click", () => {
      this.#esemenyTrigger("elemKivalaszt");
    });
  }

  setErtek(ertek) {
    this.pElem.html(ertek);
  }
  htmlOsszeallit() {
    let txt = "<div class='elem'><p class='X'></p></div>";
    this.szuloElem.append(txt);
  }

  /* Saját esemény létrehozása 
    A célja hogy az osztály tud elmondani magáról dolgokat
    Információkat ad át saját magáról*/
  #esemenyTrigger(esemenyNev) {
    /*type: mi lesz a saját eseményünk neve */
    /* options: --> detail */
    const esemenyem = new CustomEvent(esemenyNev, {detail:this} );
    window.dispatchEvent(esemenyem);
  }
}
export default Elem;
