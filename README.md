# 예지 Portfolio

2023.06.29 
다크모드 구현하는데에 있어 정말 진땀을 뺐다..
토글버튼은 input checkbox로 만들어서 svg가 달모양에서 해모양으로 변하는것까진 했는데,
Dark Mode, Light Mode 글씨를 html input 태그 안에 넣으니 작성위치가 안맞아서 고민했지만 svg뒤에 ::after로 넣었더니 잘 구현이 되어서 뿌듯했다.
다크모드 css를 따로 만들고 색이 변하는 곳마다 class를 주어서 JQuery toggleClass로 완성했다.
