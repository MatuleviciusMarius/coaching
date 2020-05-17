// Modals:
var esmiuEsme;
$(function () {
  esmiuEsme = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeLabel: "Close",
    cssClass: ["custom-class-1", "custom-class-2"],
  });
  esmiuEsme.setContent(
    "<p class='modalText'>  Alisa: Norėjau paklausti kuriuo keliu eit. <br />  Češyro katinas: Nelygu kur nori nueit.<br />  Alisa: Man visiškai nesvarbu, kad tik galėčiau išeiti.<br />  Češyro katinas: Jei taip, tai tau visiškai nesvarbu į kurią pusę eiti.</p>"
  );

  esmiuEsme.addFooterBtn(
    "Uždaryti",
    "tingle-btn tingle-btn--default",
    function () {
      esmiuEsme.close();
    }
  );
});

var patiketi;
$(function () {
  patiketi = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeLabel: "Close",
    cssClass: ["custom-class-1", "custom-class-2"],
  });
  patiketi.setContent(
    "<p class='modalText'>  Tėtis: Kad pasiekti tai, kas yra neįmanoma, mes turime patikėti, kad tai yra įmanoma. </p>"
  );

  patiketi.addFooterBtn(
    "Uždaryti",
    "tingle-btn tingle-btn--default",
    function () {
      patiketi.close();
    }
  );
});

var isduosiuTauPaslapti;
$(function () {
  isduosiuTauPaslapti = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeLabel: "Close",
    cssClass: ["custom-class-1", "custom-class-2"],
  });
  isduosiuTauPaslapti.setContent(
    "<p class='modalText'>  Alisa:  Man pasimaišė protas. <br/> Tėtis: Gal būt ir taip. Tu išprotėjai, pamišai, kuoktelėjai. Bet išduosiu tau paslaptį. Visi geriausi yra tokie.</p>"
  );

  isduosiuTauPaslapti.addFooterBtn(
    "Uždaryti",
    "tingle-btn tingle-btn--default",
    function () {
      isduosiuTauPaslapti.close();
    }
  );
});
