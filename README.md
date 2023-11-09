# An e-commerce application for foodies around the world who want to share, vote on, and shop for authentic recipes, all in one place.

[Live Demo](https://menu-io.netlify.app/)

## Description:

### What is meNu?
As a migrant, I have a deep appreciation for authentic, homemade food and how it connects me with the places I've called home, including Japan, India, Australia, and the US. As of now, I haven't been able to find a modern and polished website where:
 1. A user can browse recipes from every country in the world [In-progress]
 2. A user can upload their own recipes [In-progress]
 3. A user can (similarly to websites like Reddit) vote for recipes that they agree are authentic [Backlog]
 4. A user can directly purchase hard-to-find groceries for recipes on the website [Backlog]

This website is a work in progress with the intent of accomplishing the goals listed above in increments. 

### Why did I choose MERN, Heroku, Netlify, and Amazon S3?

MERN (**M**ongodDB, **E**xpress, **R**eact, **N**ode) is a commonly used technology stack for building full-stack websites. For this particular project, I chose to use the MERN stack because of the following reasons:

- Database flexibility, scalability, and speed: As a document-oriented NoSQL database, MongoDB allows for the database schema to continuously evolve based on changing data requirements. Given that this project is very much still in its early stages with new ideas and requirements coming up frequently, being able to change the schema as needed was an important requirement for choosing a database. That being said, the structure offered by a relational database is advantageous in that it forces the developer to more deeply plan the system's architecture beforehand. 
- With the ultimate goal of this project being a website with a significant number of users, high read and write capability (for creating and browsing recipes), horizontal scalability for quick growth (along with high availability), and auto-scaling were features that made MongoDB the winning choice. While some or all of these features do exist in alternative database choices as well, MongoDB proved to be straightforward in setup and management.
- Performance-wise, React's Virtual DOM and efficient re-rendering made it an excellent choice, especially considering that the roadmap for this project includes more dynamic user interfaces, and because one of the pain points I've personally experienced with recipe websites, in general, is the clunkiness and slow page load times. Although not currently implemented, server-side rendering is also supported by React, which means if I ever want to implement it, it can provide additional performance boosts. Given that this was also the first frontend library that I had worked with and found lots of support for, React was also a natural choice for the project. Vue and Angular may be great options for future projects.
- Since this project is currently, and for the foreseeable future, being developed by a single developer (me), it naturally made sense to pick Node for the backend so that I could work on the project in one language (JavaScript), as opposed to having to swap between two. It also has a very active open-source community, driven by the npm repository, which makes development simple and efficient. Express.js is one example of the vast libraries available to the Node community, and it made building an API for this project extremely simple. One consideration for the future is that if I want to integrate any ML models into this project, a Python-based back-end may make it easier to integrate features like data analysis, machine learning, and scientific computing. 
- A database like MongoDB is great for structured data (e.g. JSON files), but not great for storing unstructured data like images. Adding images into the equation can make database management more complicated. By storing images in S3, and then storing the URLs to those images in MongoDB, the performance of the database can be kept efficient. Finally, backing up and recovering image data stored in a database is more resource-intensive than having a dedicated file storage system like S3.

### What challenges did I face and what features are in store for the future?
I faced a lot of challenges (and still do) while building the project so it's difficult to name just a few. Instead, here's a list of challenges I felt were significant enough to take note of:
- UI/UX is hard to get right without using libraries. The UI/UX element of the project is still a work in progress. It's difficult to achieve a modern, sleek look without it looking outdated.
- Working on a passion project can be difficult when also trying to build an organized, complex project. Often I found my excitement for new ideas overwhelming because I would realize too late that I actually should've done X like Y instead. For example, I was so excited about the prospect of getting recipes on to my website that I dove straight into creating the "Create" page that I oversimplified the form. It was only when I created a recipe myself that I realized that I needed to think a lot more about how recipe instructions would be stored in the database while making it easy for users to input.
- Working with complex forms (i.e. forms that allow for user uploads) is different from building forms that only take simple user inputs: handling multipart/form-data requires extra steps compared to handling just the default encoding type (application/x-www-form-urlencoded)
- The AWS universe is vast. Despite having been able to successfully integrate S3 with my project (which was already somewhat complex), I know that I've only touched the surface of all the possibilities available with AWS.

Some future features include:

- ~~User authentication~~
- Integrate TypeScript
- Displaying nutrition information for recipes using some public API
- Additional filters to filter through recipes
- An interactive map of all countries in the world that allows users to search for recipes from the map
- An easier or more interactive way for users to add recipes
- A rating system to allow users to rate recipes
- Implementation of FAQs, News, Careers, and Contact pages

## How do I install and run the project?
Coming soon!

To try out all the features of the website, feel free to use this demo account:
Email address: ar-demo@demo.com
Password: ARdemo123

## How do I use the project?
 - To create recipes, login (or create an account if you haven't already), and then click "Create" in the navigation bar. This will take you to a form where you can create a recipe and upload an image of your dish.
 - To browse existing recipes, click on "Browse" in the navigation bar. Currently, you can filter through recipes by country.
 - To delete your recipes, navigate to your profile page by clicking "My Account" in the navigation bar, then "Profile". Once on your profile page, you can see the recipes you've created. Click on the one you want to delete, then click "Delete" at the bottom of the recipe page that shows up.

------------------------------------------------------------------------------------
