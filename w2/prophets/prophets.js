const LINK = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json"

async function getList(){
    const data = await fetch(LINK)
    const response = await data.json()
    
    response.prophets.forEach(prophet => {
        createHTML(prophet)
    });
}

getList()

function createHTML(p){
    const container = document.querySelector('#container');
    const template = `   
    <div id="prophet-card">
        <section class="card">
          <h2>${p.name} ${p.lastname}</h2>
          <p>${p.birthdate}</p>
          <p>${p.birthplace}</p>
          <img class="profile" src="${p.imageurl}" alt="${p.name} image" loading="lazy" width="200" height="300">
        </section>
    </div>
    `
    container.innerHTML += template;
}