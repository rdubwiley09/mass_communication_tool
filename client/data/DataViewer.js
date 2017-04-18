Template.DataViewer.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('contact');
    self.subscribe('contactList');
  })
})

Template.DataViewer.helpers({
  contacts(list) {
    var listIds = contactList.find({listName:list}).fetch();
    return contact.find({_id: {$in: listIds}}).fetch();
  }
});

Template.DataViewer.events({

});
