import React from "react";
import {connect} from 'react-redux';
import * as action from '../../redux/actions/actions.js';
import TablePage from "../TablePage"
class GamesMain extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const {dispatch, id}=this.props
        dispatch(action.getGamesMainData(id))
    }

    render() {
        const {data}=this.props;
        return (
            <div>
                <div className="location">
                    <h3>&gt;<span> 体育赛事 </span></h3>
                </div>
                {/*查询*/}
                <div className="topSearch RightInfo mLR MB">
                    <form className="form-inline" id="gameSearchForm">
                        <div className="form-group">
                            <label >赛事名称</label>
                            <input type="text" className="form-control" id="gameName" placeholder="赛事名称"/>
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
                    <table className="table tableColor tablebor NoMB" id="gameTable">
                        <thead className="tabelH">
                        <tr>
                            <th style={{width: '170px'}}>赛事名称</th>
                            <th style={{width: '168px'}}>赛事级别</th>
                            <th style={{width: '168px'}}>起始时间</th>
                            <th style={{width: '168px'}}>结束时间</th>
                            <th style={{width: '168px'}}>观众人数</th>
                            <th style={{width: '104px'}}>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            data.length == 0 ? (<tr>
                                <td style={{width: '945px'}}>没有数据</td>
                            </tr>) : data.map((index, i)=>(
                                <tr key={i}>
                                    <td style={{width: '170px'}}>{index.name}</td>
                                    <td style={{width: '168px'}}>{}</td>
                                    <td style={{width: '168px'}}>{index.startDate}</td>
                                    <td style={{width: '168px'}}>{index.endDate}</td>
                                    <td style={{width: '168px'}}>{index.number}</td>
                                    <td style={{width: '104px'}}>
                                            <button className="btn btn-warning btn-xs delBtn"><a
                                                name="57eb3208f2a6e3c946377cc1">删除</a></button>
                                            <button className="btn btn-info btn-xs detBtn"><a
                                                name="57eb3208f2a6e3c946377cc1">查看</a></button>
                                    </td>
                                </tr>
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
        data: store.data.sportsActivs == undefined ? [] : store.data.sportsActivs,
        id: store.lookData.id
    }
}
export default connect(filter)(GamesMain)