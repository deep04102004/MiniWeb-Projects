function getbrandname(){
    let a1 = Math.floor(Math.random() * 5);
    let a2 = Math.floor(Math.random() * 5);
    let a3 = Math.floor(Math.random() * 5);

    // Adjectives
    let ad = (a1 == 0) ? "Crazy" :
             (a1 == 1) ? "Amazing" :
             (a1 == 2) ? "Fire" :
             (a1 == 3) ? "Silent" :
                        "Bold";
    // Shop Types
    let sh = (a2 == 0) ? "Engine" :
             (a2 == 1) ? "Foods" :
             (a2 == 2) ? "Garments" :
             (a2 == 3) ? "Bakery" :
                        "Crafts";
    // Endings
    let aw = (a3 == 0) ? "Bros" :
             (a3 == 1) ? "Limited" :
             (a3 == 2) ? "Hub" :
             (a3 == 3) ? "Works" :
                        "Factory";

    let brandname = `${ad} ${sh} ${aw}`;

    document.getElementById("result").textContent = brandname;
}