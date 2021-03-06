/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('should check that allFeeds object has a URL defined in each feed and is not empty', function() {
            for(const urls of allFeeds) {
                expect(urls.url).toBeDefined();
                expect(urls.url.length).not.toBe(0);
            };
        });

        it('should check that allFeeds object has a name defined in each feed and is not empty', function() {
            for(const names of allFeeds) {
                expect(names.name).toBeDefined();
                expect(names.name.length).not.toBe(0);
            };
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        it('should check that the menu element is hidden', function() {
            const body = document.querySelector('body'); 
            expect(body.className).toContain('menu-hidden');
        });

        it('should check the visibility when the menu icon is clicked ', function() {
            const icons = document.querySelector('.menu-icon-link');
            const body = document.querySelector('body'); 
            icons.click();
            expect(body.className).not.toContain('menu-hidden');
            icons.click();
            expect(body.className).toContain('menu-hidden');
        });
    });


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        beforeEach(() => {
            loadFeed();
        });
    });

    

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
