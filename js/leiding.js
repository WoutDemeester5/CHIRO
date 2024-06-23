import Persoon from "./persoon.js";

document.onkeydown = (evt) => {
  if (evt.ctrlKey && evt.key === "q") {
    alert("je gaat sluiten");
    window.close();
  }
};

let leiding = [["Seppe", "Cedric", "Yentl", "Wout"]];

const leiding2 = {
  SpeelclubMeisjes: [
    new Persoon(
      "Marie Dewulf",
      `email: <a href="mailto:mariedewulf10@hotmail.com">mariedewulf10@hotmail.com</a><br>Tel: 0471 06 49 37`
    ),
    new Persoon(
      "Michelle France",
      `email: <a href="mailto:france.michelle25@gmail.com">france.michelle25@gmail.com</a><br>Tel: 0496 13 43 45`
    ),
    new Persoon(
      "Emily Degandt",
      `emal: <a href="mailto:emilydegandt@gmail.com">emilydegandt@gmail.com</a><br>Tel: 0472 67 29 64`
    ),
    new Persoon(
      "Louise Deprez",
      `email: <a href="mailto:louise.deprezz@gmail.com">louise.deprezz@gmail.com</a><br>Tel: 0468 33 84 67`
    ),
  ],
  SpeelclubJongens: [
    new Persoon(
      "Seppe Cardoen",
      `email: <a href="mailto:seppecardoen46@gmail.com">seppecardoen46@gmail.com</a><br>Tel: 0475 40 17 28`
    ),
    new Persoon(
      "Wout Demeester",
      `email: <a href="mailto:wout.demeester5@gmail.com">wout.demeester5@gmail.com</a><br>Tel: 0492 45 65 38`
    ),
    new Persoon(
      "Cedric France",
      `email: <a href="mailto:cedricfrance3@gmail.com">cedricfrance3@gmail.com</a><br>Tel: 0476 70 01 34`
    ),
    new Persoon(
      "Yentl Verhaverbeke",
      `email: <a href="mailto:yentl.verhaverbeke@gmail.com">yentl.verhaverbeke@gmail.com</a><br>Tel: 0472 60 61 83`
    ),
  ],
  Kwiks: [
    new Persoon(
      "Jill Demeester",
      `email: <a href="mailto:demeesterjill@gmail.com">demeesterjill@gmail.com</a><br>Tel: 0491 73 54 15`
    ),
    new Persoon(
      "Maria Rodrigues",
      `email: <a href="mailto:maria.rodrigues05@icloud.com">maria.rodrigues05@icloud.com</a><br>Tel: 0489 60 37 29`
    ),
    new Persoon(
      "Hanne Vandecandelaere",
      `email: <a href="mailto:hanne.vandecandelaere10@hotmail.com">hanne.vandecandelaere10@hotmail.com</a><br>Tel: 0491 64 77 07`
    ),
  ],
  Rakkers: [
    new Persoon(
      "Karel Crabbe",
      `email: <a href="mailto:Karel.crabbe2006@gmail.com">Karel.crabbe2006@gmail.com</a><br>Tel: 0470 77 14 16`
    ),
    new Persoon(
      "Jordy Desplenter",
      `email: <a href="mailto:jordy.desplenter@gmail.com">jordy.desplenter@gmail.com</a><br>Tel: 0471 53 08 43`
    ),
    new Persoon(
      "Matisse Vercruysse",
      `email: <a href="mailto:vercruyssematisse19@gmail.com">vercruyssematisse19@gmail.com</a><br>Tel: 0472 43 01 85`
    ),
  ],
  Tippers: [
    new Persoon(
      "Flore Vanwildemeersch",
      `email: <a href="mailto:florevwdm@gmail.com">florevwdm@gmail.com</a><br>Tel: 0468 33 85 46`
    ),
    new Persoon(
      "Julie Vantomme",
      `email: <a href="mailto:julie-vantomme@outlook.com">julie-vantomme@outlook.com</a><br>Tel: 0472 94 40 07`
    ),
  ],
  Toppers: [
    new Persoon(
      "Stanny Bondue",
      `email: <a href="mailto:stannybondue@gmail.com">stannybondue@gmail.com</a><br>Tel: 0472 77 95 17`
    ),
    new Persoon(
      "Siebe Thevelein",
      `email: <a href="mailto:Theveleinsiebe400@gmail.com">Theveleinsiebe400@gmail.com</a><br>Tel: 0492 39 12 25\nJe mag altijd eens een bezoekje komen brengen bij HUISRUIMERS`
    ),
    new Persoon(
      "Jelle Perdu",
      `email: <a href="mailto:jelleperdu5@gmail.com">jelleperdu5@gmail.com</a><br>Tel: 0471 63 47 83`
    ),
  ],
  Tiptiens: [
    new Persoon(
      "Emma veracx",
      `email: <a href="mailto:Veracxemma@gmail.com">Veracxemma@gmail.com</a><br>Tel: 0470 52 75 72`
    ),
    new Persoon(
      "Amelie Veracx",
      `email: <a href="mailto:amelieveracx@hotmail.com">amelieveracx@hotmail.com</a><br>Tel: 0468 43 92 86`
    ),
    new Persoon(
      "Lore Vandenbrande",
      `email: <a href="mailto:lor3.vandenbrande@gmail.com">lor3.vandenbrande@gmail.com</a><br>Tel: 0474 75 28 28`
    ),
  ],
  Kerels: [
    new Persoon(
      "Tjorven Desplenter",
      `email: <a href="mailto:Tjorven333@hotmail.com">Tjroven333@hotmail.com</a><br>Tel: 0492 39 38 77`
    ),
    new Persoon(
      "Siebe Vandenbrande",
      `email: <a href="mailto:Vandenbrandesiebe@gmail.com">Vandenbrandesiebe@gmail.com</a><br>Tel: 0486 12 81 60`
    ),
  ],
};

