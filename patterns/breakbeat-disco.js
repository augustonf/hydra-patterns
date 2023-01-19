// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// Breakbeat Disco (https://www.youtube.com/watch?v=SRVxRUJxITY)
// @kilvox

// Change o1 -> o0 to enable, WARNING: FLASHING LIGHTS
render(o1)

// Fast blinking pixels masked with a hexagon. Maybe change the mask for a thresholded logo?
noise(30,5).thresh(0.7).pixelate(30,30).mask(shape(6,0.6).scale(1,1-height/width)).out(o1)

voronoi(3,4,0)
  // Mouse Y coord for reducing the voronoi layer's threshold
  .thresh(()=>mouse.y/height)
  // Voronoi blinking
  .mask(osc(0.2,200).thresh(0.9))
  // Feedback with colors
  .diff(src(o0).mult(osc(1,1,1)))
  // Add the blinking pixels
  .add(src(o1))
  // add a little modulation for the pixels
  .modulate(o1,()=>(mouse.x*2/width-1)*0.01)
  // Feedback Modulation, direction and intensity controlled with mouse X coord
  .modulate(o0,()=>(mouse.x*2/width-1)*0.01)
  .out(o0)



