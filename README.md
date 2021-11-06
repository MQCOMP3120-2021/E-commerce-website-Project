# Application Outline

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Main Purpose

This application acts as an online platform for a bakery shop located in Macquarie to sell their products to a wider range of customers through partnerships with delivery services.

## Target User Group

People who have a basic understanding on how the Internet works should be able to navigate through the application easily. It is expected that users of the application will possess a PayPal account, credit or debit card that can be utilized in their payment process. Targeted users share an interest in bakery goods and enjoy using food delivery services. 

## Data Sources

All images used in the application are copyright free.

The logo of the application is designed by the team, hence no permission is required. 

Images of products are obtained through (https://unsplash.com/), where it grants the copyright license for users to use the photos freely and neither permission nor attribution is required.

# Minimum Viable Product Outline

## Pages

The application contains 8 pages in total:
- Home
- Menu
- Single product view
- About
- FAQ
- Cart
- Checkout
- Payment
- Login
- Logout

## Features

A log in function is implemented to the web application, where customers can provide reviews and ratings on items purchased previously. Feedback can be provided through navigating to the "My Orders" page, which will appear after users log in to their account. 

### Home

Home page acts as a basic introduction page for the application. The page includes some images and a special review provided by famous food critics. A trending products display is added to the bottom section of the page, where a button is implemented along to bring users directly to the menu page.

### Menu

The menu page features all the products that the bakery shop sells. A search bar is attached to the top of the page, which should allow customers to easily find their targeted items. Customers could also filter items based on category through the dropdown options. When users click on an item on the list, they will be redirected to the single product view page.

### Single Product View

A single product view page contains a basic description of the item selected. Customers who are interested in the product are permitted to choose their desired quantity and add the item into their cart. Some reviews provided by previous customers are also viewable by customers on the page. 

### Cart

Cart page allows customers to checkout the items that they have added or edit the quantity as desired. A delete option is available for customers who no longer show interest in a product added into cart. If customers wish to edit the quantity of item, an update item button is available for use, where it will update the item total according to the selected amount. Customers can also use the clear cart button to remove all items in the cart.

### Checkout

Upon confirmation, customers will be redirected to the checkout page, where they are permitted to select their preferred delivery partners and payment methods. The screen also displays a different delivery cost for each delivery partners to make the page look more realistic.

### Payment

When users confirm their payment, a message will pop up saying that that payment is successful. The order being placed will also be displayed below the message. 

### Contact

The page includes a simple description of the business with a google map stating the location of the physical store. Users can also find the social media accounts connected to the business on the bottom section of the page. The icons will link users to the main page of the social media stated but no actual account will appear. 

### FAQ

Accordion component is implemented under the page to build vertically collapsing boxes that display some usual questions that users will encounter when using a web application of such. A contact form is attached below the accordion, allowing users to send emails to the business for further enquiries. 

### Login

The login page allows registerd users to sign in to their account and for unregistered customers to create a new account. 

### Logout

The logout page shows an alert to confirm users' logout. 

# Project Source Code

## server

All functions and components related to the server are stored under the server folder. 
This also includes any JSON files used to store temporary samples for the project.

### controllers

The folder contains lines of codes that controls the logic behind the application and acts as a coordinater between View and Model. It controls the way user interacts with the application.

### models

The folder stores materials that integrate the application with databases. 

### utils

The folder contains a middleware js where it deals with receiving requests and responses to objects. 

## src

This folder stores all source materials required to build the project.

### assets 

The folder stores any assets and images that have been utilized for the project.

### pages

The folder is made up of js files that include all functions and components required for the front-end side of the application.
They are organized according to the pages these components belong to. 

### css

The folder stores all css stylesheets that have been used to style the pages in the application. The stylesheets are arranged according to pages.

### services

The folder includes a js file that contains all axios methods utilized to handle data from api.

# Next Steps

- A sorting function could be added to the application, where it allows users to view the products in menu in sorted manner such as by ratings, pricing or alphabetical order of product names.

- Implementation of a payment system which will allow users to pay for their orders.

- Integration with actual delivery partners for items to get delivered. 

- A form that allows users to add reviews to items that they previously purchased.

# Roles and Contributions of Each Member

## Daniel Wong
- Worked on Cart & Checkout page.
- Implemented cart functions for GET, POST, PUT and DELETE(for one item or for all in cart)
- Implemented order functions for GET and POST
- Made math functions to calculate costs 
- Resolved errors on the application
- Ensured that products when added would update if there was a product already being ordered.

## Jessica Franklin
- Initial commits for structure of pages.
- Created and implemented the Navigation bar functions.
- Added React Router and implemented on almost every page.
- Back-end server initialization and contribution.
- Resolved merge conflicts between branches when necessary.
- Created the login and signup function for users.
- Linked new users to the database.
- Worked on the Home Page, Menu Page, FAQ Page, Single Product Page.
- Resolved errors occuring on the application.

## Jing Wen Ng
- Created interface designs for application on Figma.
- Worked on any documentations required (i.e. the project proposal, README.md)
- Created the initial empty React application
- Resolved merge conflicts between branches when necessary.
- Assisted on styling for all pages.
- Added email function on FAQ page. 
- Wrote api tests for application.
- In charge of deployment and finalising things. 

## Mariel Uykim
- Resolved merge conflicts between branches when necessary.
- Created database to store information.
- Linked the application to the database.
- Completed About Us page, Checkout page, and Individual Product View page.
- Fixed styling errors occuring. 
- Resolved errors occuring on the application.
- Added search and filter for menu items.
- Implemented Login cookies and logout function.

# Interaction and Communication

The team has been using Messenger as the main communication platform for members to dicuss their progress and arrange group meetings.

Github has been utilized for members to publish their code into their respective branches. Once one pushed their changes into their branches, another member will pull the code to their local branch to examine that the code is functionable. After verification, the checker will merge the branches.

# Available Scripts

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
