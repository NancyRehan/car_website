$(document).ready(function () {

    // =========================================
    // فتح نافذة الحجز
    // =========================================

    $("#bookingBtn").click(function (e) {

        e.preventDefault();

        $("#bookingOverlay").fadeIn(250);

        setTimeout(function () {
            $("#bookingOverlay").addClass("show");
        }, 50);

    });


    // =========================================
    // إغلاق نافذة الحجز
    // =========================================

    $("#closeBooking").click(function () {

        $("#bookingOverlay").removeClass("show");

        setTimeout(function () {
            $("#bookingOverlay").fadeOut(250);
        }, 350);

    });


    // =========================================
    // إغلاق عند الضغط خارج الصندوق
    // =========================================

    $("#bookingOverlay").click(function (e) {

        if (e.target === this) {

            $("#bookingOverlay").removeClass("show");

            setTimeout(function () {
                $("#bookingOverlay").fadeOut(250);
            }, 350);

        }

    });


    // =========================================
    // تأكيد الحجز
    // =========================================

    $("#bookingForm").submit(function (e) {

        e.preventDefault();

        $("#bookingForm").fadeOut(300, function () {

            $("#bookingSuccess").fadeIn(500);

        });

    });
    // ==============================
// البحث
// ==============================

$("#searchIcon").click(function(){

    $("#searchBox").fadeToggle(300);

    $("#searchInput").focus();

});

});