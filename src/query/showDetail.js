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
};


const ShowDetail= ({state,fDialog}) =>(
  <Dialog
    title="详细信息"
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
      <span className="contain1"> ‘图片预留区域’ </span>
      <span className="contain2">
        <div className="item">
          <span className="key"> 厂商(中文) </span>
          <TextField
            onFocus={console.log('focus')}
            onBlur={console.log('blur')}
            onChange={console.log('change')}
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="三星"
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
            defaultValue="Note 7"
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

    <Divider className="divider"/>

    <div className="contain0">
      <span className="contain1">基础信息</span>
      <span className="contain2">
        <div className="item">
          <span className="key">机长（mm）</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">机长（mm）</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">机宽（mm）</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">机厚（mm）</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">重量(g)</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">外观</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">市场定位</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">市场价格</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">上市时间</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">终端支持能力</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
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
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">CPU厂家</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">CPU型号</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">CPU时钟频率（MHz)</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
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
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">触摸屏类型</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">是否支持多点触摸</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">屏幕个数</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">主屏大小（英寸）</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">主屏分辨率(横)</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">主屏分辨率(纵)</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">主屏色深</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
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
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">电池容量</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">待机时间(小时)</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">通话时间(小时)</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
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
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">卡槽数量</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">是否支持双卡双待</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">双卡制式</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">是否支持OTA</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">SIM卡电压</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
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
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">摄像头像素（万像素）</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
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
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">图像分辨率</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">照相功能</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">图像格式</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
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
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">操作系统版本</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">开发平台</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">平台提供商</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
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
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">RAM大小</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">ROM大小</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">存储卡类型</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">存储卡最大容量</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">手机电话簿容量</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">通讯录是否支持名片式号码簿</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">通讯录是否支持分组管理</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
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
            defaultValue="2222222222"
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
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">制式等级</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">USSD</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">频段</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">是否支持蓝牙</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">支持的蓝牙版本</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">WIFI</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">WIFI支持协议</span>
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
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">USB接口版本</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">是否有内置MODEM</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">数据接口类型</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">是否支持GPS</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>
    <div className="contain0">
      <span className="contain1">基础信息</span>
      <span className="contain2">
        <div className="item">
          <span className="key">机长（mm）</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">机长（mm）</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">机宽（mm）</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">机厚（mm）</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">重量(g)</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">外观</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">市场定位</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">市场价格</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">上市时间</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">终端支持能力</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>
    <div className="contain0">
      <span className="contain1">基础信息</span>
      <span className="contain2">
        <div className="item">
          <span className="key">机长（mm）</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">机长（mm）</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">机宽（mm）</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">机厚（mm）</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">重量(g)</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">外观</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">市场定位</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">市场价格</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">上市时间</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">终端支持能力</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>
    <div className="contain0">
      <span className="contain1">基础信息</span>
      <span className="contain2">
        <div className="item">
          <span className="key">机长（mm）</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">机长（mm）</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">机宽（mm）</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">机厚（mm）</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">重量(g)</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">外观</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">市场定位</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">市场价格</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">上市时间</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">终端支持能力</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
      </span>
    </div>
    <Divider className="divider"/>
    <div className="contain0">
      <span className="contain1">基础信息</span>
      <span className="contain2">
        <div className="item">
          <span className="key">机长（mm）</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">机长（mm）</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">机宽（mm）</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">机厚（mm）</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">重量(g)</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">外观</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">市场定位</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">市场价格</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">上市时间</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
          />
        </div>
        <div className="item">
          <span className="key">终端支持能力</span>
          <TextField
            className="value"
            fullWidth={true}
            underlineShow={false}
            defaultValue="2222222222"
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
