---
title: Build a Website with HUGO on AWS Amplify
author: "Julia Furst Morgado"
date: 2023-xx-xxT17:46:05.964Z
draft: true
cover:
    image: img/100devs.png
tags: 
    - Microsoft
    - Certification
    - Azure
categories: 
    - Tech
description: This is the subtitle that is used for SEO and visible in Medium and Hashnode posts.
slug: /why-I-failed-microsoft-exam


image: 
images:



aliases:


---
A while ago I decided to start publishing post on my own blog and move away from Medium/Hashnode/Dev, so I could have more ownership over my posts. The engagement is great on those platforms, so I plan to cross-post my posts there, but for now I want to show you how to build a static website on [Hugo](https://gohugo.io/) and deploy it on [AWS Amplify](https://aws.amazon.com/amplify/). I chose HUGO because it does exactly what i needed to do, and nothing more but there is a plethora of other static site generators like Next.js, Jekyll, Gatsby, Ghost, Astro etc. (SHOW TWITTER POLL)

> What is a static site generator?
having a way to store store static content which is just more secure, instead of the web server rendering the web page for every user the static generator renders it once exactly so no need to serve a lot of load on your web server, It allows you to create files in markdown format and using some magic it converts it into HTML. They have an amazing documentation, even a [Quick Start](https://gohugo.io/getting-started/quick-start/) guide.

AWS Amplify is hosting it's a framework it allows you to do the bunch of things for mobile web apps too and it's like a it's a full suite, helps us to do full stack web and mobile apps

### Pre-requisites:
- [Sign up](https://portal.aws.amazon.com/billing/signup?type=enterprise#/start/email) for an AWS Account. There are no upfront charges or any term commitments to create an AWS account and signing up gives you immediate access to the AWS Free Tier.
- Create a GitHub Account or another code repository like GitLab or BitBucket
- Have [Git](https://git-scm.com/downloads) installed on your local machine
- Have HomeBrew installed on your MAC??

## Getting started
### Create a repository on GitHub
Login to GitHub within a web browser and create a new repository creating a repository here because i'm going to be plugging in a hugo to this repo and um setting up a website there, add readme etc

### Clone the repository to your local machine
Clone the repo on your local environment.

PHOTO GITHUB SSH

`git clone repossh` CHANGE

then move to the directory of the repo `cd name-folder` CHange

### Install HUGO
Since I'm using a MacBook I'm going to install hugo to my workstation with Homebrew. If you don't have Homebrew installed I highly recommend it since I use it for everyhting.

`brew install hugo`

### Create directory structure
Create the directory structure for your project in the quickstart directory (you can name it something else):

`hugo new site quickstart`

Then change the current directory to the root of your project:

`cd quickstart`

### Choose a theme
HUGO has many [themes](https://themes.gohugo.io/) that you can choose from to jumpstart your blog. I wanted something simple so I went with the [PaperMod](https://github.com/adityatelange/hugo-PaperMod) one, but you can always change or add extra features.

You can also start a theme from scratch but it's a little harder for your first time.


### Add the theme as a submodule
the reason we added the sum module is because the theme is sitting on a github page and as it updates and you do get get updates as well it's going to update the theme as well

PHOTO GITHUB http

`git submodule https://github.com/adityatelange/hugo-PaperMod.git`

Most of the Site configuration is handled within config.toml so you have to add the theme to your config:

`echo 'theme = "PaperMod"' >> config.toml`

Great you're website was created, you can even view it by starting the server locally:

`hugo server -D` or `hugo server`??

Open a web browser and view how the content is rendered by navigating to http://localhost:1313. Press Ctrl + C to stop Hugo’s development server.

Now let's add your first post.

## Create content
To add a new post (or page as they call it) type:

`hugo new posts/how-to-create-hugo-site.md`

Hugo will create the file in the content/posts directory. 

Open the file with your editor and modify the template header to match your needs:

PHOTO OF MINE

To view your site as you make changes, just start the server and go to localhost on your browser. This makes tweaking and testing changes much more convenient. For example, you still need to make some changes to your config.toml, such as update your URL, language, title, etc. You should see these changes reflected immediately.



***
If you liked this article, go follow me on [Twitter](https://twitter.com/juliafmorgado) (where I share my tech journey) daily, connect with me on on [LinkedIn](https://www.linkedin.com/in/juliafmorgado/), check out my [IG](https://www.instagram.com/juliafmorgado/), and make sure to subscribe to my [Youtube](https://www.youtube.com/c/JuliaFMorgado) channel for more amazing content!!
