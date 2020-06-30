import { ModelPostForm } from './modelPostForm.js';
import { ViewPostForm } from './viewPostForm.js';

export class Controller{
    constructor() {
        this.model = new ModelPostForm();
        this.view = new ViewPostForm(this.sendForm.bind(this),
                                this.checkPostTitle.bind(this));
    }

    sendForm(str){
        return this.model.sendForm(str);
    }

    checkPostTitle(str){
        // return this.model.checkPostTitle(str);
    }

    
}