jQuery(document).ready(function($) {
	var sessions = $('.session'), 
		sessionObjs = [];

	$.each(sessions, function(index, el) {
		var data = {};
		data.dom = el;
		data.index = index;

		el = $(el);
		var date = el.find('.date').text();
		data.day = date.split(',')[0];
		data.date = date.split(',')[1].split(' ')[2];
		data.month = date.split(',')[1].split(' ')[1];
		var time = el.find('.time span').text();

		if (time.indexOf('pm') != -1){
			data.time = parseInt(time.replace('pm','')) + 12;
		} else {
			data.time = parseInt(time.replace('am',''));
		}

		data.originalOffset = parseInt(el.find('select').val());

		var webinarSession = new WebinarSession(data);

		$(el).find('select').on('change', function(){
			var offset = parseInt($(this).val());
			webinarSession.calcTime(offset);
		});
	});
});

var WebinarSession = function(data){
	var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	this.id = data.index;
	this.dom = data.dom;
	var d = new Date();
	var offset = d.getTimezoneOffset() / 60;
	this.date = new Date(Date.UTC(2016, monthNames.indexOf(data.month), parseInt(data.date), data.time - offset, 0, 0));
}

WebinarSession.prototype.calcTime = function(offset){
	var d = new Date(this.date);
	d.setUTCHours(d.getUTCHours() + offset);
	this.updateView(d);
}

WebinarSession.prototype.updateView = function(d){
	var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

	var el = $(this.dom);
	var dateString = dayNames[d.getUTCDay() - 1] + ', ' + monthNames[d.getUTCMonth()] + ' ' + d.getUTCDate();

	el.find('.day').text(dayNames[d.getUTCDay() - 1]);
	el.find('.month').text(monthNames[d.getUTCMonth()]);
	el.find('.date').text(dateString);
	var time = d.getUTCHours();
	if (time <= 12){
		el.find('.time span').text(time + 'am');		
	} else {
		el.find('.time span').text((time - 12) + 'pm');		
	}
}