React를 이용하여 To Do List를 만들어봄

기능 : 삭제, 정렬, 등록, 좋아요 기능을 구현하였으며, 등록 기능에는 title, content를 입력할 수 있게끔 하였고 onchange 이벤트 핸들러를 이용해 target.value값이 변경될 때마다 감지하게 하여 title과 content가 빈칸일때 등록이 되지 않게끔 구현하였다.
정렬은 sort함수를 이용하여 usestate를 재배열하여 가나다 순으로 정렬하게끔 하였고, 좋아요도 map함수와 usestate를 이용해 각각 글마다 좋아요 갯수가 다르게 나오게끔 구현하였다.
삭제는 shift함수를 이용하여 구현하였다.

URL : https://doggang.github.io/MYBLOG/
![스크린샷 2024-11-05 210638](https://github.com/user-attachments/assets/98297acc-0c40-414f-a9be-82538f753871)
