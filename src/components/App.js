import React from 'react';
import Header from './header/Header';
import NewsList from './news/NewsList';
import TagsContainer from '../containers/TagsContainer';

export default function App() {
  return (
    <>
      <Header />
      <NewsList
        news={[
          {
            title: 'Fubo Sports Network will stream live sports and original shows',
            description: `FuboTV is bringing original programming and live sports to 
            its free Fubo Sports Network. The channel will feature shows hosted by 
            popular sports personalities including former ESPN and Fox Sports reporter 
            Julie Stewart-Binks and former LA Galaxy plyer Cobi Jo…`,
            image: 'https://o.aolcdn.com/images/dims?thumbnail=1200%2C630&quality=80&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1024%252C576%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C900%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-09%252F36cd5bc0-d277-11e9-bfed-8c4ca7efa253%26client%3Da1acac3e1b3290917d92%26signature%3D008f6bf9f8e73afcaf1a5fd9c32f14b6cab2f0e1&client=amp-blogside-v2&signature=f125ec3f43026c096b1dd4eb97e760c4169c9d98',
            author: 'Eric Addams',
            date: '03-20-2019',
            sourceName: 'Engadget',
            sourceLink: 'https://www.engadget.com/2019/09/09/fubo-sports-network-will-stream-live-sports-and-original-shows/',
            tagColor: '#654321'
          }
        ]}
      />
      <TagsContainer />
    </>
  );
}
