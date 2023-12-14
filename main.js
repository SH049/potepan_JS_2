$(document).ready(function() {
    const $button = $('.button');
    const $buttonAC = $('#AC')
    const $result = $('#result');
    const $buttonElem = $('.button_elem');
    const $buttonEqual = $('#equal');
    let num = 0; //計算用の値を格納する
    let elem = ''; //演算子のidを格納する
    let sum = 0; //計算結果を格納する

    $button.on("click", function(){
        
        if ($result.text() == 0) {
            $result.text($(this).text());
        } else {
            $result.append($(this).text());
        };
        num = $result.text();
        // この辺でelemの値を使って分岐？？
        // 例elemがplusならsumに足す？
        // イコールを押した時点で足さないと変になるかな
        console.log(Number(num)); //テスト用
    });

    //イメージ
    //演算子ボタンを押すと、numをなんらかの変数に代入して、numをゼロにする
    $buttonElem.on("click", function(){
        number1 = num;
        // if (sum == 0) {
        //     sum += num;
        //     $result.append($(this).text());
        //     num = 0;
        //     return;
        // }
        $result.append($(this).text());
        elem = $(this).attr('id'); //演算子のidを取得
        num = 0;
        //console.log(elem); //テスト用
        //ここ以降の処理をイコール後に
        

        // switch(elem) {
        //     case "plus":
        //         sum += num;
        //         num = 0;
        //         break;
        //     case "minus":
        //         sum -= num;
        //         num = 0;
        //         break;
        //     case "multiply":
        //         sum *= num;
        //         num = 0;
        //         break;
        //     case "division":
        //         sum /= num;
        //         num = 0;
        //         break;
        // }

        
    });

    // イメージ
    // イコールを押すと、sumの値が出力される。
    $buttonEqual.on("click", function(){
        //console.log(sum) //テスト用
        number2 = num;
        sum = number1 + number2; //足し算
        $result.text(sum);
    })


    $buttonAC.on("click", function(){
        $result.text(0);
        num = 0;
        sum = 0;
        //console.log(Number(num)); //テスト用
    })
});