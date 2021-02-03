let current_idx = undefined;

function changeQuestion() {
        let ctgrElmt = document.getElementById("sf1-select");
        let category = ctgrElmt.options[ctgrElmt.selectedIndex].text;
        let ctnElmt = document.getElementById("quotation-slot");
        current_idx = Math.floor(Math.random() * enigmes.length);
        ctnElmt.innerHTML = enigmes[current_idx][0];
        ctnElmt.cite= enigmes[current_idx][1];
}
