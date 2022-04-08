import styled from '/pages/common/styles/table.module.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
const Table = ({ columns, colSpan, data }) => {
    return (
        <table className={styled.table}>
            <thead>
                <tr className={styled.tr}>
                    {columns.map((column) => (
                        <th key={column.username} className={styled.td}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                
                    {data.length == 0 ?<td colSpan={colSpan} className={styled.td}>데이터가 없습니다</td>
                        : data.map((user)=>(
                    <tr className={styled.tr} key={user.username}>
                        <td className={styled.td}>{ user.username}</td>
                        <td className={styled.td}>{ user.pw}</td>
                        <td className={styled.td}>{ user.name}</td>
                        <td className={styled.td}>{ user.telephone}</td>
                    </tr>
    ))}
                
            </tbody>
        </table>
    );
    }
export default function Userlist(){
    const columns = ['username', 'pw', 'name', 'telephone'];
    const [data, setData] = useState([]);
    const count = data.length;  
    useEffect(() => {
        axios.get('http://localhost:5000/api/user/list').then(res => {
            setData(res.data.users)
        }).catch(err => {})
    }, []);
    return (
        <>
            <h1>사용자 목록</h1>
            {count != 0 && <h3>회원수 : {count}명 </h3>}
            <div className={styled.td}>
                <Table columns={columns} colSpan={4} data={data}/>
            </div>
        </>
    )
}