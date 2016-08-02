THE TASK:
Using the Marvel API, and utilizing your framework of choice:
• Display a grid/list (whichever you think is best in this case) of clickable comic book
images.
• On clicking of a comic book, show that particular comic book's detailed information. You
may show this in a lightbox, or in a separate page altogether.
Feel free to style it as much or as little as you want.
As a dev, we will not judge you on your visual skills :) That's what UI people are for.
There are a ton of cool things you can get with the Marvel API. If you see fit, feel free to add
features to this take home test.
NOTE:
The Marvel API is proprietary, so it is unfortunately not completely open. There is a need to use
a tokenized public key, and pass that key with all of your network requests. Before you do your
take-home test, you will need to generate this key.
You can do so via the following instructions:
1) Go to http://developer.marvel.com/
2) Click “Get Started” to create an account
3) You will be asked to confirm your account. You may or may not receive a confirm email. This
is fine. This may be a bug on their site. If you do get a confirmation email, go ahead and confirm.
If not, then just go back to http://developer.marvel.com/ and you should now be logged in.
4) Click on the "Get A Key" tab. Accept the terms and conditions and you should now see your
public and private key.
5) You should see your public key there. This is the key which you will pass along with every
network request you make. For example:
http://gateway.marvel.com/v1/public/characters?apikey=[YOUR API KEY HERE]
6) Be sure to change your authorized referrers to "*". You will not be able to access the API
without changing the "Authorized Referrers" input field from "developers.marvel.com" to "*".
Good luck! And let us know if you have any questions.