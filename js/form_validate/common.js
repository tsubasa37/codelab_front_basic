let form = document.getElementById('form');
  let btn = document.getElementById('submit');
  // btnイベント
  btn.addEventListener('click', function (e) {

    // e.preventDefault();
    // let hoge = form.name.value;
    // alert(hoge);


      let nameValue = form.name.value;
      let kanaValue = form.kana.value;
      let telValue = form.tel.value;
      let mailValue = form.mail.value;
      let errName = document.getElementById('err-name');
      let errKana = document.getElementById('err-kana');
      let errTel = document.getElementById('err-tel');
      let errMail = document.getElementById('err-mail');

      // alert(kanaValue);

        // 名前の要素の検証
        if(nameValue === '') {
          errName.classList.add('err-txt');
          errName.textContent = ('名前が未入力です');
          e.preventDefault();

        }

        else  {
          errName.textContent = '';
        }

        //  カタカナ要素の検証

              if(!kanaValue.match(/^([ァ-ン]|ー)+$/)) {
                errKana.classList.add('err-txt');
                errKana.textContent = ('全角カナで入力してください。');
                e.preventDefault();
              }
          else {
            errKana.textContent = '';
          }

         //  電話番号の要素の検証
            if(!telValue.match(/^\d{10}$|^\d{11}$/)) {
              errTel.classList.add('err-txt');
              errTel.textContent = ('電話番号をハイフンなしで入力してください。');
              e.preventDefault();
            }
          else {
            errTel.textContent = '';
          }


        //  電話番号の要素の検証
            if(!mailValue.match(/^\S+@\S+\.\S+$/)) {
              errMail.classList.add('err-txt');
              errMail.textContent = ('メールアドレスの形式ではありません。');
              e.preventDefault();
            }
          else {
            errMail.textContent = '';
          }

    })
