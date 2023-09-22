function checkPalindromeFun() {
    const zip = document.querySelector('.zip').value;
    const link=`http://api.zippopotam.us/us/${zip}`;

    fetch(link)
    .then((response)=>response.json())
    .then((data)=>{
        if(data.places){
            let country=data.country;
            let state=data.places[0]["state"];
            let city=data.places[0]["place name"];
            getLocationInfo.innerHTML =`Country: ${country},State: ${state},City: ${city}`;
        
            // getLocationInfo.innerHTML =`${state}`;

        }
        else {
            getLocationInfo.innerHTML = '! Invalid'; 
        }
    })
}
function resetButton(){
    const zip = document.querySelector('.zip').value=" ";
    getLocationInfo.innerHTML =" ";
}
