Brandly Front-End Developer Test
================================

Overview
--------
The purpose of this test is to assess the skills of a front-end software
developer.  The focus of the assessment is on the developer's ability to
convert designer mock-ups into well styled and functional web pages.

A successful solution will contain web pages that are faithful to the original
designs, have working functionality (with mock data/ api calls where
appropriate), and demonstrate clear and well structured HTML, CSS and
JavaScript.  While the mock-ups provided only illustrate a small segment of
limited functionality, choices for HTML, CSS and JavaScript architecture should
be made in a way that would support a larger, more complicated application.  So
while the fastest implementation may only require boiler-plate HTML/JS/CSS, the
use of UI frameworks and build tools is expected.  Any functionality should be
tested, and commits to SCM should typically represent a discrete iteration on a
particular feature.  The solution should be cross-browser compatible (IE10+)
and respond appropriately to small view ports.

There is no time limit for this exercise, but 3-4 hours should probably be
enough to get most of the infrastructure and features in place.  

Instructions
------------
Create the HTML, CSS and JavaScript required to load the following three pages
in a browser:

* `mockups/upload_page.png`
* `mockups/item_detail.png`
* `mockups/cart_detail.png`

Feel free to sample colors from the mock-ups and choose reasonable place-holders or 
replacements for icons and other assets.

Implement functionality to support the following work-flow:

1. Upload a PDF of a business card using either the "drag and drop" or an
   alternate "classic uploader" dialog or page.  (Your choice - you only need
   to implement one.)
2. Gracefully handle a 4 second delay before the business card PNG and form
   data become available on the Item Detail page (such as with a loading
   animation).
3. Edit form data and add items to the cart.  User data may be fetched and
   stored in any way.
4. Create a new item with blank form data from the Cart Detail page.
5. Delete items and change quantities.

**Bonus**

* Add the ability to add or remove fields, such as phone numbers and email.
* Implement any other features suggested by the mock-ups. 

When you are finished, re-compress the project directory and email it back to
Brandly with a description of your solution and any interesting points you
would like to make about your design decisions.  Please also describe how you
would change the data model to leverage a server-side back-end, such as from a
Django web application.  Make note of anything else you would do if you had
more time.

