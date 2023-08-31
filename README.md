# 예지 Portfolio

### 2023.06.29 ###
포트폴리오 index 파일 다크모드 구현하는데에 있어 어려운 작업이었다.
토글버튼은 input checkbox로 만들어서 svg가 달모양에서 해모양으로 변하는것까진 했는데,
Dark Mode, Light Mode 글씨를 html input 태그 안에 넣으니 작성위치가 안맞아서 고민했지만 svg뒤에 ::after로 넣었더니 잘 구현이 되어서 뿌듯했다.
다크모드 css를 따로 만들고 색이 변하는 곳마다 class를 주어서 JQuery toggleClass로 완성했다.


### 2023.07.12 ###
지난 주 진행 했던 팀프로젝트 때문에 오랜만에 포트폴리오 페이지에 손을 댔다.
work 메뉴 siwper 기능을 추가하고, 이전에 선택자를 잘못 작성해 
work 메뉴 h3 부분 다크모드 적용이 안됐었는데 적용 되도록 다시 수정하고
오늘 수정한 swiper부분 포함 전체 다크모드가 모두 적용 되도록 구현 했다.


### 2023.07.13 ###
피드백 수용 수정 
Skill 내용 수정, 여백 추가


### 2023.07.16 ###
3ce홈페이지 스크롤기능추가, 햄버거메뉴 토글 추가


### 2023.07.17 ###
3ce 프로젝트 상세페이지 퍼블리싱, 다크모드 추가


### 2023.07.18 ###
모바일 앱 다이닝 노트 상세페이지 디자인 및 퍼블리싱에 필요한 이미지 추가


### 2023.07.19 ###
모바일 앱 다이닝 노트 상세페이지 퍼블리싱, 다크모드 추가


### 2023.07.20 ###
베이힐풀앤빌라 프로젝트 상세페이지 디자인, 퍼블리싱


### 2023.07.21 ###
베이힐풀앤빌라 프로젝트 상세페이지 다크모드 추가


### 2023.07.25 ###
개인프로젝트 포르쉐코리아 홈페이지 리디자인, 퍼블리싱 시작


### 2023.07.26 ###
포르쉐 홈페이지 메인에 들어갈 비디오 찾기


### 2023.07.27 ###
포르쉐 홈페이지 두번째 섹션에 글짜가 3개로 벌어지며 왔다갔다 하는 효과
처음엔 p를 3개 만들고 가운데 p에 position : relative 값을 주고 나머지 p를 absolute로 한곳에 뭉친다음 퍼졌다 하게 하려고 했지만
자리가 부족해서인지 animation이 먹지 않았다.
그래서 양 옆 단어들도 position으로 배치를 한다음 공간을 충분히 주었더니 
animation이 되어 글씨가 3겹인 효과를 낼 수 있었다.


### 2023.07.28 ###
포르쉐 홈페이지 footer 작업 완료,
스크롤 해서 이미지가 확대 되는 부분에서 가로스크롤이 생기는데 아직 해결을 못했다.
그리고 스크롤 했을 때 이미지 확대 되는게 너무 빨리 커져서 글씨를 읽을 수 없는 문제와
확대 된 이미지에 글씨를 어떻게 넣을지 고민 해 봐야겠다.


### 2023.08.02 ###
이미지가 커지면서 가로스크롤이 생기는 문제는, 내가 알고 있던 지식 선에선 overflow:hidden 밖에 떠오르지 않았는데
적용시켜보니 처음엔 적용이 안 됐다. 그래서 다른 쪽으로 접근을 해야되는 건가 오랜 시간 고민했었는데
알고보니 overflow:hidden을 적용시킨 영역을 잘못 선택한 거였다.
맞는 영역 .section2 안에 overflow:hidden을 적용시켜주니 넘치는 부분이 안 보이게 되었다.
바보 같은 실수였던 것 같지만 어쨌든 해결~ 

그리고 스크롤이 너무 빨리내려가서 사진확대가 빨리 되는 문제는
  scrollTrigger: {
    trigger: ".section2", // 스크롤 트리거로 사용할 요소
    start: "top -50%", // 애니메이션이 시작할 위치 (top 80% 지점)
    end: "bottom 10%", // 애니메이션이 끝날 위치 (bottom 20% 지점)
    scrub: true, // 스크롤에 따라 부드럽게 애니메이션을 적용
  },
});
opacity를 0으로 설정하여 요소를 숨긴 후, 스크롤 위치를 약간 더 위로 조정한 top: -50%으로 설정하여 스크롤이 일어났을 때 opacity가 1로 바뀌는 순간이 느려져서 자연스러운 확대 애니메이션이 가능하게 했다.


### 2023.08.03 ###
포르쉐 홈페이지 스크롤시 글씨가 떠오르게 하는 javascript 적용
전체적인 포트폴리오 정리
포르쉐 상세페이지 리디자인


### 2023.08.12 ###
포르쉐 상세페이지 퍼블리싱, 다크모드 구현
링크 연결
기술서 수정


### 2023.08.25 ###
기타 디자인 작업물 상세페이지 퍼블리싱, 다크모드 구현
자바 스크립트 window.open("URL", "팝업 이름", "팝업 옵션"); 함수를 사용해
폴더 이미지 안에 작업물이 들어있는 것처럼 디자인 하고 클릭하면 이미지가 뜨도록 구현했다.