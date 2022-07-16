/* 가위 바위 보 게임 (v0.5.0)
[기존 기능]
- 가위바위보 기능
- 유저 가위바위보 입력 시 예외처리 추가
- 유저 가위바위보 입력을 입력창에서 받도록 수정
- 결과 출력 화면을 dw()가 아닌 출력화면용 textarea에 출력하도록 개선
(가위바위보 게임을 단판이 아닌 무한으로 가능해졌음)
v0.5.0 업데이트 내용
- 컴퓨터와 유저의 가위 바위 보 를 이미지로도 표현
 */

//변수 선언

var player = "";
var com = "";

var rpcInputText ;
var rpcResultScreen ;

var resultString = "";

//이미지 놓일 div들
var divRpcImgPlayer;
var divRpcImgCom;

//html에 설정된 틀을 없애지 않고 이용하기
window.onload = function(){ 

    rpcInputText = document.getElementById("rpc_input_text"); //연결
    rpcResultScreen = document.getElementById("rpc_result_screen"); //연결
    divRpcImgPlayer = document.getElementById("rpc_player");
    divRpcImgCom = document.getElementById("rpc_com");
    
}

function rpcInputButtonClick(){

    //결과 화면 초기화
    /* resultString = "";
    rpcResultScreen.value = resultString; */

    //while 무한루프 걸기
    while(true){
        // var player = prompt("가위!, 바위!, 보!");//player가 입력할 창을 띄움
        player = rpcInputText.value;
        if(player=="가위" || player=="바위" || player=="보"){
            break; //무한 루프 빠져나감
        }else{
            alert("가위 바위 보 싫어요?")
        }

    }
    //컴퓨터 난수 발생 시키기
    com = Math.floor(Math.random()*3)+1; // 셋 중에 하나를 랜덤하게 고름
    if(com == 1){
        com = "가위";
    }
    if(com == 2){
        com = "바위";
    }
    if(com == 3){
        com = "보";
    }
   /*  document.write("나 : ", player);
    br();
    document.write("컴퓨터 : ", com);
    br(); */
    /* resultString +="player : "+ player;
    resultString +="\n";
    resultString +="computer : "+ com;
    resultString +="\n"; */
    
    
    // 주의! 다시 게임을 할 경우 이 명령 줄로 인해 기존 누적된 내용이 초기화 됨
    resultString ="player : "+ player;
    resultString = resultString + "\n";
    resultString = resultString + "com : "+ com;
    resultString +="\n";

    //이미지 추가
    switch(player){
        case "가위":
            divRpcImgPlayer.innerHTML = "<img src='scissors.png'>"
            break;
        case "바위":
            divRpcImgPlayer.innerHTML = "<img src='rock.png'>"
            break;
        case "보":
            divRpcImgPlayer.innerHTML = "<img src='paper.png'>"
            break;
    }
    switch(com){
        case "가위":
            divRpcImgCom.innerHTML = "<img src='scissors.png'>"
            break;
        case "바위":
            divRpcImgCom.innerHTML = "<img src='rock.png'>"
            break;
        case "보":
            divRpcImgCom.innerHTML = "<img src='paper.png'>"
            break;
    }

    //결과 경우의 수 
    var winDrawLose = " ";
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
    // document.write(winDrawLose);
    //resultString +="결과 : "+ winDrawLose;
    resultString = resultString + "결과 : "+ winDrawLose;
    // 결과 출력
    rpcResultScreen.value = resultString;
}