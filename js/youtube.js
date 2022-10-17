 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 function onYouTubeIframeAPIReady() { //유튜브 라이브러리 에서 지정된 함수
  // <div id="player"></div>
  new YT.Player('player', {
     videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상ID
     playerVars:{
      autoplay:true, //자동 재생 유무
      loop:true, //반복 재생 유무
      playlist: 'An6LvWQuj_8', // 반복 재생할 유튜브 영상 ID목록
     },
     events: { // events 에서 onReady(유튜브 영상이 준비가되면)익명에 함수가 실행이되며 event.target.mute 음소거를시킨다
      onReady: function(event){
        event.target.mute() // 음소거 
      }
     }
   });
 }