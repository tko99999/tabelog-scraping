/* 初期化*/
var work = '';
var result
= 'No,店名,場所,ジャンル,点数,口コミ数\r\n';
/*出力header情報*/
/*勉強用に使う
/*●変数
・shop_name：店名(class名で取得)
・shop_summry：概要(class名で取得)
・shop_rate：点数(class名で取得 ※点数が表示されない場合がある。要素の個数に応じて処理を分岐。)
・shop_reviews：口コミ数(class名で取得)

※class名やHTMLの構造は食べログサービスによって変更されるものであり、動作を常に保証するものではありません。
*/
var shop_name
= document.getElementsByClassName("list-rst__rst-name-target cpy-rst-name");
var shop_summry
= document.getElementsByClassName("list-rst__area-genre cpy-area-genre");
var shop_rate
= document.getElementsByClassName("list-rst__rate");
var shop_reviews
= document.getElementsByClassName("list-rst__rvw-count-num cpy-review-count");

for(var i = 0; i < shop_name.length; ++i){

  /*点数エリアの要素数*/
  var val_area_cnt
  = document.getElementsByClassName("list-rst__rate")[i].children.length;

  /*点数が表示される場合*/
  if ( val_area_cnt == 2){
    work = (i+1)
    +','+ shop_name[i].innerText
    +','+ ((shop_summry[i].innerText).replace(' / ',',')).trim()
    +','+ shop_rate[i].children[0].innerText
    +','+ shop_reviews[i].innerText
    + '\r\n';
result = result + work;
  /*点数が表示されない場合*/
  } else if (val_area_cnt == 1){
    work = (i+1)
    +','+ shop_name[i].innerText
    +','+ ((shop_summry[i].innerText).replace(' / ',',')).trim()
    +','+ 'No Score'
    +','+ shop_reviews[i].innerText
    +  '\r\n';
    result = result + work;
  }
};
