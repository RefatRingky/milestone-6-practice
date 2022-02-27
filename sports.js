const allPlayers = () =>{
    const searchValue = document.getElementById('search-box').value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
    console.log(url);
    console.log(searchValue);
    fetch(url)
    .then(res => res.json())
    .then (data => showPlayerDetails(data.player))
}

const showPlayerDetails = (Players) =>{
 for(const player of Players){
    const parent = document.getElementById('palyer-container');
    const div = document.createElement('div');
    div.innerHTML =`
    <div class="card border">
    <div class="pro-pic">
        <img  class="w-25" src="${player.strThumb}" alt="">
    </div>
    <h2>Name:${player.strPlayer}</h2>
    <h5>Country:${player.strNationality}</h5>
    <p></p>
    <div class="allButton">
        <button class ="btn btn-danger">Delete</button>
        <button  class ="btn btn-success">Detail</button>
    </div>
    </div>
    `;
    parent.appendChild(div);
    // console.log(player);
 }
}