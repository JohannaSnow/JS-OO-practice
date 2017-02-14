Coding Challenge
-----------------------------------------------------------------


Instructions to run program:
--------------------------------------------------------------------------------

I used Node.js to run my program. Don't have Node, no worries. Here's what you need to do:


For Mac:
--------------------------------------------------------------------------------------------
Before you can install Node, you’ll need to install one other application, Homebrew. Fortunately, once you’ve got this on your machine, installing Node takes just a few minutes. While technically you can go to Nodejs.org and install Node.js from there, I recommend going through a package manager like Homebrew because Homebrew doesn't require access to administrator-only areas of your computer in order to install NodeJS (or any other package). This is a safer approach as it makes sure that any package you install with Homebrew can’t wreak havoc on your computer. It also makes removing Node very easy, if you ever need to. While it may take a few minutes more to set up, it's worth it in my eyes.

Getting Started:
-------------------------

1. Open up Terminal
2. Type: ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)
3. Follow Instructions in Termial to finish setting up Homebrew
4. Once that's complete; let's install Node
5. Type: brew install node
6. Sit back and wait. Homebrew downloads some files and installs them. And that’s it.

To make sure you have Node and NPM installed, run two simple commands to see what version of each is installed:

To see if Node is installed, type node -v in Terminal. This should print the version number so you’ll see something like this v0.10.31.

To see if NPM is installed, type npm -v in Terminal. This should print the version number so you’ll see something like this 1.4.27

I used Node version v4.5.0 to manage my code. Anything higher than that will also work.



For Microsoft/Windows:
----------------------------------------------------------------------------------

1. Download the Windows installer from the Nodes.js® web site.
2. Run the installer (the .msi file you downloaded in the previous step.)
3. Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).
4. Restart your computer

To see if Node is installed, open the Windows Command Prompt, Powershell or a similar command line tool, and type node -v. This should print a version number, so you’ll see something like this v0.10.35.


To see if NPM is installed, type npm -v in Terminal. This should print NPM’s version number so you’ll see something like this 1.4.28


If you prefer to skip HomeBrew, you may also download and install Node through their website: www.nodejs.org/en/download


Once you have Node installed let's move on!


Open up the Coding Project file using an IDE of your choice (I use Atom).  

In the Terminal/Command Prompt; Find the Coding Project file and get down into the Scripts. From here you want to run Node client.js in your Terminal/Command Prompt. This will run the program inside your Terminal/Command Prompt.




 Design Decisions
========================================================================================================================





Language Choice
========================================================================================================================


 Javascript

 I ended up choosing Javascript personally because I wanted to work outside the browser and use Node to run my code. While I've spent most of my time coding in Javascript, I've never used it to write objects before. I've always had the full stack to work with, so it was a great learning experience to try and figure out how I could use Javascript client side to write Classes that would be able to use the JSON data provided. While it was frustrating at times, I'm really glad I chose Javascript and doing it this way because I came out of the whole project knowing more about Classes, Constructors, Instantiation, and Prototypes. While I have dabbled in Java which is an OOP Language, I never really completely understood how it worked. But being able to learn how to create Objects during this project really helped to solidify my knowledge and create a strong foundation moving forward while writing code.


Process for verifying the correctness of your program
==============================================================================================================================
Lots and lots of research into Javascript OOP
Testing with Node



Didn't Get To / Would Add:
==================================================================================================================================
JSON files fully working in my Guest and Hotel classes. I feel as though I am close, but not quite there yet. I will continue researching and trying to implement it on my own. I think with a little more research, I'll get there.

Didn't get to Unit Testing using Mocha/Chai; would eventually want to do that since unit tests makes it easier and safer to modify the code because the tests document and protect the intended behavior and will instantly catch any regressions. Mostly it can save time and money in the end.

Would Add:
-A UI Element to this,
-Would have loved to make a full-stack application with this project (but time was limited)




Coding Project Requirements:
=======================================================================================================================================

We want to see your implementation of this process. More specifically, your code should:

1. Load in guest and company information from the JSON files that we have provided
2. Have some sort of structure or objects for working with template messages that have placeholders/variables (i.e. firstName, lastName,
roomNumber, etc.) embedded in them
3. Also support a greeting variable that will change based on the time of day (e.g. "Good morning" / "Good afternoon" / "Good evening")
4. Output a personalized message, given a template message and guest or company objects
5. Generate a final message output that is a result of populating the specified variables of the message template with the correct values
from the other data
