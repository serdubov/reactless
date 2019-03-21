Глава I

Главная функция для рендера, пишем в конце.

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

Создаем компонент
<!-- ======================================================== -->
var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        Это компонент app для вывода новостей
        <News />
        <Comments />
      </div>
    );
  }
});
<!-- ======================================================== -->



Создаем компонент новостей
<!-- ======================================================== -->
var News = React.createClass({
  render: function() {
    return (
      <div className="news">
        К сожалению, новостей нет.
      </div>
    );
  }
});
<!-- ======================================================== -->



В data кладем пропс из <News data={Наш объект с данными} />
Объявляем newsTemplate и кладем сюда функцию map которая получит содержимое item и index, пройдет
по всем объектам массива и выведет каждый элемент в виде узла DOM
<!-- ======================================================== -->
var News = React.createClass({
  render: function() {
    let data = this.props.data;
    let newsTemplate = data.map(function(item, index){
      return(
        <div key={index}>
          <h4 className="news__author">{item.author}</h4>
          <p className="news__content">{item.content}</p>
        </div>
      )
    })

    return (
      <div className="news">
        {newsTemplate}
      </div>
    );
  }
});
<!-- ======================================================== -->



<strong className={data.length > 0 ? '':'none'} >Всего новостей: {data.length}</strong>
Проще простого: есть новости? 'пустой класс' : 'класс .none'