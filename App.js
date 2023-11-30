
async function allCenters() {
    let response = await fetch("https://isro.vercel.app/api/centres");
    let data = await response.json();
    data = data.centres;
    return data;
}
allCenters();

let cardNode = document.querySelector("#card-text");

async function bindingName() {
    //console.log(input);
    let input = await allCenters();
    cardBinding(input);
}

bindingName();

function cardBinding(input){
    let list = input.map(function (data) {
        return `
         <div class="card">
            <div class="items">
                <h3 class="itemHeader">CENTER</h3>
                <P class="itemTxt">${data.name}</P>
            </div>
            <div class="items">
                <h3 class="itemHeader">CITY</h3>
                <P class="itemTxt">${data.Place}</P>
            </div>
            <div class="items">
                <h3 class="itemHeader">STATE</h3>
                <P class="itemTxt">${data.State}</P>
            </div>
        </div>`
    });
    
    cardNode.innerHTML += 
    `${list}`
    // console.log(cardNode)
}

async function filterHandler(type){
//    console.log(type);
   let input = document.querySelector("#search-details").value.toLowerCase();
//    console.log(input);
   cardNode.innerHTML = '';

   let data = await allCenters();
   let filterData = data.filter(function(data){
    
        if(type == 'city'){
            return data.Place.toLowerCase().includes(input);
        }
        else if(type == 'center'){
            return data.name.toLowerCase().includes(input);
        }
        else if(type == 'state'){
            return data.State.toLowerCase().includes(input);
        }
   })
   cardBinding(filterData);

}
filterHandler();

        let btn = document.querySelectorAll(".btn");
        let txtColor = "#004AAD"
        
        btn.forEach(element => {
            element.addEventListener('click', () => {
                document.querySelector('.active').classList.remove('active')
                element.classList.add('active');
            })
        });