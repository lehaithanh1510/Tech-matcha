component = {

}
component.mainPage = `
<!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">Tech Matcha</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto my-2 my-lg-0">
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#quizstudy">Quiz hỏi và thi</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#orientation">Hướng nghiệp</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#services">Tin tuyển dụng</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#technews">Tin công nghệ</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">Liên hệ</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <!-- Presentation-->
    <header class="masthead">
        <div class="container h-100">
            <div class="row h-100 align-items-center justify-content-center text-center">
                <div class="col-lg-10 align-self-end">
                    <h1 class="text-uppercase text-white font-weight-bold">Tìm hiểu về ngành công nghệ thông tin</h1>
                    <hr class="divider my-4" />
                </div>
                <div class="col-lg-8 align-self-baseline">
                    
                    <!-- <p class="text-white-75 font-weight-light mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p> -->
                    <a class="btn btn-primary btn-xl js-scroll-trigger" href="#quizstudy">Tìm hiểu thêm </a>
                </div>
            </div>
        </div>
    </header>
    <!-- Quiz study-->
    <section class="page-section bg-primary" id="quizstudy">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                    <h2 class="text-white mt-0">Quiz hỏi và thi</h2>
                    <hr class="divider light my-4" />
                    <p class="text-white-50 mb-4">Hãy cùng xem bạn có thực sự phù hợp để theo đuổi ngành công nghệ thông tin </p>
                    <button class="btn btn-light btn-xl js-scroll-trigger" id ="start_quiz_orientation_question">Bắt đầu làm quiz!</button>
                    </div>
            </div>
        </div>
    </section>
    <!-- Recuitment-->
    <section class="page-section" id="services">
        <div class="container">
            <h2 class="text-center mt-0">Thông tin tuyển dụng</h2>
            <hr class="divider my-4" />
            <div class="row">
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="mt-5">
                        <div class = "article-pic-1 article-pic"> </div>
                        <h3 class="h4 mb-2">[VIETTEL GROUP] TUYỂN DỤNG KỸ SƯ CÔNG NGHỆ THÔNG TIN THÁNG 12</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="mt-5">
                        <div class = "article-pic-2 article-pic"> </div>
                        <h3 class="h4 mb-2">[FPT TELECOM] TUYỂN PYTHON DEVELOPER</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="mt-5">
                        <div class = "article-pic-3 article-pic"> </div>
                        <h3 class="h4 mb-2">[GAMELOFT HÀ NỘI] TUYỂN LẬP TRÌNH C++ VÀ THỰC TẬP C++</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="mt-5">
                        <div class = "article-pic-4 article-pic"> </div>
                        <h3 class="h4 mb-2">[DAC TUYỂN DỤNG] DATA ENGINEER, JAVA DEVELOPER NĂM 2020</h3>
                    </div>
                </div>
                <button class="btn btn-xl viewmore viewmore-job ">Xem Thêm</button>
            </div>
        </div>
    </section>
    <!-- Orientation-->
    <section class="page-section bg-dark text-white" id="orientation">
        <div class="container text-center">
            <h2 class="mb-4">Hướng nghiệp!</h2>
            <p class="text-white-50 mb-4">Cùng Tech Matcha khám phá ngôi trường Đại học phù hợp với bản thân bạn</p>
            <button class="btn btn-light btn-xl" id ="start_quiz_school_question" >Bắt đầu làm quiz!</button>
        </div>
    </section>
    <!-- Tech New-->
    <section class="page-section" id="technews">
        <div class="container">
            <h2 class="text-center mt-0">Thông tin công nghệ</h2>
            <hr class="divider my-4" />
            <div class="row">
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="mt-5">
                        <div class = "article2-pic-1 article-pic"> </div>
                        <h3 class="h4 mb-2">XIAOMI MUỐN 'ĐẬP CHẾT ĂN THỊT' MỘI ĐỐI THỦ TẠI TRUNG QUỐC</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="mt-5">
                        <div class = "article2-pic-2 article-pic">  </div>
                        <h3 class="h4 mb-2">HUAWEI CÓ THỂ MƠ ĐÁNH BẠI SAMSUNG MỘT LẦN NỮA </h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="mt-5">
                        <div class = "article2-pic-3 article-pic"> </div>
                        <h3 class="h4 mb-2">SAU IPHONE 12, CÁC MẪU IPHONE ĐỜI CŨ SẼ BỊ APPLE LOẠI BỎ CỦ SẠC VÀ TAI NGHE</h3>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 text-center">
                    <div class="mt-5">
                        <div class = "article2-pic-4 article-pic"> </div>
                        <h3 class="h4 mb-2">SIÊU NHÀ MÁY TESLA Ở ĐỨC BỊ CẮT NƯỚC DO QUÊN THANH TOÁN HÓA ĐƠN</h3>
                    </div>
                </div>
                <button class="btn btn-xl viewmore viewmore-tech-news">Xem Thêm</button>

            </div>
        </div>
    </section>
    <!-- Contact-->
    <section class="page-section" id="contact">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                    <h2 class="mt-0">Liên hệ</h2>
                    <hr class="divider my-4" />
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                    <i class="fas fa-phone fa-3x mb-3 text-muted"></i>
                    <div>0981497748 (Mr.Thành)</div>
                </div>
                <div class="col-lg-4 mr-auto text-center">
                    <i class="fas fa-envelope fa-3x mb-3 text-muted"></i>
                    <a class="d-block" href="mailto:contact@yourwebsite.com">matchatech@gmail.com</a>
                </div>
            </div>
        </div>
    </section>    `
component.quizOrientationPage = `
<div class="quiz">
<div class="notice_results">
    <div class="content_results"></div>
    <div class="navigation">
            <button id="go-to-main-page"> Tech Matcha </button>
            <button id="go-to-school-quiz"> Quiz tiếp theo </button>
    </div>
</div>
<div class="heading_quiz">
    Quiz học và thi
</div>
<form id="quiz_form">
    <div class="main_quiz">
    </div>
    <button class="submit-quiz">Submit</button>
</form>
</div>
`
component.quizSchoolPage = `
    <div class="quiz">
    <div class="notice_results">
    <div class="content_results"></div>
    <div class="navigation">
            <button id="go-to-main-page"> Tech Matcha </button>
    </div>
</div>
        <div class="heading_quiz">
            Quiz chọn trường
        </div>
        <form id="quiz_form">
            <div class="main_quiz">
            </div>
            <button class="submit-quiz">Submit</button>
        </form>
    </div>
`
component.newspaperPage = `
<div class="newspaper"><h1>COMING SOON ...</h1></div>

`