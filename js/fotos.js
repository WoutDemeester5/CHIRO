// const foto = document.getElementById("speelclub");
// foto.onclick = () => {
//     let code = prompt("Geef code in!!");
//     if(code === "12345"){
//         const link = document.createElement('a');
//         link.href = "fotos/Chiro.zip"
//         link.download = "kampfotos.zip";
//         link.click();
//     }
// }

const fotos = document.querySelectorAll("img");

fotos.forEach(e => {
    e.onclick = () => {
        let code = prompt("Geef code in!!");
        if(code === "chirowrb"){
        alert("ok");
        switch(e.id){
            case "speelclub-meisjes":
                window.location.href = "https://photos.app.goo.gl/PEYHP7KQHB4vetS97";
                break;
            case "kwiks":
                window.location.href = "https://photos.app.goo.gl/4kueheP3bsKUwHN7A";
                break;
            case "tippers":
                window.location.href = "https://photos.app.goo.gl/VU6vFBdexAxugvCd6";
                break;
            case "tiptiens":
                window.location.href = "https://photos.app.goo.gl/fzPjKRzQtTB9HgWh8";
                break;
            case "leiding-meisjes":
                window.location.href = "https://photos.app.goo.gl/bxkJAyqs6Cpz7XUM7";
                break;
        }
        }else{
            alert("foutieve code");
        }
    }
})