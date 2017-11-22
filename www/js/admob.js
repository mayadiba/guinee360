var admobid = {}
if (/(android)/i.test(navigator.userAgent)) {
  admobid = {
    banner: 'ca-app-pub-9168428480080457/2721010925',
    interstitial: 'ca-app-pub-9168428480080457/5427065314',
  }
} else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {  // for ios
  admobid = {
    banner: 'ca-app-pub-9168428480080457/2721010925',
    interstitial: 'ca-app-pub-9168428480080457/5427065314',
  }
}

document.addEventListener('deviceready', function() {
  admob.banner.config({
    id: admobid.banner,
    autoShow: true,
  });
  admob.banner.prepare();

  admob.interstitial.config({
    id: admobid.interstitial,
    autoShow: true,
  });
  admob.interstitial.prepare();
}, false);