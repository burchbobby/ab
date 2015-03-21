/*****************************************************************************/
/* Client App Namespace  */
/*****************************************************************************/
_.extend(App, {
});

App.helpers = {
	renderModal: function() {
		$('.modal').modal({
			context: '#modal',
			onHidden: function() {
				Session.set('activeModal', undefined);
			}
		}).modal('show');
	},
	removeModal: function() {
		$('.modal').modal('hide', function() {
			Session.set('activeModal', undefined);
		});	
	},

	trimInput: function(val) {
		return val.replace(/^\s*|\s*$/g, "");
	}
};

_.each(App.helpers, function (helper, key) {
  Handlebars.registerHelper(key, helper);
});