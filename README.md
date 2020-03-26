# Email-Checker
A web service that accepts http requests and returns responses based on the following problem statement.

Implemented using Express with Nodejs
## Format:
Request - Array of emails. Ex: ["test.email@gmail.com","test.email+spam@gmail.com"]

Response - Number value. Ex: 1
## Problem statement: 
Accept a list of email addresses and return an integer indicating the number of unique email addresses. Where "unique" email addresses means they will be delivered to the same account using Gmail account matching. Specifically: Gmail will ignore the placement of "." in the username. And it will ignore any portion of the username after a "+".
## Examples:
["test.email@gmail.com","test.email+spam@gmail.com","testemail@gmail.com"] will all go to the same address, and thus the result should be 1.

Deployed Link: https://email-checker-gsj.herokuapp.com

Exact POST Request: https://email-checker-gsj.herokuapp.com/api/uniqueEmailChecker/emails
