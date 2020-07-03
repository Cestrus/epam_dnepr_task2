import { ModelPostForm } from './modelPostForm.js';
import { ViewPostForm } from './viewPostForm.js';

import { ControllerPostPage } from '../PostPage/controllerPostPage.js';

export class ControllerPostForm{
    constructor() {
        this.model = new ModelPostForm(this.renderSendMessegeWindow.bind(this));
        this.view = new ViewPostForm(this.sendForm.bind(this),
                                     this.isValidSigns.bind(this),
                                     this.addNewPost.bind(this));
    }

    sendForm(event){
        return this.model.sendForm(event);
    }

    isValidSigns(str){
        return this.model.isValidSigns(str);
    }

    addNewPost(){         
        return new ControllerPostPage();
    }

    renderSendMessegeWindow(message){
        return this.view.renderSendMessegeWindow(message);
    }

    
}