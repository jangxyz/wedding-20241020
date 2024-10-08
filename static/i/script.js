var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var wsc_top = 0
var menu_height = 0
var msg_area = 'guest'
var msg_idx = 0
var msg_root = 0
var screen_scale = window.visualViewport.scale
var default_scale = parseFloat(screen_scale)  // 초기 viewport 값
var tolerance = parseFloat(0.2)

$(window).on('scroll', function() {
    wsc_top = parseInt($(window).scrollTop())
    // POPUP CLOSE TRIGGERS
    if ($('#photo_view_menu').css('display') != 'none') mask(0)
    if ($('#reply_form').css('display') != 'none') mask(0)
})


$(function() {

    var info_check = false
    if (m_name.length < 2) info_check = true
    if (g_name.length < 2) info_check = true

    // 쿠키 없으면 설정아이콘 노출
    if ($.cookie('setting_click_check') == 'check') {
    	$('.home_settiong_wrapper').css('opacity', 0)
    } else {
    	$('.home_settiong_wrapper').css('opacity', 1)
    }
    
    // 하단 설정하기 메뉴 쿠키 저장값
    $('#tail_button_config').on('click', function() {
        $.cookie('setting_click_check', 'check')
    })
    
    // 설정 아이콘 클릭 트리거
    $('.home_settiong_btn').on('click' , function() {
        $('.tail_menu_section_fold').show()
        $('body, html').animate({scrollTop : ($('#tail_button_config').offset().top)}, 600);
        $('.home_settiong_wrapper').hide()
        $('.setting_fade').addClass('on')
    })

    if (info_check == true) {
        $('.tail_fold_btn').hide()
        $('.tail_menu_section_fold').show()
    } else {
        $('.tail_fold_btn').show()
        $('.tail_menu_section_fold').hide()
    }
    
    $('.tail_fold_btn').on('click', function() {
        if($(this).hasClass('on')) {
            $('.tail_menu_section_fold').stop().slideUp()
            $(this).removeClass('on')
        } else {
            $('.tail_menu_section_fold').stop().slideDown()
            $(this).addClass('on')
            $('body, html').animate({scrollTop : ($('#tail_block').offset().top)}, 250);
        }
        
    })
    
    // 혼주들 이름들중 길이가 다른 이름이 있는지 체크
    let parents_name_length_diff = 0

    let parents_name_lengths = new Array()
    $('.insa_parent_block > .parent_name').each(function() {
        if ($(this).text().length > 0) {
            parents_name_lengths.push($(this).text().length)
        }
    })

    if (Math.min(...parents_name_lengths) != Math.max(...parents_name_lengths)) {
        let parents_name_length_diff = 1  // 길이가 다른 이름이 있으면 align left 적용
    }


    // 혼주이름의 길이가 모두 같은경우
    if (parents_name_length_diff == 0) {

        // 혼주 이름 전체가 한글인지 체크
        let all_korean = false
        let parent_names = $('.insa_parent_block > .parent_name').text()
        if (/^[가-힣]*$/.test(parent_names)) {
            all_korean = true
        }
    
        if (all_korean) {
            $('.insa_parent_block').css('text-align', 'left')
        }

    }



    
    // 마스크영역 클릭시 끄기 트리거
    $('#mask').bind('click', function() {
        if (mask_release_allow == true && $(this).css('opacity') > 0.1) {
            if ($('#mcni_wrapper').css('display') != 'none') {
                $('body').css('height', $(document).height() + 'px')
            }
            mask(0)
        }
    })

    // 입력폼 자동완성 끄기
    $('form').each(function() {
        $(this).attr('autocomplete', 'off')
    })

    // 입력상자 크기 자동조절 트리거
    $('textarea').bind('keyup', function(e) {
        textarea_resize($(this))
    })


    /* ==========================================
                        CONTACT
    =============================================*/

    $('.contact_button').on('click', function() {
        mask(0.5)
        var type = $(this).data('type')
        $('#contact_' + type).show()
    })

    $('.family_group_block').each(function(){
        var side = $(this).data('type')
        var side_row_count = $('.contact_row[data-side='+side+']', this).length
        if (side_row_count == 0) {
            $('.section_content_wrap').removeClass('section_content_wrap_'+side)
            $('.family_group_block').addClass('family_group_block_'+side) // contact border
        } else {
            $('.section_content_wrap').addClass('section_content_wrap_'+side)
            $('.family_group_block').removeClass('family_group_block_'+side)
        }

    })

    $('.bank_family_group_block').each(function(){
        var side = $(this).data('type')
        var side_row_count = $('.family_members[data-side='+side+']', this).length
        if (side_row_count == 0) {
            $('.bank_family_group_block').addClass('bank_family_group_block_'+side) // bank border 숨김
        } else {
            $('.bank_family_group_block').removeClass('bank_family_group_block_'+side) 
        }

    })

    /* ==========================================
                   갤러리 PHOTO LIST A
    =============================================*/

    // 사진 리스트 더 보기 기능
    $('#photo_more_row').on('click', function() {
        $('#photo_more_img').attr('src', './img/loading4.gif')
        setTimeout(function() {
            $('.photo_wrapper').show()
            $('#photo_list_br_upload_row').show()
            $('#photo_more_row').hide()
        }, 450)
    })

    // 보정서비스
    $('#prod_banner1_close_checkbox').on('click', function() {
        $(this).attr('src', '/m/img/200903_01_01-checked.png')
        $.cookie('mcard_prod_banner1_off', 1, {
            expires: 90,
            path: '/'
        })
        $('#prod_banner1').fadeOut()
    })

    /* ==========================================
                갤러리 PHOTO LIST B 
    ============================================= */

    var photo_view_swiper
    var photo_thmb_swiper
    var photo_pop_swiper

    // 사진 슬라이드
    photo_view_swiper = new Swiper('#photo_view_swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: false,
        on: {
            slideChangeTransitionEnd: function() {
                var page = Math.floor(this.realIndex / 5)
                photo_thmb_swiper.slideTo(page) // 작은 이미지는 나누기 5
                if (photo_pop_swiper) {
                    photo_pop_swiper.slideTo(this.realIndex)
                }
            }
        },
        navigation: {
            nextEl: "#photo_view_next_btn",
            prevEl: "#photo_view_prev_btn",
        },
    })

    // 사진 썸네일 슬라이드
    photo_thmb_swiper = new Swiper("#photo_thmb_swiper-container", {
        slideToClickedSlide: false,
        on: {
            slideChange: function() {
                // 썸네일 그룹(5개묶음) 페이징 오류 회피용. 오류 찾아내서 수정 필요
                $('#photo_thmb_swiper-pagination > span').removeClass('swiper-pagination-bullet-active')
                $('#photo_thmb_swiper-pagination').children().eq(this.activeIndex).addClass('swiper-pagination-bullet-active')
            }
        },

        pagination: {
            el: '#photo_thmb_swiper-pagination',
            clickable: true,
            type: 'bullets'
        },

    })

    // 사진 팝업 슬라이드
    function photo_pop_swiper_init() {
        photo_pop_swiper = new Swiper('#photo_pop_swiper-container', {
            slidesPerView: 1,
            spaceBetween: 0,
            slideToClickedSlide: true,
            on: {
                beforeInit: function() {},
                init: function() {
                    $('#photo_pic_pop_wrapper').hide() // 초기화 이후, 사진 팝업 영역 숨김
                },
                slideChangeTransitionEnd: function() {
                    var page = Math.floor(this.realIndex)
                    photo_view_swiper.slideTo(page)
                }
            },
            navigation: {
                nextEl: "#photo_pop_next_btn",
                prevEl: "#photo_pop_prev_btn",
            },
        })
    }


    // 사진 사이즈 + 위치 조정
    var photo_pop_img_lr_margin = 30  // 사진 좌우 마진
    var photo_pop_img_top_margin = 100  // 사진 상단 여백 (사용안함)

    var $photos = $('#photo_pic_pop_wrapper')
    var photoCount = $photos.length
    $photos.imagesLoaded()
    .progress(function(instance, image) {
        if (image.isLoaded) {

            let $image = $(image.img)
            let img_w = $image[0].naturalWidth
            let img_h = $image[0].naturalHeight
            let ratio = img_w / img_h

            let img_resized_w = img_w
            let img_resized_h = img_h

            // 순서주의 - 너비를 나중에 고려해야 함
            if (img_h > nh) {
                img_resized_h = nh  //  - photo_pop_img_top_margin
                img_resized_w = img_resized_h * ratio
            }
            if (img_w > nw) {
                img_resized_w = nw - photo_pop_img_lr_margin
                img_resized_h = img_resized_w / ratio
            }

            $image.css('width', img_resized_w)
            $image.css('height', img_resized_h)

            // vertical align middle
            let new_top = (nh - img_resized_h) / 2
            $image.parent().css('margin-top', new_top)
            $image.parent().css('width', nw - photo_pop_img_lr_margin)

            var loadedCount = instance.progressedCount

            // close button position
            if ($image.parent().width() - $image.width() > 0) {
                let close_btn_margin = ($image.parent().width() - img_resized_w) / 2
                $image.parent().children('.pop_close_btn_wrap').css('right', close_btn_margin + 'px')
            }

        }
    })
    .always(function() {
        photo_pop_swiper_init()
    })



    $('.photo_view_slide').on('click', function() { // 갤러리 이미지 클릭 트리거

        $('#photo_pic_pop_wrapper').show()
        $('.photo_pop_img').css('opacity', '1')
        $('.pop_close_btn_wrap').css('opacity', '1')
        $('.pop_bg_layer').fadeIn() // 레이어 배경 보임
        $('body, html').addClass('notScroll')
        $('#photo_view_btn_row').fadeIn()

        //네비게이션 버튼
        setTimeout(function() {
            $('#photo_view_btn_row').hide()
        }, 4000)

    })

    // 사진 크게보기 닫기
    $('.photo_pop_img, .pop_close_btn_wrap, #photo_pic_pop_wrapper').on('click', function() {
        $('#photo_pic_pop_wrapper').hide()
        $('.pop_bg_layer').fadeOut()
        $('body, html').removeClass('notScroll')
    })

    // PHOTO THMB 이미지 클릭시
    $('.photo_thmb_thm_img').on('click', function() {

        // PHOTO VIEW IMAGE 처리
        var key = $(this).data('key')
        photo_view_swiper.slideTo(key)

        // 클릭한 썸네일 활성처리
        $('.photo_thmb_thm_img').css('opacity', '1')
        $(this).css('opacity', '0.3')

    })


    
    /* ==========================================
                        오시는길
    ============================================= */

    if (map_tel == '') {
        $('.tel_ask_btn').hide()
    }

    // 지도, 약도 탭
    $('.mcard_map_type_btn').on('click', function() {

        // 탭 버튼 활성 처리
        $('.mcard_map_type_btn').each(function() {
            $(this).removeClass('mcard_button2_on')
        })
        $(this).addClass('mcard_button2_on')

        // 클릭한 타입의 지도 출력처리
        $('.map_object').hide()
        $('.map_object[data-cat=' + $(this).data('cat') + ']').show()

    })

    $('#map_frame').attr('src', 'map_daum.php?uid='+uid+'&lat=' + map_lat + '&lng=' + map_lng + '&map_name=' + venue_name + '&map_addr=' + map_addr + '&map_road=' + map_road)


    $('.map_img').on('click', function() {
        window.open($('#map_frame').attr('src'))
    })

    $('.map_img_zoom_btn').on('click', function() {
        window.open('_img_large.php?src_url=' + $('.map_view_img').attr('src'))
    })

    /* ==========================================
                        계좌
    =============================================*/

    var family_group_name_prefix = new Array()
    family_group_name_prefix['a'] = '신랑'
    family_group_name_prefix['b'] = '신부'

    var family_group_name_color = new Array()
    family_group_name_color['a'] = '#8aa5d6'
    family_group_name_color['b'] = '#ee8196'

    // 보기
    $('.bank_txt_view_btn').on('click', function() {

        $('#bank_pop_title').css('color', family_group_name_color[$(this).data('family_group_type')])
        $('#bank_pop_title').text(family_group_name_prefix[$(this).data('family_group_type')] + '측 계좌번호')
        $('#bank_pop_txt_unm').text($(this).prev().text())

        $('#bank_pop_txt_acc').text($(this).data('bank_name') + ' ' + $(this).attr('data-bank_num'))

        $('#bank_popup').show()
        mask(0.4)

    })
    
    // 계좌 목록이 접혀있는 상태인지 확인
    let fold_cnt = 0
    $('.bank_family_group_block > .family_bank_info_block').each(function(){
        if($(this).css('display') != 'none') {
            fold_cnt++  // 목록이 접혀있지 않은 경우 카운트
        }
    })
    
    if (use_bank_fold == 1) { // 계좌 목록 접힘상태
        $('.family_members').children('.fold_arrow_btn_wrapper').children('.mcard_fold_arrow_btn').removeClass('on')  // 토글 버튼 v(접힘)
        $('.family_bank_info_block').hide()
    } else {
        $('.family_members').children('.fold_arrow_btn_wrapper').children('.mcard_fold_arrow_btn').addClass('on')   // 토글 버튼 ^ (펼침)
        $('.family_bank_info_block').show()
    }

    // 계좌 fold 기능
    $('.family_members').on('click', function() {
        let data_side = $(this).data('side')
        let current_row = $(this).parent('.family_members')
        let row_arrow = $(this).children('.fold_arrow_btn_wrapper').children('.mcard_fold_arrow_btn')
        let last_row = $('.family_members[data-side='+data_side+']').last()

        /* 버튼 on, off에 따라 동작 */
        if ($(row_arrow).hasClass('on')) {
            $(row_arrow).removeClass('on')  // toggle 화살표 방향 변경
            $(this).next('.family_bank_info_block').hide()  // 계좌 내용 숨김 
        } else {
            $(row_arrow).addClass('on')
            $(this).next('.family_bank_info_block').show()  // 계좌 내용 보임
        }
    })

    let current_deposit_url = ''
    $('.bank_kakao_link_btn').on('click', function() {
        let deposit_url = $(this).data('link')
        current_deposit_url = deposit_url
        
        if (is_pc) {
            alert("모바일기기에서 이용해 주세요")
        } else {
            $('.homePopupBlock').show()
            mask(0.4)
        }
        
        //$('.homePopupBlock').children().children('.comfirm_btn_box').attr('data-deposit', deposit_url)
        
    })

    // $('.bank_deposit_ok_btn').on('click', function() {
    $(document).on('click', '.bank_deposit_ok_btn', function() {
        let url = current_deposit_url
        if (is_pc) {
            alert("모바일기기에서 이용해 주세요")
        } else {
            window.location.href = url
        }
    })

    $('.bank_deposit_ok_btn').on('click', function() {
        let url = $(this).parent('.comfirm_btn_box').data('deposit')
        window.location.href = url;
    })

    $('.bank_deposit_cancel_btn').on('click', function() {
        $(this).parent('.comfirm_btn_box').attr('data-deposit', '')
        $('.homePopupBlock').hide()
        mask(0)
    })
    

    // 복사
    $('.bank_pop_copy_btn').on('click', function() {
        var bank_txt = $(this).parent('.bank_copy_btn_wrapper').prev('.bank_info_wrapper').children('.bank_info_box').children().text().replace(/-/g,'')
        if (bank_txt.length > 1) {
            clipboard_copy(bank_txt)
            alert(bank_txt + ' 복사되었습니다')
        }
    })


    // 닫기
    $('#bank_pop_close_btn').on('click', function() {
        $('#bank_popup').hide()
        mask(0)
    })


    /* 계좌 토글 */
    if ($('.bank_family_group_block').css('display') == 'none' ) {
        $('.mcard_fold_bar').addClass('on')
        $('.mcard_fold_arrow_btn').addClass('on')
    }
    $('.mcard_fold_bar').on('click', function() {
        
        let bank_info_box = $(this).next('.bank_family_group_block')  // 계좌번호 정보 영역
        
        if($(bank_info_box).css('display') == 'none' ) {
            $(this).removeClass('on')
            $(this).children('.mcard_fold_arrow_btn').removeClass('on')
            $(this).next().show()
        } else {
            $(this).addClass('on')
            $(this).children('.mcard_fold_arrow_btn').addClass('on')
            $(this).next().hide() 
        }

    })



    /*
          [수정하기]
                        */

    $('.msg_edit_button').live('click', function(e) {

        msg_area = $(this).parent().data('area')
        msg_idx = $(this).parent().data('idx')
        msg_root = $(this).parent().data('idx')

        //메시지 편집폼
        $('#msg_form_title').text('댓글 수정')
        if (msg_area == 'guest' && msg_idx == msg_root) $('#msg_form_title').text('축하 메시지 수정')
        mask(0.5)
        $('#reply_form').css({
            'display': 'block',
            'left': wrapper_left_margin + 'px',
            'width': wrapper_width + 'px'
            //'top': window.innerHeight/5+'px'
        })

        //내용읽어서
        var memo = $('.msg_text[data-idx=' + msg_idx + ']').text()

        //메시지 편집폼 텍스트값 입력
        $('#reply_form_textarea').val(memo)

        //텍스트박스 크기조정
        var tmp = memo.split('\n')
        var row_count = tmp.length
        for (i = 0; i < tmp.length; i++) {
            if (tmp[i].length > 40) row_count++
        }
        $('#reply_form_textarea').attr('alt', row_count)
        textarea_resize($('#reply_form_textarea'))

        //알림체크 적용
        reply_form_notify($(this).data('notify'))


        //작성자만 수정 가능
        if ($(this).parent().data('mail') == $.cookie('mcard_guest_user_mail')) {
            $('#reply_form_textarea').prop('disabled', false)
            $('#reply_mail_notify_row').show()
            $('#reply_form_edit_writer_notice').hide()
            $('#msg_form_submit_button').show()
        } else {
            $('#reply_form_textarea').prop('disabled', true)
            $('#reply_mail_notify_row').hide()
            $('#reply_form_edit_writer_notice').show()
            $('#msg_form_submit_button').hide()
        }


    })



    /*
          [답글달기]
                        */
    $('.msg_reply_button').live('click', function(e) {

        msg_area = $(this).parent().data('area')
        msg_idx = $(this).parent().data('idx')
        msg_root = $(this).parent().data('idx')

        var croot_name = $('.msg_name[data-idx=' + msg_idx + ']').text()
        var parent_idx = $(this).data('parent_idx')

        $('#msg_textarea').val('').attr('placeholder', '@' + croot_name)

        $('#msg_textarea').focus() //람다함수 사용금지

        if (!iOS) {
            //원글이 잘 보이게 자동스크롤
            $('html, body').animate({
                scrollTop: $('.msg[data-idx=' + msg_root + ']').offset().top - 45
            }, 0)
        }

    })


    // ** 수정폼의 [등록하기] 버튼 클릭시
    $('#msg_form_submit_button').live('click', function() {

        var user_name = $('input[name=guest_user_name]').val().trim()
        var user_mail = $('input[name=guest_user_mail]').val().trim()

        var post_data = {
            'uid': uid,
            'area': msg_area,
            'idx': msg_idx,
            'name': encodeURIComponent(user_name),
            'mail': user_mail,
            'memo': encodeURIComponent($('#reply_form_textarea').val().trim()),
            'notify': $('input[name=reply_notify]').val(),
            'area': msg_area,
            //'parent': photo_idx,
            'send_type': 'ajax'
        }


        $.ajax({

            type: 'POST',
            url: '_msg_proc.php',
            data: post_data,
            //contentType: 'application/x-www-form-urlencoded;charset=euc-kr',
            beforeSend: function(jqXHR) {
                jqXHR.overrideMimeType('application/x-www-form-urlencoded;charset=euc-kr')
            },
            success: function(data) {

                mask(0)
                $('.msg[data-idx=' + msg_idx + ']').replaceWith(data)
                $('.msg[data-idx=' + msg_idx + ']').css({
                    'background-color': '#eaeaea'
                })
                setTimeout(function() {
                    $('.msg[data-idx=' + msg_idx + ']').animate({
                        backgroundColor: '#ffffff'
                    }, 1000)
                }, 300)
                msg_root = 0

            },
            error: function(xhr, textStatus) {}

        })


    })


    // ** 수정폼의 [삭제] 버튼 클릭시
    $('#msg_delete_button').live('click', function() {

        var delete_confirm_text = '등록된 메시지가 삭제됩니다.'

        //댓글이 있는지 확인
        var this_reply_count = $('.msg[data-croot=' + msg_idx + ']').length - 1
        if (this_reply_count > 0) delete_confirm_text += '\n\n댓글이 등록되있습니다. 삭제시, 댓글도 모두 지워집니다.'

        //삭제여부 확인
        if (!confirm(delete_confirm_text)) {
            return false
        }

        $.get('_msg_del_proc.php?idx=' + msg_idx + '&area=' + msg_area, function(data) {

            mask(0)

            r = JSON.parse(data)
            if (r.error_code == 0 && r.idx) {
                $('.msg[data-idx=' + r.idx + '], .msg[data-croot=' + r.idx + ']').css({
                    'background-color': '#eaeaea'
                })
                $('.msg[data-idx=' + r.idx + '], .msg[data-croot=' + r.idx + ']').animate({
                    opacity: 0
                }, 700, function() {
                    $(this).remove()
                    msg_root = 0
                    if (msg_area == 'photo') photo_reply_update(photo_idx)
                    //전체 메시지 갯수 업데이터 필요
                    if ($('input[name=guest_logout]').val() == 1) {
                        $.cookie('mcard_guest_user_name', null)
                        $.cookie('mcard_guest_user_mail', null)
                        location.reload()
                    }
                })
            }

        })



    })


    // Guest form close
    $('.form_close_button').on('click', function() {
        mask(0)
    })




    // 수정모드 입력상자
    $('#reply_form_textarea').on('keyup', function() {
        if ($(this).val().trim().length > 0) {
            $('#msg_form_submit_button').css({
                'color': '#333333',
                'border-color': '#333333'
            })
        } else {
            $('#msg_form_submit_button').css({
                'color': '#efefef',
                'border-color': '#efefef'
            })
        }
    })


    // 축하글 더 보기 버튼
    $('.guest_more_btn').on('click', function(){
        var clicked = Number($(this).data('clicked')) + 1
        clicked++
        $(this).data('clicked', clicked)
        i = 0
        $('.article_row').each(function(){
            i++
            if (i < clicked*10) $(this).show()
        })

        if (clicked*10 >= $('.article_row').length) {
            $('.guest_more_btn').fadeOut('slow')
        }
        
    })




    // 서브페이지 상단
    $('#mcard_top_back_button').bind('click', function() {
        history.back()
    })


/*
    청첩장 만들기 안내 팝업
*/
    

    var notice_text_wrapper_hidden = false  // 공지내용 미노출 여부 결정 ( false : 노출, true: 미노출)

    if($('#mcard_make_notice_block').length) {

        // 닫기 버튼 클릭했을 때
        $('.mcard_make_close_btn_wrapper').on('click', function() {
            $('.mcard_make_notice_text_wrapper').slideUp()
            //$.cookie('mcard_make_notice', '1')
            notice_text_wrapper_hidden = true
        })

        // 청첩장 만들기 안내문구 보임, 숨김
        /*
        if ($.cookie('mcard_make_notice') == '1') {
        	$('.mcard_make_notice_text_wrapper').hide()
        } else {
        	$('.mcard_make_notice_text_wrapper').show()
        }
        */

        // 스크롤 시 팝업 보임, 숨김
        $(window).on('scroll', function() {
            var first_block_Height = $('#scene_wrapper').outerHeight()

            if(notice_text_wrapper_hidden == false) {  // 공지내용 미노출이 아닌 경우
                if ($(this).scrollTop() >= 200) {
                    $('.mcard_make_notice_text_wrapper').slideUp()
                } else {
                    $('.mcard_make_notice_text_wrapper').slideDown()
                }
            }
        })
    }





}) // Document ready end


