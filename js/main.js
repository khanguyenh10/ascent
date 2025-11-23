// Khởi tạo một đối tượng Swiper mới, gắn với phần tử có id "serviceSwiper"
var swiper = new Swiper("#serviceSwiper", {
    autoplay: {
        delay: 5000,
    },
    // Tạo khoảng cách 0px giữa các slide
    spaceBetween: 20,

    // Căn slide hiện tại ra giữa màn hình
    centeredSlides: true,

    // Bật chế độ lặp vô hạn (khi hết slide sẽ quay lại đầu)
    loop: true,

    // Cấu hình phần pagination (các chấm điều hướng bên dưới)
    pagination: {
        el: ".swiper-pagination",   // Gắn vào phần tử có class "swiper-pagination"
        clickable: true,            // Cho phép click vào chấm để chuyển slide
    },

    // Cấu hình chế độ tự động trượt (autoplay)
    // autoplay: {
    //     delay: 3000,                // Thời gian chờ giữa các lần trượt (3000ms = 3 giây)
    //     // disableOnInteraction: false, // (Tuỳ chọn) Giữ autoplay ngay cả khi người dùng kéo tay
    // },
    breakpoints: {
        576: { // screens ≥ 576px
            slidesPerView: 2,
        },
        // 768: { // screens ≥ 768px
        //     slidesPerView: 3,
        // },
        1024: { // screens ≥ 1024px
            slidesPerView: 3,
        },
    },
});


var swiper = new Swiper("#testimonialSwiper", {
    autoplay: {
        delay: 5000,
    },
    // Tạo khoảng cách 0px giữa các slide
    spaceBetween: 50,

    // Căn slide hiện tại ra giữa màn hình
    centeredSlides: true,

    // Bật chế độ lặp vô hạn (khi hết slide sẽ quay lại đầu)
    loop: true,

    // Cấu hình phần pagination (các chấm điều hướng bên dưới)
    pagination: {
        el: ".swiper-pagination",   // Gắn vào phần tử có class "swiper-pagination"
        clickable: true,            // Cho phép click vào chấm để chuyển slide
    },

    // Cấu hình chế độ tự động trượt (autoplay)
    // autoplay: {
    //     delay: 3000,                // Thời gian chờ giữa các lần trượt (3000ms = 3 giây)
    //     // disableOnInteraction: false, // (Tuỳ chọn) Giữ autoplay ngay cả khi người dùng kéo tay
    // },
    breakpoints: {
        390: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        576: { // screens ≥ 576px
            slidesPerView: 1,
        },
        // 768: { // screens ≥ 768px
        //     slidesPerView: 3,
        // },
        1024: { // screens ≥ 1024px
            slidesPerView: 1,
        },
    },
});
