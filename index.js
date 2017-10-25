const log = document.querySelector('#log');

const state = {};
let i = 0;
let length = 0;
setInterval(() => {
  const value = 'abcdefghij'.repeat(100);
  state[i] = value;
  length += value.length;
  const title = 'history-state-' + length;
  const path = '/history-state/' + length;
  try {
    history.pushState(state, title, path);
  } catch (err) {
    console.log(err);
  }
  log.innerText = 'pushState: ' + length + 'characters';
  i++;
}, 1000);
