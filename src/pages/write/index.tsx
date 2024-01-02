import 'vditor/dist/index.css';

import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';
import Vditor from 'vditor';

const Write = () => {
  // const [vditorText, setVditorText] = useState('');

  const ref_title = useRef<HTMLTextAreaElement>(null);
  const ref_tag = useRef<HTMLTextAreaElement>(null);
  const ref_summary = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    new Vditor('vditor', {
      height: '80vh',
      cache: {
        enable: false,
      },
      preview: {
        mode: 'both',
      },
      placeholder: '내용을 입력해주세요',
      // input(value) {
      //   setVditorText(value);
      // },
    });
  }, []);

  const handleResizeHeight = (textarea: HTMLTextAreaElement) => {
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  };

  return (
    <Contain>
      <InputContent>
        <textarea
          name="title"
          placeholder="제목을 입력해주세요."
          rows={1}
          ref={ref_title}
          onChange={() => {
            if (ref_title.current) handleResizeHeight(ref_title.current);
          }}
        ></textarea>
        <textarea
          name="tag"
          placeholder="태그입력"
          rows={1}
          ref={ref_tag}
          onChange={() => {
            if (ref_tag.current) handleResizeHeight(ref_tag.current);
          }}
        ></textarea>
        <textarea
          name="summary"
          placeholder="한줄요약"
          rows={1}
          ref={ref_summary}
          onChange={() => {
            if (ref_summary.current) handleResizeHeight(ref_summary.current);
          }}
        ></textarea>
      </InputContent>
      <div id="vditor"></div>

      <Content>
        <ButtonContent>
          <Button>나가기</Button>
        </ButtonContent>
        <ButtonContent>
          <Button>임시저장</Button>
          <Button>게시하기</Button>
        </ButtonContent>
      </Content>
    </Contain>
  );
};
export default Write;
const Contain = styled.div`
  padding: 20px;
  background-color: #f8f8f8;
`;

const InputContent = styled.div`
  display: flex;
  flex-direction: column;

  textarea {
    padding: 15px;
    background: none;
    border: none;
    border-bottom: 2px solid #efefef;
    font-size: 1.5rem;
    overflow: hidden;
    min-height: 1.5rem;
    resize: none;
  }
  textarea::-webkit-input-placeholder {
    font-weight: bold;
  }
  textarea:focus {
    outline: none;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;

const Button = styled.div`
  background-color: #b5b5b5;
  color: #ffffff;
  border-radius: 20px;
  padding: 15px;
  cursor: pointer;
`;
const ButtonContent = styled.div`
  display: flex;
  gap: 10px;
`;
