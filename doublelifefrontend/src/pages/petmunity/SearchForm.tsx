import React, { useState } from "react";
import { SearchIcon } from "./petmunity.style";
import styled from "styled-components";

type SearchFormProps = {
  onSubmit: (form: { name: string }) => void;
};

function SearchForm({ onSubmit }: SearchFormProps) {
  const [form, setForm] = useState({
    name: "",
  });

  const { name } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputStyle>
        <input name="name" value={name} onChange={onChange} />
        <button type="submit">
          <SearchIcon />
        </button>
      </InputStyle>
    </form>
  );
}

export default SearchForm;

const InputStyle = styled.div`
  height: 45px;
  & input {
    width: 60%;
    border: none;
    display: inline-block;
    margin-bottom: 10px;
  }
  & button {
    border: none;
    background-color: white;
  }
`;

// 추후 검색 기능 추가 시 사용 예정