import React from 'react';
import ReactDOM from 'react-dom/client';
import s from './Index.module.css';
import reportWebVitals from './reportWebVitals';
import Product from './components/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
  <table>
    <tr className={s.header}><td>№</td><td>Название</td><td>Цена</td><td>Осталось</td>Изображение</tr>
    <Product />
  </table>
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
