import React from "react";
export default class ServiceMajor extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div>
			    <div className="location">
 					 <h3>&gt;<span> 运动健身指导列表 </span></h3>
				</div>
			    {/*查询*/}
				<div className="topSearch RightInfo mLR MB">
				    <form className="form-inline" id="gameSearchForm">
				        <div className="form-group">
				            <label style={{width:"100px"}}>运动队(员)名字</label>
				            <input type="text" className="form-control" placeholder="运动队(员)名字" />
				        </div>
				      <button type="button" className="btn btn-default" id="gameSearchBtn"><a>搜索</a></button>
				    </form>
				</div>

			    {/*体育赛事表格*/}
			    <div className="table-responsive normal mLR tbodyLeft" style={{marginTop:"20px"}}>
	    			<table className="table tableColor tablebor NoMB" id="gameTable">
						<thead className="tabelH">
							<tr>
								<th style={{width:'170px'}}>培训名称</th>
								<th style={{width:'168px'}}>培训项目</th>
								<th style={{width:'168px'}}>起始时间</th>
								<th style={{width:'168px'}}>结束时间</th>
								<th style={{width:'168px'}}>总天数</th>
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