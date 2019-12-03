/*
    날짜 : 2019-12-02
    이름 : 이지영
    내용 : 예매하기 날짜출력
*/

$(document).ready(function(){

    var $year  = $('.calendar .year');
    var $month = $('.calendar .month');
    var $a = $('.calendar a');

    var d = new Date();
    var year  = d.getFullYear();
    var month = d.getMonth();
    var today = d.getDate();
    var day   = d.getDay();

    var monthNames = ['January ', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novemver', 'December'];
    var week = ['일', '월', '화', '수', '목', '금', '토']

    // 오늘 년월일 출력하기
    $year.text(year + ' ' +monthNames[month]);
    $month.text(month+1);
    
    // 현재 월의 첫번째 날과 마지막 날짜 구함
    var firstDate = new Date(year, d.getMonth(), 1);
    var lastDate  = new Date(year, d.getMonth()+1, 0);

    // 요일과 날짜 출력하기
    $a.each(function(){
        
        if(day == 7){day=0;}
        var week_name = week[day++];
        $(this).children().first().text(week_name);

        if(week_name=='토'){
            $(this).parent().removeClass().addClass('sat');
        } else if (week_name=='일') {
            $(this).parent().removeClass().addClass('sun');
        } else {
            $(this).parent().removeClass().addClass('day');
        }

        // 날짜 
        // lastDate는 객체라 그대로 쓰면 안됨
        if(today > lastDate.getDate()){today=firstDate.getDate();}
        
        $(this).children().last().text(today++);

    }); // each 끝

    // 오늘 날짜에 선택 하이라이트
    $a.eq(0).parent().addClass('on');

});