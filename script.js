var table = document.getElementById('table');
const closeBtn = document.getElementById('closeBtn');
const createModal = document.getElementById('createModal');
const createNewBtn = document.getElementById('createNew');
const form = document.getElementById('form');

const updateModal = document.getElementById('updateModal');
const formUpdate = document.getElementById('formUpdate');
const closeBtnUpdate = document.getElementById('closeBtnUpdate');

formUpdate.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(form)
    let [title, content] = form;
    database.posts.push({
        title: title.value,
        content: content.value,
        date: getDate()
    })
    closeModal()
    displayArticle()
});


const openModalUpdate = (id) => {
    updateModal.style.display = 'flex';
    let [title, content] = formUpdate;
    title.value = database.posts[id].title
    content.value = database.posts[id].content
}

const closeModalUpdate = () => {
    updateModal.style.display = 'none';
}

closeBtnUpdate.addEventListener('click', (e) => 
    {   
        e.preventDefault();
        closeModalUpdate()
    }
);

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(form)
    let [title, content] = form;
    database.posts.push({
        title: title.value,
        content: content.value,
        date: getDate()
    })
    closeModal()
    displayArticle()
});

const getDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; 
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;

    return formattedToday;
}

const closeModal = (e) => {
    createModal.style.display = 'none';
}

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal()
})

const openModal = () => {
    createModal.style.display = 'flex';
}

createNewBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal()
})




const displayArticle = () => {
    var tablePrev = document.getElementById('tbody');
    tablePrev.remove();
    let tablebody = document.createElement('tbody');
    database.posts.forEach((post, index)=> {
        const articleId = document.createElement('td');
        const articleTitle = document.createElement('td');
        const articleContent = document.createElement('td');
        const articleDate = document.createElement('td');
        const tabelRow = document.createElement('tr');
        const buttondiv = document.createElement('div');
        const view = document.createElement('button');
        const deleteEl = document.createElement('button');

        buttondiv.append(view)
        buttondiv.appendChild(deleteEl)

        tablebody.setAttribute('id', 'tbody')
        articleId.innerText = post.id;
        articleTitle.innerText = post.title;
        articleContent.innerText = post.content;
        articleDate.innerText = post.date;
        view.innerText = 'view'
        view.setAttribute('class', 'viewPost');
        deleteEl.innerText = 'delete'

        tabelRow.append(articleId);
        tabelRow.append(articleTitle);
        tabelRow.append(articleContent);
        tabelRow.append(articleDate);
        tabelRow.append(buttondiv);
        tablebody.append(tabelRow)
    })

    table.append(tablebody)
}

displayArticle()

function viewListener() {
    const views = document.querySelectorAll('.viewPost');
    views.forEach((view)=> {
        view.addEventListener('click', (e) => {
            e.preventDefault();
            const postId = e.target.parentNode.parentNode.firstChild.innerText
            openModalUpdate(Number(postId));
        })
    })
}

viewListener()




