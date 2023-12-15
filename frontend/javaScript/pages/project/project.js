import { newProjectApi } from '../../../helpers/project/newProject.api.js';

export function project(consoles, parsedValues) {

    if (consoles) consoles.innerHTML = '';

    const divNewProject = document.createElement('div');
    divNewProject.className = 'divNewProject';
    divNewProject.innerHTML = `
        <a class="help" href="#">Si precisas ayuda mira este video</a>
        <h2>Crear tu proyecto</h2>
        <div class="divNewProjectInter">
            <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1702324804/assets/iep6yucc5mivqrdmqxz0.png"/>
            <form id="formNewProject">

                <div class="newProjectA">

                    <div class="newProjectUp">
                        <div>
                            <label>Nombre del proyecto</label>
                            <input type="text" name="projectName" required/>
                        </div>
                        <div>
                            <label>Tipos de proyecto</label>
                            <select name="type" id="typeProject" required>
                                <option value="" disabled selected>Tipo de Proyecto</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                    </div>
        
                    <div class="newProjectUp">
                        <div>
                            <label>Ciudad</label>
                            <input type="text" name="city" required/>
                        </div>
                        <div>
                            <label>Provincia</label>
                            <input type="text" name="state" required/>
                        </div>
                    </div>

                    <div class="newProjectUp">
                        <div>
                            <label>Email público</label>
                            <input type="email" name="publicEmail" required/>
                        </div>
                        <div>
                            <label>cel/tel público</label>
                            <input type="phone" name="phonePublic" required/>
                        </div>
                    </div>
                </div>

                <div class='fnp'>
                    <label>Logo de la banda</label>
                    <input type="file" name="logo" accept="image/*" required>
                </div>
                 
                <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1702331963/assets/xpfrdc8cmhk2ubwhuylf.png"/>

                <div class='fnp'>
                    <label>Foto de portada</label>
                    <input type="file" name="front" accept="image/*" required>
                </div>
                
                <div class='textArea'>
                    <label>Cuentanos de tu proyecto</label>
                    <textarea name="weAre" maxlength="366" placeholder="aprovecha los 366 caracteres"></textarea>
                </div>

                <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1702333691/assets/nm3uji16cyyk5m27rau7.png"/>
                
                <div class='fnp'>
                    <label>Elige 4 fotos</label>
                    <input type="file" name="images" accept="image/*" multiple required>
                </div>

                <div class="radios">
                    <h4>Si quieres publicar algun link de youtube dale a mostrar vidos</h4>
                    <div class="radiosB">
                        <div class="radiosA">
                            <label>Mostrar videos</label>
                            <input type="radio" name="videoOk" value="true" id="vewVideo"/>
                        </div>
                        <div class="radiosA">
                            <label>No mostrar videos</label>
                            <input type="radio" name="videoOk" value="false" checked/>
                        </div>
                    </div>
                </div>

                <div id="vewVideoTrue"></div>

                <input class="btn-blue" type="submit" value="Guardar">
            </form>
        </div>
    `;

    consoles.appendChild(divNewProject);

    const vewVideo = document.querySelector('#vewVideo');
    vewVideo.addEventListener('change', vewVideoFunc)

    const formNewProject = document.querySelector('#formNewProject');
    newProjectApi(formNewProject);


    if (parsedValues) responseValue(formNewProject, parsedValues);
};

function vewVideoFunc() {
    const vewVideoTrue = document.querySelector('#vewVideoTrue');
    vewVideoTrue.innerHTML = '';

    const divVewVideo = document.createElement('div');
    divVewVideo.className = 'divVewVideo';
    divVewVideo.innerHTML = `
        <div id="divVewVideo">
            <img src="https://res.cloudinary.com/dtjzfz2ex/image/upload/v1702334678/assets/b48epk3htpxnkp3zduhp.png"/>

            <a href="">Video de como encontrar la ruta iframe</a>

            <div class="newProjectUp">
                <div>
                    <label>Ruta iframe del video</label>
                    <input type="text" name="video1" required/>
                </div>
                <div>
                    <label>Ruta iframe del otro video</label>
                    <input type="text" name="video2" required/>
                </div>
            </div>
        </div>
    `;
    vewVideoTrue.appendChild(divVewVideo);
};

function responseValue(formNewProject, parsedValues) {
    formNewProject.querySelector('[name="city"]').value = parsedValues.city;
    formNewProject.querySelector('[name="phonePublic"]').value = parsedValues.phonePublic;
    formNewProject.querySelector('[name="projectName"]').value = parsedValues.projectName;
    formNewProject.querySelector('[name="publicEmail"]').value = parsedValues.publicEmail;
    formNewProject.querySelector('[name="state"]').value = parsedValues.state;
    formNewProject.querySelector('[name="type"]').value = parsedValues.type;
    formNewProject.querySelector('[name="weAre"]').value = parsedValues.weAre;
};