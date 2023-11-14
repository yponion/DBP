// 프로젝트 생성 폼 제출 이벤트 처리
if (document.getElementById('create-project-form')) {
    document.getElementById('create-project-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const title = document.getElementById('project-title').value;
        // 서버로 데이터 전송하는 로직을 여기에 추가 (예: AJAX 요청)
        // 폼 제출 후 메인 페이지로 리디렉션
        window.location.href = 'index.html';
    });
}

// 메인 페이지에서 생성된 프로젝트 표시 및 삭제 기능
if (document.getElementById('created-projects-container')) {
    // 서버에서 프로젝트 목록을 가져와서 표시하는 로직을 여기에 추가
    // 예를 들어, AJAX 요청을 통해 프로젝트 데이터를 가져오고 DOM에 추가

    // 임시로 몇 개의 프로젝트를 생성합니다 (실제로는 서버에서 데이터를 가져와야 합니다)
    const projects = [
        { id: 1, title: "프로젝트 1" },
        { id: 2, title: "프로젝트 2" },
        // ... 추가 프로젝트
    ];

    const projectsContainer = document.getElementById('created-projects-container');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project-item');
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <button onclick="deleteProject(${project.id}, this)">삭제</button>
        `;
        projectsContainer.appendChild(projectElement);
    });
}

function deleteProject(projectId, element) {
    if (confirm('이 프로젝트를 삭제하시겠습니까?')) {
        // 서버에 삭제 요청을 보내는 로직을 여기에 추가 (예: AJAX 요청)
        // DOM에서 프로젝트 요소 제거
        element.parentElement.remove();
    }
}
