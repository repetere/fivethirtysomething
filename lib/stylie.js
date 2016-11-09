/*
 * stylie
 * http://github.com/typesettin/stylie
 *
 * Copyright (c) 2014 Yaw Joseph Etse. All rights reserved.
 */
'use strict';

var extend = require('util-extend'),
	events = require('events'),
	util = require('util');

/**
 * A module that represents a stylie object, a componentTab is a page composition tool.
 * @{@link https://github.com/typesettin/stylie}
 * @author Yaw Joseph Etse
 * @copyright Copyright (c) 2014 Typesettin. All rights reserved.
 * @license MIT
 * @constructor stylie
 * @requires module:util-extent
 * @requires module:util
 * @requires module:events
 * @param {object} el element of tab container
 * @param {object} options configuration options
 */
var stylie = function (options) {
	events.EventEmitter.call(this);
	this.options = extend(this.options, options);
	this._init();
};

util.inherits(stylie, events.EventEmitter);

/** module default configuration */
stylie.prototype.options = {
	screenxs: '20em',
	screensm: '29em',
	screenmd: '32em',
	screenlg: '50em',
	screenxl: '70em',
	screenxx: '90em',
	screenSizeElement: null,
	screenSizeValElement: null,
	sizeContainerElement: window,
	screenSizeElementSelector: '#screensize',
	screenSizeValElementSelector: '#screensizeval'
};
/**
 * initializes tabs and shows current tab.
 * @emits stylieInitialized
 */
stylie.prototype._init = function () {
	var screenAsideElement = document.createElement('aside');
	screenAsideElement.setAttribute('class', 'ts-position-fixed ts-position-right ts-bg-text-primary-color ts-position-bottom ts-margin-xl ts-text-xs');
	screenAsideElement.innerHTML = '<span id="screensize">screenlg:</span> <span id="screensizeval" class="ts-text-accent-color">50em</span>';
	var getMatchMediaString = function (minwidth) {
		return '(min-width: ' + minwidth + ')';
	};

	var matchMediaEventHandler = function () {
		if (this.options.screenSizeElement) {
			if (window.matchMedia(getMatchMediaString(this.options.screenxx)).matches) {
				this.options.screenSizeElement.innerHTML = 'screenxx:';
				this.options.screenSizeValElement.innerHTML = this.options.screenxx;
			}
			else if (window.matchMedia(getMatchMediaString(this.options.screenxl)).matches) {
				this.options.screenSizeElement.innerHTML = 'screenxl:';
				this.options.screenSizeValElement.innerHTML = this.options.screenxl;
			}
			else if (window.matchMedia(getMatchMediaString(this.options.screenlg)).matches) {
				this.options.screenSizeElement.innerHTML = 'screenlg:';
				this.options.screenSizeValElement.innerHTML = this.options.screenlg;
			}
			else if (window.matchMedia(getMatchMediaString(this.options.screenmd)).matches) {
				this.options.screenSizeElement.innerHTML = 'screenmd:';
				this.options.screenSizeValElement.innerHTML = this.options.screenmd;
			}
			else if (window.matchMedia(getMatchMediaString(this.options.screensm)).matches) {
				this.options.screenSizeElement.innerHTML = 'screensm:';
				this.options.screenSizeValElement.innerHTML = this.options.screensm;
			}
			else if (window.matchMedia(getMatchMediaString(this.options.screenxs)).matches) {
				this.options.screenSizeElement.innerHTML = 'screenxs:';
				this.options.screenSizeValElement.innerHTML = this.options.screenxs;
			}
		}
	}.bind(this);
	document.body.appendChild(screenAsideElement);

	this.options.screenSizeElement = document.querySelector(this.options.screenSizeElementSelector);
	this.options.screenSizeValElement = document.querySelector(this.options.screenSizeValElementSelector);
	this.options.sizeContainerElement.addEventListener('resize', matchMediaEventHandler, false);
	matchMediaEventHandler();

	this.emit('stylieInitialized');
};

module.exports = stylie;
