'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /catalog when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/catalog");
  });


  describe('catalog', function() {

    beforeEach(function() {
      browser.get('index.html#!/catalog');
    });


    it('should render catalog when user navigates to /catalog', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('contact', function() {

    beforeEach(function() {
      browser.get('index.html#!/contact');
    });


    it('should render contact when user navigates to /contact', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
