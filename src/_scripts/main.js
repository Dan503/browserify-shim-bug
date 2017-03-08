// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import 'typeahead.js/dist/typeahead.jquery.js';

if ($.fn.typeahead){
  $('body').append('<p style="text-align: center; font-size: 30px;">typeahead <strong>is</strong> defined in jQuery.fn</p>');
} else {
  $('body').append('<p style="text-align: center; font-size: 30px;">typeahead is <strong>NOT</strong> defined in jQuery.fn</p>');
}
