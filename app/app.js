var allNews = [
  {
    author: 'James McAvoy',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure deserunt nisi beatae quia, numquam corporis possimus. Adipisci, amet repellendus!',
    maxContent: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis labore consectetur atque error odit non sunt aperiam quos qui expedita, minus excepturi? Rem consectetur corrupti facilis eius esse architecto iure. Laudantium a illum quisquam nemo placeat tenetur itaque laboriosam sunt.'
  },
  {
    author: 'Tom Cruze',
    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quos quasi porro accusamus, assumenda natus sunt excepturi minima magnam laborum.',
    maxContent: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quo eveniet expedita, iste doloribus deserunt aspernatur eligendi ducimus molestias qui? Recusandae itaque velit hic sunt, nihil dicta! Ullam, dolor, error ut nostrum magni aliquam blanditiis beatae autem sint architecto, tempora necessitatibus sed provident?'
  },
  {
    author: 'Emilia Clark',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ex quidem dignissimos fugit, ipsa sit, quis expedita nostrum alias, dolorem asperiores necessitatibus.',
    maxContent: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem quae blanditiis suscipit porro non sapiente voluptas neque laudantium consequuntur? Incidunt sunt, sed nobis cupiditate nisi reiciendis temporibus delectus voluptate dignissimos cum eaque quo harum maiores exercitationem saepe nemo, ut earum doloribus quisquam iste at!'
  }
];


var Article = React.createClass({
  getInitialState: function() {
    return{
      visible: false
    };
  },
  readmoreClick: function(e){
    e.preventDefault();
    this.setState({visible: true});
  },
  render: function() {
    let author = this.props.data.author,
        content = this.props.data.content,
        maxContent = this.props.data.maxContent,
        visible = this.state.visible;
    
    return (
      <div className="article">
        <h4 className="news__author"> {author} </h4>
        <p className="news__content"> {content} </p>
        <a href="#" onClick={this.readmoreClick} className={'news_readmore ' + (visible ? 'none':'')}>Подробнее</a>
        <p className={'news__max-content ' + (visible ? '':'none')}> {maxContent} </p>
        <hr />
      </div>
    )
  }
});

var News = React.createClass({
  render: function() {
    let data = this.props.data;
    let newsTemplate;

    if (data.length > 0) {
      newsTemplate = data.map(function(item, index){
        return(
          <div key={index}>
            <Article data={item} />
          </div>
        )
      })
    } else {
      newsTemplate = <p>К сожалению новостей нет</p>
    }

    return (
      <div className="news">
        {newsTemplate}
        <strong className={'news__count ' + (data.length > 0 ? '':'none')}>Всего новостей: {data.length}</strong>
      </div>
    );

  }
});

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <h2>Новости</h2>
        <div className="custom-box"></div>
        <hr />
        <News data={allNews} />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);