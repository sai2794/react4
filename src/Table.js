import React from 'react';
const Table = ({ data }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#000000' }}>
            <table className='table table-striped table-bordered table-warning'>
                <tr>
                    <th className='px-2'>Sno</th>
                    <th className='px-2'>Profile Pic</th>
                    <th className='px-2'> First Name</th>
                    <th className='px-2'> Last Name</th>
                    <th className='px-2'>Gender</th>
                    <th className='px-2'>E-mail</th>
                    <th className='px-2'>Username</th>
                    <th className='px-2'>Domain</th>
                    <th className='px-2'>IP</th>
                    <th className='px-2'>University</th>
                </tr>
                {data.map((e, index) => (
                    <tr key={index}>
                        <td className='px-3' style={{ textAlign: 'center', verticalAlign: 'middle' }}>{index + 1}</td>
                        <td className='px-3'>
                            <img src={e.image} alt={`Profile pic of ${e.firstName} ${e.lastName}`} />
                        </td>
                        <td className='px-3'>{e.firstName}</td>
                        <td className='px-3'>{e.lastName}</td>
                        <td className='px-3'>{e.gender}</td>
                        <td className='px-3'>{e.email}</td>
                        <td className='px-3'>{e.username}</td>
                        <td className='px-3'>{e.domain}</td>
                        <td className='px-3'>{e.ip}</td>
                        <td className='px-3'>{e.university}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}
export default Table;