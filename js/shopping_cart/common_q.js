'use strict';
btn.addEventListener('click', function () {
  // 仕様
  // ショッピングカートに入った商品の合計を求めます。
  // 商品はタブレット(10,000円)とパソコン(50,000円)の2つです。
  // 計算ボタンをクリックした時に小計、税額、合計を求めてください。
  // 求めるものは以下の3つです。
  // 小計･･･商品の価格と数量の合計
  // 税額･･小計の金額に対して発生する消費税
  // 合計･･･小計と消費税を足した値

  //ヒント
  // HTMLから取得した値は常に文字列になります。JSで計算するには文字列→数値に変換する必要があります。

  // 使いそうな変数を宣言。必要に応じて後から追加する
  var tablet = document.getElementById('tablet');
  var pc = document.getElementById('pc');
  var btn = document.getElementById('btn');
  var subtotal = document.getElementById('subtotal');
  var tax = document.getElementById('tax');
  var total = document.getElementById('total');
  let tabletPrice = document.getElementById('tabletPrice')
  tabletPrice = Number((tabletPrice).innerText);
  let pcPrice = document.getElementById('pcPrice')
  pcPrice = Number((pcPrice).innerText);
  
  // 定数は全て大文字で書くことが多い
  const TAXRATE = 10;

  
  //タブレットの単価設定
let price1 = tablet.selectedIndex;
let tablet_price = tablet.options[price1].value * tabletPrice;
console.log(tablet_price);

//パソコンの単価設定
let price2 = pc.selectedIndex;
let pc_price = pc.options[price2].value * pcPrice;
console.log(pc_price);

//小計

let item_total = tablet_price + pc_price;
subtotal.textContent = item_total;

//税額
let item_tax = Math.round(item_total * TAXRATE /100);
tax.textContent = item_tax;

//税込金額

total.textContent = item_total + item_tax;

});