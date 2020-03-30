var _ = require('./conf');

describe('Gargoyle Router login', () => {
   browser.ignoreSynchronization = true; // necessary for non-Angular pages
   var until = protractor.ExpectedConditions;

   it('check Login page', async () => {
      await browser.get(`${_.ROOT}/login.sh?logout=1`);

      await browser.wait(until.presenceOf(element(by.css('.page-header'))));
      var pageHeader = await browser.findElement(by.css('.page-header')).getText();
      expect(pageHeader).toEqual('Login');

      await browser.wait(until.presenceOf(element(by.id('login_status'))));
      var loginStatus = await browser.findElement(by.id('login_status')).getText();
      expect(loginStatus).toEqual('Logged Out');
   });

   it('check Login action', async () => {
      await element(by.id('password')).isPresent();
      await element(by.id('password')).sendKeys(process.env.GARGOYLE_PASSWORD);
      await element(by.buttonText('Login')).isPresent();
      await element(by.buttonText('Login')).click();
      await browser.sleep(2000);

      expect(browser.getCurrentUrl()).not.toContain('/login.sh');
   });

   it('check Overview page', async () => {
      await browser.get(`${_.ROOT}/overview.sh`);
      await browser.wait(until.presenceOf(element(by.css('.page-header'))));
      expect(browser.getCurrentUrl()).toContain('/overview.sh');
      var pageHeader = await browser.findElement(by.css('.page-header')).getText();
      expect(pageHeader).toEqual('Status');
   });

   /*
   it('enable WiFi Isolation setting', async () => {
      await browser.get(`${ROOT}/basic.sh`);
      await element(by.id('wifi_isolate')).isPresent();
      var dropdown = element(by.id('wifi_isolate'));
      dropdown.$('[value="enabled"]').click();
      await element(by.id('save_button')).click();

      await browser.sleep(10000);
      await browser.get(browser.getCurrentUrl());
      expect('foo').toEqual('bar');
   });

   it('check Restrictions page', async () => {
      await browser.get(`${ROOT}/restriction.sh`);
      await element(by.id('rule_2')).isPresent(); // Naoya Bedtime
      await element(by.id('rule_2')).click();
      await element(by.id('save_button')).click();

      await browser.sleep(10000);
      await browser.get(browser.getCurrentUrl());
      expect('foo').toEqual('bar');
   });
   */

   //console.log(browser.getCurrentUrl());
});
