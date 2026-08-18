$(document).ready(function () {

    // =====================================================
    // فتح نافذة الحجز
    // =====================================================

    $("#bookingBtn").on("click", function (e) {

        e.preventDefault();

        console.log("زر الحجز اشتغل");


        $("#bookingOverlay")
            .stop(true, true)
            .fadeIn(300);


        setTimeout(function () {

            $("#bookingOverlay")
                .addClass("show");

        }, 50);

    });


    // =====================================================
    // إغلاق نافذة الحجز
    // =====================================================

    $("#closeBooking").on("click", function () {

        closeBooking();

    });


    // =====================================================
    // إغلاق عند الضغط على الخلفية
    // =====================================================

    $("#bookingOverlay").on("click", function (e) {

        if (e.target === this) {

            closeBooking();

        }

    });


    // =====================================================
    // دالة إغلاق النافذة
    // =====================================================

    function closeBooking() {

        $("#bookingOverlay")
            .removeClass("show");


        setTimeout(function () {

            $("#bookingOverlay")
                .fadeOut(300);

        }, 400);

    }


    // =====================================================
    // تأكيد الحجز
    // =====================================================

    $("#bookingForm").on("submit", function (e) {

        e.preventDefault();


        // إخفاء الفورم
        $("#bookingForm")
            .fadeOut(300, function () {

                // إظهار رسالة النجاح
                $("#bookingSuccess")
                    .fadeIn(500);

            });

    });
// ==============================
// المستخدم / تسجيل الدخول
// ==============================

$("#userIcon").click(function(){

    $("#loginOverlay").fadeIn(300);

});

$("#closeLogin").click(function(){

    $("#loginOverlay").fadeOut(300);

});

$("#loginOverlay").click(function(e){

    if(e.target === this){

        $("#loginOverlay").fadeOut(300);

    }

});

$("#loginForm").submit(function(e){

    e.preventDefault();

    alert("تم تسجيل الدخول بنجاح ✅");

});

});