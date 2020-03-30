var _ = require('./conf');

describe('Isolate WiFi Clients', () => {
   browser.ignoreSynchronization = true; // necessary for non-Angular pages
   var until = protractor.ExpectedConditions;

   var choice = process.env.GARGOYLE_ISOLATE ? 'enable' : 'disable';

   it(`${choice} WiFi Isolation setting`, async () => {
      await browser.get(`${_.ROOT}/basic.sh`);
      await element(by.id('wifi_isolate')).isPresent();
      var dropdown = element(by.id('wifi_isolate'));
      dropdown.$(`[value="${choice}d"]`).click();
      await element(by.id('save_button')).click();

      //await browser.sleep(10000);
      //await browser.get(browser.getCurrentUrl());
      //expect('foo').toEqual('bar');
   });
});
