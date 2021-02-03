let current_idx = undefined;

function changeQuestion() {
        let ctgrElmt = document.getElementById("sf1-select");
        let category = ctgrElmt.options[ctgrElmt.selectedIndex].text;
        let ctnElmt = document.getElementById("quotation-slot");

        current_idx = Math.floor(Math.random() * enigmes.length);
        let usedArray = enigmes;
        switch(category) {
          case 'Enigmes':
          break;
          case 'Décimaux':
          usedArray = decimaux;
          break;
          case 'Fractions':
          usedArray = fractions;
          break;
          case 'Décimaux et fractions':
          usedArray = fractionsDecimaux
          break;
          default:
            return;
        }

        ctnElmt.innerHTML = usedArray[current_idx][0];
        ctnElmt.cite = usedArray[current_idx][1];
}
