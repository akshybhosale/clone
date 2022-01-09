export default function handlePageClick({ target }, { current }) {
  const magnifier = current.firstChild;
  const input = current.lastChild;

  if (target === magnifier && !current.classList.contains('in-use')) {
    input.focus();
    return current.classList.add('in-use');
  }

  if (current.classList.contains('in-use') && target !== input) {
    input.value = '';
    return current.classList.remove('in-use');
  }
}
