import React from 'react';
import styled from 'styled-components'
import DataTable from '../../components/DataTable'
import { employees } from './mockData'

const Wrapper = styled.div`
  width: 100%;
  margin: 50px auto 50px;
  padding-bottom: 10px;
`;

export default function Employee() {
    //   const { favourites, setFavourite }
    return (
        <Wrapper>
            <DataTable dataSource={employees} />
        </Wrapper>
    )
};
