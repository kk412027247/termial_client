import React from 'react';
import ShowDetail from './showDetail.js'
import Download from '../download/download';
import DownloadInfo from '../download/downloadInfo';
import Search from './search';
import '../main.css';
import Show from './show';

const Query = () => (
  <div>
    <div id="main">
      <Search/>
      <Show/>
      <ShowDetail/>
      <DownloadInfo/>
      <Download/>
    </div>
  </div>
);

export default Query;
