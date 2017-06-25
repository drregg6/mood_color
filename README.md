# mood_color
An app that smiles back!

A project recommendation from <a href="https://medium.freecodecamp.com/from-zero-to-front-end-hero-part-2-adfa4824da9b" target="_blank">From Zero to Front End Hero</a><br>
Inspired by <a href="https://codepen.io/mecarter/pen/RNomVo" target="_blank">this sample project</a> by <a href="https://codepen.io/mecarter/" target="_blank">Mark E. Carter</a>.

The example project would only display random colors based on the characters the user typed into the input element.<br>
I want to tweak this example project to accurately depict the mood the user typed in with a fitting color.

An array of objects is created - an object to represent a mood.<br>
I have colors associated with the mood inside that object as well.<br>
As the user types, the background color is updated. If it lands on a mood, one of the associated colors will be the background.

I also want to add messages when a mood is found within the array.<br>
I want the message to fade in slowly, and fade out quickly once the user starts typing or deleting the input.
