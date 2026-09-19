let isAccountLocked = false;
let useRole = 'user';
if (isAccountLocked) {
  console.log('Is account locked');
} else if (useRole === 'admin') {
  console.log('Welcome Admin');
} else {
  console.log('Welcome');
}
