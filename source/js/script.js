'use strict';
(() => {
  const $form = document.querySelector('.sub-form');
  const $name = $form.querySelector('#name');
  const $tel = $form.querySelector('#tel');
  const MIN_LENGTH_TEL = 11;
  const MIN_LENGTH_NAME = 2;

  $name.addEventListener('input', onNameInput);
  $tel.addEventListener('input', onTelInput);


  function onNameInput(evt) {
    const regexp = /[а-яА-яA-Za-z]/;
    evt.currentTarget.addEventListener('keypress', function (e) {
      if (!regexp.test(e.key)) {
        e.preventDefault();
      }
    });
    if (evt.currentTarget.value.length < MIN_LENGTH_NAME) {
      $name.parentElement.classList.add('sub-form__box--short')
    } else {
      $name.parentElement.classList.remove('sub-form__box--short')
    }
  }

  function onTelInput(evt) {
    const regexp = /[+0-9]/;
    evt.currentTarget.addEventListener('keypress', function (e) {
      if (!regexp.test(e.key)) {
        e.preventDefault();
      }
    });
    if (evt.currentTarget.value.length < MIN_LENGTH_TEL) {
      $tel.parentElement.classList.add('sub-form__box--short')
    } else {
      $tel.parentElement.classList.remove('sub-form__box--short')
    }
  }
})()
