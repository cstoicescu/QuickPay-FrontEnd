export function read() {
  const data = window.sessionStorage.getItem('userAccess');
  return data === null ? [] : JSON.parse(data);
}

export function write(userAccess) {
  window.sessionStorage.setItem('userAccess', JSON.stringify(userAccess));
}
