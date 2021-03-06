import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      width: 120px;
      height: 120px;
      background: #fff;
      border: 3px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
    }

    input {
      display: none;
    }
  }
`;
