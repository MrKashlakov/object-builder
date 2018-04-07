const homeDesigner = require('./home-designer');
const homeBuilder = require('./home-builder');
const HomeSettings = require('./home-settings');

const homeSettings = HomeSettings.getBuilder()
	.withRoof(true)
	.withWalls(true)
	.withWindows(true)
	.withDoors(true)
	.build();

console.log(homeDesigner(homeSettings));
console.log(homeBuilder(homeSettings));
