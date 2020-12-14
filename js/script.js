import projects from "./projects.js";

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

    // initiate projects carousel

    let projNo = 0;

    function showProject(number) {
        projNo = number;
        const projNameField = document.querySelector(".proj-name"),
              projTypeField = document.querySelector(".proj-type"),
              projLogoField = document.querySelector(".logo-round"),
              projDescrField = document.querySelector(".descr-text"),
              projTechsField = document.querySelector(".tech-box");

        projNameField.innerText = projects[number].projName;
        projTypeField.innerText = projects[number].projType;
        projDescrField.innerText = projects[number].projDescr;

        let logoImg =  document.createElement('IMG');
        logoImg.src = projects[number].projLogo;
        projLogoField.innerHTML = "";
        projLogoField.appendChild(logoImg);

        if (projects[number].usedTechs.length > 0) {
            projTechsField.innerHTML = "";
            projects[number].usedTechs.forEach(item => {
                let logoImg =  document.createElement('IMG');
                logoImg.src = item;
                projTechsField.appendChild(logoImg);
            })
        }
        
    }

    if (projects.length > 0) {
        showProject(0);
    }

    // slider arrows

    const arrow = document.querySelectorAll('.logo-wrapper>button');
    arrow.forEach(button => {
        button.onclick = () => {
            if (button.classList.contains("left")) {
                if (projNo == 0) {
                    showProject(projects.length - 1);
                } else {
                    showProject(projNo - 1);
                }
            } else {
                if (projNo == projects.length - 1) {
                    showProject(0);
                } else {
                    showProject(projNo + 1);
                }
            }
        } 
    })

}