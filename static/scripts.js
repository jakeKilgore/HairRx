$(document).ready(function () {
    const
        $home = $('.home'),
        $about = $('.about'),
        $testimonials = $('.testimonials'),
        $contact = $('.contact'),
        $page = $('.page'),
        $buttonHome = $('.buttonHome'),
        $buttonAbout = $('.buttonAbout'),
        $buttonTestimonials = $('.buttonTestimonials'),
        $buttonContact = $('.buttonContact'),
        homePage = {
            index: 0,
            button: $buttonHome,
            page: $home,
        },
        aboutPage = {
            index: 1,
            button: $buttonAbout,
            page: $about,
        },
        testimonialsPage = {
            index: 2,
            button: $buttonTestimonials,
            page: $testimonials,
        },
        contactPage = {
            index: 3,
            button: $buttonContact,
            page: $contact,
        };

    let current = homePage;

    $buttonHome.on('click', {targetPage: homePage}, swapPages);
    $buttonAbout.on('click', {targetPage: aboutPage}, swapPages);
    $buttonTestimonials.on('click', {targetPage: testimonialsPage}, swapPages);
    $buttonContact.on('click', {targetPage: contactPage}, swapPages);
    
    function swapPages(event) {
        if (event.data.targetPage === current) {
            return;
        }
        let targetLocation = location(event.data.targetPage);
        $page.css('transform', 'translate(' + (targetLocation) + ')');
        current = event.data.targetPage;
    }

    function location(page) {
        return (-100 * page.index) + '%';
    }
});
