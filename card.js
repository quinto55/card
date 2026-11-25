if (new URLSearchParams(location.search).has('setup')) {
  const $ = (id) => document.getElementById(id);
  const say = (text) => { $('status').textContent = text; };
  const url = location.origin + location.pathname; // wherever this page is published, that is what the card opens
  const WHY = {
    NotAllowedError: 'Chrome needs permission to use NFC. Press the button again and choose Allow.',
    NotReadableError: 'NFC is switched off. Turn it on in the phone’s settings, then try again.',
    NotSupportedError: 'This card cannot hold a link. Try another card.',
    NetworkError: 'The card moved away too soon. Hold it still and try again.',
  };
  $('dest').textContent = url;
  $('setup').hidden = false;
  if (!('NDEFReader' in window)) {
    $('write').disabled = true;
    say('This browser cannot write cards. Open this page in Chrome on the Moto G.');
  }
  $('write').onclick = async () => {
    $('write').disabled = true;
    say('Hold a card against the back of the phone now.');
    try {
      await new NDEFReader().write({ records: [{ recordType: 'url', data: url }] });
      say('Card written. Tap it on another phone to check it.');
      $('write').textContent = 'Write another card';
    } catch (e) {
      say(WHY[e.name] || `That did not work (${e.message}). Try again.`);
    }
    $('write').disabled = false;
  };
}
