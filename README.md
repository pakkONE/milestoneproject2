# Re(flex) - Flex your reflexes
Re(flex) is a game that will test the users reflexes, but not in the conventional way. We are used to waiting for red light to turn green to press a button to measure our reflexes, but this game will measure your reflexes to let go of a key at a specified time. There is something psychologically different to pressing a key at a specified time versus letting go of a key at a specified time. 

This game will be for adults and children alike, and it will provide a fun game that helps sharpen your reflexes (and possibly flex them) to your family, friends and colleagues.<br>
![This is an image of mockup of the responsive design](assets/images/responsive_mockup.png)

## Features
<hr>

### ___Existing Features___
 - #### __Header__
   - The header will be placed up top of the page and aligned to center. Re(flex) will be displayed with a fun font.
   - The name of the game reveals that it has to do with reflexes, and your chance to flexing them to others.<br>
   ![Screenshot of the header](assets/images/header.png)

 - #### __Game Area__
   - This section will have a different colored background and contain the game itself.
   - It will provide a random number that is the goal of the game.
   - The counter will start as the user presses down a key and will stop once the user releases the key.
   - Once the user has released the key, the result is logged and a new randomly generated goal will be shown.
   - Dependant of the result (a margin of 0,2 seconds) will display the counter with a green background if user succeeds or a red background if the user doesn't succeed.<br>
   ![Screenshot of the game area](assets/images/game_area.png)

 - #### __Reset game button__
   - At the bottom of the game area there will be a button to click on if the user would like to reset the game.<br>
   ![Screenshot of the reset game button](assets/images/reset_button.png)

 - #### __Footer__
   - A footer will be fixed on the bottom displaying the rules of the game in short sentences.<br>
   ![Screenshot of the footer section](assets/images/footer.png)

### ___Future Features___
- In the future I would like to add sound effects to the game to make it more fun.
- I would also like to add the ability to make a leaderboard that users can opt into and save their best score to compete against other players.

## UX
<hr>

### __User Stories__
 - As as user, I would like to play a game.
 - As a user, I would like to test my reflexes.
 - As a user, I would like to reset the game.
 - As a user, I would like to contact the developer when something is not working.

## Design
<hr>

### __Fonts__
 - I used [Google Fonts](https://fonts.google.com/) for finding a fun font.

### __Colour schema__
 - I used [ColorSpace](https://mycolor.space/?hex=%23FFFFFF&sub=1) for finding a good looking colour palette to #FFFFFF.

### __Icons__
 - I used [Font Awesome](https://fontawesome.com/) to get a nice Facebook icon to the footer.

## Wireframes
<hr>

### __Desktop__
![The wireframe for desktop version](assets/images/Desktop.png)

### __Tablet__
![The wireframe for tablet version](assets/images/Tablet.png)

### __Phone__
![The wireframe for phone version](assets/images/Phone.png)

## Technology
<hr>

### __GitHub__
- GitHub is where the code is stored and the site was hosted.

### __GitPod__
- GitPod is the developer environment in the cloud.

## Testing
<hr>

### __Code validation__
- HTML validator<br>

![Results of html validation](assets/images/html_validator.png)
- CSS validator<br>

![Results of css validation](assets/images/css_validator.png)

### __Test cases__

### __Fixed bugs__

### __Supported screens and browsers__

## Deployment
<hr>

### __Via GitPod__
- GitPod was used as the environment for development. These are the steps to set it up:
  - I used Code Institute Python Essentials template (https://github.com/Code-Institute-Org/python-essentials-template)
  - Click Use this template.
  - GitPod will now set up the environment for you with all addons/shortcuts needed.'
  - To run the program in GitPod what you have to do is type in python3 run.py in the terminal.

### __Via GitHub Pages__
- The site was deployed to GitHub Pages. These are the steps to make it happen:
  - Go to the relevant repository, then click Settings.
  - Click on Pages on the left column.
  - Under source, pick main and also make sure that /root is selected. Click Save.
  - The site will then be deployed within 10-15 minutes and the link should be shown above the Source section.

Find my site here: https://pakkone.github.io/milestoneproject2/

## Credits
<hr>

#### function runTimer
- ```function runTimer() {
  var i = 0; // a counter which is displayed every 100ms

   // create interval which fires the callback every 100ms.
   // `interval` holds the interval ID, which is later used to clear the
   // interval (stop calling the callback)
  var interval = setInterval(function() { 

    text.innerHTML = i++; // write `i` and increment
    
    // if `i` is grater than 100 then clear the interval (stop calling the callback)
    if (i > 100) clearInterval(interval);
  }, 100);


- Borrowed from user @ Stack Overflow [Sebastian Kaczmarek](https://stackoverflow.com/a/58652144)