/* anti-zoom */
if(use_zoom == 1) {
    window.visualViewport.addEventListener('resize', function() {
        screen_scale = window.visualViewport.scale
        dataViewUpdate()
    })
    
    function dataViewUpdate() {
    
        let blur_to = 0
        //if(screen_scale  default_scale)
        
        if (screen_scale >= default_scale && screen_scale > default_scale+tolerance) {
            blur_to += screen_scale
            $('img[data-anti_zoom=1]').css('filter', 'blur'+'('+blur_to+'px'+')')
        } else {
            $('img[data-anti_zoom=1]').css('filter', 'blur'+'('+blur_to+'px'+')')
        }
    
    }
}

function checkbox_toggle(inm) { //input name

    if ($("input[name=" + inm + "]").prop("checked")) {
        $("img[alt=" + inm + "]").attr("src", $("img[alt=" + inm + "]").attr("src").replace("_on.png", "_off.png"))
        $("input[name=" + inm + "]").prop("checked", false)
    } else {
        $("img[alt=" + inm + "]").attr("src", $("img[alt=" + inm + "]").attr("src").replace("_off.png", "_on.png"))
        $("input[name=" + inm + "]").prop("checked", true)
    }

}

function fold_toggle(oid) { //object id

    if ($("#" + oid).css("display") == "none") {

        $("#" + oid).show()

        $("#" + oid + "_arrow").animate({
            "transform": "rotate(180deg)"
        })

    } else {

        $("#" + oid).hide()

        $("#" + oid + "_arrow").animate({
            "transform": "rotate(0deg)"
        })

    }

}


function photo_reply_update(idx) {
    var reply_count = $('.reply[data-parent_idx=' + idx + ']').length
    $('.photo_reply_counter[data-idx=' + idx + ']').text(reply_count)
}


function mask(opacity) {

    if (opacity == 0) {

        $('#mask').hide()
        $('.mask_over').hide()

    } else {

        $('#mask').stop().fadeTo('slow', opacity)
        $('#mask').show()

    }

}


function textarea_resize(obj) {

    // count
    var text = $(obj).val()
    var lines = text.split(/\r|\r\n|\n/)
    var count = lines.length


    // resize
    var default_count = Number($(obj).attr('alt'))
    if (!default_count) default_count = 1

    if (count > 1) $(obj).css('height', 'auto')
    if (count > default_count) $(obj).attr('rows', count)
    else $(obj).attr('rows', default_count)

}


function basename(path) {
    return path.split('/').reverse()[0]
}


function clipboard_copy(str) {
    var tmpTextarea = document.createElement('textarea')
    tmpTextarea.value = str
    document.body.appendChild(tmpTextarea)
    tmpTextarea.select()
    tmpTextarea.setSelectionRange(0, 9999)
    document.execCommand('copy')
    document.body.removeChild(tmpTextarea)
}