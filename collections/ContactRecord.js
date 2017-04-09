ContactRecord = new Mongo.Collection('ContactRecord');

ContactRecord.allow({
  insert: function(userId, doc) {
    return !!userId;
  }
})

ContactRecordSchema = new SimpleSchema({
  contact: {
    type: String
  },
  contactType: {
    type: String
  },
  contactResult: {
    type: String
  },
  comments: {
    type: String
  },
  account: {
    type: String,
    label: "Account",
    autoValue: function() {
      return this.userId
    }
  },
  date: {
    type: Date,
    label: "Created At",
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date()
    }
  }
});

ContactRecord.attachSchema( ContactRecordSchema );
