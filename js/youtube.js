// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
//tag라는 변수에 script태그를 만들어 저장함.

tag.src = "https://www.youtube.com/iframe_api";
//tag변수에 해당하는 요소의 src에 위 url주소를 저장함.
var firstScriptTag = document.getElementsByTagName('script')[0];
// script태그 중 제일 첫번째([0]) 태그를 찾아 firstScriptTag에 저장함. 
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//firstScriptTag요소 이전에 tag요소를 삽입하라.
//youtube ifram api주소가 맨 앞에 있어야, 아래 코드들이 실행될 수 있는 구조가 됨.

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() { 
  //api싸이트에서 인식하게 만들어놓은 함수이름으로써, 바꾸면 안됨.
  new YT.Player('player', { //'player' : html파일에서 player라는 아이디를 가진 요소
    videoId: 'An6LvWQuj_8', //최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, 
      loop: true,
      playlist: 'An6LvWQuj_8' //반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      onReady: function (event) {
      //method - 함수가 할당된 객체데이터의 속성(onReady)을 일컫는 말
      //onReady(영상준비)라는 method가 실행되면 그 데이터를 event라는 매개변수에 저장함.
      event.target.mute()
        /*onReady라는 event가 일어나면 target(지금 실행되고 있는 영상)을
          mute시킴.*/
      }
    }
  });
}