// ── Email chip ──────────────────────────────────────────────
var user = 'employee';
var domain = 'pvao.gov.ph';
var defaultEmail = user + '@' + domain;
document.getElementById('email-display').textContent = defaultEmail;

function editEmail() {
  document.getElementById('email-chip').style.display = 'none';
  var inputGroup = document.getElementById('email-input-group');
  inputGroup.style.display = 'block';
  var input = document.getElementById('email-input');
  input.value = defaultEmail;
  input.focus();

  input.addEventListener('input', function () {
    var val = input.value;
    var initial = val.charAt(0).toUpperCase() || 'E';
    document.getElementById('email-avatar').textContent = initial;
  });
}

// ── URL display ──────────────────────────────────────────────
document.getElementById('url-display').textContent = window.location.href;

// ── Password toggle ──────────────────────────────────────────
function togglePw() {
  var f = document.getElementById('pw');
  f.type = f.type === 'password' ? 'text' : 'password';
}

// ── Countdown ring ───────────────────────────────────────────
// var TOTAL = 8;
// var remaining = TOTAL;
var triggered = false;

// var canvas = document.getElementById('countdown-canvas');
// var ctx = canvas.getContext('2d');
// var cx = 28, cy = 28, radius = 20;

// function drawRing(fraction) {
//   ctx.clearRect(0, 0, 56, 56);

//   // Track (gray background ring)
//   ctx.beginPath();
//   ctx.arc(cx, cy, radius, 0, Math.PI * 2);
//   ctx.strokeStyle = '#e8eaed';
//   ctx.lineWidth = 4;
//   ctx.stroke();

//   // Progress (red)
//   if (fraction > 0) {
//     ctx.beginPath();
//     ctx.arc(cx, cy, radius, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * fraction);
//     ctx.strokeStyle = '#ea4335';
//     ctx.lineWidth = 4;
//     ctx.lineCap = 'round';
//     ctx.stroke();
//   }
// }

// drawRing(1);

// var timer = setInterval(function () {
//   remaining--;
//   document.getElementById('countdown-num').textContent = remaining;
//   drawRing(remaining / TOTAL);

  if (!triggered) {
    triggered = true;
    triggerReveal();
  }
}, 1000);

// ── Reveal overlay ───────────────────────────────────────────
function triggerReveal() {
  clearInterval(timer);
  document.getElementById('countdown-wrap').style.display = 'none';
  document.getElementById('reveal').classList.add('active');
}
