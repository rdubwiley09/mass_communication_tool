Meteor.publish('contact', function(){
  return Contact.find({account: this.userId});
});

Meteor.publish('contactList', function(){
  return ContactList.find({account: this.userId});
});

Meteor.publish('contactRecord', function(){
  return ContactRecord.find({account: this.userId});
});
