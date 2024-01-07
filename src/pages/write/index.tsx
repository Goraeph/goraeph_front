import 'vditor/dist/index.css';

import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';
import Vditor from 'vditor';

import { colors } from '@/styles/emotion/color';
import { button } from '@/styles/emotion/global';

const Write = () => {
  // const [vditorText, setVditorText] = useState('');

  const ref_title = useRef<HTMLTextAreaElement>(null);
  const ref_tag = useRef<HTMLTextAreaElement>(null);
  const ref_summary = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    new Vditor('vditor', {
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
    <>
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
      </Contain>
      <ButtonCotain>
        <ButtonContent>
          <Button>나가기</Button>
        </ButtonContent>
        <ButtonContent>
          <Button>임시저장</Button>
          <Button>게시하기</Button>
        </ButtonContent>
      </ButtonCotain>
    </>
  );
};
export default Write;
const Contain = styled.div`
  background-color: ${colors.background_write};
  height: calc(100vh - 4rem);
  overflow-y: auto;
`;

const InputContent = styled.div`
  display: flex;
  flex-direction: column;

  textarea {
    padding: 20px 30px;
    background: none;
    border: none;
    border-bottom: 2px solid ${colors.gray_250};
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

const ButtonCotain = styled.div`
  background-color: ${colors.background_write};
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 10px;
  height: 4rem;
`;
const ButtonContent = styled.div`
  display: flex;
  gap: 10px;
`;
const Button = styled.div`
  ${button}
`;
