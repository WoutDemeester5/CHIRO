
const webs = document.getElementsByClassName('eWeb');

for(let web of webs){
    const img = document.createElement('img');
    img.src = "images/winkelkar.png";
    web.appendChild(img);

    const p = web.getElementsByTagName('p');

    const text = p[0].innerText;

    img.onclick = () => {
        confirm(`Dit zal je ${text.split("\n")[1]} kosten`);
    }
}