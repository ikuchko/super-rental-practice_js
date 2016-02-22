import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(announcement) {
      this.sendAction("deleteAnnouncement", announcement);
    },

    updateAnnouncement(announcement, params) {
      this.sendAction("updateAnnouncement", announcement, params);
    }
  }
});
