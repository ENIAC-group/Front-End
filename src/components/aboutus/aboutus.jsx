import React from 'react';

const AboutUsPage = () => {
    return (
        <body className='aboutusbody'>
        <div class='backgroundaboutus'>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>

            <h1 className='headeraboutus'>درباره ما
                <i class="material-icons icons">diversity_1</i></h1>
            <br />
            <p className='paragsize'>"مرکز روانشناسی و مشاوره خانواده"
            <br />
            .این مرکز فعالیت خود را با هدف ارائه خدمات روانشناسی و روانپزشکی توسط متخصصان و روانپزشکان مجرب و حاذق آغاز کرده است. این مرکز با داشتن فضایی مناسب، خدماتی تخصصی نظیر روان درمانی فردی، درمان مشکلات زوج و خانواده، مشاوره انلاین، روانپزشکی سالمندان، کودکان و نوجوانان را ارائه می دهد
            <br />
            :بخش‌های مختلف این مرکز، شامل</p>
            <table className="tableaboutus" align='center'>
                <tr>
                    <th><button class="button1 button2">گروه روان پزشکان و پزشکان سلامت</button></th>
                    <th><button class="button1 button2 button3">گروه زوج درمانگران</button></th>
                    <th><button class="button1 button2">گروه روان درمانگران فردی</button></th>
                    <th><button class="button1 button2">گروه مشاوره کودک</button></th>
                </tr>
                <tr>
                    <th><button class="button1 button2 button4">واحد روان سنجی و پژوهش</button></th>
                    <th><button class="button1 button2">گروه مشاورین تحصیلی و شغلی</button></th>
                    <th><button class="button1 button2">گروه مشاورین پیش از ازدواج</button></th>
                    <th><button class="button1 button2">گروه مشاوره نوجوان</button></th>
                </tr>
            </table>
            <br />
            <div align='center'>
                <a target="_blank">
                    <img src="https://www.uab.edu/news/images/2018/CC_10.2.jpg" className='imagespace imageclinic' alt="Cinque Terre" width="300" height="200" />
                    
                    <img src="https://www.uab.edu/news/images/2018/CC_10.3.jpg" class='imageclinic' alt="Cinque Terre" width="300" height="200" />
                </a>
                <div>تصاویری از محیط کلینیک</div>
            </div>

            <br></br>
            <p className='paragend'>🌱.منتظر حضور سبزتان هستیم</p>

            <a href="https://github.com/ENIAC-group">
                <div><img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo-768x432.png" class="imagegit"></img></div>
            </a>
        </div >
        </body>
    );
};

export default AboutUsPage;