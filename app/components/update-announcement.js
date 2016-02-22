import Ember from 'ember';

export default Ember.Component.extend({
  updateAnnouncementForm: false,
  actions : {
    updateAnnouncementForm() {
      this.set('updateAnnouncementForm', true);
    },

    updateAnnouncement(announcement) {
      debugger;
      var params = {
        text: this.get('text'),
      };
      this.set('updateAnnouncementForm', false);
      this.sendAction('updateAnnouncement', announcement, params);
    }
  }
});
