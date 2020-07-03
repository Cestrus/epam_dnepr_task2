export class ModelPostForm{

    constructor(renderSendMessegeWindow){
        this.renderSendMessegeWindow = renderSendMessegeWindow;
        this.validSigns = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz .,!?:-';
        this.upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    isFirstUpper(title){
        let firstLetter = title[0];
        for(let i=0; i<this.upperLetters.length; i++){
            if(firstLetter === this.upperLetters[i]){
                return true;
            }
        }
        return false;        
    }   

    isValidSigns(str){
        let title = str.trim();
        if(!this.isFirstUpper(title)){
            return false;
        }
        for(let i=0; i <title.length ; i++){
            for(let j=0; j < this.validSigns.length; j++){
                if(title[i] === this.validSigns[j]){
                    break;
                }
                if(j === this.validSigns.length - 1 && title[i] !== this.validSigns[j]){
                    return false;
                }
            }
        }
        return true;
    }

    createRequestBody(event){
        const postType = event.target.selectPostForm.value;
        const author = event.target.authorPostForm.value;
        const imgLink = event.target.imgLinkPostForm.value;
        const postTitle = event.target.titlePostForm.value;
        const date = event.target.datePostForm.value;
        const postDescription = event.target.postDescriptionPostForm.value;
        const postQuote = event.target.postQuotePostForm.value;

        console.log('form json: ' ,  JSON.stringify({postType, author, imgLink, postTitle, date, postDescription, postQuote}))
        return JSON.stringify({postType, author, imgLink, postTitle, date, postDescription, postQuote});
    }

    sendRequest(requestBody){
        const URL = 'http://127.0.0.1:3000/api/register';

        fetch(URL, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors', 
            requestBody
        })
            .then(response => {
                if(response.ok){
                    this.renderSendMessegeWindow('Form submitted successfully');                   
                }              
            })
            .catch(error => {
                this.renderSendMessegeWindow(`Error while fetching ${error}`);
            });
    }

    sendForm(event){
        this.sendRequest(this.createRequestBody(event));
    }    


}
