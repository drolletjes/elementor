const DEFAULT_SELECTOR = '[data-e-motion]';

export default class MotionEffects {
	constructor( options = {} ) {
		this.selector = options.selector || DEFAULT_SELECTOR;
		this.visibleClass = options.visibleClass || 'e-motion--visible';
		this.reducedMotionQuery = window.matchMedia( '(prefers-reduced-motion: reduce)' );
		this.observer = null;
	}

	init( scope = document ) {
		const elements = [ ...scope.querySelectorAll( this.selector ) ];

		if ( ! elements.length ) {
			return;
		}

		if ( this.reducedMotionQuery.matches || ! ( 'IntersectionObserver' in window ) ) {
			elements.forEach( ( element ) => element.classList.add( this.visibleClass ) );
			return;
		}

		this.disconnect();

		this.observer = new IntersectionObserver( ( entries ) => {
			entries.forEach( ( entry ) => {
				if ( ! entry.isIntersecting ) {
					return;
				}

				entry.target.classList.add( this.visibleClass );
				this.observer.unobserve( entry.target );
			} );
		}, {
			threshold: 0.15,
			rootMargin: '0px 0px -10% 0px',
		} );

		elements.forEach( ( element ) => this.observer.observe( element ) );
	}

	disconnect() {
		if ( this.observer ) {
			this.observer.disconnect();
		}
	}
}
