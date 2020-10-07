export const getUser = function getUser(token) {
  let authedUsers = [{
    "email": "user1@sideinc.com",
    "token": "676cfd34-e706-4cce-87ca-97f947c43bd4",
  }, {
    "email": "user2@sideinc.com",
    "token": "2f403433-ba0b-4ce9-be02-d1cf4ad6f453",
  }];
  let currentUser = authedUsers.filter(user => user.token === token);
  return currentUser.length ? currentUser[0] : null;
}