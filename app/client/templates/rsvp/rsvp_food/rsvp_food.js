Template.RsvpFood.events({
});

Template.RsvpFood.helpers({
});

/*****************************************************************************/
/* RsvpFood: Lifecycle Hooks */
/*****************************************************************************/
Template.RsvpFood.created = function () {
};

Template.RsvpFood.rendered = function () {
   this.$('.ui.selection').dropdown();
};

Template.RsvpFood.destroyed = function () {
};
