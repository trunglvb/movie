var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

const header = $('.header')
window.onscroll = function () {
    header.classList.toggle('black', window.scrollY > 0)
}

const navBtn = $('.navbar_btn')
const navOverlay = $('.navbar_overlay')
const navBlock = $('.navbar_block')
const navClose = $('.navbar_close')
const navTitles = $$('.navbar_menu-item-title')

navBtn.onclick = () => {
    navOverlay.style.display = 'block'
    navBlock.classList.add('active')

    navClose.onclick = () => {
        navOverlay.style.display = 'none'
        navBlock.classList.remove('active')
    }
    navOverlay.onclick = () => {
        navOverlay.style.display = 'none'
        navBlock.classList.remove('active')
    }
}

navTitles.forEach((navTitle) => {
    navTitle.onclick = function () {
        this.classList.toggle('active')
    }
})

const tabs = $$('.header_tab-item');
const panes = $$('.header_tab-pane');
const tabActive = $('.header_tab-item.active');
const tabLine  = $('.header_line');

tabLine.style.left = tabActive.offsetLeft + 'px';
tabLine.style.width= tabActive.offsetWidth + 'px';
tabs.forEach((tab, index) => {
    const pane = panes[index];
    tab.onclick = function() {
        search.classList.remove('active')
        $('.header_tab-item.active').classList.remove('active')
        $('.header_tab-pane.active').classList.remove('active')
        tabLine.style.width = this.offsetWidth + 'px'
        tabLine.style.left = this.offsetLeft + 'px'
        this.classList.add('active')
        pane.classList.add('active')
    }
})

const search = $('.header_search')
const search_input = $('.header_search-input')

search_input.onclick=() => {
    search.classList.add('active')
}
$('.header_search-overlay').onclick = function() {
    search.classList.remove('active')
}

// Billboard
const billboardVideoWrap = $('.billboard_backdrop-video')
const billboardVideo = $('.billboard_backdrop-video > video')
const billboardControl = $('.billboard_content-control-btn')

function billboardVideoPlay() {
    billboardVideoWrap.style.display = 'block'
    billboardControl.onclick = function () {
        if($('.billboard_content-control-btn > i.mute.active')) {
            billboardVideo.muted = '';
            $('.billboard_content-control-btn > i.mute.active').classList.remove('active');
            $('.billboard_content-control-btn > i.unmute').classList.add('active');
        } 
        else if($('.billboard_content-control-btn > i.unmute.active')) {
            billboardVideo.muted = 'muted'
            $('.billboard_content-control-btn > i.unmute.active').classList.remove('active');
            $('.billboard_content-control-btn > i.mute').classList.add('active');
        }
    }
}

billboardVideo.onplay = billboardVideoPlay()

