// we declare a new global variable containing an array that represents the ballons map
// you have to add more colors into the ballonsMap array
let ballonsMap = ['green','blue','red','yellow','purple','green','blue','red','yellow','purple','green','blue','red','yellow','purple','green'];
let  activeBalloons=ballonsMap.length;
// poping a balloon is basically turning his color to null (no color)
const popBalloon = (position) => {
    ballonsMap[position] = null;
    activeBalloons=activeBalloons-1;
    render();
}

const render = () => {
    
    // convert ballons map of colors into real html balloons
    const ballons = ballonsMap.map((color, position) => {
        let popped = (color === null) ? "popped" : "active";        
        return `<div class='balloon ${popped}' style='background-color: ${color}; color: ${color};' onclick='popBalloon("${position}")'></div>`;

        
    });

    document.querySelector("#balloon-count").innerHTML = activeBalloons; // <-- render the balloon count into the DOM
    document.querySelector("#balloon-map").innerHTML = ballons.join(''); // <-- render the balloons into the DOM

    if(activeBalloons == 0) window.location.reload(); // <--- reload website when no more balloons are left
}

// this makes the "render" function trigger when the website starts existing
window.onload = render();