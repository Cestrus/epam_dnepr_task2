import { ModelPostPage } from './modelPostPage.js';
import { ViewPostPage } from './viewPostPage.js';

export class ControllerPostPage{
    constructor(){
        console.log('controller')
        this.model = new ModelPostPage();
        this.view = new ViewPostPage();
    }
}