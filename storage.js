var _ = require('./conf');

describe('Re-save USB Storage', () => {
   browser.ignoreSynchronization = true; // necessary for non-Angular pages
   var until = protractor.ExpectedConditions;

   it('re-save USB disk settings', async () => {
      await browser.get(`${_.ROOT}/usb_storage.sh`);
      await browser.wait(until.presenceOf(element(by.id('save_button'))));
      await element(by.id('save_button')).click();
   });
});
