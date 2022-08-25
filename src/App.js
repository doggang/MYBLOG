import './App.css';
import { useState } from 'react';

function App(){
  let [title, setTitle] = useState(["남자코트추천", "강남우동맛집", "파이썬독학"])
  let [likeNum, setLikeNum] = useState([0, 0, 0]);
  let [modalState, setModalState] = useState(false);
  let [modalPageNum, setModalPageNum] = useState(0);
  let [newRegister, setNewRegeister] = useState('');
  let [detail, setDetail] = useState(["ㅇ","ㅇ","ㅇ"]);
  let [newDetail, settNewDetail] = useState('');
  let date = new Date();
  let now = date.toLocaleString();
  let [time, setTime] = useState([now,now,now]);
  let [newTime, setNewTime] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>My Blog</h4>
      </div>
      <button onClick={()=>{
        let copy = [...title];
        copy.sort();
        setTitle(copy);
      }} style={{position:'relative', margin:'20px 0 0 20px'}}>가나다순 정렬</button>

      {
        title.map((num, i)=>{
          return(
            <div className="list">
              <h4 onClick={()=>{
                if(modalState==false){
                  setModalState(true)
                  setModalPageNum(i);
                }else{
                  setModalState(false);
                  setModalPageNum(i);
                }
              }}>{num} <span onClick={()=>{
                let copy = [...likeNum];
                copy[i] = copy[i]+1;
                setLikeNum(copy);
              }}>👍</span> {likeNum[i]}</h4>
              <p>{`${time[i]} 등록`}</p>
              <button onClick={()=>{
                let copy = [...title];
                copy.splice(i,1);
                setTitle(copy);
              }}>삭제</button>
            </div>
          )
        })
      }
      {
        modalState == true ? <Modal title={title} modalPageNum={modalPageNum} detail={detail} time={time}/> : null
      }
      
      <div style={{margin:'20px'}}>
        <input type="text" placeholder="title" onChange={(e)=>{setNewRegeister(e.target.value)}} style={{
          position:'relative',
          width:'60%',
          height:'25px'
        }} />
        <br/>
        <textarea type="text" placeholder="content" style={{
          width: '60%',
          marginTop:'10px',
          height: '6.25em',
          resize: 'none',
          fontStyle:'normal'
        }} onChange={(e)=>{settNewDetail(e.target.value)}}></textarea>
        <br/>
        <button onClick={()=>{
          if(newRegister=='' || newDetail==''){
            alert("오류!");
          }else{
            let copy=[...title];
            copy.unshift(newRegister);
            setTitle(copy);

            let likecopy=[...likeNum];
            likecopy.unshift(0);
            setLikeNum(likecopy);

            let detailcopy=[...detail];
            detailcopy.unshift(newDetail);
            setDetail(detailcopy);

            let timecopy=[...time];
            timecopy.unshift(date.toLocaleString());
            setTime(timecopy);
          }
        }}>등록</button>
      </div>
    </div>
  )
}

function Modal(props){
  return(
    <div className="modal">
      <h4>{props.title[props.modalPageNum]}</h4>
      <p>{props.time[props.modalPageNum]}</p>
      <p>{props.detail[props.modalPageNum]}</p>
    </div>
  )
}

export default App;
