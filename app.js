
(()=>{
  const $doc = document;
  const $tab = $doc.getElementById('js-tab');
  const $nav = $tab.querySelectorAll('[data-nav]');
  const $content = $tab.querySelectorAll('[data-content]');
  const ACTIVE_CLASS = "is-active";

  const init = () => {
    $content[0].style.display = 'block';
  };
  init();

  //クリックしたら起こるイベント
  const handleClick = (e) => {
    e.preventDefault();
    const $this = e.target;
    const targetValue = $this.dataset.nav;
    console.log('targetValue', targetValue);

    //コンテンツのリセット
    for(let i=0;i<$nav.length;i++){
      $nav[i].classList.remove(ACTIVE_CLASS);
      $content[i].style.display='none';
    }

    //対象のコンテンツをアクティブ化
    $tab.querySelectorAll(`[data-content="${targetValue}"]`)
    [0].style.display= 'block';
    $nav[targetValue].classList.add(ACTIVE_CLASS);
  };
  //$navの各要素にeventListenerを設定
  for(let i=0 ;i < $nav.length; i++){
   $nav[i].addEventListener('click',(e) => handleClick(e));
 }
})();
