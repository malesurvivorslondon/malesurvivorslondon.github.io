        $(document).ready(function () {
            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        loop: true,
                        nav: false,
                        autoplay: true
                    },
                    600: {
                        items: 1,
                        loop: true,
                        nav: false,
                        autoplay: true
                    },
                    1000: {
                        items: 1,
                        nav: false,
                        loop: true,
                        autoplay: true,
                        margin: 20
                    }
                }
            })
        })
