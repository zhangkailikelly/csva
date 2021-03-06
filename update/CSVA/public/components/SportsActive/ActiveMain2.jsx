import React from "react";
import {connect} from 'react-redux';
import * as action from '../../redux/actions/actions.js';
import TablePage from "../TablePage"
class GamesMain2 extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const {dispatch, id}=this.props
        dispatch(action.getActiveMainData2(id))
    }

    render() {
        const {data}=this.props;
        return (
            <div>
                <div className="location">
                    <h3>&gt;<span> 其他文体活动 </span></h3>
                </div>
                {/*查询*/}
                <div className="topSearch RightInfo  mLR">
                    <form className="form-inline" id="gameSearchForm">
                        <div className="form-group">
                            <label >活动名称</label>
                            <input type="text" className="form-control" id="gameName" placeholder="活动名称"/>
                        </div>
                        <div className="form-group">
                            <label>主办单位</label>
                            <input type="text" className="form-control" id="hostUnit" placeholder="主办单位"/>
                        </div>
                        <div className="form-group">
                            <label>承办单位</label>
                            <input type="text" className="form-control" id="undertakeUnit" placeholder="承办单位"/>
                        </div>
                        <button type="button" className="btn btn-default" id="gameSearchBtn"><a>搜索</a></button>
                    </form>
                </div>

                {/*体育赛事表格*/}
                <div className="table-responsive normal mLR tbodyLeft" style={{marginTop: "20px"}}>
                    <table className="table tableColor tablebor NoMB">
                        <thead className="tabelH">
                        <tr>
                            <th style={{width: '197px'}}>活动名称</th>
                            <th style={{width: '206px'}}>起始时间</th>
                            <th style={{width: '206px'}}>结束时间</th>
                            <th style={{width: '195px'}}>观众人数</th>
                            <th style={{width: '142px'}}>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            data.length == 0 ? (<tr>
                                <td style={{width: '945px'}}>没有数据</td>
                            </tr>) : (data.map((index, i)=>
                                (
                                    <tr key={i}>
                                        <td style={{width: '197px'}}>{index.name}</td>
                                        <td style={{width: '206px'}}>{index.startDate}</td>
                                        <td style={{width: '206px'}}>{index.endDate}</td>
                                        <td style={{width: '195px'}}>{index.number}</td>
                                        <td style={{width: '142px'}}>
                                            <button className="btn btn-warning btn-xs delBtn"><a
                                                name="57eb3208f2a6e3c946377cc1">删除</a></button>
                                            <button className="btn btn-info btn-xs detBtn"><a
                                                name="57eb3208f2a6e3c946377cc1">查看</a></button>
                                        </td>
                                    </tr>
                                )
                            ))
                        }
                        </tbody>
                    </table>
                    <TablePage/>
                </div>

            </div>
        )
    }
}
;
function filter(store) {
    return {
        data: store.data.otherActivity == undefined ? [] : store.data.otherActivity,
        id: store.lookData.id
    }
}
export default connect(filter)(GamesMain2)