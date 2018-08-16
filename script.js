console.log("loaded!");

const container = document.querySelector('#container');
let cameraWrapper = document.querySelector('#cameraWrapper');
const bubbles = document.querySelector("#stringofbubbles");
const spongebob = document.querySelector("#spongebob");
const angler = document.querySelector("#angler");
const seahorse = document.querySelector("#seahorse");

angler.addEventListener("click", anglerClicked);

function cameraController(e){
    //space to increase y position
    //shift to decrease y position
    //speed change possibly.
    if(e.charCode === 32){
        cameraWrapper.children;

    }
}

document.addEventListener('keypress', cameraController);

function anglerClicked(){
//     console.log("anglerClicked")
// get the angler coordinates and pass it into addBubbles as x,y,z
//     addBubbles()
}



function getRandomInt(min, max) {
  return Math.random() * (max - min) + min;
}

function loadGrass(quantity, min, max){
    for(let i=0; i < quantity; i++){
        container.innerHTML += `
        <a-entity static-body 
            scale="2 2 2" 
            rotation="0 ${getRandomInt(0,360)} 0" 
            position="${getRandomInt(min, max)} 1 ${getRandomInt(min, max)}" 
            gblock="https://poly.google.com/view/4cFllH6Iazk" 
            class="kelp">
        </a-entity>`
    }
}

function loadOrangeBranchCoral(quantity, min, max){
    for(let i=0; i < quantity; i++){
        container.innerHTML += `
        <a-entity static-body 
            scale="2 2 2" 
            rotation="${getRandomInt(-10,10)} ${getRandomInt(0,360)} ${getRandomInt(-10, 10)}" 
            position="${getRandomInt(min, max)} 1.5 ${getRandomInt(min, max)}" 
            gblock="https://poly.google.com/view/4KUXdtDdgHR" 
            id="orangeBranchCoral">
        </a-entity>`
    }
}

function loadOrangeCoral(quantity, min, max){
    for(let i=0; i < quantity; i++){
        container.innerHTML += `
        <a-entity static-body 
            scale="5 5 5" 
            rotation="0 ${getRandomInt(0,360)} 0" 
            position="${getRandomInt(min, max)} -8 ${getRandomInt(min, max)}" 
            gblock="https://poly.google.com/view/3HEc6LvqCJd" 
            class="orangeCoral">
        </a-entity>`
    }
}

function loadAnenome(quantity, min, max){
    for(let i=0; i < quantity; i++){
        container.innerHTML += `
        <a-entity static-body 
            scale="0.5 0.5 0.5" 
            rotation="0 ${getRandomInt(0,360)} 0" 
            position="${getRandomInt(min, max)} 0 ${getRandomInt(min, max)}" 
            gblock="https://poly.google.com/view/eUZruaSm-9X" 
            id="blueAnemone">
        </a-entity>`
    }
}

function loadYellowSponge(quantity, min, max){
    for(let i=0; i < quantity; i++){
        container.innerHTML += `
        <a-entity static-body 
            scale="0.07 0.07 0.07" 
            rotation="0 ${getRandomInt(0,360)} ${getRandomInt(-10,10)}" 
            position="${getRandomInt(min, max)} 0 ${getRandomInt(min, max)}" 
            gblock="https://poly.google.com/view/352pUn4ulIH" 
            class="yellowSeaSponge">
        </a-entity>`
    }
}

function loadCoralArrangement(quantity, min, max){
    for(let i=0; i < quantity; i++){
        container.innerHTML += `
        <a-entity static-body 
            scale="0.05 0.05 0.05" 
            rotation="0 ${getRandomInt(0,360)} 0" 
            position="${getRandomInt(min, max)} -1 ${getRandomInt(min, max)}" 
            gblock="https://poly.google.com/view/80uVAty6wZ2" 
            class="coralArrangement">
        </a-entity>`
    }
}

function loadCoral(){
    //this function should load a bunch of corals randomly
    loadGrass(70, -50, 50);
    loadOrangeBranchCoral(60, -40, 40);
    loadOrangeCoral(40, -35, 35);
    loadAnenome(30, -40, 40);
    loadYellowSponge(50,-40,40);
    loadCoralArrangement(60, -40, 40);
}
 

function bubbleGenerator(){
    for(var i=0; i< 30; i++){
        var xposition = getRandomInt(-35, 35);
        var yposition = getRandomInt(-35, 35);
        bubbles.innerHTML += `
        <a-entity static-body 
            scale="8 8 8" 
            gblock="https://poly.google.com/view/e1OJ1hMgTMH">
            <a-animation 
                attribute="position"
                direction="normal"
                from="${xposition} 0 ${yposition}" 
                to="${xposition} 150 ${yposition}"
                dur = "3500"
                repeat="indefinite">
            </a-animation>
        </a-entity>`
            
    }
    
}
// player.addEventListener('collide', reportCollision)

// function reportCollision (e) {
//     console.log('Player has collided with body #' + e.detail.body.id);

//     e.detail.target.el;  // Original entity (playerEl).
//     e.detail.body.el;    // Other entity, which playerEl touched.
//     e.detail.contact;    // Stats about the collision (CANNON.ContactEquation).
//     e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).
// }

loadCoral();
bubbleGenerator();