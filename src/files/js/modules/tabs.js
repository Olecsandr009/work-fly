const tabsLink = document.querySelectorAll( '.tabs-link' );
const tabElement = document.querySelectorAll( '.tab-element' );

if( tabsLink.length > 0 ) {
	for( let i = 0; i < tabsLink.length; i++ ) {

		tabsLink[i].addEventListener( 'click', function( e ) {

			if( document.querySelectorAll( '.activeTabLink' ).length > 0 ) {

				for( let y = 0; y < document.querySelectorAll( '.activeTabLink' ).length; y++ ) {

					let activeTabsLink = document.querySelectorAll( '.activeTabLink' );
					hiddenTabs( activeTabsLink[y], "activeTabLink" );

				}

				let activeTabsElement = document.querySelectorAll( '.activeTab' );

				for( let a = 0; a < activeTabsElement.length; a++ ) {

					hiddenTabs( activeTabsElement[a], "activeTab" );

				}

				if( tabElement.length > 0 ) {

					for( let y = 0; y < tabElement.length; y++ ) {

						if(tabElement[y].dataset.tab == e.currentTarget.dataset.tabLink) {

							tabElement[y].classList.add( 'activeTab' );
							activeTabs(e);

						} 

					}

				}

				console.log( document.querySelectorAll( '.activeTabLink' ).length )

			} else {

				if( tabElement.length > 0 ) {
					for( let y = 0; y < tabElement.length; y++ ) {
						if(tabElement[y].dataset.tab == e.currentTarget.dataset.tabLink) {
							tabElement[y].classList.add( 'activeTab' );
							activeTabs(e);
						} 
					}
				}

			}
			
		});
	}
}

function activeTabs( e ) {
	e.currentTarget.classList.add( 'activeTabLink' );
	e.preventDefault();
}
function hiddenTabs( element, clas ) {
	element.classList.remove( clas )
}