import React from "react";
export default class GamesMain extends React.Component{
	constructor(){
		super();
	}
	render(){
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
				        <input type="text" className="form-control" id="gameName" placeholder="赛事名称" />
				      </div>
				      <div className="form-group">
				        <label>主办单位</label>
				        <input type="text" className="form-control" id="hostUnit" placeholder="主办单位" />
				      </div>
				      <div className="form-group">
				        <label>承办单位</label>
				        <input type="text" className="form-control" id="undertakeUnit" placeholder="承办单位" />
				      </div>
				      <button type="button" className="btn btn-default" id="gameSearchBtn"><a>搜索</a></button>
				    </form>
				</div>

			    {/*体育赛事表格*/}
			    <div className="table-responsive normal mLR tbodyLeft" style={{marginTop:"20px"}}>
	    			<table className="table tableColor tablebor NoMB" id="gameTable">
						<thead className="tabelH">
							<tr>
								<th style={{width:'170px'}}>赛事名称</th>
								<th style={{width:'168px'}}>赛事级别</th>
								<th style={{width:'168px'}}>起始时间</th>
								<th style={{width:'168px'}}>结束时间</th>
								<th style={{width:'168px'}}>观众人数</th>
								<th style={{width:'104px'}}>操作</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td style={{width:'170px'}}></td>
								<td style={{width:'168px'}}></td>
								<td style={{width:'168px'}}></td>
								<td style={{width:'168px'}}></td>
								<td style={{width:'168px'}}></td>
								<td style={{width:'104px'}}></td>
							</tr>
						</tbody>
				    </table>
				</div>

			</div>
			)
	}
};