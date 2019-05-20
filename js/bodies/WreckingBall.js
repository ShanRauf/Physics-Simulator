var Matter = require('matter-js');

export default class WreckingBall {
	constructor(x, y, w, h, options, world) {
		this.body = Matter.Bodies.rectangle(x, y, w, h, options);
		this.w = w;
		this.h = h;
	}
}
