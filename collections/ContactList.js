ContactList = new Mongo.Collection('contactList');

ContactList.allow({
  insert: function(userId, doc) {
    return !!userId;
  }
})

ContactListSchema = new SimpleSchema({
  listName: {
    type: String,
    label: "List Name"
  },
  contacts: {
    type: [String]
  },
  account: {
    type: String,
    label: "Account ",
    autoValue: function() {
      return this.userId
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date()
    }
  }
});

ContactList.attachSchema( ContactListSchema );
