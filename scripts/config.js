document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const adminPanel = document.getElementById('admin-panel');
    const logoutBtn = document.getElementById('logout-btn');
    const editPersonalInfoBtn = document.getElementById('edit-personal-info-btn');
    const personalInfoForm = document.getElementById('personal-info-form');
    const savePersonalInfoBtn = document.getElementById('save-personal-info-btn');
    const projectsList = document.getElementById('projects-list');
    const skillsList = document.getElementById('skills-list');
    const editProjects = document.getElementById('edit-projects-btn');
    const formProjects = document.getElementById('personal-projects-form');
    const saveProjects = document.getElementById('save-projects');

    const username = 'admin';
    const password = 'admin';

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const usernameVal = document.getElementById('username').value;
        const passwordVal = document.getElementById('password').value;

        if (usernameVal === username && passwordVal === password) {
            document.getElementById('login-container').style.display = 'none';
            adminPanel.style.display = 'block';
        } else {
            alert('Credenciais inválidas. Tente novamente.');
        }
    });

    logoutBtn.addEventListener('click', function() {
        location.reload();
    });

    editPersonalInfoBtn.addEventListener('click', function() {        
        personalInfoForm.style.display = 'block';
        editPersonalInfoBtn.style.display = 'none';
        
    });

    savePersonalInfoBtn.addEventListener('click', function() {
        var name = document.createElement('h3');
        name.innerHTML = document.getElementById('fullname').value;
        var bio = document.createElement('p');
        bio.innerHTML = document.getElementById('bio').value;
        var email = document.createElement('p');
        email.innerHTML = document.getElementById('email').value;
        var socialLinks = document.createElement('p');
        socialLinks.innerHTML = document.getElementById('social-links').value;
        
        var divPersonalInfo = document.getElementById('edit-personal-info');
        divPersonalInfo.appendChild(name);
        divPersonalInfo.appendChild(bio);
        divPersonalInfo.appendChild(email);
        divPersonalInfo.appendChild(socialLinks);      

        personalInfoForm.style.display = 'none';
        savePersonalInfoBtn.style.display = 'block';
        alert('Informações pessoais salvas com sucesso!');

    });

    editProjects.addEventListener('click', function(){
        formProjects.style.display = 'block';
        editProjects.style.display = 'none';        

    });


    saveProjects.addEventListener('click', function(){
        var titulo = document.getElementById('title-text');
        var descricao = document.getElementById('description');
        
        var pTitulo = document.createElement('h3');
        pTitulo.innerHTML =  titulo.value;

        projectsList.appendChild(pTitulo);

        var pDescricao = document.createElement('p');
        pDescricao.innerHTML = descricao.value;

        projectsList.appendChild(pDescricao);

        formProjects.style.display = 'none';
        saveProjects.style.display = 'block';
        alert('Projeto salvo com sucesso');
    });

});
