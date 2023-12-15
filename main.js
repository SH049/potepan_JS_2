$(document).ready(function() {
    const $button = $('.button');
    const $buttonAC = $('#AC')
    const $result = $('#result');
    const $result2 =$('#result2');
    const $buttonElem = $('.button_elem');
    const $buttonEqual = $('#equal');
    let num = 0; //計算用の値を格納する
    let elem = ""; //演算子のidを格納する
    let sum = 0; //計算結果を格納する
    let count = 0; //演算子のボタンを押した回数を数える
    let numRear = 0; //演算子の後ろの数

    $button.on("click", function(){
        
        if ($result.text() == 0) {
            $result.text($(this).text());
        } else {
            $result.append($(this).text());
        };
        if (elem != "") {
            $result2.append($(this).text());
            num = $result2.text(); //演算子の後
        } else {
            num = $result.text(); //演算子の前
        }
        // num = $result.text(); //これだと二回目に〇＋〇が入ってしまう
        
        console.log(Number(num)); //テスト用
    });

    //イメージ
    //演算子ボタンを押すと、numをなんらかの変数に代入して、numをゼロにする
    $buttonElem.on("click", function(){
        $result2.text(''); // 2回目の計算にてresult2の初期化 効いてなさそう
        elem = ""; //2回目の計算にてelemの初期化
        if (count >= 1) { //countが1以上
            return;
        }
        sum = Number(num); //numの値をsumに代入
        // if (sum == 0) {
        //     sum += num;
        //     $result.append($(this).text());
        //     num = 0;
        //     return;
        // }
        if (num != 0) {
        $result.append($(this).text()); //numが0の場合以外は演算子を表示
        } 
        elem = $(this).attr('id'); //演算子のidを取得
        num = 0; //numの値を0にする
        //console.log(elem); //テスト用
       count += 1; 
        
    });

    // イメージ
    // イコールを押すと、sumの値が出力される。
    // 現時点でイコールを２回押してもうまく表示されない
    $buttonEqual.on("click", function(){
        //console.log(sum) //テスト用
        if (count != 0) { //連続でイコールを押したときはnumRearの値を更新しない
            numRear = Number(num);
        }
        // sum = number1 + number2; //足し算
        
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
        // elem = "";
        num = sum; //numにsumを代入
        // $result2.text(''); result2を初期化
        count = 0; //countの初期化
    })


    $buttonAC.on("click", function(){
        $result.text(0);
        num = 0;
        sum = 0;
        elem = "";
        count = 0; //カウントの初期化
        //console.log(Number(num)); //テスト用
    })
});