import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import {handleDetailImageUrl} from '../actions/fetchActions';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './showDetail.css';
import ShowTac from './showTac';
import ShowDeviceInfo from './showDeviceInfo';

class DetailItem extends React.Component {
  
  render(){
    const {detail, handleDetailImageUrl, url} = this.props;

    //显示参数信息模块
    const DetailItem =(info, ...arg)=>(
      <div>
        <div className="contain0">
          <span className="contain1">{info}</span>
          <span className="contain2">
            {arg.map(item=>(<ShowDeviceInfo item={item} key={item} />))}
          </span>
        </div>
        <Divider inset={true}/>
      </div>
    );
    
    return(
      <div>
        {/*图片显示模块*/}
        <TransitionGroup>
          {
            url !== '' &&
            <CSSTransition
              key={url}
              classNames={'show'}
              timeout={300}
            >
              <img
                className={'show-image'}
                src={url}
                alt={url}
                onClick={handleDetailImageUrl.bind(null,'')}

              />
            </CSSTransition> 
          }
        </TransitionGroup>

        {/*TAC显示模块*/}
        <div>
          <div className="contain0">
            <span className="contain1">TAC</span>
            <span className="contain2">
              {Array.isArray(detail.tac) && detail.tac.map((tac,index)=>(
                <ShowTac tac={tac} index={index} key={tac._id}/>
              ))}
            </span>
          </div>
          <Divider inset={true}/>
        </div>

        {/*参数详情显示模块*/}
        {DetailItem('概览','厂商(中文)','品牌(英文)','型号','子型号','支持GSM频段','支持TD-SCDMA频段','支持TD-LTE频段','支持WCDMA频段','支持FDD-LTE频段')}
        {DetailItem('基础信息','机长(mm)','机宽(mm)','机厚(mm)','重量(g)','外观','市场价格','上市时间(年月，格式：YYYYMM)','终端支持能力')}
        {DetailItem('CPU','CPU数量','CPU厂家','CPU型号','CPU时钟频率(MHz)')}
        {DetailItem('屏幕','是否触摸屏','触摸屏类型','是否支持多点触摸','屏幕个数','主屏大小(英寸)','主屏分辨率(横)','主屏分辨率(纵)','主屏色深')}
        {DetailItem('电源','充电器接口','电池容量','待机时间(小时)','通话时间(小时)')}
        {DetailItem('键盘与SIM卡','键盘类型','卡槽数量','是否支持双卡双待','双卡制式','是否支持OTA','SIM卡电压')}
        {DetailItem('摄像头','摄像头','摄像头像素(万像素)','微距镜头','补光灯个数','闪光灯个数','图像分辨率','照相功能','图像格式')}
        {DetailItem('软件平台与芯片组','操作系统','操作系统版本','开发平台','平台提供商')}
        {DetailItem('存储','手机存储空间大小','RAM大小','ROM大小','存储卡类型','存储卡最大容量','手机电话簿容量','通讯录是否支持名片式号码簿','通讯录是否支持分组管理')}
        {DetailItem('字符编码','支持的语言')}
        {DetailItem('连接','网络制式','制式等级','USSD','频段','是否支持蓝牙','支持的蓝牙版本','WIFI','WIFI支持协议','是否支持红外','USB接口版本','是否有内置MODEM','数据接口类型','是否支持GPS')}
        {DetailItem('软件平台与芯片组','操作系统','操作系统版本','开发平台','平台提供商')}
        {DetailItem('浏览器','是否支持表格')}
        {DetailItem('WAP','WAP版本')}
        {DetailItem('MMS','是否支持彩信')}
        {DetailItem('JAVA','是否支持Java')}
        {DetailItem('图片','支持的图像格式')}
        {DetailItem('声音','支持的声音格式','是否支持彩信','和旋数','是否有独立扬声器','是否支持mp3')}
        {DetailItem('FLASH','播放器支持的音乐格式')}
        {DetailItem('文件应用','支持的邮件协议','支持的文档格式')}
        {DetailItem('流媒体','流媒体下载','流媒体支持的声音格式','流媒体支持的视频格式')}
        {DetailItem('视频','是否支持动态内存')}
        {DetailItem('其它','一分钟录音','一万单词词典','关机闹铃')}
        {DetailItem('娱乐','重力感应','距离感应器器','电子罗盘','FM收音机','光线感应器')}
        {DetailItem('短信','长短信','短信群发')}
        {DetailItem('数据业务支持能力','MM客户端','手机阅读','无线城市','游戏')}
        {DetailItem('终端数据显示','是否支持显示附着状态','是否支持显示激活状态')}
        {DetailItem('新增属性','是否智能机','LTE设备是否支持CSFB','LTE设备是否支持单卡双待','是否支持FR','是否支持上行载波聚合','是否支持下行载波聚合','是否支持VOLTE')}
      </div>
    )
  }
}

DetailItem.propTypes ={
  detail: PropTypes.object,
  handleDetailImageUrl:PropTypes.func,
  url:PropTypes.string,
};


const mapStateToProps = (state)=>({
  detail: state.fetchReducer.detail,
  url:state.fetchReducer.detailImageUrl,
});

const mapDispatchToProps = (dispatch) =>({
  handleDetailImageUrl:(url)=> dispatch(handleDetailImageUrl(url)),
});

export default connect (mapStateToProps, mapDispatchToProps)(DetailItem)