const detail = "email: chiro.westrozebeke@gmail.com\nTel: 0492 45 65 35";

// let divLeiding = document.getElementById('speelclub');

// for(let pers of leiding[0]){
//     divLeiding.insertAdjacentHTML('beforeend',`
//         <div class="item">
//             <img src="../images/${pers.toLowerCase()}.png">
//             <p>${pers}</p>
//         </div>
//         `);
// };

for (let leiding in leiding2) {
  for (let pers of leiding2[leiding]) {
    const divLeiding = document.getElementById(`${leiding.toLowerCase()}`);
    // const html = `
    //     <div class="item">
    //          <img src="../images/${pers.toLowerCase()}.png" id="${pers.toLowerCase()}">
    //          <p>${pers}</p>
    //          <p id="detail" class="invisible">${detail}</p>
    //     </div>
    //     `;
    // divLeiding.insertAdjacentHTML('beforeend',html);
    const div = document.createElement("div");
    div.setAttribute("class", "item");
    const img = document.createElement("img");
    if (pers.naam.toLowerCase() === "siebe thevelein") {
      img.src = "images/leiding/siebe t.png";
    } else if (pers.naam.toLowerCase() === "siebe vandenbrande") {
      img.src = "images/leiding/siebe vdb.png";
    } else {
      img.src = `images/leiding/${pers.naam.toLowerCase().split(" ")[0]}.png`;
    }
    const pPersoon = document.createElement("p");
    pPersoon.innerText = `${pers.naam}`;
    const pDetails = document.createElement("p");
    pDetails.innerHTML = `${pers.details}`;
    pDetails.setAttribute("id", "detail");
    pDetails.setAttribute("class", "invisible");
    div.appendChild(img);
    div.appendChild(pPersoon);
    div.appendChild(pDetails);
    divLeiding.appendChild(div);

    div.onmouseenter = () => {
      pDetails.classList.toggle("invisible");
    };
    div.onmouseleave = () => {
      pDetails.classList.toggle("invisible");
    };
  }
}
