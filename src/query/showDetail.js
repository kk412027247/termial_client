import React from 'react';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import {Link} from 'react-router-dom'
import {fetchDialog} from "../actionsFetch";
import {orange500} from 'material-ui/styles/colors';

import './showDetail.css';

const styles = {
  update:{
    marginRight: '64%',
  },
  link:{
    display:'flex',
    justifyContent: 'center',
    textDecoration: 'none'
  },
  dialogContent:{
    width: '1263px',
    maxWidth:'none'
  },
  title:{
    marginLeft:'14%',
  }
};


const ShowDetail= ({state,fDialog}) =>(
  <Dialog
    title="详细信息"
    titleStyle={styles.title}
    autoScrollBodyContent={true}
    contentStyle={styles.dialogContent}
    onRequestClose={fDialog}
    actions={[
      <FlatButton style={styles.update}>
        <Link style={styles.link} to="/update">修改</Link>
      </FlatButton>,
      <FlatButton
        label='导出'
        onClick={fDialog}
      />,
      <FlatButton
        label='取消'
        onClick={fDialog}
      />
    ]}
    // open={state.dialog}
    open={true}
    modal={false}
  > <br/>
    <div className="contain0">
      <span className="contain1">
        <div className="image">
         ' 图片预留区域'
        </div>
      </span>
      <span className="contain2">
        <div className="item">
          <span className="key"> 厂商(中文) </span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            underlineStyle={{color:'rgb(0, 139, 139)'}}
            defaultValue="三星"
            onFocus={()=>console.log(1)}
          />
        </div>
        <div className="item">
          <span className="key">品牌（英文）</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="samsung"
          />
        </div>
        <div className="item">
          <span className="key">型号</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="GALAXY Note 8"
          />
        </div>
        <div className="item">
          <span className="key">子型号</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue=""
          />
        </div>
      </span>

    </div>
    <Divider inset={true}/>


    <div className="contain0">
      <span className="contain1">基础信息</span>
      <span className="contain2">
        <div className="item">
          <span className="key">机长（mm）</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="162.5"
          />
        </div>
        <div className="item">
          <span className="key">机宽（mm）</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="74.8"
          />
        </div>
        <div className="item">
          <span className="key">机厚（mm）</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="8x8.6"
          />
        </div>
        <div className="item">
          <span className="key">重量(g)</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="195g"
          />
        </div>
        <div className="item">
          <span className="key">外观</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="直板"
          />
        </div>
        <div className="item">
          <span className="key">市场定位</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="¥6638 - 7588"
          />
        </div>
        <div className="item">
          <span className="key">上市时间</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2017年09月"
          />
        </div>
        <div className="item">
          <span className="key">终端支持能力</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="移动TD-LTE，联通TD-LTE，联通FDD-LTE，电信TD-LTE，电信FDD-LTE
3G网络移动3G（TD-SCDMA），联通3G（WCDMA）"
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>

    <div className="contain0">
      <span className="contain1">CPU</span>
      <span className="contain2">
        <div className="item">
          <span className="key">CPU数量</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="八核"
          />
        </div>
        <div className="item">
          <span className="key">CPU厂家</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="高通"
          />
        </div>
        <div className="item">
          <span className="key">CPU型号</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="骁龙835（MSM8998）"
          />
        </div>
        <div className="item">
          <span className="key">CPU时钟频率（MHz)</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2.35GHz（大四核），1.9GHz（小四核）"
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>

    <div className="contain0">
      <span className="contain1">屏幕</span>
      <span className="contain2">
        <div className="item">
          <span className="key">是否触摸屏</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
        <div className="item">
          <span className="key">触摸屏类型</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="电容屏，多点触控"
          />
        </div>
        <div className="item">
          <span className="key">是否支持多点触摸</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
        <div className="item">
          <span className="key">屏幕个数</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
        <div className="item">
          <span className="key">主屏大小（英寸）</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="6.3英寸"
          />
        </div>
        <div className="item">
          <span className="key">主屏分辨率(横)</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2960"
          />
        </div>
        <div className="item">
          <span className="key">主屏分辨率(纵)</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1440"
          />
        </div>
        <div className="item">
          <span className="key">主屏色深</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue=""
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>

    <div className="contain0">
      <span className="contain1">电源</span>
      <span className="contain2">
        <div className="item">
          <span className="key">充电器接口</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="USB Type-C接口"
          />
        </div>
        <div className="item">
          <span className="key">电池容量</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="3300mAh"
          />
        </div>
        <div className="item">
          <span className="key">待机时间(小时)</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="600小时"
          />
        </div>
        <div className="item">
          <span className="key">通话时间(小时)</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue=""
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>

    <div className="contain0">
      <span className="contain1">键盘与SIM卡</span>
      <span className="contain2">
        <div className="item">
          <span className="key">键盘类型</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="虚拟按键"
          />
        </div>
        <div className="item">
          <span className="key">卡槽数量</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2"
          />
        </div>
        <div className="item">
          <span className="key">是否支持双卡双待</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
        <div className="item">
          <span className="key">双卡制式</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
        <div className="item">
          <span className="key">是否支持OTA</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
        <div className="item">
          <span className="key">SIM卡电压</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue=""
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>

    <div className="contain0">
      <span className="contain1">摄像头</span>
      <span className="contain2">
        <div className="item">
          <span className="key">摄像头</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="三摄像头（后双）"
          />
        </div>
        <div className="item">
          <span className="key">摄像头像素（万像素）</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="双1200万像素"
          />
        </div>
        <div className="item">
          <span className="key">微距镜头</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">补光灯个数</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">闪光灯个数</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="LED补光灯"
          />
        </div>
        <div className="item">
          <span className="key">图像分辨率</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue=""
          />
        </div>
        <div className="item">
          <span className="key">照相功能</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="双OIS光学防抖，相位对焦，3D深度感测，超级夜景拍摄，智能自动对焦，2倍光学变焦，10倍数码变焦，饮食模式，专业模式，全景模式，慢动作，双景深拍摄，白平衡，极速双核对焦 "
          />
        </div>
        <div className="item">
          <span className="key">图像格式</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue=""
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>

    <div className="contain0">
      <span className="contain1">软件平台与芯片组</span>
      <span className="contain2">
        <div className="item">
          <span className="key">操作系统</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="Android 7.1"
          />
        </div>
        <div className="item">
          <span className="key">操作系统版本</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="7.1"
          />
        </div>
        <div className="item">
          <span className="key">开发平台</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue=""
          />
        </div>
        <div className="item">
          <span className="key">平台提供商</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue=""
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>

    <div className="contain0">
      <span className="contain1">存储</span>
      <span className="contain2">
        <div className="item">
          <span className="key">手机存储空间大小</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue=""
          />
        </div>
        <div className="item">
          <span className="key">RAM大小</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="6GB"
          />
        </div>
        <div className="item">
          <span className="key">ROM大小</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="64GB/128GB/256GB"
          />
        </div>
        <div className="item">
          <span className="key">存储卡类型</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="MicroSD卡"
          />
        </div>
        <div className="item">
          <span className="key">存储卡最大容量</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="256GB"
          />
        </div>
        <div className="item">
          <span className="key">手机电话簿容量</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue=""
          />
        </div>
        <div className="item">
          <span className="key">通讯录是否支持名片式号码簿</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
        <div className="item">
          <span className="key">通讯录是否支持分组管理</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>

    <div className="contain0">
      <span className="contain1">字符编码</span>
      <span className="contain2">
        <div className="item">
          <span className="key">支持的语言</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
      </span>
    </div>

    <div className="contain0">
      <span className="contain1">连接</span>
      <span className="contain2">
        <div className="item">
          <span className="key">网络制式</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2G：CDMA 800
                          2G：GSM 850/900/1800/1900
                          3G：TD-SCDMA B34/39
                          3G：WCDMA B1/2/5/8
                          3G：CDMA EVDO 800
                          4G：TD-LTE B34/38/39/40/41
                          4G：FDD-LTE B1/2/3/4/5/7/8/12/13/17/18/19/20/25/26/28"
          />
        </div>
        <div className="item">
          <span className="key">制式等级</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue=""
          />
        </div>
        <div className="item">
          <span className="key">USSD</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue=""
          />
        </div>
        <div className="item">
          <span className="key">频段</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2G：CDMA 800
                          2G：GSM 850/900/1800/1900
                          3G：TD-SCDMA B34/39
                          3G：WCDMA B1/2/5/8
                          3G：CDMA EVDO 800
                          4G：TD-LTE B34/38/39/40/41
                          4G：FDD-LTE B1/2/3/4/5/7/8/12/13/17/18/19/20/25/26/28"
          />
        </div>
        <div className="item">
          <span className="key">是否支持蓝牙</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
        <div className="item">
          <span className="key">支持的蓝牙版本</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="5.0"
          />
        </div>
        <div className="item">
          <span className="key">WIFI</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
        <div className="item">
          <span className="key">IEEE 802.11 a/b/g/n/ac</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">是否支持红外</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="0"
          />
        </div>
        <div className="item">
          <span className="key">USB接口版本</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="USB Type-C接口 "
          />
        </div>
        <div className="item">
          <span className="key">是否有内置MODEM</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue=""
          />
        </div>
        <div className="item">
          <span className="key">数据接口类型</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue=""
          />
        </div>
        <div className="item">
          <span className="key">是否支持GPS</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>
    <div className="contain0">
      <span className="contain1">浏览器</span>
      <span className="contain2">
        <div className="item">
          <span className="key">是否支持表格</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>
    <div className="contain0">
      <span className="contain1">WAP</span>
      <span className="contain2">
        <div className="item">
          <span className="key">WAP版本</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue=""
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>
    <div className="contain0">
      <span className="contain1">MMS</span>
      <span className="contain2">
        <div className="item">
          <span className="key">是否支持彩信</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>

    <div className="contain0">
      <span className="contain1">JAVA</span>
      <span className="contain2">
        <div className="item">
          <span className="key">是否支持Java</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>

    <div className="contain0">
      <span className="contain1">图片</span>
      <span className="contain2">
        <div className="item">
          <span className="key">支持的图像格式</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue=""
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>

    <div className="contain0">
      <span className="contain1">声音</span>
      <span className="contain2">
        <div className="item">
          <span className="key">支持的声音格式</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="mp3"
          />
        </div>
        <div className="item">
          <span className="key">是否支持彩信</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
        <div className="item">
          <span className="key">和旋数</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="64"
          />
        </div>
        <div className="item">
          <span className="key">是否有独立扬声器</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
        <div className="item">
          <span className="key">是否支持mp3</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>

    <div className="contain0">
      <span className="contain1">FLASH</span>
      <span className="contain2">
        <div className="item">
          <span className="key">播放器支持的音乐格式</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="mp3"
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>

    <div className="contain0">
      <span className="contain1">文件应用</span>
      <span className="contain2">
        <div className="item">
          <span className="key">支持的邮件协议</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue=""
          />
        </div>
        <div className="item">
          <span className="key">支持的文档格式</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue=""
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>

    <div className="contain0">
      <span className="contain1">流媒体</span>
      <span className="contain2">
        <div className="item">
          <span className="key">流媒体下载</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
        <div className="item">
          <span className="key">流媒体支持的声音格式</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="mp3"
          />
        </div>
        <div className="item">
          <span className="key">流媒体支持的视频格式</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="mp4"
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>

    <div className="contain0">
      <span className="contain1">视频</span>
      <span className="contain2">
        <div className="item">
          <span className="key">是否支持动态内存</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>

    <div className="contain0">
      <span className="contain1">其它</span>
      <span className="contain2">
        <div className="item">
          <span className="key">一分钟录音</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
        <div className="item">
          <span className="key">一万单词词典</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
        <div className="item">
          <span className="key">关机闹铃</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>

    <div className="contain0">
      <span className="contain1">娱乐</span>
      <span className="contain2">
        <div className="item">
          <span className="key">重力感应</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
        <div className="item">
          <span className="key">距离感应器器</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
        <div className="item">
          <span className="key">电子罗盘</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
        <div className="item">
          <span className="key">FM收音机</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
        <div className="item">
          <span className="key">光线感应器</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>

    <div className="contain0">
      <span className="contain1">短信</span>
      <span className="contain2">
        <div className="item">
          <span className="key">长短信</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
        <div className="item">
          <span className="key">短信群发</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>

    <div className="contain0">
      <span className="contain1">视频</span>
      <span className="contain2">
        <div className="item">
          <span className="key">是否支持动态内存</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>

    <div className="contain0">
      <span className="contain1">数据业务支持能力</span>
      <span className="contain2">
        <div className="item">
          <span className="key">MM客户端</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
        <div className="item">
          <span className="key">手机阅读</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
        <div className="item">
          <span className="key">无线城市</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
        <div className="item">
          <span className="key">游戏</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>

    <div className="contain0">
      <span className="contain1">终端数据显示</span>
      <span className="contain2">
        <div className="item">
          <span className="key">是否支持显示附着状态</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
         <div className="item">
          <span className="key">是否支持显示激活状态</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>

    <div className="contain0">
      <span className="contain1">新增属性</span>
      <span className="contain2">
        <div className="item">
          <span className="key">是否智能机</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
         <div className="item">
          <span className="key">LTE设备是否支持CSFB</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
        <div className="item">
          <span className="key">LTE设备是否支持单卡双待</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
        <div className="item">
          <span className="key">是否支持FR</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
        <div className="item">
          <span className="key">是否支持上行载波聚合</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
        <div className="item">
          <span className="key">是否支持下行载波聚合</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
        <div className="item">
          <span className="key">LTE设备是否支持CSFB</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
         <div className="item">
          <span className="key">是否支持VOLTE</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="1"
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>


    {Object.keys(state.detail).map(item=>(
      <div key={item} >
        <TextField
          floatingLabelStyle= {{color: orange500}}
          hintText={item}
          floatingLabelText={item}
          value={state.detail[item]}
        />
      </div>
    ))}


  </Dialog>
);



ShowDetail.propTypes = {
 state:PropTypes.object,
  fDialog:PropTypes.func,
};

const mapStateToProps = (state) =>({
  state: state.reducerFetch
});

const mapDispatchToProps = (dispatch) => ({
  fDialog: () => dispatch(fetchDialog())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetail);
