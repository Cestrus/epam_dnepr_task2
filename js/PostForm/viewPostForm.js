export class ViewPostForm{

    constructor(sendForm, checkPostTitle){
        this.sendForm = sendForm;
		// this.checkPostTitle = checkPostTitle;
		this.containerForm = document.querySelector('.container-modalPostForm');
		this.renderForm();
        this.form = document.querySelector('.modalPostForm');
        this.overlayModal = document.querySelector('.overlayModal');
		this.postTitle = document.querySelector('.modalPostForm__titlePostBox');		
		this.postTitleInput = document.querySelector('.modalPostForm__titlePostBox input');		
		this.postDescription = document.querySelector('.modalPostForm__postDescriptionBox textarea');
		this.postQuote = document.querySelector('.modalPostForm__postQuoteBox textarea');

		this.postDescription.addEventListener('keyup', this.activePostQuote.bind(this));
		
        document.querySelector('.btn--postForm-submit').addEventListener('click', this.clickSendForm.bind(this));
		document.querySelector('.btn--postForm-quit').addEventListener('click', this.quitModalWindow.bind(this));
		this.renderTooltip();
    }

    renderForm(){
        this.containerForm.innerHTML = `
		<form class="modalPostForm" name="post">
			<div class="modalPostForm__title">
				<p>FILL THE FORM</p>
			</div>
			<div class="modalPostForm__postTypeBox">
				<label for="selectPostForm">Select post type: </label>
				<select class="modalPostForm__select" id="selectPostForm">
					<option class="modalPostForm__option" value="">text</option>
					<option class="modalPostForm__option" value="">video</option>
					<option class="modalPostForm__option" value="">audio</option>
				</select>
			</div>
			<div class="modalPostForm__imgLinkBox">
				<label for="imgLinkPostForm">Image link: </label>
				<input type="text" class="modalPostForm__input modalPostForm__input--imgLink" id="imgLinkPostForm">
			</div>
			<div class="modalPostForm__titlePostBox">
				<label for="titlePostForm">Title: </label>
				<input type="text" class="modalPostForm__input modalPostForm__input--titlePost " id="titlePostForm">
			</div>
			<div class="modalPostForm__authorBox">
				<label for="authorPostForm">Author: </label>
				<input type="text" class="modalPostForm__input modalPostForm__input--author" id="authorPostForm">
			</div>
			<div class="modalPostForm__dateBox">
				<label for="datePostForm">Date: </label>
				<input type="date" class="modalPostForm__input modalPostForm__input--date" id="datePostForm">
			</div>
			<div class="modalPostForm__postDescriptionBox">
				<label for="postDescriptionPostForm">Post description</label>
				<textarea class="modalPostForm__textarea--postDescription" name="" id="postDescriptionPostForm" ></textarea>
			</div>
			<div class="modalPostForm__postQuoteBox">
				<label for="postQuotePostForm">Post quote</label>
				<textarea class="modalPostForm__textarea--postQuote" name="" id="postQuotePostForm" disabled></textarea>
			</div>
			<div class="modalPostForm__btnBoxLeft">
				<input type="submit" value="Send" class="btn btn--postForm-submit">
			</div>
			<div class="modalPostForm__btnBoxRight">
				<input type="button" value="Quit" class="btn btn--postForm-quit">
			</div>
		</form>`
    }

	renderTooltip(){
		let tooltip = document.createElement('div');
		tooltip.innerHTML = `
			<ul>
				<li> title can contain letters and these symbols ! : - ? . , </li>
				<li> title length must be more than 2 characters but less than 20 </li>
				<li> title must start with an uppercase letter </li>
			</ul>
		`
		tooltip.classList.add('tooltip');
		this.postTitle.appendChild(tooltip);

		this.postTitleInput.addEventListener('mouseover', () => {
			tooltip.classList.add('tooltip--visible');
		});
		this.postTitleInput.addEventListener('mouseout', () => {
			tooltip.classList.remove('tooltip--visible');			
		});
	}

	renderWrongTitle(){
		let alert = document.createElement('div');
		alert.classList.add('alert');
		this.postTitle.appendChild(alert);		
	}

	activePostQuote(){
		let postDescription = this.postDescription.value;
		postDescription = postDescription.trim()
		if(postDescription !== ''){			
			this.postQuote.removeAttribute('disabled');
		} else {
			this.postQuote.setAttribute('disabled', 'true');
		}
	}

	clickSendForm(){		
		// if(!this.sendForm(this.postTitleInput.value)){	
		// 	if(!document.querySelector('.alert')){
		// 		this.renderWrongTitle();
		// 	}
		// } else {
		// 	document.querySelector('.alert').remove();
		// 	document.querySelector('body').style.overflow = 'visible';
		// }
	}

	quitModalWindow(){
        this.form.classList.remove('modalPostForm--visible');
		this.overlayModal.classList.remove('overlayModal--visible');
		document.querySelector('body').style.overflow = 'visible';
		this.resetForm();
	}
	
	resetForm(){
		[...this.form.elements].forEach(element => {
			if(element.value !== 'Send' && element.value !== 'Quit'){
				element.value = '';
			}			
		});
		if (document.querySelector('.alert')) {
			document.querySelector('.alert').remove();
		}
	}





}