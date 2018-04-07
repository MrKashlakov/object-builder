class HomeSettingsBuilder {
	withRoof(roof) {
		this._roof = roof;
		return this;
	}

	withWalls(walls) {
		this._walls = walls;
		return this;
	}

	withWindows(windows) {
		this._windows = windows;
		return this;
	}

	withDoors(doors) {
		if (typeof doors !== 'boolean') {
			throw new Error('Please set boolean value');
		}
		this._doors = doors;
		return this;
	}

	build() {
		if (!this._roof) {
			throw new Error("Please set roof for home");
		}

		if (!this._walls) {
			throw new Error("Please set walls for home");
		}

		if (!this._windows) {
			throw new Error("Please set windows for home");
		}

		if (!this._doors) {
			throw new Error("Please set doors for home");
		}

		return new HomeSettings({
			roof: this._roof,
			walls: this._walls,
			windows: this._windows,
			doors: this._doors
		});
	}
}

class HomeSettings {
	constructor(settings) {
		this._roof = settings.roof;
		this._walls = settings.walls;
		this._windows = settings.windows;
		this._doors = settings.doors;
	}

	get roof() {
		return this._roof;
	}

	get walls() {
		return this._walls;
	}

	get windows() {
		return this._windows;
	}

	get doors() {
		return this._doors;
	}

	static getBuilder() {
		return new HomeSettingsBuilder();
	}
}

module.exports = HomeSettings;
