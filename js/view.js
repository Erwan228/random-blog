startView();
function startView() {
    document.getElementById('scree').innerHTML = /*html*/ `
    <h1></h1>
    <div id="blogs">
    </div>
    `;
    newRando();
    nowView(randomNumber);
}

function nowView(rnd) {
    if (rnd == 1) {
        document.getElementsByTagName('h1').innerHTML = /*html*/ `
        ${PaladinsBlog.title}
        `;
        PaladinsBlog.blogs.forEach(blog => {
            document.getElementById('blogs').innerHTML += /*html*/ `
            <h3>${blog.title}</h3>
            <p>Dear journal, <br> ${blog.entry}</p>
        `
        });

    }
    if (rnd == 2) {
        document.getElementsByTagName('h1').innerHTML = /*html*/ `
        ${DancersBlog.title}
        `;
        DancersBlog.blogs.forEach(blog => {
            document.getElementById('blogs').innerHTML += /*html*/ `
            <h3>${blog.title}</h3>
            <p>Dear journal, <br> ${blog.entry}</p>
        `
        });

    }
    if (rnd == 3) {
        document.getElementsByTagName('h1').innerHTML = /*html*/ `
        ${ScholarsBlog.title}
        `;
        ScholarsBlog.blogs.forEach(blog => {
            document.getElementById('blogs').innerHTML += /*html*/ `
            <h3>${blog.title}</h3>
            <p>Dear journal, <br> ${blog.entry}</p>
        `
        });

    }
}