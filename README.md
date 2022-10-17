# nal-ggu
**날꾸 - 나만의 날씨 페이지 꾸미기**

팀 이름 : 순두부

프로젝트명 : 날꾸

![nalggu](https://i.imgur.com/fzYxAlg.png)

## 프로젝트 소개
이제 날씨도 DIY 해보세요!
‘날’씨를 ‘꾸’미다, ‘날꾸’는 모든 사람들이 궁금해하는 날씨 정보만을 볼 수 있고 커스텀 할 수 있는 서비스가 필요하다고 생각해서 만들어진 서비스입니다. 
기존 날씨 앱과 차별성을 두고 블록 사이즈, 컬러, 순서를 사용자가 원하는 대로 설정할 수 있습니다. 이러한 커스텀된 정보를 바탕으로 사용자는 빠르게 원하는 정보를 얻을 수 있습니다.
 
해당 서비스는 한정된 기간동안 기획, 디자인, 개발이 되었습니다. 코드 및 이미지를 남용 및 이용할 경우 법적으로 문제가 될 수 있습니다. 해당 서비스에서 사용되고 있는 로고 및 배너는 해당 서비스의 소유이므로 외부인이 허가없이 사용할 수 없습니다. 

## 최종 구현 화면 이미지 / 동영상
    - 화면을 어떤 구조로 구성했는지에 대한 설명
    - /start : 유저의 선택에 따라 날씨 정보의 화면 구성이 다르도록, 기본적인 관심사 및 커스텀 선택지를 제시하였습니다.
    - /main :  유저가 선택한 날씨 정보가 크기와 색에 따라 형태가 다르도록 구성하였습니다.장소 변경을 통해 그 위치의 데이터를 받아올 수 있습니다.
               사이드바를 통해 설정 페이지로 이동할 수 있습니다.
    - /setup : 화면에 보여질 부분은 크기와 컬러를 선택할 수 있도록 만들었습니다.
    
    - [배포 페이지](https://nal-ggu.herokuapp.com/) 
    
## 설치, 환경설정 및 실행 방법

    - 프로젝트 실행 시 필요한 환경 세팅 확인 (script, port, env, …)
      - .env (네이버 맵 API, 기상청_단기예보 ((구)_동네예보) 조회서비스 API 필요)

       yarn install
       
       yarn start
       
       

## 구현 요구 사항 목록
    - [o] 유저의 현재 위치를 받아온다.
    - [ ] 유저의 관심사에 따른 날씨 정보를 출력한다.
    - [o] 유저가 원하는 장소를 검색하여 위치를 변경한다.
    - [o] 유저가 변경한 장소와 일치하는 날씨 정보를 출력한다.
    - [ ] 유저가 원하는대로 날씨 정보의 순서, 사이즈, 컬러를 변경할 수 있다.
    - [ ] 유저가 원하는 날씨 정보의 순서, 사이즈, 컬러에 따라 출력한다.

## 사용한 프레임워크 및 라이브러리 설명
    - React: 컴포넌트 기반의 화면구성, Virtual DOM으로 인한 속도 향상, SPA(싱글 페이지 애플리케이션)
    - TypeScript: 초기 데이터와 컴포넌트 사이에 전달되는 데이터의 컴파일 오류를 방지하기 위해 사용
    - recoil: 전역 상태 관리를 위해 사용
    - axios: 컴포넌트로 전달된 데이터를 받아오는 비동기 작업에 사용
    - styled-components: CSS-in-JS, 컴포넌트 단위로 CSS를 관리하기 위해 사용 
    - styled-reset: reset css 를 위해 사용
    - react-beautiful-dnd: Drag and Drop 을 사용하기 위해 사용

## 폴더 구조 설명
    - 폴더를 구분한 기준에 대하여 설명
    /src/component => 각 페이지별로 필요한 컴포넌트를 저장해놓은 폴더
    /src/hooks => 커스텀 훅을 저장하기 위한 폴더
    /src/lib => 날씨 API를 사용하기 위한 폴더
    /src/pages => 각 router 별 담당하는 페이지를 저장해놓은 폴더
    /src/store => recoil을 사용하기 위해 저장된 파일들을 저장해놓은 폴더
    /src/styles => reset.css와 기본적으로 저장된 styled-components의 theme을 저장한 폴더
    
```
📦 
├─ .gitignore
├─ .vscode
│  └─ settings.json
├─ README.md
├─ package.json
├─ public
│  ├─ assets
│  │  ├─ arrow-left.png
│  │  ├─ close.png
│  │  ├─ dots.png
│  │  ├─ hamburger.png
│  │  ├─ icon
│  │  │  ├─ cloudy.png
│  │  │  ├─ dust.png
│  │  │  ├─ little_cloudy.png
│  │  │  ├─ many_cloudy.png
│  │  │  ├─ rain_onehour.png
│  │  │  ├─ rain_type.png
│  │  │  ├─ rainy.png
│  │  │  ├─ snow and white.png
│  │  │  ├─ snow.png
│  │  │  ├─ sonakki.png
│  │  │  ├─ sunny.png
│  │  │  ├─ sunrise.png
│  │  │  ├─ temp.png
│  │  │  ├─ wave.png
│  │  │  ├─ wet.png
│  │  │  ├─ wind.png
│  │  │  └─ wind2.png
│  │  └─ sun.png
│  ├─ data.json
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
├─ src
│  ├─ App.css
│  ├─ App.tsx
│  ├─ component
│  │  ├─ Loading.tsx
│  │  ├─ SideBar.tsx
│  │  ├─ common
│  │  │  ├─ ColorModal.tsx
│  │  │  └─ ModalFrame.tsx
│  │  ├─ main
│  │  │  ├─ Header.tsx
│  │  │  └─ WeatherBox.tsx
│  │  ├─ setup
│  │  │  ├─ Category.tsx
│  │  │  ├─ Header.tsx
│  │  │  ├─ Select.tsx
│  │  │  └─ SelectedCard.tsx
│  │  └─ start
│  │     └─ startSelectBox.tsx
│  ├─ home.tsx
│  ├─ home2.tsx
│  ├─ hooks
│  │  └─ useMap.tsx
│  ├─ index.tsx
│  ├─ lib
│  │  └─ convertCoordinate.tsx
│  ├─ logo.svg
│  ├─ pages
│  │  ├─ location
│  │  │  └─ Location.tsx
│  │  ├─ main
│  │  │  └─ Main.tsx
│  │  ├─ setup
│  │  │  └─ Setup.tsx
│  │  └─ start
│  │     └─ Start.tsx
│  ├─ react-app-env.d.ts
│  ├─ store
│  │  └─ state
│  │     ├─ example.tsx
│  │     └─ startData.tsx
│  ├─ styles
│  │  ├─ GlobalStyles.ts
│  │  └─ theme.ts
│  └─ type.tsx
├─ tsconfig.json
└─ yarn.lock
```

## 과제 진행 시 주안점 작성
    - /start : 
        1. 레이아웃 > 앱의 첫 화면으로 깔끔한 디자인과 UI를 중점으로 작업을 진행했습니다.
        2. 선택박스 > 전역 상태 관리 라이브러리인 Recoil을 사용해 선택지에 따른 화면 구성을 전달토록 하였습니다.
    - /main : 
        1. 레이아웃 > 사이즈에 따라 자동으로 정렬되어야 하는 레이아웃의 디자인을 중점으로 작업을 진행했습니다.
        2. 사이드바 > 자연스럽게 등장하는 사이드바를 구현하기 위해 애니메이션에 대해 공부했습니다.
        3. 장소검색 > 주소검색하여 나온 위경도와 기상청 격자위치를 비교하여 정확한 날씨 정보를 가져오기 위해 노력하였습니다. 
        4. 날씨박스 > API 를 통해 받아온 날씨 데이터와 유저가 들고있는 데이터를 매치시켜서 들고있는 정보에 따라 다른 값을 보여줘야하는 부분을 신경썼습니다.
    - /setup :
        1. 레이아웃 > 유저에게 각 영역이 드래그 앤 드랍으로 인식이 되어야합니다.
        2. 선택된 날씨 > 메인 화면에서 전달받은 선택된 날씨 카테고리 이름, 박스 사이즈, 컬러 값을 저장하여 출력해야합니다.
        또한 사이즈박스와 컬러는 각 날씨 카테고리마다 변경되는 데이터로 각각 적용되어야 합니다.
        3. 비선택된 날씨 > 메인 화면에서 전달받은 비선택된 날씨 카테고리 이름, 박스 사이즈, 컬러 값을 저장하여 유저에게 비선택된 날씨 카테고리만 출력합니다.
        4. 드래그 앤 드랍 기능 > 선택된 날씨와 비선택된 날씨는 서로 드래그 앤 드랍으로 선택된 날씨의 정보를 저장하고 변경 할 수 있도록 합니다.
    
## 한계점 및 개선 사항 작성
    - /start : 
        1. 받아오는 정보의 한계가 있어서 선택지를 다양하게 구성하지 못했습니다. 추후 다양한 API를 활용해 사용자가 선택할 수 있는 선택지를 더 다양하게 하고 싶습니다.
        2. 유저가 선택지를 선택할 때 재미를 느낄 수 있도록 애니메이션을 추가하고 싶습니다.
    - /main : 
        1. 사람들이 가장 많이 사용하는 페이지인 만큼 유저들이 원하는 정보가 무엇인지 더 알아보고 추가할 계획입니다.
        2. 누적 레이아웃 이동 최적화가 부족하여 개선하고 싶습니다.
        3. 한 파일에 코드가 길어졌는데, 컴포넌트 분리와 재사용하는 리팩토링이 필요합니다.
    - /setup : 
        1. react-beautiful-dnd 라이브러리를 사용하여 드래그 앤 드랍을 구현하려하였으나 초기에 정해진 데이터 형식과 라이브러리에 적용해야하는 데이터 형식이 달라 구현하지 못해서 아쉬웠습니다.
