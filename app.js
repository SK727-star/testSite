const quiz =[
  { // 1問目
    question: '太陽系惑星で最も質量の大きい惑星は?',
    answers: [
      '火星',
      '木星',
      '土星',
      '太陽'
    ],
    correct: '木星'
  },

  { // 2問目
    question: '地球から最も近い恒星は?',
    answers: [
      'プロキシマケンタウリ',
      'スピカ',
      'アルデバラン',
      'シリウス'
    ],
    correct: 'プロキシマケンタウリ'
  },

  { // 3問目
    question: '火星の衛星を選べ',
    answers: [
      '月',
      'ガニメデ',
      'タイタン',
      'フォボス'
    ],
    correct: 'フォボス'
  }

];
let quizIndex = 0;
let score     = 0;


console.log(quiz.length);

const $button = document.getElementsByTagName('button');

const setUpQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;

  for(i=0;i < $button.length ;i++){
    $button[i].textContent = quiz[quizIndex].answers[i];
  }
}

setUpQuiz();



//正誤判定ロジック部。 textContentは上で再定義済み
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解');
    score++;
  }else{
    window.alert('不正解');
  }
  quizIndex++;

  if(quizIndex < quiz.length){
    setUpQuiz();
  }else if(score != 0){
    window.alert(`終了です。あなたは${quiz.length}問中、${score}問正解しました。`);
  }else{
    window.alert(`終了です。あなたは全ての問題に正解できませんでした。`);
  }
}

for(i=0;i < $button.length ;i++){ //配置
  $button[i].addEventListener('click', (e)=>{
    clickHandler(e);
  })
}
