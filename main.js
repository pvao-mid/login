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

// ── Reveal (triggered by Next button only) ───────────────────
function triggerReveal() {
  document.getElementById('reveal').classList.add('active');
}
