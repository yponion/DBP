document.getElementById('create-project-btn').addEventListener('click', function() {
    document.getElementById('project-form-container').classList.remove('hidden');
    this.classList.add('hidden');
});

document.getElementById('create-project-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('project-title').value;
    const type = document.getElementById('project-type').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    const projectElement = document.createElement('div');
    projectElement.innerHTML = `<h3>${title}</h3>`;
    projectElement.classList.add('project-item');
    projectElement.onclick = function() {
        alert(`'${title}' 프로젝트 상세 페이지로 이동합니다.`);
    };

    document.getElementById('projects-container').appendChild(projectElement);

    document.getElementById('create-project-form').reset();
    document.getElementById('project-form-container').classList.add('hidden');
    document.getElementById('create-project-btn').classList.remove('hidden');
});
