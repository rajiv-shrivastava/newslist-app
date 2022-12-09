import React,{useState} from "react";
import Pagination  from "rc-pagination";
import "./style.css";
import {Link} from 'react-router-dom';

const NewsList = (props) => {
  console.log(props)
    const datatableUsers = props.newsData
    
    
    const [perPage, setPerPage] = useState(10);
    const [size, setSize] = useState(perPage);
    const [current, setCurrent] = useState(1);

    const PerPageChange = (value) => {
        setSize(value);
        const newPerPage = Math.ceil(datatableUsers.length / value);
        if (current > newPerPage) {
            setCurrent(newPerPage);
        }
    }

    const getData = (current, pageSize) => {
        // Normally you should get the data from the server
        return datatableUsers.slice((current - 1) * pageSize, current * pageSize);
    };

    const PaginationChange = (page, pageSize) => {
        setCurrent(page);
        setSize(pageSize)
    }

    const PrevNextArrow = (current, type, originalElement) => {
        if (type === 'prev') {
            return <button><i className="fa fa-angle-double-left"></i></button>;
        }
        if (type === 'next') {
            return <button><i className="fa fa-angle-double-right"></i></button>;
        }
        return originalElement;
    }

    return (
        <>
            <div className="container-fluid mt-5 mb-5">            
                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-12 col-sm-6">
                        <div className="card">
                        <div className="card-body p-0">
                            <div className="table-filter-info">
                            <h1> Stories</h1>

                                <Pagination
                                    className="pagination-data"
                                    showTotal={(total, range) => `Showing ${range[0]}-${range[1]} of ${total}`}
                                    onChange={PaginationChange}
                                    total={datatableUsers.length}
                                    current={current}
                                    pageSize={size}
                                    showSizeChanger={false}
                                    itemRender={PrevNextArrow}
                                    onShowSizeChange={PerPageChange}
                                />
                            </div>
                            <div className="table-responsive">
                                <table className="table table-text-small mb-0">
                                    <thead className="thead-primary table-sorting">
                                        <tr>
                                            <th>Picture</th>
                                            <th>Title</th>
                                            <th>Section</th>
                                            <th>Details</th>
                                            <th>Outside</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getData(current, size).map((data, index) => {
                                                return (
                                                    <tr key={data.id}>
                                                      <td>
                                                          <a target="_blank" href={data.webUrl}>
                                                           <img height="100" width="200" src={data.fields.thumbnail ? data.fields.thumbnail : 
                                                            ''} /> 
                                                        </a>
                                                        </td> 
                                                        <td>{data.webTitle}</td>
                                                        <td>{data.sectionName}</td>
                                                        <td>
                                                        <Link to={`/newsDetail/${index}`} 
                                                          state={ {...data}}
                                                            > 
                                                          Detail Story</Link>
                                                        </td>    
                                                        <td>
                                                          <a target="_blank" href={data.webUrl}> Full Story</a>
                                                        </td>    
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                          <div className="table-filter-info">
                                
                                <Pagination
                                    className="pagination-data"
                                    showTotal={(total, range) => `Showing ${range[0]}-${range[1]} of ${total}`}
                                    onChange={PaginationChange}
                                    total={datatableUsers.length}
                                    current={current}
                                    pageSize={size}
                                    showSizeChanger={false}
                                    itemRender={PrevNextArrow}
                                    onShowSizeChange={PerPageChange}
                                />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsList;