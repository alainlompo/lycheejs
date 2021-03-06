
lychee.define('game.Camera').exports(function(lychee, global, attachments) {

	/*
	 * IMPLEMENTATION
	 */

	let Composite = function(main) {

		this.renderer = main.renderer || null;

		this.depth    = 0.2;
		this.offset   = 0;
		this.position = { x: 0, y: 0, z: 0 };

//		let fov = 100;
//		this.__depth    = 1 / Math.tan((fov/2) * Math.PI/180);
		this.__ratio    = 1.2;


	};


	Composite.prototype = {

		/*
		 * ENTITY API
		 */

		serialize: function() {

			return {
				'constructor': 'game.Camera',
				'arguments':   [ '#MAIN' ]
			};

		},



		/*
		 * CUSTOM API
		 */

		reshape: function() {

			let renderer = this.renderer;
			if (renderer !== null) {

				let width  = renderer.width;
				let height = renderer.height;

				this.offset = (width / height) * this.__ratio * height + 16;

			}

		}

	};


	return Composite;

});

