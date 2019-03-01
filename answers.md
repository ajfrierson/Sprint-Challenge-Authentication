1. What is the purpose of using sessions? Sessions are a way to persist authentication information across requests.

2. What does bcrypt do to help us store passwords in a secure manner? bcrypt hashed the password.

3. What does bcrypt do to slow down attackers? Hashing the password multiple times means that the attacker must know the hash, how many rounds were used to create the hash, and the algorithm used. This is much more complex than simply brute forcing the password stored in plaintext.

4. What are the three parts of the JSON Web Token? 

The three parts of a JWT are:

Header

Contains the algorithm used and the token type.

Payload

Contains claims and any other additional information the developer would like to include.

Signature

A user generated key that is used to sign the header and payload.