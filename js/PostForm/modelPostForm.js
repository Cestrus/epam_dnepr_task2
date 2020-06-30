export class ModelPostForm{

    constructor(postTitle){
        this.postTitle = postTitle;
        this.minCharacters = 2;
        this.maxCharacters = 20;
        this.validSigns = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz .,!?:-';
    }

    isValidSigns(str){
        let title = str.trim();
        if(!this.isFirstUpper(title)){
            return false;
        }
        for(let i=0; i <title.length ; i++){
            for(let j=0; j < this.validSigns.length; j++){
                if(title[i] === validSigns[j]){
                    break;
                }
                if(j === this.validSigns.length - 1 && title[i] !== this.validSigns[j]){
                    return false;
                }
            }
        }
        return true;
    }

    isFirstUpper(title){
        let upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let firstLetter = title[0];
        for(let i=0; i<upperLetters.length; i++){
            if(firstLetter === upperLetters[i]){
                return true;
            }
        }
        return false;        
    }

    checkPostTitle(str){
        return (this.isValidSigns(str)
                && str.length >= this.minCharacters 
                && str.length <= this.maxCharacters)
        ? true
        : false;
    }

    sendForm(str){
        if(this.checkPostTitle(str)){
            
            return true;
        } else {            
            return false;
        }
    }
    
}
