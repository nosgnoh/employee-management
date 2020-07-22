import React, { useState } from 'react';
import { Table, Button, Space, Input } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

export default function DataTable({ dataSource }) {
  const { t } = useTranslation();

  let [sortedInfo, setSortedInfo] = useState(null)
  let [searchText, setSearchText] = useState(null);
  let [searchedColumn, setSearchedColumn] = useState(null);

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '',
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText(null)
  };

  const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setSortedInfo(sorter);
  };

  sortedInfo = sortedInfo || {};
  const columns = [
    {
      title: t("table.id"),
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id < b.id,
      sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: t("table.login"),
      dataIndex: 'login',
      key: 'login',
      sorter: (a, b) => a.login < b.login,
      sortOrder: sortedInfo.columnKey === 'login' && sortedInfo.order,
      ellipsis: true,
    },
    {
      title: t("table.name"),
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => {
        return sortedInfo.columnKey === 'name' && sortedInfo.order === 'ascend'? a.name > b.name : a.name < b.name
      },
      sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
      ellipsis: true,
      ...getColumnSearchProps('name'),
    },
  ];

  

  return (
    <>
      
        <Space style={{ marginBottom: 16 }}>
          <h2>{t("title")}</h2>
        </Space>
        <Table columns={columns} dataSource={dataSource} onChange={handleChange} />
        <Space style={{ marginTop: 16 }}>
          
        </Space>
    </>
  );
}