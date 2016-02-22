import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },

    save1() {
      var params = {
        text: this.get('announcement')
      };
      this.set('announcement', "");
      this.set('addNewAnnouncement', false),
      this.sendAction('save2', params);
    }
  }
});
