const pjson = require("./package.json");

module.exports = {
	plugins: {
		"posthtml-favicons": {
			root: "./frontend/",
			outDir: "./public/",
			configuration: {
				appName: "RCA IED 2020", // Your application's name. `string`
				appDescription: null, // Your application's description. `string`
				developerName: "Kenneth Lim", // Your (or your developer's) name. `string`
				developerURL: "https://limzykenneth.com", // Your (or your developer's) URL. `string`
				dir: "auto", // Primary text direction for name, short_name, and description
				lang: "en-GB", // Primary language for name and short_name
				background: "#fff", // Background colour for flattened icons. `string`
				theme_color: "#fff", // Theme color user for example in Android's task switcher. `string`
				display: "standalone", // Preferred display mode: "fullscreen", "standalone", "minimal-ui" or "browser". `string`
				orientation: "any", // Default orientation: "any", "natural", "portrait" or "landscape". `string`
				version: pjson.version, // Your application's version string. `string`
				logging: false,
				icons: {
					// Platform Options:
					// - offset - offset in percentage
					// - background:
					//   * false - use default
					//   * true - force use default, e.g. set background for Android icons
					//   * color - set background for the specified icons
					//
					android: true, // Create Android homescreen icon. `boolean` or `{ offset, background }`
					appleIcon: true, // Create Apple touch icons. `boolean` or `{ offset, background }`
					appleStartup: true, // Create Apple startup images. `boolean` or `{ offset, background }`
					favicons: true, // Create regular favicons. `boolean`
				}
			}
		}
	}
};