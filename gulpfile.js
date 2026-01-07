const { src, dest } = require('gulp');

function copyIcons() {
	// Copy icons to dist root for n8n to find them
	return src('icons/**/*.svg')
		.pipe(dest('dist'));
}

exports['build:icons'] = copyIcons;
exports.default = copyIcons;
