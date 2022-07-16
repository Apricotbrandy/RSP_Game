/* 가위 바위 보 게임 (v0.3.0)
[기존 기능]
- 가위바위보 기능
- 유저 가위바위보 입력 시 예외처리 추가
v0.3.0 에서 추가 된 기능
- 유저 가위바위보 입력을 입력창에서 받도록 수정
 */

var player = "";
var com = "";
var rpcInputText ;

window.onload = function(){ //html에 설정된 틀에 입력한 내용을 움직이는 것
    rpcInputText = document.getElementById("rpc_input_text");
}

function rpcInputButtonClick(){
    while(true){//while 무한루프 걸기
        // var player = prompt("가위!, 바위!, 보!");//player가 입력할 창을 만듦
        player = rpcInputText.value;
        if(player=="가위" || player=="바위" || player=="보"){
            break; //무한 루프 빠져나감
        }else{
            alert("가위 바위 보 싫어요?")
        }

    }
    var com = Math.floor(Math.random()*3)+1; // 셋 중에 하나를 랜덤하게 고름
    if(com == 1){
        com = "가위";
    }
    if(com == 2){
        com = "바위";
    }
    if(com == 3){
        com = "보";
    }
    document.write("나 : ", player);
    br();
    document.write("컴퓨터 : ", com);
    br();


    var winDrawLose = " "; //결과 경우의 수 
    switch(player){
        case "가위":
            switch(com){
                case "가위":
                    winDrawLose = "비겼다!";
                    break;
                case "바위":
                    winDrawLose = "졌다!";
                    break;
                case "보":
                    winDrawLose = "이겼다!";
                    break;
            }
            break;
        case "바위":
            switch(com){
                case "가위":
                    winDrawLose = "졌다!";
                    break;
                case "바위":
                    winDrawLose = "비겼다!";
                    break;
                case "보":
                    winDrawLose = "이겼다!";
                    break;
            }
            break;
        case "보":
            switch(com){
                case "가위":
                    winDrawLose = "이겼다!";
                    break;
                case "바위":
                    winDrawLose = "졌다!";
                    break;
                case "보":
                    winDrawLose = "비겼다!";
                    break;
            }
            break;
    }
    document.write(winDrawLose);// 결과 출력
}