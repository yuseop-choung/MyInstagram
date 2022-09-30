let contents = document.querySelector("main");
let footer = document.querySelector("footer");
let btnLogin = document.getElementByClassName(".btn-login");
let inputPW = document.getElementById(".user_pw");
let btnSeePW = document.getElementByClassName(".btn-seePW");
let dynamicImageSrc = document.getElementById("dynamic_img").src;

//일정 시간 간격으로 반복적으로 이미지 변경

let imgidx = 1;
let imgTimer = setInterval(()=>{
                    let address = "/frontend/img/insta_screen" + String(imgidx) + ".png";
                    dynamicImageSrc = address
                    if(imgidx === 4) {
                        imgidx = 1
                    } else {
                        imgidx = imgidx + 1
                    }
                }, 1500);

btnSeePW.onclick = function() {
    let state = document.getElementById("user_pw").autocomplete
    if(state === "current-password") {
        state = "off";
    } else {
        state = "current-password";
    }
}


//브라우저의 높이에 따른 속성값 변화 필요


//비밀번호 입력 시 비밀번호 표시 버튼 화면에 출력


//브라우저 너비가 875px부터는 image-section 보이지 않고, 공간 차지 안하게


//footer 브라우저 너비가 좁아짐에 따라 맨 오른쪽에 있는것부터 엔터(개행)되도록


//브라우저 너비가 450px부터는 login-section, register section의 outline 없애기

