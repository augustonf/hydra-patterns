// @kilvox
// Camera Glitch
// Move the mouse to change colorama and luma settings

//s0.initCam()

src(s0)
	.scale(1, -1)
	.posterize(2)
	.colorama(() => mouse.y / screen.height)
	.luma(() => mouse.x / screen.width)

	.diff(src(o1)
		.scale(1.01))
	.out(o1)


render(o1)