$(document).ready(function () {

    // 点击增加数量

    $("body").on('click', '.plus', function (event) {
        // console.log("xixi")
        var num = $(this).siblings('input').val();
        var thisParent = $(this).parents('.top').siblings('.bottom')
        var unitcounts = thisParent.find('.unitcount').text();
        // console.log(num);
        // console.log(unitcounts);
        num++;
        // console.log(num);
        // $('body').html()
        $(this).parent('.right').find('input').val(num);

        thisParent.find('.much').text(unitcounts * num + '.00');

         getSum()

        return false
    })

    //  点击减少数量

    $("body").on('click', '.minus', function (event) {
        // console.log("xixi")

        var thisParent = $(this).parents('.top').siblings('.bottom')
        var unitcounts = thisParent.find('.unitcount').text();

        var num = $(this).siblings('input').val();
        if (num > 1) {
            // console.log(num);
            num--;
            // console.log(num);
            // $('body').html()
            $(this).parent('.right').find('input').val(num);
            thisParent.find('.much').text(unitcounts * num + '.00');
        }

         getSum()

        return false
    })

    // 点击店铺单选框变色

    $('body').on('click', '.maincommodity .left input', function (event) {
        // console.log('1');

        if ($(this).prop('checked')) {
            $(this).parents('.top').siblings('.bottom').find('input').prop('checked', true);
            $(this).parents('.top').siblings('.bottom').css({
                'background-color': 'pink'
            })
        } else {
            $(this).parents('.top').siblings('.bottom').find('input').prop('checked', false);
            $(this).parents('.top').siblings('.bottom').css({
                'background-color': '#f5f5f5'
            })
        }

        cancel();
        getSum();

    })

    //点击图片单选框变色
    $('body').on('click', '.maincommodity .bottom input', function (event) {
        // console.log('1');

        if ($(this).prop('checked')) {
            $(this).parents('.bottom').siblings('.top').find('input').prop('checked', true);
            $(this).parents('.bottom').css({
                'background-color': 'pink'
            })
        } else {
            $(this).parents('.bottom').siblings('.top').find('input').prop('checked', false);
            $(this).parents('.bottom').css({
                'background-color': '#f5f5f5'
            })
        }

        cancel();
        getSum();
    })

    //全选框选取



    $('body').on('click', '.footer input', function (event) {
        // console.log('xx')

        // var amount = $(this).parents('.footer').siblings('.container').find('.maincontainer').children('.maincommodity').length;
        // // console.log(amount);
        // // for(var i =0;i<amount;i++){

        // // }
        // $(this).parents('.footer').siblings('.container').find('.maincontainer .left input').prop('checked', true);
        if ($(this).prop('checked')) {
            $(':checkbox').prop('checked', true);
            $('.maincommodity .bottom').css({
                'background-color': 'pink'
            })
        } else {
            $(':checkbox').prop('checked', false);
            $('.maincommodity .bottom').css({
                'background-color': '#f5f5f5'
            })
        }

        getSum();
    })


    // 反选方法
    function cancel() {
        if ($('.top .left input').length === $('.top .left input:checked').length) {
            $('.footer input').prop('checked', true);
        } else {
            $('.footer input').prop('checked', false);
        }
    }

    //  计算 总数和数量

    function getSum() {
        var allcost = 0;
        var allcounts = 0;
        $('.top .left input').each(function (index,element) { 
            if($(this).prop('checked')){

                allcost += parseInt($(this).parents('.top').siblings('.bottom').find('.much').text())
                allcounts ++;
            }
         })

        //  console.log(allcost);
        //  console.log(allcounts)

        $('.footer .allcount').text(allcost+".00");
         $('.footer .right span').text('('+allcounts+')');

    }
})