//가위 바위 보 게임 만들기 v0.1.0
var player = prompt("가위!, 바위!, 보!");//player가 입력할 창을 만듦
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
document.write("나 : ", player, "<br>");
document.write("컴퓨터 : ", com, "<br>");


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
document.write(winDrawLose);