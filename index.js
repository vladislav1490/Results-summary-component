async function getJson() {
    let response = await fetch("data.json");
    return await response.json();
}


async function processData() {

    const data = await getJson();

    for (let i = 1; i <= 4; i++) {
        console.log(`.box_${i}`);
        const box = document.querySelector(`.box_${i}`);
    
        const icon = box.querySelector('.icon');
        const reactionText = box.querySelector('.box_left p');
        const score = box.querySelector('.colored-text-1');
        
        let boxData = data[i - 1];
        icon.src = boxData.icon;
        reactionText.textContent = boxData.category;
        score.textContent = boxData.score;
    }    
}

processData();
