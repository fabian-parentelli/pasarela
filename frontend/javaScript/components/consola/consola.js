import { project } from '../../pages/project/project.js';
import { currentApi } from '../../../helpers/user/current.api.js';
import modalWatch from '../../utild/modal.js';

const projectFail = localStorage.getItem('projectFail');
const modal = document.querySelector('.modal');


export async function consola(consoles) {
    const newProject = document.querySelector('#newProject');

    newProjectFun(newProject, consoles);
};

// Nuevo proyecto.
function newProjectFun(newProject, consoles) { 
    if (newProject) newProject.addEventListener('click', async () => {
        const result = await currentApi();
        if (result.user.project) {
            modalWatch(`Ya tienes una página`, 'error');
            modal.classList.add('modal--show');
            setTimeout(() => {
                modal.classList.remove('modal--show');
                window.location.reload('/');
            }, 3000);
        } else {
            project(consoles);
        };
    });

    if (projectFail) {
        const parsedValues = JSON.parse(projectFail);
        localStorage.removeItem('projectFail');
        project(consoles, parsedValues);
    };
};