billboardVideo.onended = function billboardVideoEnded() {
    billboardVideoWrap.style.display = 'none'
    if($('.billboard_content-control-btn > i.mute.active')) {
        $('.billboard_content-control-btn > i.mute.active').classList.remove('active');
    }
    if($('.billboard_content-control-btn > i.unmute.active')) {
        $('.billboard_content-control-btn > i.unmute.active').classList.remove('active');
    }
    $('.billboard_content-control-btn > i.reload').classList.add('active')
    if($('.billboard_content-control-btn > i.reload.active')) {
        billboardControl.onclick = function() {
            $('.billboard_content-control-btn > i.reload.active').classList.remove('active')
            $('.billboard_content-control-btn > i.unmute').classList.add('active');
            billboardVideo.play()
            billboardVideo.muted = '';
            billboardVideoPlay()
        }
    }
}
const movieList = [
    {
        id: '1',
        name: 'C??c t??? b??o c???a Yumi',
        category: 'Th???n t?????ng, Th??nh th???, T??nh y??u',
        update: '12',
        imgMin: './assets/img/carousel-img1.webp',
        imgMax: './assets/img/carousel-img1-large.webp',
        video: './assets/img/Teaser_SuMenhCuoiCungCuaThienThan_chuanmoi.mp4'
    },
    {
        id: '2',
        name: 'Huynh ????? Th??n M???n C???a Ta',
        category: 'T??nh y??u, C??? trang, Vi???n t?????ng',
        update: '35',
        imgMin: './assets/img/carousel-img2.webp',
        imgMax: './assets/img/carousel-img2-large.webp',
        video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
    },
    {
        id: '3',
        name: 'B?? ???n N??i Jiri (Jirisan)',
        category: 'Gi???t g??n, Vi???n t?????ng',
        update: 'C???p nh???t 4',
        imgMin: './assets/img/carousel-img3.webp',
        imgMax: './assets/img/carousel-img3-large.webp',
        video: './assets/img/Teaser_Mouse_chuanmoi.mp4'
    },
    {
        id: '4',
        name: 'B??c S?? X??? L???',
        category: 'T??nh y??u, Chi???n tranh',
        update: '20',
        imgMin: './assets/img/carousel-img4.webp',
        imgMax: './assets/img/carousel-img4-large.webp',
        video: './assets/img/Teaser_KhiEmDepNhat_moi.mp4'
    },
    {
        id: '5',
        name: 'Tr?????ng An Nh?? C???',
        category: 'T??nh y??u, C??? trang',
        update: '24',
        imgMin: './assets/img/carousel-img5.webp',
        imgMax: './assets/img/carousel-img5-large.webp',
        video: './assets/img/Teaser_HotelDelLuna_2_moi.mp4'
    },
    {
        id: '6',
        name: '?????i T??c ????ng Ng???',
        category: 'T???i ph???m, Phim h??i',
        update: '20',
        imgMin: './assets/img/carousel-img6.webp',
        imgMax: './assets/img/carousel-img6-large.webp',
        video: './assets/img/Teaser_Penthouse3_ep14.mp4'
    },
    {
        id: '7',
        name: 'SupermodelMe Revolution (T??i L?? Si??u M???u Ch??u ?? 2021)',
        category: 'Show',
        update: 'C???p nh???t 4',
        imgMin: './assets/img/carousel-img7.webp',
        imgMax: './assets/img/carousel-img7-large.webp',
        video: './assets/img/Teaser_DanhVong.mp4'
    },
    {
        id: '8',
        name: 'M?? G???p S?? T???',
        category: 'Th??nh th???, T??nh y??u',
        update: '30',
        imgMin: './assets/img/carousel-img8.webp',
        imgMax: './assets/img/carousel-img8-large.webp',
        video: './assets/img/Teaser_SuMenhCuoiCungCuaThienThan_chuanmoi.mp4'
    },
    {
        id: '9',
        name: 'B???ng X???p H???ng Qu???c V????ng',
        category: 'Ho???t h??nh',
        update: 'C???p nh???t 4',
        imgMin: './assets/img/carousel-img9.webp',
        imgMax: './assets/img/carousel-img9-large.webp',
        video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
    },
    {
        id: '10',
        name: 'Boruto: Naruto h???u sinh kh??? ??y',
        category: 'Thanh xu??n, T??nh y??u, C??? trang',
        update: 'C???p nh???t 222',
        imgMin: './assets/img/carousel-img10.webp',
        imgMax: './assets/img/carousel-img10-large.webp',
        video: './assets/img/Teaser_Mouse_chuanmoi.mp4'
    },
    {
        id: '11',
        name: 'Xu??n Thu Phong Th???n',
        category: 'Ho???t h??nh',
        update: 'C???p nh???t 21',
        imgMin: './assets/img/carousel-img11.webp',
        imgMax: './assets/img/carousel-img11-large.webp',
        video: './assets/img/Teaser_KhiEmDepNhat_moi.mp4'
    },
    {
        id: '12',
        name: 'Tr?????ng Qu??n ?????i Li???t H???a ( H???c Vi???n Qu??n S??? Li???t H???a )',
        category: 'Thanh xu??n, T??nh y??u',
        update: '48',
        imgMin: './assets/img/carousel-img12.webp',
        imgMax: './assets/img/carousel-img12-large.webp',
        video: './assets/img/Teaser_HotelDelLuna_2_moi.mp4'
    },
    {
        id: '13',
        name: 'Thanh G????m Di???t Qu?????B???n ??i???n ???nh',
        category: '',
        update: '1',
        imgMin: './assets/img/carousel-img13.webp',
        imgMax: './assets/img/carousel-img13-large.webp',
        video: './assets/img/Teaser_Penthouse3_ep14.mp4'
    },
    {
        id: '14',
        name: 'Mouse K??? S??n Ng?????i',
        category: 'T???i ph???m, H??nh ?????ng',
        update: '20',
        imgMin: './assets/img/carousel-img14.webp',
        imgMax: './assets/img/carousel-img14-large.webp',
        video: './assets/img/Teaser_DanhVong.mp4'
    },
    {
        id: '15',
        name: 'One Piece (?????o H???i T???c)',
        category: 'Ho???t h??nh',
        update: '997',
        imgMin: './assets/img/carousel-img15.webp',
        imgMax: './assets/img/carousel-img15-large.webp',
        video: './assets/img/Teaser_SuMenhCuoiCungCuaThienThan_chuanmoi.mp4'
    },
    {
        id: '16',
        name: 'H???c Qu???n Gia - Ph???n 1',
        category: 'Ho???t h??nh',
        update: '25',
        imgMin: './assets/img/carousel-img16.webp',
        imgMax: './assets/img/carousel-img16-large.webp',
        video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
    },
    {
        id: '17',
        name: 'B???y Vi??n Ng???c R???ng Si??u C???p',
        category: 'Ho???t h??nh',
        update: '131',
        imgMin: './assets/img/carousel-img17.webp',
        imgMax: './assets/img/carousel-img17-large.webp',
        video: './assets/img/Teaser_Mouse_chuanmoi.mp4'
    },
    {
        id: '18',
        name: 'Th???i Gian L????ng Th???n M??? C???nh',
        category: 'Th???n t?????ng, Th??nh th???, T??nh y??u',
        update: '31',
        imgMin: './assets/img/carousel-img18.webp',
        imgMax: './assets/img/carousel-img18-large.webp',
        video: './assets/img/Teaser_KhiEmDepNhat_moi.mp4'
    },
    {
        id: '19',
        name: 'Thanh G????m Di???t Qu???: Chuy???n T??u V?? T???n (B???n TV)',
        category: 'Ho???t h??nh',
        update: 'C???p nh???t 3',
        imgMin: './assets/img/carousel-img19.webp',
        imgMax: './assets/img/carousel-img19-large.webp',
        video: './assets/img/Teaser_HotelDelLuna_2_moi.mp4'
    },
    {
        id: '20',
        name: 'B???n Trai T??i L?? H??? Ly ( C???u V?? H??? Truy???n )',
        category: 'Th???n t?????ng, Th??nh th???, T??nh y??u',
        update: '16',
        imgMin: './assets/img/carousel-img20.webp',
        imgMax: './assets/img/carousel-img20-large.webp',
        video: './assets/img/Teaser_Penthouse3_ep14.mp4'
    },
    {
        id: '21',
        name: 'C???m Y Chi H???',
        category: 'T??nh y??u, Vi???n t?????ng',
        update: '55',
        imgMin: './assets/img/carousel-img21.webp',
        imgMax: './assets/img/carousel-img21-large.webp',
        video: './assets/img/Teaser_DanhVong.mp4'
    },
    {
        id: '22',
        name: 'C???m T??m T???a Ng???c',
        category: 'T??nh y??u, C??? trang',
        update: '45',
        imgMin: './assets/img/carousel-img22.webp',
        imgMax: './assets/img/carousel-img22-large.webp',
        video: './assets/img/Teaser_SuMenhCuoiCungCuaThienThan_chuanmoi.mp4'
    },
    {
        id: '23',
        name: 'Thanh Xu??n C?? B???n M??a 2',
        category: 'Show',
        update: '24',
        imgMin: './assets/img/carousel-img23.webp',
        imgMax: './assets/img/carousel-img23-large.webp',
        video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
    },
    {
        id: '24',
        name: 'Ngh???ch Thi??n Ki???m Th???n',
        category: '????????????',
        update: '78',
        imgMin: './assets/img/carousel-img24.webp',
        imgMax: './assets/img/carousel-img24-large.webp',
        video: './assets/img/Teaser_Mouse_chuanmoi.mp4'
    },
    {
        id: '25',
        name: 'H??a Ra Em R???t Y??u Anh',
        category: 'Thanh xu??n, Th??nh th???, T??nh y??u',
        update: '24',
        imgMin: './assets/img/carousel-img25.webp',
        imgMax: './assets/img/carousel-img25-large.webp',
        video: './assets/img/Teaser_KhiEmDepNhat_moi.mp4'
    },
    {
        id: '26',
        name: 'JUJUTSU KAISEN',
        category: 'Ho???t h??nh',
        update: '24',
        imgMin: './assets/img/carousel-img26.webp',
        imgMax: './assets/img/carousel-img26-large.webp',
        video: './assets/img/Teaser_HotelDelLuna_2_moi.mp4'
    },
    {
        id: '27',
        name: 'Nh?? ?? Ph????ng Phi',
        category: 'Thanh xu??n, T??nh y??u, C??? trang',
        update: '44',
        imgMin: './assets/img/carousel-img27.webp',
        imgMax: './assets/img/carousel-img27-large.webp',
        video: './assets/img/Teaser_Penthouse3_ep14.mp4'
    },
    {
        id: '28',
        name: 'Chi???n C?? C???nh Gi???i',
        category: 'Ho???t h??nh',
        update: 'C???p nh???t 5',
        imgMin: './assets/img/carousel-img28.webp',
        imgMax: './assets/img/carousel-img28-large.webp',
        video: './assets/img/Teaser_DanhVong.mp4'
    },
    {
        id: '29',
        name: 'Th???y Th??? M???t Tr??ng Pha L??',
        category: 'Ho???t h??nh',
        update: '39',
        imgMin: './assets/img/carousel-img29.webp',
        imgMax: './assets/img/carousel-img29-large.webp',
        video: './assets/img/Teaser_SuMenhCuoiCungCuaThienThan_chuanmoi.mp4'
    },
    {
        id: '30',
        name: 'V?? Em Ti??n T??n ??i ??? R???',
        category: '????????????',
        update: 'C???p nh???t 71',
        imgMin: './assets/img/carousel-img30.webp',
        imgMax: './assets/img/carousel-img30-large.webp',
        video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
    },
    {
        id: '31',
        name: 'Thi??n V?? K???',
        category: 'Th???n t?????ng, Th??nh th???, T??nh y??u',
        update: '12',
        imgMin: './assets/img/carousel-img31.webp',
        imgMax: './assets/img/carousel-img31-large.webp',
        video: './assets/img/Teaser_Mouse_chuanmoi.mp4'
    },
    {
        id: '32',
        name: '??? R???',
        category: 'T??nh y??u, C??? trang, Vi???n t?????ng',
        update: '35',
        imgMin: './assets/img/carousel-img32.webp',
        imgMax: './assets/img/carousel-img32-large.webp',
        video: './assets/img/Teaser_KhiEmDepNhat_moi.mp4'
    },
    {
        id: '33',
        name: 'B???n C??ng Ph??ng C???a T??i L?? Gumiho',
        category: 'Gi???t g??n, Vi???n t?????ng',
        update: 'C???p nh???t 4',
        imgMin: './assets/img/carousel-img33.webp',
        imgMax: './assets/img/carousel-img33-large.webp',
        video: './assets/img/Teaser_HotelDelLuna_2_moi.mp4'
    },
    {
        id: '34',
        name: 'C???a H??ng Ti???n L???i Saet Byul',
        category: 'T??nh y??u, Chi???n tranh',
        update: '20',
        imgMin: './assets/img/carousel-img34.webp',
        imgMax: './assets/img/carousel-img34-large.webp',
        video: './assets/img/Teaser_Penthouse3_ep14.mp4'
    },
    {
        id: '35',
        name: 'Khuynh Th??? C???m L??n C???c V?? Lai',
        category: 'T??nh y??u, C??? trang',
        update: '24',
        imgMin: './assets/img/carousel-img35.webp',
        imgMax: './assets/img/carousel-img35-large.webp',
        video: './assets/img/Teaser_DanhVong.mp4'
    },
    {
        id: '36',
        name: 'L??m Tr??i Tim Em M???m C?????i',
        category: 'T???i ph???m, Phim h??i',
        update: '20',
        imgMin: './assets/img/carousel-img36.webp',
        imgMax: './assets/img/carousel-img36-large.webp',
        video: './assets/img/Teaser_SuMenhCuoiCungCuaThienThan_chuanmoi.mp4'
    },
    {
        id: '37',
        name: 'Chuy???n T??u Sinh T???',
        category: 'Thanh xu??n, T??nh y??u, C??? trang',
        update: '1',
        imgMin: './assets/img/carousel-img37.webp',
        imgMax: './assets/img/carousel-img37-large.webp',
        video: './assets/img/Teaser_HuongMatTuaKhoiSuong.mp4'
    },
    {
        id: '38',
        name: 'Truy???n Thuy???t V??? ??c Nh??n',
        category: 'Th??nh th???, T??nh y??u',
        update: '30',
        imgMin: './assets/img/carousel-img38.webp',
        imgMax: './assets/img/carousel-img38-large.webp',
        video: './assets/img/Teaser_Mouse_chuanmoi.mp4'
    },
    {
        id: '39',
        name: '??c Qu??? ?????i ?????u',
        category: 'Th???n t?????ng, Th??nh th???, T??nh y??u',
        update: '16',
        imgMin: './assets/img/carousel-img39.webp',
        imgMax: './assets/img/carousel-img39-large.webp',
        video: './assets/img/Teaser_KhiEmDepNhat_moi.mp4'
    },
    {
        id: '40',
        name: 'S??? Gi??? C???a Ch??a',
        category: 'Thanh xu??n, Th??nh th???, T??nh y??u',
        update: '24',
        imgMin: './assets/img/carousel-img40.webp',
        imgMax: './assets/img/carousel-img40-large.webp',
        video: './assets/img/Teaser_HotelDelLuna_2_moi.mp4'
    },
    {
        id: '41',
        name: 'Nhi???m V??? Kh??? Thi',
        category: 'T??nh y??u, Chi???n tranh',
        update: '20',
        imgMin: './assets/img/carousel-img41.webp',
        imgMax: './assets/img/carousel-img41-large.webp',
        video: './assets/img/Teaser_Penthouse3_ep14.mp4'
    },
    {
        id: '42',
        name: 'Nh??n ????i T??nh Y??u',
        category: 'T??nh y??u, C??? trang',
        update: '24',
        imgMin: './assets/img/carousel-img42.webp',
        imgMax: './assets/img/carousel-img42-large.webp',
        video: './assets/img/Teaser_DanhVong.mp4'
    }
]

