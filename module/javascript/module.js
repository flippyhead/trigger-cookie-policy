forge.cookiepolicy = {
  alwaysAcceptCookies: function (success, error) {
    forge.internal.call('cookiepolicy.alwaysAcceptCookies', success, error);
  }
};