import { Divider, Input } from 'antd';
import {useState} from 'react'


function Search(props) {
   

    const changeName = (e) => {

        props.search(e.target.value)
    }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={undefined} type="text" onChange={changeName} />
    </>
  );
}

export default Search;