// options la mot object

function sliderStyle1 ( options ){
    const carouselMove = $(options.carouselMoveSelector)
    const carouselWidth = $(options.carouselSelector).offsetWidth;
    const prevBtn = $(options.prevBtnSelector)
    const nextBtn = $(options.nextBtnSelector)
    prevBtn.style.display = 'none';

    function render() {
        const htmls = options.movies.map((movie, index) => {
            return `
            <div id="${movie.id}" class="carousel_item col l-2-4 m-3 c-4">
                <div class="carousel_item-images">
                    <div class="carousel_img-min">
                        <img src="${movie.imgMin}" alt="">
                        <div class="carousel_img-min-overlay carousel_img-overlay">
                            <span>${movie.update} t???p</span>
                        </div>
                    </div>
                </div>
                <div class="carousel_item-title">
                    <p>${movie.name}</p>
                </div>
            </div>
            `
        })
        carouselMove.innerHTML = htmls.join('')
    }
    render();
    const carouselItems = $$(options.carouselItemsSelector)
    const carouselMoveQuantity = Math.round(carouselItems.length/(carouselMove.getBoundingClientRect().width / carouselItems[0].getBoundingClientRect().width))
    var l = 0;

    nextBtn.onclick = () => {
        prevBtn.style.display = 'block'
        l++;
        if(l < carouselMoveQuantity) {
            carouselMove.style.transform = `translateX(calc(0px - ${carouselWidth}px * ${l}))`
            if(l == carouselMoveQuantity - 1) {
                nextBtn.style.display = 'none';
            }
        } else {
            l = carouselMoveQuantity - 1;
            nextBtn.style.display = 'none';
        }
    }

    prevBtn.onclick = () => {
        nextBtn.style.display = 'block'
        l--;
        if(l>=0) {
            carouselMove.style.transform = `translateX(calc(0px - ${carouselWidth}px * ${l}))`
            if(l==0) {
                prevBtn.style.display = 'none'
            }
        } else {
            l=0
            prevBtn.style.display = 'none'
        }
    }
}
sliderStyle1({
    movies: [
        movieList[0],
        movieList[1],
        movieList[2],
        movieList[3],
        movieList[4],
        movieList[5],
        movieList[1],
        movieList[7],
        movieList[2],
        movieList[9],
        movieList[10],
        movieList[11],
        movieList[12],
        movieList[13],
        movieList[14],
        movieList[15],
        movieList[16],
        movieList[17],
        movieList[18],
        movieList[19],
        movieList[20],
        movieList[21],
        movieList[22],
        movieList[23],
        movieList[24],
        movieList[25],
        movieList[26],
        movieList[27],
        movieList[28],
    ],
    carouselSelector : '#carousel-1',
    carouselMoveSelector : '#carousel-1 .carousel-move',
    prevBtnSelector : '#carousel-1 .carousel_btn-prev',
    nextBtnSelector : '#carousel-1 .carousel_btn-next',
    carouselItemsSelector: '#carousel-1 .carousel_item'
})
sliderStyle1({
    movies: [
        movieList[7],
        movieList[11],
        movieList[17],
        movieList[20],
        movieList[13],
        movieList[21],
        movieList[1],  
        movieList[0],
        movieList[2],
        movieList[3],
        movieList[4],
        movieList[5],
        movieList[6],
        movieList[8],
        movieList[9],
        movieList[10],
        movieList[12],
        movieList[14],
        movieList[15],
        movieList[16],
        movieList[18],
        movieList[19],
        movieList[22],
        movieList[23],
        movieList[24],
        movieList[25],
        movieList[26],
        movieList[27],
        movieList[28],
        movieList[29]
    ],
    carouselSelector : '#carousel-2',
    carouselMoveSelector : '#carousel-2 .carousel-move',
    prevBtnSelector : '#carousel-2 .carousel_btn-prev',
    nextBtnSelector : '#carousel-2 .carousel_btn-next',
    carouselItemsSelector: '#carousel-2 .carousel_item'
})
sliderStyle1({
    movies: [   
        movieList[30],
        movieList[31],
        movieList[32],
        movieList[33],
        movieList[34],
        movieList[35],
        movieList[19],  
        movieList[20],
        movieList[21],
        movieList[22],
        movieList[9],
        movieList[10],
        movieList[11],
        movieList[12],
        movieList[13],
        movieList[14],
        movieList[6],
        movieList[7],
        movieList[8],
        movieList[15],
        movieList[16],
        movieList[17],
        movieList[18],
        movieList[23],
        movieList[24],
        movieList[25],
        movieList[26],
        movieList[27],
        movieList[28],
        movieList[29]
    ],
    carouselSelector : '#carousel-4',
    carouselMoveSelector : '#carousel-4 .carousel-move',
    prevBtnSelector : '#carousel-4 .carousel_btn-prev',
    nextBtnSelector : '#carousel-4 .carousel_btn-next',
    carouselItemsSelector: '#carousel-4 .carousel_item'
})
sliderStyle1({
    movies: [ 
        movieList[8],
        movieList[10],
        movieList[14],
        movieList[15],
        movieList[16],
        movieList[18],
        movieList[12],  
        movieList[23],
        movieList[25],
        movieList[27],
        movieList[28],
        movieList[29]
    ],
    carouselSelector : '#carousel-6',
    carouselMoveSelector : '#carousel-6 .carousel-move',
    prevBtnSelector : '#carousel-6 .carousel_btn-prev',
    nextBtnSelector : '#carousel-6 .carousel_btn-next',
    carouselItemsSelector: '#carousel-6 .carousel_item'
})

