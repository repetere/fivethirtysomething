'use strict';

var classie = require('classie');
var contact_us_button;
var contact_us_modal_popup;
var html_body;
var html_document;
var modals;

var body_click_listener = function (e) {
	var etarget = e.target;

	if (classie.has(etarget, 'modal-close') && modals) {
		for (var i = 0; i < modals.length; i++) {
			classie.remove(modals[i], 'is-active');
		}
		classie.remove(html_document, 'has-modal');
	}
	else if (classie.has(etarget, 'contact-modal') && modals) {
		pop_contact_modal();
	}
};

var pop_contact_modal = function () {
	classie.toggle(contact_us_modal_popup, 'is-active');
	classie.add(html_document, 'has-modal');
};

var init_element_selectors = function () {
	contact_us_button = document.querySelector('#contact-us-button');
	contact_us_modal_popup = document.querySelector('#contact-us-modal-popup');
	html_body = document.querySelector('body');
	html_document = document.querySelector('html');
	modals = document.querySelectorAll('.modal');
};

var init_element_listeners = function () {
	contact_us_button.addEventListener('click', pop_contact_modal);
	html_body.addEventListener('click', body_click_listener);
};

window.addEventListener('load', function () {
	init_element_selectors();
	init_element_listeners();
});
