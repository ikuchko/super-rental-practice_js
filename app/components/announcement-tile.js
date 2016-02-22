import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(announcement) {
      this.sendAction("deleteAnnouncement", announcement);
    }
  }
});
