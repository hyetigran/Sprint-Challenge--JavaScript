// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {
	constructor(data) {
		this.length = data.length;
		this.width = data.width;
		this.height = data.height;
	}
	volume(x, y, z) {
		return x * y * z;
	}
	surfaceArea(length, width, height) {
		return (length * width + length * height + width * height) * 2;
	}
}

const cuboid = new CuboidMaker({
	length: 4,
	width: 5,
	height: 5
});
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume(cuboid.length, cuboid.width, cuboid.height)); // 100
console.log(cuboid.surfaceArea(cuboid.length, cuboid.width, cuboid.height)); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
