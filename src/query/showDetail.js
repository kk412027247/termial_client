import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom'
import {handleDialog} from "../actions";

const styles = {
  update:{
    marginRight: '64%',
  },
  link:{
    display:'flex',
    justifyContent: 'center',
    textDecoration: 'none'
  }
};




const ShowDetail= ({state,hDialog}) =>(
  <Dialog
    title="详细信息"
    autoScrollBodyContent={true}
    onRequestClose={hDialog}
    actions={[
      <FlatButton style={styles.update}>
        <Link style={styles.link} to="/update">修改</Link>
      </FlatButton>,
      <FlatButton
        label='导出'
        onClick={hDialog}
      />,
      <FlatButton
        label='取消'
        onClick={hDialog}
      />
    ]}
    open={state.dialog}
    modal={false}
  >
    "是否支持GPS" : true, <br/>
    "是否支持NFC" : false, <br/>
    "是否支持FR" : true, <br/>
    "是否触摸屏" : true, <br/>
    "是否支持多点触摸" : true, <br/>
    "屏幕个数" : 1, <br/>
    "是否支持快速充电" : true, <br/>
    "卡槽数量" : 1, <br/>
    "通讯录是否支持名片式号码簿" : true, <br/>
    "是否支持蓝牙" : true, <br/>
    "WIFI" : true, <br/>
    "是否支持网络热点" : true, <br/>
    "厂商" : "vivo", <br/>
    "品牌(英文)" : " X20 Plus", <br/>
    "型号" : " X20 Plus", <br/>
    "子型号" : " X20 Plus", <br/>
    "上市时间" : "2017年09月", <br/>
    "市场定位" : "4G手机，3G手机，智能手机，平板手机，拍照手机，音乐手机，快充手机，游戏手机", <br/>
    "是否智能机" : true, <br/>
    "触摸屏类型" : "电容屏，多点触控", <br/>
    "主屏大小(英寸)" : "6.43英寸", <br/>
    "主屏材质" : "Super AMOLED", <br/>
    "主屏分辨率(横)" : "2160", <br/>
    "主屏分辨率(纵)" : "1080", <br/>
    "网络制式" : "移动TD-LTE，联通TD-LTE，联通FDD-LTE，电信TD-LTE，电信FDD-LTE移动3G（TD-SCDMA），联通3G（WCDMA），电信3G（CDMA2000），联通2G/移动2G（GSM）",
    <br/>
    "终端支持能力" : "移动TD-LTE，联通TD-LTE，联通FDD-LTE，电信TD-LTE，电信FDD-LTE移动3G（TD-SCDMA），联通3G（WCDMA），电信3G（CDMA2000），联通2G/移动2G（GSM）移动3G（TD-SCDMA），联通3G（WCDMA），电信3G（CDMA2000），联通2G/移动2G（GSM）",
    <br/>
    "支持TD-LTE频段" : "B34/38/39/40/41\n4G：FDD-LTE B1/2/3/4/5/8\n4G+ TD-LTE：B38/39/40/41", <br/>
    "频段" : "2G：CDMA 800\n2G：GSM 850/900/1800/1900\n3G：CDMA EVDO 800\n3G：WCDMA 850/900/1900/2100\n3G：TD-SCDMA 1880/2010\n4G：TD-LTE B34/38/39/40/41\n4G：FDD-LTE B1/2/3/4/5/8\n4G+ TD-LTE：B38/39/40/41\n4G+ FDD-LTE：B1/3/B1+B3",
    <br/>
    "SIM卡" : "双卡", <br/>
    "WIFI支持协议" : "双频WIFI，IEEE 802.11 a/b/g/n/ac", <br/>
    "操作系统" : "Funtouch OS 3.2（基于Android 7.1）", <br/>
    "CPU数量" : "八核", <br/>
    "CPU芯片型号(ARM版本)" : "高通 骁龙660", <br/>
    "RAM容量" : "4GB", <br/>
    "ROM容量" : "64GB", <br/>
    "电池容量" : "3905mAh", <br/>
    "摄像头" : "三摄像头（后双）", <br/>
    "后置摄像头" : "（2400万感光单元）2x1200万像素+500万像素", <br/>
    "前置摄像头" : "（2400万感光单元）2x1200万像素", <br/>
    "闪光灯" : "LED补光灯（双）", <br/>
    "视频拍摄" : "支持", <br/>
    "拍照功能" : "前置：动态照片，美颜，逆光，人像背景虚化，前置全景\n后置：慢镜头，逆光，动态照片，人像背景虚化，全景，超清画质，文 档矫正，专业拍照，延时摄影，美颜", <br/>
    "外观" : "直板", <br/>
    "机长(mm)" : "165.32", <br/>
    "机宽(mm)" : "80.09", <br/>
    "机厚(mm)" : "7.45", <br/>
    "重量(g)" : "181.5", <br/>
    "操作类型" : "虚拟按键", <br/>
    "充电器接口" : "Micro USB v2.0数据接口", <br/>
    "date" : ISODate("2017-10-22T12:17:25.671Z"), <br/>
  </Dialog>
);



ShowDetail.propTypes = {
 state:PropTypes.object,
};

const mapStateToProps = (state) =>({
  state: state.reducerQuery
});

const mapDispatchToProps = (dispatch) => ({
  hDialog: () => dispatch(handleDialog())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetail);
