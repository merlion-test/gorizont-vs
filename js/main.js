"use strict";
$(document).ready(function () {
	$("#requestButton").fancybox({
		src: "#requestForm",
		touch: false
	});

	$('#requestForm .former').prepend('<input type="hidden" name="form_id" value="' + $('#requestFormId').data('id') + '">');

	$('#form_input_i1 input').attr({
		placeholder: 'Имя',
		autocomplete: 'off'
	});
	$('#form_input_i2 input').attr({
		placeholder: 'Компания',
		autocomplete: 'off'
	});
	$('#form_input_i3 input').attr({
		placeholder: 'Телефон',
		autocomplete: 'off'
	});
	$('#form_input_i4 input').attr({
		placeholder: 'E-mail',
		autocomplete: 'off'
	});
	$('#form_input_i5 input').attr({
		placeholder: 'Комментарий',
		autocomplete: 'off'
	});

	// $('.sendbutton').wrap('<div>').attr('value', 'Купить');
	$('.sendbutton').addClass('btn btn_buy').attr('value', 'Купить');


	$('#form_input_i1').append('<label>Имя</label>').append('<span></span>');
	$('#form_input_i2').append('<label>Компания</label>').append('<span></span>');
	$('#form_input_i3').append('<label>Телефон</label>').append('<span></span>');
	$('#form_input_i4').append('<label>E-mail</label>').append('<span></span>');
	$('#form_input_i5').append('<label>Комментарий</label>').append('<span></span>');

	$('#form_field_i1, #form_field_i2, #form_field_i3, #form_field_i4, #form_field_i5').remove();

	$('#requestForm .clear, #requestForm .clear20').remove();

	$('.checkbox-field, .checkbox-field+.input.text').wrapAll("<div class='policy-checkbox'>");

	$('.policy-checkbox .input').addClass('policy_text');
	// $('#policyCheckbox').attr('required', 'required');
});