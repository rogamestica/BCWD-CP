
import React from 'react';

const News = () => {
  const newsData = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique malesuada dolor, a auctor risus cursus vitae. Suspendisse potenti. Aenean vel risus blandit, sagittis mauris ut, sodales mi. Morbi ut fermentum velit. Donec sit amet elit vitae magna aliquam pretium eu in lacus.",
      image: "https://picsum.photos/200/300"
    },
    {
      id: 2,
      title: "Pellentesque habitant morbi tristique senectus",
      content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi varius elit nec diam bibendum, sit amet auctor mauris sagittis. Fusce mollis sapien vel neque laoreet, a hendrerit lectus molestie. Aenean malesuada arcu at nibh consequat, non congue turpis sollicitudin.",
      image: "https://picsum.photos/200/300"
    },
    {
      id: 3,
      title: "Etiam auctor, turpis vel ornare pharetra",
      content: "Etiam auctor, turpis vel ornare pharetra, mauris mauris tincidunt nisi, ac commodo turpis massa vel libero. Pellentesque suscipit suscipit ex, vel tincidunt tortor iaculis nec. Praesent tincidunt ex id massa consequat vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec bibendum sem vel quam sodales hendrerit.",
      image: "https://picsum.photos/200/300"
    }
  ];

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Latest News</h2>
      {newsData.map((news) => (
        <div key={news.id} style={{ display: 'flex', marginBottom: '2rem' }}>
          <img src={news.image} alt="News" style={{ width: '200px', marginRight: '2rem' }} />
          <div>
            <h3 style={{ marginBottom: '1rem' }}>{news.title}</h3>
            <p style={{ lineHeight: '1.5' }}>{news.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;
