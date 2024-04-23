let display = document.getElementById("display");
let getDadBtn = document.getElementById("getDadBtn");

const dadUrl = "https://icanhazdadjoke.com/";

getDadBtn.addEventListener("click", function(){
    getDaddy();
});

async function getDaddy(){
    // stuff inside to do a fetch and apiResponse to then save to json format
    let apiResponse = await fetch(dadUrl, {
        headers: {
            Accept:"application/json",
        },
    }).then(Response => Response.json());
    console.log(apiResponse.joke);
};