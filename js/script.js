import projects from "./projects.js";
import content from "./content.js";

window.onload = () => {
    
    let bgContainer = document.querySelector(".background-container");
    let winWidth = window.screen.availWidth;
    let docHeight = 2600;
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

    // select Language

    let lang = "en";

    const langSelect = document.querySelector(".lang-select>select")
    langSelect.onchange = () => {
        lang = langSelect.value;
        showProject(projNo)
        insertContent()
    }

    // insert content

    function insertContent() {
        const menu = document.querySelectorAll(".menu a");
        for (let i = 0; i <= 2; i++) {
            menu[i].innerHTML = content.menu[lang][i];
        }

        const descr = document.querySelector(".photo .subscription span");
        descr.innerHTML = content.subscr[lang];

        const menu_toggle = document.querySelectorAll('li[class*=toggle] div');
        for (let i = 0; i <= 3; i++) {
            menu_toggle[i].innerHTML = content.menu_about[lang][i];
        }

        const about_me = document.querySelector('.content.aboutMe');
        about_me.innerHTML = content.about_me[lang];

        const work_exp = document.querySelector(".content.work");
        work_exp.innerHTML = content.work_experience[lang];

        const edu_titles = document.querySelectorAll(".content.education h3");
        for (let i = 0; i <= 1; i++) {
            edu_titles[i].innerHTML = content.education.titles[lang][i];
        }

        const edu_content = document.querySelector(".content.education .edu");
        edu_content.innerHTML = content.education.edu[lang];

        const edu_cert = document.querySelector(".content.education .cert");
        edu_cert.innerHTML = content.education.cert[lang];

        const portf_name = document.querySelector(".portfolio .name .title");
        portf_name.innerHTML = content.portfolio[lang][0];

        const portf_type = document.querySelector(".portfolio .type .title");
        portf_type.innerHTML = content.portfolio[lang][1];

        const portf_pr_descr = document.querySelector(".portfolio .descr-cont h3");
        portf_pr_descr.innerHTML = content.portfolio[lang][2];

        const portf_pr_techs = document.querySelector(".portfolio .descr-techs h3");
        portf_pr_techs.innerHTML = content.portfolio[lang][3];

        const contacts_text = document.querySelector(".contacts span");
        contacts_text.innerHTML = content.contacts[lang];
    }
    insertContent()

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
        }
    })

    // initiate projects carousel

    let projNo = 0;

    function showProject(number) {
        projNo = number;
        const projNameField = document.querySelector(".proj-name"),
              projTypeField = document.querySelector(".proj-type"),
              projLogoField = document.querySelector(".logo-box"),
              projDescrField = document.querySelector(".descr-text"),
              projTechsField = document.querySelector(".tech-box"),
              projCodeLinc = document.querySelector(".examine");

        projNameField.innerText = projects[number].projName[lang];
        projTypeField.innerText = projects[number].projType[lang];
        projDescrField.innerText = projects[number].projDescr[lang];

        let logoA = document.createElement('A'),
            logoImg = document.createElement('IMG');
        logoA.href = projects[number].projLink;
        logoA.target = "_blank";
        logoImg.src = projects[number].projLogo;
        logoA.appendChild(logoImg);
        projLogoField.innerHTML = "";
        projLogoField.appendChild(logoA);

        if (projects[number].usedTechs.length > 0) {
            projTechsField.innerHTML = "";
            projects[number].usedTechs.forEach(item => {
                let logoImg =  document.createElement('IMG');
                logoImg.src = `img/icons/${item}.png`;
                projTechsField.appendChild(logoImg);
            })
        }

        if (projects[number].codeLink) {
            projCodeLinc.innerHTML = "";
            let linkButton = document.createElement('A');
            linkButton.href = projects[number].codeLink;
            linkButton.classList.add("examine-link");
            linkButton.target = "_blank";
            switch (lang) {
                case "en":
                    linkButton.textContent = "Examine code";
                    break;
                case "ru":
                    linkButton.textContent = "посмотреть код";
                    break;
                case "ua":
                    linkButton.textContent = "подивитись код";
                    break;
            }
            
            projCodeLinc.appendChild(linkButton);
        } else {
            projCodeLinc.innerHTML = "";
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