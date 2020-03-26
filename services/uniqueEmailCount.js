/**
 * 
 * @description :Accepts a list of email addresses and return an integer indicating the number of unique email addresses. Where "unique" email addresses means they will be delivered to the same account using Gmail account matching. Specifically: Gmail will ignore the placement of "." in the username. And it will ignore any portion of the username after a "+".
  Examples:
  test.email@gmail.com, test.email+spam@gmail.com and testemail@gmail.com will all go to the same address, and thus the result should be 1.
 * @param {*} emails 
 */
const uniqueEmailCount = emails => {
  if (emails.length === 0) return 0;
  const set = new Set();
  for (email of emails) {
    let [local, domain] = email.split('@');
    if (domain !== 'gmail.com') {
      continue;
    }
    local = local
      .split('+')[0]
      .split('.')
      .join('');
    let ans = local.concat('@' + domain);
    set.add(ans);
  }
  return set.size;
};

module.exports = uniqueEmailCount;
