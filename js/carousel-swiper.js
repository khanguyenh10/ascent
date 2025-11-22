// Khởi tạo một đối tượng Swiper mới, gắn với phần tử có class "mySwiper"
var swiper = new Swiper(".mySwiper", {

    // Hiển thị 1 slide cùng lúc trong khung
    slidesPerView: 1,

    // Tạo khoảng cách 30px giữa các slide
    spaceBetween: 30,

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
        480: { // screens ≥ 640px
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
