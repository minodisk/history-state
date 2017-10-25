const log = document.querySelector('#log');
log.style = {
  whiteSpace: 'pre',
};

const state = {};
let i = 0;
let length = 0;
const id = setInterval(() => {
  const value = 'abcdefghij'.repeat(100);
  state[i] = value;
  length += value.length;
  const title = 'history-state-' + length;
  const path = '/history-state/' + length;
  try {
    history.pushState(state, title, path);
    log.innerText = 'pushState: ' + length + ' characters';
  } catch (err) {
    clearInterval(id);
    log.innreText =
      'error ' +
      err.name +
      ' is occurred while pushState ' +
      length +
      ' characters\n' +
      'see console for more detail';
    console.log(err);
  }
  i++;
}, 1000);
