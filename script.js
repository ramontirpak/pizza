function szallasok() {
    document.getElementById('container').innerHTML = `   
    <div class="sav">
        <p>Szállások:</p>
    </div>
`

fetch("https://nodejs.sulla.hu/data")
.then(function(datas) {
    for (let i = 0; i < datas.length; i++) {
        document.getElementById('container').innerHTML += `    
        <div class="col-4">
        <div class="card" style="width: 18rem; margin-left: 15rem; margin-top: 5rem; padding: 25px; background-color: #3F9CFF;">
        <h4 class="card-title">Szállás neve</h4>
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
        <p class="card-text">Helyszín: ${datas[i].location}</p>
        <p class="card-text">Ár: ${datas[i].price}</p>
        <p class="card-text">Minimum éjszakák: ${datas[i].minimum_nights}</p>

        <div class="row justify-content-center">
            <button class="btn btn-primary">Módosít</button>
            <button class="btn btn-primary">Törlés</button>
        </div>
        <div class="row justify-content-center" >
            <button style="width: 190px;" class="btn btn-primary">Részletek</button>
        </div>

        </div>
    </div>
    </div>`
    }
})
}
