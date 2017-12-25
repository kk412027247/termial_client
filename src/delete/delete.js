import React from 'react' ;
import host from '../host.js';


class Delete extends React.Component{
  render(){
    return(
      <div>
        规划中……

        {/*前端上传API完成，不用设置headers，总之不用*/}
        <input type='file' accept={'.xlsx, .xls'} onChange={
          event=>{
            if(event.target.files[0]){
              const formData = new FormData();
              formData.append('file', event.target.files[0]);
              fetch(`http://${host}:3001/uploadTac`,{
                method:'post',
                credentials:'include',
                body:formData,
              }).then(res=>res.json())
                .then(console.log)}
          }}/>
      </div>
    )
  }
}




export default Delete ;
