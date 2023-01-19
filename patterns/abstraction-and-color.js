
// @kilvox
// Abstraction & Color

noise(2, 0.2)
	.rotate(0, 0.1)
	.pixelate(30)
	.modulate(osc(20, 0.02, 1)
		.modulate(noise())
	)
	.thresh(0.3)
	.mult(osc(1, 1, 2))
	.luma(0.2)
	.out(o0)

