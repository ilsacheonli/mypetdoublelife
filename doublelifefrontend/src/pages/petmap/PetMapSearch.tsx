import React, { useState } from "react";
import { SearchIcon } from "./petmap.style";
import styled from "styled-components";

type SearchFormProps = {
  onSubmit: (form: { name: string }) => void;
};

function PetMapSearch({ onSubmit }: SearchFormProps) {
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
        <input placeholder="시설을 검색하세요" name="name" value={name} onChange={onChange} />
        <button type="submit">
          <SearchIcon />
        </button>
      </InputStyle>
    </form>
  );
}

export default PetMapSearch;

const InputStyle = styled.div`
  height: 45px;
  padding-top: 10px;

  & input {
    width: 60%;
    border: none;
    display: inline-block;
  }
  & button {
    align-items: end;
    border: none;
    background-color: white;
  }
`;
