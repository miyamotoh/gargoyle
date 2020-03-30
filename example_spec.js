describe('Protractor Demo', function() {
   it('to check the page title', function() {
      browser.ignoreSynchronization = true;
      browser.get('https://www.tutorialspoint.com/tutorialslibrary.htm');
      browser.driver.getTitle().then(function(pageTitle) {
         expect(pageTitle).toEqual('Free Online Tutorials and Courses');
      });
   });
});
