// const body        = document.body;
// const popupLink   = document.querySelectorAll( '.popup__link' );
// const popup       = document.querySelectorAll( '.popup' );
// const exitButton  = document.querySelectorAll( '.popup__exit' );
// const popupShadow = document.querySelectorAll( '.popup__shadow' );

// if( popupLink.length > 0 ) {
// 	for( let i = 0; i < popupLink.length; i++ ) {
// 		popupLink[i].addEventListener( 'click', function(e) {
// 			if( e.currentTarget == document.getElementById( 1 ) ) {
// 				if( document.querySelectorAll( '.active-link' ).length == 0 && document.querySelectorAll( '.open-popup' ).length ==0 ) {
// 					document.getElementById( 1 ).classList.add( 'active-link' );
// 					document.querySelector( '.sign-in' ).classList.add( 'open-popup' );
// 					e.preventDefault();
// 				} else {
// 					exitPopup( e );
// 					document.getElementById( 1 ).classList.add( 'active-link' );
// 					document.querySelector( '.sign-in' ).classList.add( 'open-popup' );
// 					e.preventDefault();
// 				}
// 			} else if( e.currentTarget == document.getElementById( 2 ) ) {
// 				if( document.querySelectorAll( '.active-link' ).length == 0 && document.querySelectorAll( '.open-popup' ).length == 0 ) {
// 					document.getElementById( 2 ).classList.add( 'active-link' );
// 					document.querySelector( '.register' ).classList.add( 'open-popup' );
// 					e.preventDefault();
// 				} else {
// 					exitPopup( e );
// 					document.getElementById( 2 ).classList.add( 'active-link' );
// 					document.querySelector( '.register' ).classList.add( 'open-popup' );
// 					e.preventDefault();
// 				}
// 			} else if( e.currentTarget == document.getElementById( 3 ) ) {
// 				if( document.querySelectorAll( '.active-link' ).length == 0 && document.querySelectorAll( '.open-popup' ).length == 0 ) {
// 					document.getElementById( 3 ).classList.add( 'active-link' );
// 					document.querySelector( '.register' ).classList.add( 'open-popup' );
// 					e.preventDefault();
// 				} else {
// 					exitPopup( e );
// 					document.getElementById( 3 ).classList.add( 'active-link' );
// 					document.querySelector( '.register' ).classList.add( 'open-popup' );
// 					e.preventDefault();
// 				}
// 			} else if( e.currentTarget == document.getElementById( 4 ) ) {
// 				if( document.querySelectorAll( '.active-link' ).length == 0 && document.querySelectorAll( '.open-popup' ).length == 0 ) {
// 					document.getElementById( 4 ).classList.add( 'active-link' );
// 					document.querySelector( '.sign-in' ).classList.add( 'open-popup' );
// 					e.preventDefault();
// 				} else {
// 					exitPopup( e );
// 					document.getElementById( 4 ).classList.add( 'active-link' );
// 					document.querySelector( '.sign-in' ).classList.add( 'open-popup' );
// 					e.preventDefault();
// 				}
// 			}
// 		})
// 	}
// }

// if( exitButton.length > 0 ) {
// 	for( let i = 0; i < exitButton.length; i++ ) {
// 		exitButton[i].addEventListener( 'click', exitPopup );
// 	}
// }

// if( popupShadow.length > 0 ) {
// 	for( let i = 0; i < popupShadow.length; i++ ) {
// 		popupShadow[i].addEventListener( 'click', exitPopup );
// 	}
// }

// function exitPopup( e ) {
// 	document.querySelector( '.active-link' ).classList.remove( 'active-link' );
// 	document.querySelector( '.open-popup' ).classList.remove( 'open-popup' );
// }

//===================================================================================================================

const body = document.body;
const popupLink = document.querySelectorAll( '.popup__link' );
const popup = document.querySelectorAll( '.popup' );
const popupExit = document.querySelectorAll( '.popup__exit' );
const popupShadow = document.querySelectorAll( '.popup__shadow' );

const time = 600;
const padding = window.innerWidth - body.clientWidth;

if( popupLink.length > 0 ) {
	for( let i = 0; i < popupLink.length; i++ ) {
		popupLink[i].addEventListener( 'click', function(e) {
			const clickEl = e.currentTarget;
			if( document.querySelectorAll( '.open-popup' ).length == 0 ) {
				openPopup( clickEl );
				e.preventDefault();
			} else {
				for( let i = 0; i < document.querySelectorAll( '.open-popup' ).length; i++ ) {
					exitPopup( document.querySelectorAll( '.open-popup' )[i] );
				}
				setTimeout(() => { openPopup( clickEl ) }, time);
				e.preventDefault();
			}
		})
	}
}

if( popupExit.length > 0 ) {
	for( let i = 0; i < popupExit.length; i++ ) {
		popupExit[i].addEventListener( 'click', function(e) {
			const clickEl = e.currentTarget;
			exitPopup( clickEl );
			e.preventDefault();
		});
	}
}

if( popupShadow.length > 0 ) {
	for( let i = 0; i < popupShadow.length; i++ ) {
		popupShadow[i].addEventListener( 'click', function(e) {
			const clickEl = e.currentTarget;
			exitPopup( clickEl );
			e.preventDefault();
		});
	}
}

function openPopup( el ) {
	el.classList.add( 'active-link' );
	body.style.overflow = 'hidden';
	body.style.paddingRight = `${padding}px`;
	for( let y = 0; y < popup.length; y++ ) {
		if( popup.length > 0 ) {
			if( popup[y].dataset.popup == el.dataset.popupLink ) {
				popup[y].classList.add( 'open-popup' );
			}
		}
	}
}

function exitPopup( el ) {
	el.closest( '.popup' ).classList.remove( 'open-popup' );
	body.style.overflow = '';
	body.style.paddingRight = '';
	for( let y = 0; y < popupLink.length; y++ ) {
		if( popupLink[y].dataset.popupLink == el.closest( '.popup' ).dataset.popup ) {
			popupLink[y].classList.remove( 'active-link' );
		}
	}
}