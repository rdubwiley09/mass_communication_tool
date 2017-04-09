FlowRouter.route('/',{
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/email',{
  name: 'email',
  action() {
    BlazeLayout.render('MainLayout', {main: 'EmailLayout'});
  }
});

FlowRouter.route('/sms',{
  name: 'sms',
  action() {
    BlazeLayout.render('MainLayout', {main: 'SmsLayout'});
  }
});

FlowRouter.route('/data',{
  name: 'data',
  action() {
    BlazeLayout.render('MainLayout', {main: 'DataEntry'});
  }
});
