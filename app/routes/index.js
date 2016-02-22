import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      rentals: this.store.findAll('rental'),
      announcements: this.store.findAll('announcement')
    });
  },

  actions: {
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    },

    destroyAnnouncement(announcement) {
      announcement.destroyRecord();
      this.transitionTo('index');
    },

    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      var key = newRental.save();
      this.transitionTo('index');
    }
  }
});
