let current_idx = undefined;
let current_array = undefined;

function changeQuestion() {
        let ctgrElmt = document.getElementById("sf1-select");
        let category = ctgrElmt.options[ctgrElmt.selectedIndex].text;
        let ctnElmt = document.getElementById("quotation-slot");
        ctnElmt.cite = "";
        
        current_idx = Math.floor(Math.random() * enigmes.length);
        switch(category) {
          case 'Enigmes':
          current_array = enigmes;
          break;
          case 'Décimaux':
          current_array = decimaux;
          break;
          case 'Fractions':
          current_array = fractions;
          break;
          case 'Décimaux et fractions':
          current_array = fractionsDecimaux
          break;
          default:
            return;
        }

        ctnElmt.innerHTML = current_array[current_idx][0];

        let btnElmt = document.getElementById("answer-btn");
        btnElmt.disabled = false;
}

function revealAnswer() { 
        let ctnElmt = document.getElementById("quotation-slot");
        ctnElmt.cite = current_array[current_idx][1];
        
        let btnElmt = document.getElementById("answer-btn");
        btnElmt.disabled = true;
}
