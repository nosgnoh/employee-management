import styled from 'styled-components';

const MenuItem = styled.li`
  float: left;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  a {
    text-decoration: none;
    color: ${props => props.theme.grey};
  }
  &.active {
    a {
      color: black;
    }
  }
  @media(max-width: 600px) {
    padding: 15px 10px;
  }
`;

export default MenuItem;