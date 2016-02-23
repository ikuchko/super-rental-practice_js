import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      rentals: this.store.findAll('rental'),
      announcements: this.store.findAll('announcement')
    });
  },

  actions: {
    destroyAnnouncement(announcement) {
      announcement.destroyRecord();
      this.transitionTo('index');
    },

    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      var key = newRental.save();
      this.transitionTo('index');
    },

    saveAnnouncement(params) {
      var newAnnouncement = this.store.createRecord('announcement', params);
      newAnnouncement.save();
      this.transitionTo('index');
    },

    update(rental, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          rental.set(key, params[key]);
        }
      });
      rental.save();
      this.transitionTo('index');
    },

    updateAnnouncement(announcement, params) {
      announcement.set('text', params.text);
      announcement.save();
      this.transitionTo('index');
    }
  }
});