sliderStyle1({
    movies: [
        movieList[26],
        movieList[7],
        movieList[19],
        movieList[24],
        movieList[33],
        movieList[4],
        movieList[11],  
        movieList[17],
        movieList[20],
        movieList[13],
        movieList[21],
        movieList[1],
        movieList[0],
        movieList[2],
        movieList[3],
        movieList[5],
        movieList[6],
        movieList[22]
    ],
    carouselSelector : '#carousel-7',
    carouselMoveSelector : '#carousel-7 .carousel-move',
    prevBtnSelector : '#carousel-7 .carousel_btn-prev',
    nextBtnSelector : '#carousel-7 .carousel_btn-next',
    carouselItemsSelector: '#carousel-7 .carousel_item'
})

sliderStyle1({
    movies: [
        movieList[36],
        movieList[37],
        movieList[38],
        movieList[39],
        movieList[40],
        movieList[41],
        movieList[11],  
        movieList[17],
        movieList[20],
        movieList[13],
        movieList[21],
        movieList[1],
        movieList[0],
        movieList[2],
        movieList[3],
        movieList[5]
    ],
    carouselSelector : '#carousel-8',
    carouselMoveSelector : '#carousel-8 .carousel-move',
    prevBtnSelector : '#carousel-8 .carousel_btn-prev',
    nextBtnSelector : '#carousel-8 .carousel_btn-next',
    carouselItemsSelector: '#carousel-8 .carousel_item'
})

