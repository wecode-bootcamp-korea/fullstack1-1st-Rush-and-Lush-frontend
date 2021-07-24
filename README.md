# Rush & Lush

<img width="1440" alt="스크린샷 2021-07-24 오후 4 40 58" src="https://user-images.githubusercontent.com/84323353/126861337-fe97c483-e272-4bbc-8966-7af7026a9b72.png">
🙋🏻‍♀️🙋🏻‍♂️ 🏔⛰ 🕊🐥

`사람, 환경, 동물이 조화로운 세상을 함께 만들어요!`  
멋진 슬로건을 내세우고 있는 핸드메이드 코스메틱 브랜드, [러쉬](https://www.lush.co.kr/) 클론 프로젝트를 진행 했습니다.

# 프로젝트 기간

- 2021/07/05 ~ 2021/07/16 (총 11일)

# 팀원 소개

- [최민기](https://github.com/samankey) - 프론트 엔드 & 백엔드
- [김지현](https://github.com/hxyxneee) - 프론트 엔드 & 백엔드
- [안진근](https://github.com/allmetoo11) - 프론트 엔드
- [신수호](https://github.com/realsuhoman) - 프론트 엔드

# 사용된 기술 및 협업 툴

📖 `프론트엔드`

- HTML, CSS, Javascript (ES6), React, SASS

📖 `백엔드`

- Node.js, Mysql, Bcrypt, JWT

# 프로젝트 계획

      🔥 필수 구현 사항

1. 로그인 및 회원 가입 기능

2. 메인 페이지

3. 전체 상품 리스트 페이지

4. 상품 디테일 페이지

# 구현 기능 상세

## 프론트엔드

1. Login Page & SignUp Page  
   -> `로그인 및 회원 가입 레이아웃` 구현  
   -> `회원가입 & 로그인 유효성 검사` (아이디 @ 포함, 비밀번호 8자 이상, 조건에 충족하지 않으면 경고창 생성)  
   -> 회원 비회원 메뉴 `탭 전환` (회원 비회원 탭 클릭시 state 전환과 탭 색상 변경)
2. Navigation bar  
   -> `제품`, `러쉬 소개` 각 카테고리 별로 컴포넌트를 나눈 뒤 각 컨텐츠 별로 알맞은 카테고리를 띄워줌  
   -> `mouse hover` 시, navigation bar 툴팁 창 및 user page (로그인, 회원가입 등) 툴팁 창이 뜨도록 구현  
   -> `Nav 돋보기 아이콘 클릭` 시 Search Modal 구현

3. Footer  
   -> `구독하기` 버튼 클릭 시 이메일 입력 유도  
   -> 이메일 입력 시 `준비 중인 기능` 이라는 alert 창 유도

4. Main Page  
   -> `Carousel` (2 type : Fade-in-out, Slide)
   버튼 클릭 시 Carousel 동작  
   ScrollTop 위치값을 이용한 페이지 디자인 (opacity transition)

5. List Page  
   -> `리스트 페이지 레이아웃` 구현  
   -> 동적 라우팅을 통한 리스트 페이지 및 디테일 페이지 연결

6. Detail Page  
   -> `Conut에 따른 Price 변화.`  
   Review 창 star icon에 mouse hover 시 변화
   `File import 기능`

## 백엔드

1. SignUp API  
   -> 이메일, 이름, 비밀번호, 계정, 닉네임, 휴대폰 번호 입력 유도  
   -> 이미 존재하는 유저 정보 입력 시, `ALREADY_EXISTING_USER` 라는 에러 문구 출력  
   -> `bcrypt`를 이용한 비밀번호 암호화 구현

2. Login API  
   -> `JWT`를 이용하여 로그인 시 token 발행  
   -> 회원 가입 시 입력된 정보와 비교 후 일치하는 유저라면 로그인 성공 메세지와 함께 token 발행, 그렇지 않다면 `INVALID_USER` 라는 에러 문구 출력  
   -> 유저가 필수 정보 (이메일, 패스워드) 를 입력하지 않을 시, 필요한 정보를 입력해달라는 에러 문구 출력

3. Category API
   -> 프론트 단에 띄워줄 카테고리 api 제작
   1. `제품` 및 `러쉬 소개` 라는 카테고리와 함께, 그 아래 속해있는 서브 카테고리들 (베스트, 신제품, 러쉬 이야기 등) 을 함께 출력해줌
   2. `menu_id`를 인자로 받아 출력하고, 프론트 단에서는 menu_id를 통해 각 카테고리들을 가공하여 분류함
4. Products API
   lush.co.krlush.co.kr
   러쉬코리아
   러쉬코리아

## Reference

---

- 이 프로젝트는 러쉬 사이트를 참조하여 학습목적으로 만들었습니다. 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진과 동영상은 unsplash와 pixabay에서 공유받은 Free 이미지 및 동영상이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
