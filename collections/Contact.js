Contact = new Mongo.Collection('contact');

Contact.allow({
  insert: function(userId, doc) {
    return !!userId;
  }
})

ContactSchema = new SimpleSchema({
  first_name: {
    type: String,
    label: "First Name"
  },
  last_name: {
    type: String,
    label: "Last Name"
  },
  email: {
    type: String,
    label: "Email",
    regEx: SimpleSchema.RegEx.Email
  },
  number: {
    type: String,
    label: "Phone Number",
    optional: true,
    autoform: {
        afFieldInput: {
        type: "tel"
        }
    }
  },
  account: {
    type: String,
    label: "Account",
    autoValue: function() {
      return this.userId
    },
    autoform: {
      type: "hidden"
    }
  },
  addedAt: {
    type: Date,
    label: "Added At",
    autoValue: function() {
      return new Date()
    },
    autoform: {
      type: "hidden"
    }
  }
});

Contact.attachSchema( ContactSchema );
