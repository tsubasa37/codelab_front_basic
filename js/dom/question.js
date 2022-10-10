'use strict';
// 例題 コンソールに数値「1」を出力してください。
// console.log(1);

// 問題1：要素の取得
// id属性txt1の要素を取得し、変数txt1に代入してください。
// 代入後、変数txt1をコンソールに表示してださい。
document.getElementById('txt1');
console.log(txt1);

// 問題2：テキストの取得
// id属性txt2の要素を取得し、変数txt2に代入してください。
// txt2要素配下のテキストを取得し、コンソールに表示してください。
// ただしHTMLタグを含むもの、含まないもの両方の方法で表示すること。
let txt2 = document.getElementById('txt2');
console.log(txt2.innerText);
console.log(txt2.innerHTML);

// 問題3：テキストの書き換え
// id属性txt2配下のテキストを「書き換えました」という文字列に書き換えてください。
txt2.innerText = '書き換えました';
console.log(txt2.innerText);
// 問題4：イベント(クリック)
// 取得ボタンをクリックしたとき、id属性txt3のテキストを取得し、id属性txt4に表示してください。
let btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function (e) {
  let txt3 = document.getElementById('txt3');
  let txt4 = document.getElementById('txt4');
  txt4.textContent = txt3.innerText;
});

// 問題5：イベント(サブミット) / フォーム部品の取得(テキスト)
// 送信ボタンをクリックしたとき、フォーム部品(id属性input1のvalue)の値を取得し、id属性txt5に出力してください。
const form = document.getElementById('form1');
form.addEventListener('submit', (e) => {
  let value = document.getElementById('input1').value;
  let txt5 = document.getElementById('txt5');
  txt5.textContent = value;
  e.preventDefault();

})
// console.log(value);
// 問題6：フォーム部品の取得(セレクトボックス)
// 送信ボタンをクリックしたとき、セレクトボックス(name属性item1のvalue)の選択中の値を取得し、id属性result1に出力してください。
let form2 = document.getElementById('form2');
form2.addEventListener('submit', function (e) {
  let country_num = form2.item1.selectedIndex;
  let get_num  = form2.item1.options[country_num].text;
  let result1 = document.getElementById('result1');
  result1.textContent = get_num;
  e.preventDefault();
});

// 問題7：フォーム部品の取得(チェックボックス)
// 送信ボタンをクリックしたとき、チェックボックス(name属性item1のvalue)の選択中の値を取得し、id属性result2に出力してください。※選択した全てのチェックボックスの値を表示してください。
let form3 = document.getElementById('form3');
form3.addEventListener('submit', (e) => {
  let check = form3.check;
  let array = [];
  for (let i = 0; i < check.length; i++) {
    if(check[i].checked)
      array.push(check[i].value);
  }
  document.getElementById('result2').textContent = array;
  e.preventDefault();
})

// 問題8：フォーム部品の取得(ラジオ)
// 送信ボタンをクリックしたとき、ラジオボタン(name属性item1のvalue)の選択中の値を取得し、id属性result3に出力してください。
let form4 = document.getElementById('form4');
form4.addEventListener('submit', (e) => {
  let radio = form4.radio;
  let array = [];
  for (let i = 0; i < radio.length; i++) {
    if(radio[i].checked)
      array.push(radio[i].value);
  }
  document.getElementById('result3').textContent = array;
  e.preventDefault();
})

// 問題9：バリデーションチェック
// 会社名が未入力のまま送信ボタンをクリックしたとき、「会社名が未入力です。」というアラートを表示してください。また未入力の場合は、送信処理を中断してください。※入力がある場合は送信処理が行われる(画面リロードする)
let form5 = document.getElementById('form5');
let company = document.getElementsByName('company');
form5.addEventListener('submit', (e) => {
  if(form5.company.value === "") {
    window.alert('会社名が未入力です。');
    return false;
  }

})
// 問題10：CSSの操作
// id属性txt6のCSSプロパティを以下に変更してください。
// また変更するタイミングは画面表示時とする。
// 文字色→赤色、フォントサイズ→32px
let txt6 = document.getElementById('txt6');
txt6.style.color = 'red';
txt6.style.fontSize = '32px';

// 問題11：ノード追加
// 追加ボタンをクリックしたとき、id属性parentの子要素にpタグを追加し、pタグに「ノード追加テキスト」というテキストを追加してください。※追加ボタンを押すたびに、pタグが追加されるようにしてください。
let btn2 = document.getElementById('btn2');
let parent = document.getElementById('parent');
btn2.addEventListener('click', (e) => {
let p = document.createElement('p');
let txt7 = document.createTextNode('ノード追加テキスト');
p.appendChild(txt7);
parent.appendChild(p);
})

// 問題12：ノード削除
// 削除ボタンをクリックしたとき、id属性parentの子要素を削除してください。
let btn3 = document.getElementById('btn3');
btn3.addEventListener('click', (e) => {
  let parent = document.getElementById('parent');
  parent.removeChild(parent.firstChild);
})


// 問題13：属性取得・変更
// 変更ボタンをクリックしたとき、id属性link1のhref属性を取得し、コンソールに表示してください。またhref属性を「https://www.yahoo.co.jp」に書き換えてください。
let btn4 = document.getElementById('btn4');
btn4.addEventListener('click', (e) => {
  let link1 = document.getElementById('link1');
  link1.setAttribute('href','https://www.yahoo.co.jp');
  console.log(link1.getAttribute('href'));
})
// 問題14：クエリーセレクター / カスタム属性 / this
// querySelectorAllを使い、id属性list1の子要素のliを全て取得してください。
// liをクリックしたとき、カスタム属性numの値を取得し、コンソールに表示してください。
// その場合、クリックした要素のカスタム属性のみ取得すること。
// 例 list２のliをクリックしたときはコンソールに「2」を表示する
let list1 = document.getElementById('list1').querySelectorAll('li');
for (let i = 0; i < list1.length; i++) {
  list1[i].addEventListener('click', function (e) {
      console.log(this.dataset.num);
    });
  };

// 問題15-1：クラスの操作(追加)
// 追加ボタンをクリックしたとき、id属性txt7にクラスredを追加してください。
let btn5 = document.getElementById('btn5')
btn5.addEventListener('click', (e) => {
  let txt7 = document.getElementById('txt7');
  txt7.classList.add('red');
})


// 問題15-2：クラスの操作(削除)
// 削除ボタンをクリックしたとき、id属性txt7にクラスredを削除してください。
let btn6 = document.getElementById('btn6')
btn6.addEventListener('click', (e) => {
  txt7.classList.remove('red');
})

// 問題15-3：クラスの操作(切り替え)
// 切り替えボタンをクリックしたとき、id属性txt7にクラスredがあれば削除し、なければ追加してください。
let btn7 = document.getElementById('btn7')
btn7.addEventListener('click', (e) => {
  txt7.classList.toggle('red');
})


