# HTML Portfolio

You'll create a personal web page to show off your work. We will test your HTML knowledge, and then it will be up to you to use CSS to style your own page and make it unique.

## What You'll Build

The end result will be a portfolio that you can deploy publicly! Here's a sample of what this could look like:

![Sample Portfolio](http://courseware.codeschool.com.s3.amazonaws.com/projects/build-a-portfolio-using-html-and-css.png)

## What You'll Learn

We'll dive into a number of basic HTML concepts, including:

* Creating an HTML page
* Using classes to organize your page and tie in styles
* Using headings to denote importance
* Adding text using paragraphs
* Creating links so users can contact you

## What You'll Need

You'll need a GitHub account, Git installed locally, and a text editor to edit HTML. We recommend using GitHub's [Atom Editor](https://atom.io/), which is free and very powerful. The [Brackets](http://brackets.io/) editor is another great tool.

## Live Demo

Here is a [working version of this project](https://codeschool-project-demos.github.io/HTMLPortfolioProject/), and now it is your job to out-do our version of this project by customizing your portfolio even further and adding more CSS rules, etc. We can't wait to see what you come up with!

## Setup

Once you have cloned the forked repository, go into the directory containing the project and look for the `/src` directory. This is the directory where you will be making changes when you start following the step-by-step instructions. You can simply open those files in a text editor and get started.

You can always open the index.html file directly in your browser and work through the tasks below. You can also head over to the [Node.js](https://nodejs.org) website and follow the instructions to install Node on your machine. Once you have Node installed, open your command line and follow these instructions:

```
cd HTMLPortfolioProject
npm install
npm start
```

Running `npm start` should open a browser window pointing to `http://localhost:3000`. Now once you make changes to the files under the `/src` directory, your browser will refresh automatically, displaying the newest changes made to the files. This will save you the round trip of saving files and clicking refresh on your browser.

## Tasks

Complete the following tasks to finish this project.


### Create the Page Header

At the top of our page, we'll want to create an element with a class of `header` for us to add some information about ourselves.	MENU

### Header Text

Inside of our `.header` element, create an `h1` tag with your name in it. This is your portfolio, so it makes sense for your name to have the most prominence.	MENU

### Job Title

Also inside the `.header` element, add a `h2` tag with a job title (ie. "software developer", or "web designer", or "maker of things", etc).	MENU

### The Tagline Element

Next, create a new element that has a CSS class called `tagline`. In this element you'll be giving a little more information about yourself.	MENU

### A Little About You

Inside the `.tagline` element, create a `h3` tag inviting the visitor to learn more about you (ie. "Learn More About Me", or "Here's What I Do", etc). Also add an introductory paragraph with more information about yourself, including what things you're passionate about, programming languages you enjoy writing in, etc.	MENU

### The Skills Element

Next, we'll create a place to list out our current skills by creating an element with a class of `skills`. In here we'll be listing out what we already know.	MENU

### Skills Content

Inside the `.skills` element, create a `h3` tag inviting the user to learn more about your skills (ie. "my skills"). Also add a paragraph tag describing your skills (ie. "I enjoy writing front-end code with these technologies").	MENU

### List of Skills

Inside the `.skills` element, create a new `ul` which will be a list of of your skills. In here, add 3 skills you currently possess. `HTML` must be one of these skills.	MENU

### The Contact Element

The last section of our page will give people a way to contact us. Create a wrapper element for this area and give it a class of `contact`.	MENU

### Contact Copy

Inside the `.contact` element, create a `h3` tag inviting the user to contact you (ie. "contact me", or "drop me a line"). Also add a paragraph tag describing how people can contact you.	MENU

### Contact Link

Lastly, we just need a way for people to get in touch with us! In the paragraph you created, add an anchor tag (an `<a>` element) pointing people to a place where they can get more information about you (ie. Twitter, LinkedIn, Github, etc).


## Next Steps

Now that we have a working portfolio site, the next (optional) step is to style it. If you want to learn how to style this one with Bootstrap, head over to the [Build a Portfolio Using Bootstrap)(/projects/build-a-portfolio-using-twitter-bootstrap) project.

If you’d rather style it on your own, now’s an excellent chance to add a stylesheet to this project and use those CSS skills!

## Deploying

Putting this site up on GitHub pages is a bit different than some other projects because the code is all in the `/src` directory. There’s a nifty way to push this directory to a GitHub branch, which allows you to use GitHub pages with it! Try running this Git command for this project:

```
git subtree push --prefix src origin gh-pages
```

This will push the `src` folder up to GitHub on the `gh-pages` branch. After that, you should be able to open up `http://username.github.io/HTMLPortfolioProject`, where `username` is your GitHub username.
