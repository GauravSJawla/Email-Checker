const express = require('express');
const router = express.Router();
const uniqueEmailCount = require('../../services/uniqueEmailCount');

/**
 * @route  POST /api/uniqueEmailChecker/emails
 * @description  A web service that accepts http post request with a list of emails and returns in response the count of unique emails.
 * @access public
 */
router.post('/emails', (req, res) => {
  const emailAddress = req.body;
  let count;
  try {
    count = uniqueEmailCount(emailAddress);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      msg: 'Server error. Please try again later.'
    });
  }
  if (count === 0) {
    res.sendStatus(400).json({
      msg: 'Email Address Empty'
    });
  }
  return res.status(200).json(count);
});

module.exports = router;
