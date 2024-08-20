# modalWindows_react_hooks_practiceApp.jsx
Реализуйте и экспортируйте по умолчанию компонент, который реализует приложение "записная книжка".

В этом приложении можно добавлять, удалять и редактировать задачи с помощью модальных окон. На любое действие возникает модальное окно, внутри которого можно выполнять разные действия.

Пример работы

Для прохождения испытания нужно познакомиться с новыми хуками и использовать готовые компоненты бутстрапа. Рекомендуем проходить это испытание после выполнения предыдущего.

Примеры
Начальный HTML:
```
<div class="mb-3">
  <button type="button" data-testid="item-add" class="btn btn-secondary">add</button>
</div>
```
После клика на добавление:
```
<div class="mb-3">
  <button type="button" data-testid="item-add" class="btn btn-secondary">add</button>
</div>
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <div class="modal-title h4">Add</div>
      <button type="button" class="btn-close" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <form>
        <div class="form-group">
          <input class="form-control" data-testid="input-body" name="body" required="" value="" />
        </div>
        <input class="btn btn-primary" type="submit" value="submit" />
      </form>
    </div>
  </div>
</div>
```

После добавления первой задачи:
```
<div class="mb-3">
  <button type="button" data-testid="item-add" class="btn btn-secondary">add</button>
</div>
<div>
  <span class="mr-3">first task!</span>
  <button type="button" class="border-0 btn btn-link mr-3 text-decoration-none" data-testid="item-rename">rename</button>
  <button type="button" class="border-0 btn btn-link text-decoration-none" data-testid="item-remove">remove</button>
</div>
```

Клик по переименованию:
```
<div class="mb-3">
  <button type="button" data-testid="item-add" class="btn btn-secondary">add</button>
</div>
<div>
  <span class="mr-3">first task!</span>
  <button type="button" class="border-0 btn btn-link mr-3 text-decoration-none" data-testid="item-rename">rename</button>
  <button type="button" class="border-0 btn btn-link text-decoration-none" data-testid="item-remove">remove</button>
</div>
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <div class="modal-title h4">Rename</div>
      <button type="button" class="btn-close" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <form>
        <div class="form-group">
          <input class="form-control" data-testid="input-body" name="body" required="" value="first task!" />
        </div>
        <input class="btn btn-primary" type="submit" value="submit" />
      </form>
    </div>
  </div>
</div>
```

После переименования все возвращается к предыдущему HTML, но с новым именем.

Клик по удалению:
```
<div class="mb-3">
  <button type="button" data-testid="item-add" class="btn btn-secondary">add</button>
</div>
<div>
  <span class="mr-3">changed name!</span>
  <button type="button" class="border-0 btn btn-link mr-3 text-decoration-none" data-testid="item-rename">rename</button>
  <button type="button" class="border-0 btn btn-link text-decoration-none" data-testid="item-remove">remove</button>
</div>
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <div class="modal-title h4">Remove</div>
      <button type="button" class="btn-close" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <form>
        <div class="form-group">
          <input class="btn btn-danger" type="submit" value="remove" />
        </div>
      </form>
    </div>
  </div>
</div>
```

После удаления, запись пропадает.

* modals/Add.jsx
Реализуйте модальное окно для добавления задачи. Сделайте так, чтобы при появлении окна происходила фокусировка на поле для ввода. Это важно с точки зрения удобства.

* modals/Rename.jsx
Реализуйте модальное окно для обновления названия задачи. Сделайте так, чтобы при появлении окна происходила фокусировка на поле для ввода и при этом выделялся весь текст. Это важно с точки зрения удобства.

* modals/Remove.jsx
Реализуйте модальное окно для удаления задачи

Все модальные окна должны закрываться после отправки формы

Подсказки:
* Документация на встроенные хуки: useState, useEffect, useRef
* Документация на сторонние хуки: useImmer, useFormik
* Документация React Bootstrap
* useImmer() используется для точечного обновления в мутабельном стиле, при этом сохраняется преимущество иммутабельных структур данных. Его удобно использовать при необходимости внести изменения в сложные структуры данных, например, когда вам нужно найти объект из списка и изменить у него одно поле. useState() подходит для управления простым состоянием.
* Вёрстка может немного отличаться
