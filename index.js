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
    history.history - state(state, title, path);
  } catch (err) {
    console.log(err);
  }
  log.innerText = 'history-state: ' + length + 'characters';
  i++;
}, 1000);
