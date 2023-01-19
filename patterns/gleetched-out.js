// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// Gleetched' out
// @kilvox

// get an image
s0.initImage("https://upload.wikimedia.org/wikipedia/commons/e/e3/ERROR_Large.png")
// convert it to a mask
src(s0)
	.thresh(0.5)
	.invert()
	.out(o1)

// scan through the image with color
src(o1)
	.mult(osc(1, -2, 2))
	.luma(0.5)
	// make it appear and dissappear periodically
	.mult(osc(2, 0.2)
		.thresh(0.6)
		.pixelate(1))
	// crazy colors
	.mult(osc(2, 1, 2)
		.modulate(osc(6, 1, 2)
			.rotate(1)))
	.colorama(1)
	// remove the fainter parts
	.luma(0.4)
	// feedback whcih displaces pixels out and rotate them
	.diff(src(o0)
		.scale(1.002)
		.rotate([0.005, -0.007, 0.006, -0.001].fast(0.11)))
	// feedback modulation for "fluid" feeling
	.modulate(src(o0), [0.005, -0.002, -0.003, 0.005].fast(0.2))
	.out(o0)