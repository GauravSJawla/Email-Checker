/**
 *
 * @description   Accepts a list of email addresses and return an integer indicating the number of unique email addresses. Where "unique" email addresses
 *                means they will be delivered to the same account using Gmail account matching. Specifically: Gmail will ignore the placement of "." in
 *                the username. And it will ignore any portion of the username after a "+".
 *                Examples:
 *                test.email@gmail.com, test.email+spam@gmail.com and testemail@gmail.com will all go to the same address, and thus the result should be 1.
 * @param {*} emails
 */

const uniqueEmailCount = emails => {
  // Check for Bad Request (No email addresses in list)
  if (emails.length === 0) return 0;

  // Set to add unique email addresses in set
  const set = new Set();

  /*
   *   Main idea is dividing each email from emails list according to @ and then check for . & + conditions and then again checking if domain is gmail.com only.
   *   Then I added them to set (set will automatically avaoid duplicate emails and look at them as one email). Answer is the size of set which contains all unique
   *   emails.
   */

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
