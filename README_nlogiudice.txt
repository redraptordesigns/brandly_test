Brandly Front-End Developer Test
================================
Nicolas Anthony LoGiudice

I had a lot of fun working on this exercise. I decided to use bootstrap as my UI framework and angularJS as my javascript framework (along with jQuery and bootstrap's built-in functionality). I always try to keep the number of additional plugins down, as it can add unwanted complexity, buddy code, and generally bulk up a project that otherwise would not need it.  In this case, I added a library for the drag-and-drop upload functionality, the zoom functionality, and the state dropdown form menus (but not the taxes, I had to do that by hand!).

I stayed as close as possible to the mock-up designs, while making a few very small changes, and a few guesses on possible functionality. I added both drag-and-drop and the possibility of the classic uploader by clicking the upload box. This seemed like a more clean approach. I made the assumption that the 'Questions' box on the item-details page was a modal. Also on the item-details page, I added the functionality for zoom, viewing the front and back of the card, showing and hiding crop marks, viewing paper, and saving the template. I kept the footer in the center for consistency (the mock had the footer left aligned for the item-detail page). I saved the user and card data in local storage to pass to the cart detail page. I added alerts for saving and clearing. I also added the bonus work of adding additional fields like email and phone numbers.

** NOTE ** localstorage will not work in IE using the file:// protocol rather than http protocol. In the real world, these pages would always be running using the http protocol, so this is only an edge case for this test. I went ahead and put it on my web server, so you would be able to test it at ease: http://wp.redraptordesigns.com/ 

The overall look-and-feel directly match the mock-ups, and the pages are fully responsive from small cell phones to large monitors. Besides adding security and speed, Django would most likely be used to expand the data model server-side, while angular would take care of the client-side lifting. Django would also take care of complex routing, data-fetching, account information and so on. For a specific example, instead of building forms in HTML with angular, Django would most likely do this. Django has robust user models in place that could be utilized. Obviously, all account and card saving would be handled by Django on the back-end.

With more time, I would have liked to add full validation of all forms, and an actual back-end service for the uploading of the pdf, rendering of the png and transferring of assets to the item-detail page, which was beyond the scope of this exercise. I would have liked to make my code a bit more angular in nature as well.  Angular is an extremely powerful tool, which allows for a lot of unique possible design patterns, and I am learning more and more best practices the more time I spend with it.  I would also add some nice animations for the removal of cards, and changing of page data.

I'm ecstatic about the prospect of working with Brandly! Thanks for your time and I hope to hear back from you soon.


*** EDIT ***
I included a document named testing_example.txt outlining two examples of possible testing of angular functionality using jasmine.js