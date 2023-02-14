// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// Generative Landscapes
// @kilvox


osc(3, 1, () => 1 + 0.5 * Math.sin(time * 0.2))
	.mask(o1)
	.mask(o2)
	.mask(osc(1, 0.3)
		.pixelate(1, 1)
		.thresh(0.3))
	.diff(
		src(o0)
		.scale(
			() => Math.sin(time * 0.1) * 0.005 + 1.0
		)
	)
	.modulate(src(o0), () => Math.sin(time * 0.05) * 0.004)
	.rotate(() => Math.sin(time * Math.sin(time * 0.0005) * 0.01) * 0.003)
	.scrollX(() => Math.sin(time * Math.sin(time * 0.0003) * 0.05 + 0.05) * 0.002)
	.scrollY(() => Math.cos(time * Math.sin(time * 0.0001) * 0.03 + 0.03) * 0.002)
	.out(o0)
speed = 1
// strobe
noise(1, 20)
	.pixelate(1, 1)
	.thresh(0.8)
	.out(o2)
//shapes
noise(01, 3)
	.rotate(0, 0.1)
	.thresh(0.4)
	.pixelate(50, 30)
	.out(o1)
render(o0)