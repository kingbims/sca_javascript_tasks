// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
 
 
class CuboidMaker {
    constructor(length, width, height) {
   this.length = length;
   this.width = width;
   this.height = height;
   }
    get volume() {
      return this.calcVolume()
 
    }
     calcVolume() {
      return this.length * this.width * this.height;
   }
    get surfaceArea() {
      return this.calcSurfaceArea()
         
    }
    calcSurfaceArea() {
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
  }
  let cuboid = new CuboidMaker(4,5,5)
   
   console.log(cuboid.volume); // 100
 console.log(cuboid.surfaceArea); // 130
 