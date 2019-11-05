// Debounce function
// デバウンス関数

// A function that, when called, can only be called after a certain amount of time has passed
// 呼び出されたときに、一定の時間が経過した後にのみ呼び出すことができる関数

var debounce = (fn, ms) => {
  let timeout;
  return function(args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(args), ms);
  }
};

var onResize = (event) => {
  console.log(event, window.innerHeight, window.innerWidth);
}

window.addEventListener('resize', debounce(onResize, 500));
