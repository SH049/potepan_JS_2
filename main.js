$(document).ready(function() {
    const $button = $('.button');
    const $buttonAC = $('#AC')
    const $result = $('#result');
    const $result2 =$('#result2'); //計算用に演算子の後の数字を格納
    const $buttonElem = $('.button_elem');
    const $buttonEqual = $('#equal');
    const $buttonDot = $('#dot')
    let num = 0; //計算用の値を格納する
    let elem = ""; //演算子のidを格納する
    let sum = 0; //計算結果を格納する
    let count = 0; //演算子のボタンを押した回数を数える
    let countDot = 0; //小数点の回数を数える
    let numRear = 0; //演算子の後ろの数

    
    // 電卓に表示
    $button.on("click", function(){
        
        if ($result.text() == 0 && countDot < 1) { //0.1などは入力できるように
            $result.text($(this).text());
            if ($result.text() == "00") { //00が入力された場合、0に変更
                $result.text(0);
            }
        } else {
            $result.append($(this).text());
        };
        if (elem != "") {
            $result2.append($(this).text());
            num = $result2.text(); //演算子の後　表示はされない
        } else {
            num = $result.text(); //演算子の前
        }
        // num = $result.text(); //これだと二回目に〇＋〇が入ってしまう
        
        console.log(Number(num)); //テスト用
    });

    // 小数点の制御
    $buttonDot.on("click", function(){
        if (countDot >= 1) { //countが1以上
            return;
        }
        if (elem != "") {
            $result.append($(this).text());
            $result2.append($(this).text()); //演算子の後 表示はされない
        } else {
            $result.append($(this).text()); //演算子の前
        }
        countDot += 1;
    });


    //イメージ
    //演算子ボタンを押すと、numをなんらかの変数に代入して、numをゼロにする
    $buttonElem.on("click", function(){
        $result2.text(''); // 2回目の計算にてresult2の初期化
        elem = ""; //2回目の計算にてelemの初期化
        if (count >= 1) { //countが1以上
            return;
        }
        sum = Number(num); //numの値をsumに代入
        
        if (num != 0) {
        $result.append($(this).text()); //numが0の場合以外は演算子を表示
        } 
        elem = $(this).attr('id'); //演算子のidを取得
        num = 0; //numの値を0にする
        count += 1; 
        countDot = 0;
    });

    // イメージ
    // イコールを押すと、sumの値が出力される。
    $buttonEqual.on("click", function(){
        
        if (count != 0) { //連続でイコールを押したときはnumRearの値を更新しない
            numRear = Number(num);
        }
        
        switch(elem) {
            case "plus":
                sum += numRear;
                break;
            case "minus":
                sum -= numRear;
                break;
            case "multiply":
                sum *= numRear;
                break;
            case "division":
                sum /=  numRear;
                break;
        }

        $result.text(sum);
        num = sum; //numにsumを代入
        count = 0; //countの初期化
        countDot = 0;
    })

    //出力のクリア
    $buttonAC.on("click", function(){
        $result.text(0);
        num = 0;
        sum = 0;
        elem = "";
        count = 0; //カウントの初期化
        countDot = 0;
    });
});