<h1>Wecode 35기 1차 프로젝트 - 1팀 LOCTEA</h1>

![스크린샷 2022-07-29 오후 4 58 12](https://user-images.githubusercontent.com/106301980/181713092-f83ac4cb-9098-484a-8afe-7141db81fce7.png)


<h2>개요</h2>
<ul>
  <li>오설록 웹페이지 클론코딩 프로젝트</li>
  <li>프로젝트는 2주동안 진행되며, 1주차에는 필수 구현사항 위주로 아래 항목들을 구현하였습니다.
    <ul>
      <li>Nav, Footer</li>
      <li>메인페이지</li>
      <li>상품 목록</li>
      <li>상품 상세</li>
      <li>장바구니</li>
      <li>로그인, 회원가입</li>
    </ul>
  </li>
  <li>2주차에는 추가 구현사항과 코드 리팩토링, 서버 통신 위주로 진행하였습니다.
    <ul>
      <li>주문서 작성</li>
      <li>로그인, 회원가입 시 비밀번호 확인 가능 기능 구현</li>
      <li>라이브러리 사용 없이 슬라이드 구현</li>
      <li>로그아웃</li>
    </ul>
  </li>
</ul><br>

<h2>팀원</h2>
<strong>Front-end</strong><br>
- 김익현, 류승연, 이금관, 최재홍<br>
<strong>Back-end</strong><br>
- 박정용, 조민지, 조예슬<br><br>

<h2>사용한 기술</h2>
<strong>Front-end</strong><br>
- HTML, CSS(SASS), Javascript, React<br>
<strong>Back-end</strong><br>
- Django, Python, MySQL, AWS(RDS, EC2), Bcrypt, JWT, django-cors<br>
<strong>Cowork</strong><br>
- Git, Slack, Trello<br><br>

<h2>구현 기능</h2>
<ul>
  <li>Nav, Login, Register, Main Banner (이금관)
    <ul>
      <li>Login & Register</li>
      
      
    - BE와 회원가입 조건을 맞춰 정규표현식을 활용한 유효성 검사가 되는 회원가입 페이지 기능 구현
    - input의 조건이 충족되지 않을 시 조건부 렌더링으로 표시되는 text 추가
    - 비밀번호가 올바르게 작성되었는지 확인할 수 있는 버튼 추가
    - 유저 정보가 올바르게 입력되었는지의 여부에 따른 로그인/회원가입 버튼 활성화
      
</ul>
<ul>
  <li>Nav</li>
  
    - BE에서 카테고리 데이터를 받아와 Nav 구현
  - 대분류와 중분류를 정렬하기 위해 이중 map함수를 적용하여 카테고리 구현
  - 토큰 유무에 따른 로그인 및 로그아웃 액션 변화

</ul>
<ul>
  <li>Main Banner</li>
</ul>

    - 라이브러리를 사용하지 않고 useState를 활용한 메인 이벤트배너 구현
    
  </li>
  
  <li>Item List (최재홍)
      
      - 라이브러리를 사용하지 않고 useState를 활용하여 끝단이 있는 carousel 구현
    - 1차 카테고리, 2차 카테고리 선택에 따라 상이한 제품군, 제품리스트 랜더링
    - 제품배열에 대한 탭 활성화 여부로 state변화, 제품 리스트업 순서 변경
    - BE로부터 상이한 제품데이터 획득, 제품 타입에 대한 버튼 클릭에 따라 해당되는 제품들만 선별적으로 호출
    - 랜더링된 개별적 상품에 대해 개별적 아이디 부여하여 클릭에 따라 해당되는 페이지로 이동
     
  </li>
  <li>Main Page, Item Detail, Order (김익현)
  
      
    - 라이브러리를 사용하지 않고 useState를 활용한 무한 슬라이드 구현
    - 각 조건에 따른 조건부 렌더링을 통해 할인 가격 및 재고 여부에 따른 일시품절, 바로구매/장바구니로 이동 가능한 상품 상세 페이지 구현
    - 각 input마다 조건을 받아 BE로 전달할 수 있게 구현, 조건에 따른 가격 및 배송비 계산하여 반영
    - Cart 페이지에서 fetch() 함수를 활용하여 BE와 통신 가능하도록 하여 상품 삭제 및 수량 변경 등의 기능을 구현
    
     
  </li>
  <li>Footer, Cart (류승연)
      
      반복되는 구성에 상수데이터를 활용하여 Component 나누어 구현
    
     
  </li>
</ul>
