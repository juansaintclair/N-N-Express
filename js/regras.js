/**
 * @package     Cattive.Site
 * @subpackage  Templates.cattive
 *
 * @copyright   Copyright (C) 2015, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

/* global  $, Pace, DialogFx */

$(function () {



	//Smooth Scroll
	$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
      }
    });
   
	/* Ativador da "Wilma */
	var dlgTrigger = document.querySelectorAll('[data-dialog]');
    var someDialog, dlg;
    for (i = 0; i < dlgTrigger.length; i++) {
        someDialog = document.getElementById(dlgTrigger[i].getAttribute('data-dialog'));
        dlg = new DialogFx(someDialog);
        dlgTrigger[i].addEventListener('click', dlg.toggle.bind(dlg));

    }
});

