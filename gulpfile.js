const { src, dest, parallel } = require('gulp');

function copyRootIcons() {
	// Copy icons from root icons folder to dist root for n8n to find them
	return src('icons/**/*.svg')
		.pipe(dest('dist'));
}

function copyCredentialIcons() {
	// Copy icons from credentials/icons folder to dist/credentials/icons
	return src('credentials/icons/**/*.svg')
		.pipe(dest('dist/credentials/icons'));
}

function copyNodeIcons() {
	// Copy SVG icons from nodes directories maintaining structure
	return src('nodes/**/*.svg')
		.pipe(dest('dist/nodes'));
}

function copyNodeJson() {
	// Copy JSON files from nodes directories maintaining structure
	return src('nodes/**/*.json')
		.pipe(dest('dist/nodes'));
}

const buildIcons = parallel(copyRootIcons, copyCredentialIcons, copyNodeIcons, copyNodeJson);

exports['build:icons'] = buildIcons;
exports.default = buildIcons;
