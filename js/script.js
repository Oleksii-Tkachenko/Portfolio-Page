window.onload = () => {
    
    let bgContainer = document.querySelector(".background-container");
    let winWidth = window.screen.availWidth;
    let docHeight = 4200;
    function createBg() {
        let row = document.createElement("DIV");
        let hexagon = document.createElement("DIV");
        row.classList.add("row");
        hexagon.classList.add("hexagon");

        let hexQtty = winWidth / 100;
        let rowQtty = docHeight / 114;

        // creating row

        for (let i = 1; i <= hexQtty; i++) {
           let currentHex = hexagon.cloneNode();
           row.appendChild(currentHex);
        }

        // paste rows

        for (let i = 1; i <= rowQtty; i++) {
            let currentRow = row.cloneNode(true);
            bgContainer.appendChild(currentRow);
        }
    }
    createBg();

    // moving light behind background
        
    const cursor = document.getElementById('cursor');
    window.onmousemove = function (e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + window.scrollY + 'px';
    }

    // "About me" section tab toggle

    const toggles = document.querySelectorAll('li[class*=toggle]');
    const contentBlocks = document.querySelectorAll('.about .content');
    toggles.forEach(toggle => {
        toggle.onclick = (e) => {
            let className = e.currentTarget.className.match(/.+(?=-)/)[0];
            contentBlocks.forEach(block => {
                if (block.classList.contains(className)) {
                    block.style.display = 'block';
                } else {
                    block.style.display = 'none';
                }
            })
            toggles.forEach(item => {
                item.classList.remove("active");
            })
            e.currentTarget.classList.add("active");
            console.log("click")
        }
    })

}