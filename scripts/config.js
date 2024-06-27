document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const adminPanel = document.getElementById('admin-panel');
    const logoutBtn = document.getElementById('logout-btn');
    const editPersonalInfoBtn = document.getElementById('edit-personal-info-btn');
    const personalInfoForm = document.getElementById('personal-info-form');
    const savePersonalInfoBtn = document.getElementById('save-personal-info-btn');
    const projectsList = document.getElementById('projects-list');
    const skillsList = document.getElementById('skills-list');


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

        document.getElementById('fullname').value = 'Nome do Administrador';
        document.getElementById('bio').value = 'Descrição do Administrador';
        document.getElementById('profile-pic').value = 'https://via.placeholder.com/150';
        document.getElementById('email').value = 'admin@example.com';
        document.getElementById('phone').value = '(11) 98765-4321';
        document.getElementById('social-links').value = 'https://www.linkedin.com, https://twitter.com';
    });

    savePersonalInfoBtn.addEventListener('click', function() {
        alert('Informações pessoais salvas com sucesso!');
    });

    const projectsData = [
        { id: 1, title: 'Projeto 1', description: 'Descrição do Projeto 1', imageUrl: 'https://via.placeholder.com/150' },
        { id: 2, title: 'Projeto 2', description: 'Descrição do Projeto 2', imageUrl: 'https://via.placeholder.com/150' },
    ];

    const skillsData = [
        { id: 1, skill: 'Habilidade 1', description: 'Descrição da Habilidade 1' },
        { id: 2, skill: 'Habilidade 2', description: 'Descrição da Habilidade 2' },
    ];

    projectsData.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.innerHTML = `
            <h4>${project.title}</h4>
            <p>${project.description}</p>
            <img src="${project.imageUrl}" alt="${project.title}">
            <hr>
        `;
        projectsList.appendChild(projectDiv);
    });

    skillsData.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.innerHTML = `
            <h4>${skill.skill}</h4>
            <p>${skill.description}</p>
            <hr>
        `;
        skillsList.appendChild(skillDiv);
    });
});
