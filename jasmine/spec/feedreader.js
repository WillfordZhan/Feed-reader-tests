/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

 /**

 TODO: 
 写一个 README 文件来详细说明运行应用的步骤。如果你已经添加了额外的测试（来提高测试覆盖率），请提供文档说明这些未来的功能点是什么和你编写的测试在检查什么。
 * 
 */

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /*  Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         * 
         * Answer : Spec failed
         * it shows that expect 0 to be 0;
         */

        // This is our first test - it tests to make sure that the
        // allFeeds variable has been defined and that it is not empty.

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('feed\'s url are defined', function(){
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('feed\'s name are defined', function(){
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
        });
    });


    /* A new test suite named "The menu" */
    describe('The menu', function(){
        /* A test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        var body,
            menuIcon;
        beforeEach(function () {
            body = $('body');
            menuIcon = $('.menu-icon-link');
        });

        it('should be hidden by default',function(){
            expect(body.hasClass('menu-hidden')).toBeTruthy();
        });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
         it('should appear when the menu icon is clicked',function(){
            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBeFalsy();

            // to initialize the initial state of menu
            body.toggleClass('menu-hidden');
         });

         it('should be hidden when the menu icon is clicked again',function(){
            menuIcon.trigger('click');
            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBeTruthy();
         });
    });

    /* A new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
        beforeEach(function(done){
            loadFeed(1, done);
        });
        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('should have at least an feed entry',function(done){
            expect($('.feed').children.length).toBeGreaterThan(0);
            // TODO: why is the done() below is needed?
            done();
        });

    });

        

    /* A new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){

        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var firstContent,
            secondContent;
        beforeEach(function(done){
            loadFeed(0,function(){
                firstContent = $('.feed a:first article').html();
                loadFeed(1,function(){
                    secondContent = $('.feed a:first article').html();
                    done();
                });
            });
        });
        
        it('changes when a new feed is loaded',function(done){
            expect(firstContent).not.toBe(secondContent);
            done();
        });

    });

        
}());
