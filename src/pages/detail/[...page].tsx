import styled from '@emotion/styled';
import Image from 'next/image';

import Like from '@/components/note/footer/Like';
import { Notes } from '@/data/data';
import { colors } from '@/styles/emotion/color';
import { button } from '@/styles/emotion/global';

const Detail = () => {
  return (
    <>
      <Contain>
        <Title>대왕고래</Title>
        <UserInfo>
          <span>author</span>
          <span>2020-12-12</span>
        </UserInfo>
        <Tag>
          <li>Tag</li>
          <li>Tag</li>
          <li>Tag</li>
          <li>Tag</li>
          <li>Tag</li>
        </Tag>
        <Content>
          <Image
            src={Notes[0].preview_image}
            alt="이미지"
            width={1000}
            height={1000}
          ></Image>
          <div>
            대왕고래는 수염고랫과에 속하는 고래이다. 현존하는 동물은 물론,
            역사상 존재했던 동물 가운데 가장 거대하고 무거운 동물이다. 최근
            서식지에 대형 선박들과 충돌의 위험을 가지고 있다. 대왕고래는 20세기
            초까지만 해도 그 수가 많았으나, 극심한 고래잡이로 멸종 위기에
            놓였다. 20세기에 포경된 대왕고래의 수는 약 35만 마리이며, 1966년
            국제조약에 따라 포획이 금지되었다.1905년에서 1977년 사이에 상업적인
            고래잡이들이 북태평양의 모든 푸른 고래를 가져갔다고 보고되었다.
            1905년부터 1971년까지 북태평양에서 상업용 포경업자들이 잡은
            동북태평양 고래의 총수는 3,441마리이다. 일부 연구자들은 일본 근해의
            푸른 고래 개체군이 주로 구마노나다 해에서 상업적인 고래잡이에 의해
            멸종되었다고 비공식적으로 제안했다. 흰긴수염고래와 다른 수염고래
            종들 사이의 특정한 경쟁에 대한 직접적인 증거는 거의 없다. 한국에서는
            동해와 서해에 나타나기도 했지만 1944년 이후로 보고가 없다. 개체수는
            전 세계에 걸쳐 약 1만 마리로 추산되며(더 적게 예상하기도 한다),
            적어도 다섯 무리가 있는 것으로 보인다. 북반구의 개체수가 남반구보다
            많다. 대왕고래에게 유일하게 알려진 자연 위협은 범고래이다.
            대왕고래의 성체들은 이런 엄청난 지구력과 준수한 속도로 범고래 무리를
            따돌린다. 이 전략은 단순하지만 성체의 경우 탈출 성공률이 매우
            높은데, 그 이유는 범고래가 제대로 공격을 하려면 수염고래가 속력을
            낮추거나 멈춰야만 하는데 이 녀석은 엄청난 크기 때문에 잠시
            따라잡는다 해도 잡아둘 수도, 죽일 수도 없으며 그렇다고 계속 추격해도
            도저히 지치지를 않는지라 포기할 수밖에 없다. 성체는 덩치가 매우
            크기에 현재 바다에서는 적이 없으나, 새끼나 아성체의 경우 범고래가
            천적으로 있다. 그마저도 엄청난 수의 범고래들이 모여서 수시간 동안
            사투를 벌여야 상대가 가능한데, 성공하는 경우는 거의 없다시피 하다.
            단, 매우 이례적으로 대형 수컷 범고래 30마리가 18m짜리 아성체
            흰긴수염고래를 3시간 넘게 집요하게 사냥한 결과, 살집을 갈기갈기 뜯어
            과다출혈로 인해 사망한 사례는 존재한다. 또한 무려 75마리의 범고래가
            동원되어 15m 크기의 대왕고래를 사냥한 사례도 2021년에 목격되었다.
            물론 성체라면 이야기가 달라진다. 성체의 경우 커다란 덩치에 따른
            강력한 힘, 고래 특유의 두꺼운 지방층 덕분에 천적이 없다.그러나
            쿠키커터상어의 경우 잡아먹지는 않지만 배를 뜯어먹는 경우도 있다.가장
            무서운 천적은 사람으로 고래기름을 얻기위해
            사냥(포경)한다.일부국가에서는 먹기도 한다. 평균적인 길이는 24m에서
            33m정도이며 발견된 개체 중 가장 큰 고래는 길이 33.58m, 무게 190t까지
            나갔다. 대왕고래는 지구상에 존재했던 모든 동물들 중 가장 큰 종으로
            여겨진다.성숙한 암컷 청고래의 평균 길이는 22.1m이다. 흰긴수염고래의
            나이는 귀마개를 사용하여 가장 안정적으로 측정된다.길고 가느다란
            얼룩덜룩한 회색빛 푸른 몸을 가지고 있지만, 물속에서는 푸른색으로
            보인다. 30t이 넘는 지방층이 피부를 덮고 있고 혀만도 3t이 넘어가며
            눈은 농구공보다 크다
          </div>
        </Content>
        <Comment>
          <span>0개의 댓글</span>
          <input type="text" />
          <div>댓글1</div>
          <div>댓글2</div>
          <div>댓글3</div>
        </Comment>
      </Contain>
      <ButtonCotain>
        <Like id="" />
        <button>구독하기</button>
      </ButtonCotain>
    </>
  );
};

export default Detail;

const Contain = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  padding: 20px;
  overflow: auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  padding: 10px;
`;
const UserInfo = styled.div`
  text-align: center;
  margin: 15px 0;
  span {
    padding: 10px;
  }
`;
const Tag = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px 0;
  li {
    padding: 5px 15px;
    border-radius: 10px;
    background-color: ${colors.gray_100};
    color: ${colors.white};
    font-size: 1.125rem;
  }
`;
const Content = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
  div {
    padding: 20px 0;
  }
`;

const Comment = styled.div`
  border-top: 1px solid ${colors.gray_350};
  padding: 10px 0;
  input {
    width: 100%;
    padding: 10px;
  }
  span {
    font-size: 1.5rem;
  }
`;
const ButtonCotain = styled.div`
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  height: 4rem;
  button {
    ${button}
  }
`;
