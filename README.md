# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### Links

- [Solution](https://www.frontendmentor.io/solutions/learning-tailwind-3-H1r9DkkU5)
- [Live site](https://lyons-frontend-mentor.github.io/interactive-rating-component/)

## My process

### Built with

- HTML
- TailwindCSS

## Reflection

In this challenge I continued practicing Tailwind. I did was add a `@layer components` directive for the background gradients on the cards. The other new Tailwind feature I used was `peer` and `peer-*` classes for selecting siblings. The main challenge I had was styling the radio inputs.

I could've easily used a list of `<button>`s instead, but I believe that the most semantic HTML element to use would be an `<input type="radio">`, so that's what I used instead. This allows the user to navigate between the radio inputs with the arrow keys on their keyboard, and they can leave the entire section with a single `Tab`. By contrast, if I had used five `<button>`s for the rating inputs, then a user would need to tab five whole times to get to the submit button. In this simple case it wouldn't be too big of a problem, of course, but I believe that the functionality of radio `<input>`s would really shine in larger forms.

The tricky part then becomes styling the radio inputs. I decided on using the `<label>` for the visual feedback, visually hiding the actual radio `<input>`s altogether. Then, I can use the `:checked` pseudoclass via `peer-checked` (each radio input consists of an `<input>`-`<label>` sibling pair) to style the `<label>` according to whether the `<input>` is checked. The `<input>`s can become checked either by the user navigating to them with the keyboard, or by clicking on them; for the latter, I'm taking advantage of the fact that connecting a `<label>` to an `<input>` allows the user to click on the `<label>` to toggle the `<input>`. It is for this reason that I can simply visually hide the `<input>`. Once I figured out how to style the `<label>` appropriately, hiding the `<input>` was a very simple matter, as I can just use `appearance-none` (you can also do this in vanilla CSS).

### Continued development

I needed a lot of Tailwind classes to style a radio input, and then writing up five inputs leads to a lot of code duplication. Ideally, I would use something like React or even Handlebars to make the input into a single component, so that I only need to apply the Tailwind classes once. I want to avoid using React for simple Frontend Mentor challenges with little interactivity (I save that for my own larger projects), but for more interactive challenges I would consider using React. Handlebars is also an option, as I'd like to learn a templating engine so that I don't always need to use React for writing components.
