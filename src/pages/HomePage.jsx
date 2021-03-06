import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import Form from "../components/Form";
import LinkContainer from "../containers/LinkContainer";
import { useDispatch, useStore } from "../context";
import { useBookmarks } from "../hooks/useBookmarks";
import { createNewFeed } from "../utils";

const HomePage = () => {
  const ref = useRef("");
  const { feeds } = useStore();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const { getBookmarks } = useBookmarks();

  useEffect(() => {
    getBookmarks();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    createNewFeed({ ref, feeds, dispatch, setError });
  };

  return (
    <Wrapper>
      <Heading data-testid="app-intro">The place to read your feeds.</Heading>
      <LinkContainer />
      <Form inputRef={ref} handleSubmit={handleSubmit} />
      {error ? <ErrorText>Error - {error}</ErrorText> : null}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

const Heading = styled.h2`
  font-size: 48px;
  text-align: center;
  margin: 30px;

  @media (max-width: 480px) {
    font-size: 30px;
  }
`;

const ErrorText = styled.p`
  text-align: center;
  color: #df2935;
`;

export default HomePage;
