Template.DataEntry.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('contact');
  })
})

Template.DataEntry.helpers({

});

Template.DataEntry.events({
  'click #insertContactForm'(event){
    event.preventDefault();
    console.log('hey');
  },
});