sliderStyle1({
    movies: [   
        movieList[11],
        movieList[32],
        movieList[30],
        movieList[35],
        movieList[19],  
        movieList[20],
        movieList[33],
        movieList[22],
        movieList[9],
        movieList[34],
        movieList[10],
        movieList[12],
        movieList[13],
        movieList[21],
        movieList[14],
        movieList[6],
        movieList[31], 
        movieList[7],
        movieList[15],
        movieList[8],
        movieList[16],
        movieList[17],
        movieList[18],
        movieList[23],
        movieList[24],
        movieList[25],
        movieList[26],
        movieList[27],
        movieList[28],
        movieList[29]
    ],
    carouselSelector : '#carousel-9',
    carouselMoveSelector : '#carousel-9 .carousel-move',
    prevBtnSelector : '#carousel-9 .carousel_btn-prev',
    nextBtnSelector : '#carousel-9 .carousel_btn-next',
    carouselItemsSelector: '#carousel-9 .carousel_item'
})


const rankList = [   
    {
        name: 'B?? M???t N??i G??c T???i',
        update: '24',
        img: './assets/img/rank-img1.jpg',
        rank: './assets/img/rank-number1.png'
    },
    {
        name: 'One Piece (?????o H???i T???c)',
        update: '997',
        img: './assets/img/rank-img2.jpg',
        rank: './assets/img/rank-number2.png'
    },
    {
        name: 'H??? Ti??n Sinh L??u Luy???n Kh??ng Qu??n (N???i V????ng V???n C???a H??? Ti??n Sinh)',
        update: '24',
        img: './assets/img/rank-img3.jpg',
        rank: './assets/img/rank-number3.png'
    },
    {
        name: 'B???n G??i L???u D?????i Xin H??y K?? Nh???n',
        update: '36',
        img: './assets/img/rank-img4.jpg',
        rank: './assets/img/rank-number4.png'
    },
    {
        name: '???Thuy???t minh???M???t ?????i M???t Ki???p (Nh???t Sinh Nh???t Th???)',
        update: '24',
        img: './assets/img/rank-img5.jpg',
        rank: './assets/img/rank-number5.png'
    },
    {
        name: 'Tr?????ng An nh?? c???',
        update: '24',
        img: './assets/img/rank-img6.jpg',
        rank: './assets/img/rank-number6.png'
    },
    {
        name: 'B??c s?? x??? l???',
        update: '24',
        img: './assets/img/rank-img7.jpg',
        rank: './assets/img/rank-number7.png'
    },
    {
        name: 'N???a L?? ???????ng M???t N???a L?? ??au Th????ng',
        update: '24',
        img: './assets/img/rank-img8.jpg',
        rank: './assets/img/rank-number8.png'
    },
    {
        name: '?????i t??c ????ng ng???',
        update: '24',
        img: './assets/img/rank-img9.jpg',
        rank: './assets/img/rank-number9.png'
    },
    {
        name: 'H???c vi???n qu??n s??? Li???t H???a',
        update: '24',
        img: './assets/img/rank-img10.jpg',
        rank: './assets/img/rank-number10.png'
    },
    {
        name: 'B?? M???t N??i G??c T???i',
        update: '24',
        img: './assets/img/rank-img11.jpg',
        rank: './assets/img/rank-number11.png'
    },
    {
        name: 'B?? M???t N??i G??c T???i',
        update: '24',
        img: './assets/img/rank-img12.jpg',
        rank: './assets/img/rank-number12.png'
    },
]
function sliderStyle2(options){
    const carouselMove = $(options.carouselMoveSelector);
    const carouselWidth = $(options.carouselSelector).offsetWidth
    const prevBtn = $(options.prevBtnSelector)
    const nextBtn = $(options.nextBtnSelector)
    prevBtn.style.display = 'none'

    function render () {
        const htmls = options.movies.map((movie, index) => {
            return `
                <div class="carousel_item col l-3 m-4 c-6">
                    <div class="carousel_rank-img">
                        <img src="${movie.img}" alt="">
                        <div class="carousel_rank-overlay">
                            <div class="btns-play-and-add">
                                <span class="btn-play">
                                    <i class="fas fa-play"></i>
                                </span>
                                <span class="btn-add">
                                    <i class="far fa-bookmark">
                                        <i class="fas fa-plus"></i>
                                    </i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="carousel_rank-block">
                        <img src="${movie.rank}" alt="" class="carousel_rank-number">
                        <div class="carousel_rank-content">
                            <p class="carousel_rank-title">${movie.name}</p>
                            <p class="carousel_rank-update">${movie.update} t???p</p>
                        </div>
                    </div>
                </div>
            `
        })
        carouselMove.innerHTML = htmls.join('')
    }
    render();
    const carouselItems = $$(options.carouselItemsSelector)
    const carouselMoveQuantity = Math.round(carouselItems.length/(carouselMove.getBoundingClientRect().width / carouselItems[0].getBoundingClientRect().width))
    var l = 0
    nextBtn.onclick = () => {
        prevBtn.style.display = 'block'
        l++;
        if(l < carouselMoveQuantity) {
            carouselMove.style.transform = `translateX(calc(0px - ${carouselWidth}px * ${l}))`
            if(l == carouselMoveQuantity - 1) {
                nextBtn.style.display = 'none'
            }
        } else {
            l = carouselMoveQuantity - 1
            nextBtn.style.display = 'none'
        }
    }

    prevBtn.onclick = () => {
        nextBtn.style.display = 'block'
        l--;
        if(l>=0) {
            carouselMove.style.transform = `translateX(calc(0px - ${carouselWidth}px * ${l}))`
            if(l==0) {
                prevBtn.style.display = 'none'
            }
        } else {
            l=0
            prevBtn.style.display = 'none'
        }
    }
}

sliderStyle2({
    movies: rankList,
    carouselSelector : '#carousel-3',
    carouselMoveSelector : '#carousel-3 .carousel-move',
    prevBtnSelector : '#carousel-3 .carousel_btn-prev',
    nextBtnSelector : '#carousel-3 .carousel_btn-next',
    carouselItemsSelector: '#carousel-3 .carousel_item'
})
function playModal () {
    const modal = $('.modal');
    const modalContainer  = $('.modal-container')
    const modalClose = $('.modal_close')
    const modalVideo = $('#modal-play video')

    function show() {
        modal.classList.add('active')
    }
    function hide() {
        modal.classList.remove('active')
        modalVideo.pause();
    }

    for(let i=0; i<$$('.carousel_item').length; i++) {
        const item = $$('.carousel_item')[i]
        item.onclick = () => {
            modalVideo.src = `${movieList[item.id-1].video}`
            $('.play_area-title').innerHTML = `${movieList[item.id-1].name}`
            $('.content-info_title').innerHTML = `${movieList[item.id-1].name}`
            show()
        }
    }

    modalClose.onclick = hide;
    modal.onclick = hide;
    modalContainer.onclick = function (event) {
        event.stopPropagation()
    }
}
setTimeout(playModal, 2000)

console.log(1)