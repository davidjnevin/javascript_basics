// Objects

function createCircle(radius, locations) {
	return {
		// prpoerties
		radius: radius,
		locations: locations,
		// methods
		draw: function() {
			console.log('draw');
		},
		area: function() {
			return Math.PI * this.radius * this.radius;
		}
	};
};


const circle = createCircle(2, { x: 1, y: 2 });
circle.draw();
console.log(circle.area());
