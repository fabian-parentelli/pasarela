import { url } from '../variable.api.js';
import modalWatch from '../../javaScript/utild/modal.js';

const token = localStorage.getItem('token');

export function newProjectApi(formNewProject) {
    const modal = document.querySelector('.modal');

    formNewProject.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(formNewProject);

        const inputsValues = {};
        formData.forEach((value, key) => inputsValues[key] = value);

        const response = await fetch(`${url}/api/page`, {
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });

        const content = await response.json();

        if (content.error) {
            modalWatch(`${content.error}`, 'error');
            localStorage.setItem('projectFail', JSON.stringify(inputsValues));
            modal.classList.add('modal--show');
            setTimeout(() => {
                modal.classList.remove('modal--show');
                window.location.reload('/');
            }, 3000);
        };

        if (content.data.status === 'success') {
            modalWatch('Felicidades ya tienes tu página web!!!');
            modal.classList.add('modal--show');
            setTimeout(() => {
                modal.classList.remove('modal--show');
                window.location.reload('/');
            }, 3000);
        };
    });
};