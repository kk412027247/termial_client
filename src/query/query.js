import React from 'react';
import ShowDetail from './showDetail.js'
import Download from '../download/download';
import DownloadInfo from '../download/downloadInfo';
import Search from './search';
import '../main.css';
import ShowResult from './showResult';

const Query = () => (
  <div>
    <div id="main">
      <Search/>
      <ShowResult/>
      <ShowDetail/>
      <DownloadInfo/>
      <Download/>
    </div>
  </div>
);

export default Query;
