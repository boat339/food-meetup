const storageKey = 'foodie-meetup';
let state = {};
try {
  state = JSON.parse(sessionStorage.getItem(storageKey) || '{}');
  if (!state || typeof state !== 'object' || Array.isArray(state)) state = {};
} catch {
  state = {};
}
function saveState() {
  try {
    sessionStorage.setItem(storageKey, JSON.stringify(state));
  } catch {
    /* Continue using in-memory state if storage is unavailable. */
  }
}
const page = document.body.dataset.page;
if (page === 'home') {
  const input = document.getElementById('username');
  input.value = typeof state.name === 'string' ? state.name : '';
  document
    .getElementById('welcome-form')
    .addEventListener('submit', (event) => {
      event.preventDefault();
      if (!input.value.trim()) {
        input.setCustomValidity('请输入昵称');
        input.reportValidity();
        return;
      }
      state.name = input.value.trim();
      saveState();
      window.location.href = 'plan.html';
    });
  input.addEventListener('input', () => input.setCustomValidity(''));
}
if (page === 'plan') {
  const today = new Date();
  const localDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  document.getElementById('today-date').textContent = `今天日期：${localDate}`;
  const date = document.getElementById('meal-date');
  date.value = state.date || localDate;
  const food = document.getElementById('food-type');
  if (state.food) food.value = state.food;
  const other = document.getElementById('other-food');
  other.value = state.other || '';
  function updateOther() {
    const active = food.value === '其他';
    document.getElementById('other-food-group').hidden = !active;
    other.required = active;
    if (!active) other.setCustomValidity('');
  }
  food.addEventListener('change', updateOther);
  updateOther();
  other.addEventListener('input', () => other.setCustomValidity(''));
  document.getElementById('plan-form').addEventListener('submit', (event) => {
    event.preventDefault();
    if (food.value === '其他' && !other.value.trim()) {
      other.setCustomValidity('请输入想吃的美食');
      other.reportValidity();
      return;
    }
    state.date = date.value;
    state.food = food.value;
    state.other = other.value.trim();
    saveState();
    window.location.href = 'restaurant.html';
  });
}
if (page === 'restaurant') {
  document.getElementById('plan-summary').textContent = state.date
    ? `${state.name || '美食搭子'}，计划在 ${state.date} 吃${state.food === '其他' ? state.other : state.food || '美食'}。`
    : '还没有计划？可以先返回上一页选择日期和美食。';
  const input = document.getElementById('restaurant-url');
  input.value = state.restaurant || '';
  input.addEventListener('change', () => {
    if (input.checkValidity()) {
      state.restaurant = input.value.trim();
      saveState();
    } else input.reportValidity();
  });
  const buttons = document.querySelectorAll('[data-vote]');
  function renderVote() {
    document.getElementById('vote-result').textContent = state.vote
      ? `你的选择：${state.vote}`
      : '还没有选择😥';
    buttons.forEach((button) =>
      button.setAttribute(
        'aria-pressed',
        String(button.dataset.vote === state.vote),
      ),
    );
  }
  buttons.forEach((button) =>
    button.addEventListener('click', () => {
      state.vote = button.dataset.vote;
      saveState();
      renderVote();
    }),
  );
  renderVote();
}
