---
id: spa-sample-data
title: Sample Data for SPA
sidebar_label: 샘플 데이터
---

## 예제 데이터 파일

* angular: `src/shared/ibsheet-data.ts`
* vue: `src/shared/ibsheet-data.js`
* eract

```js
// ibsheet sample data
export const SheetSampleData = [
  // sheet1
  {
    data: [
      { sa_nm: '홍길동', sa_id: '9821450', sa_dept: '04',
        sa_position: 'B0', sa_enterdate: '19980305', sa_desc: '' },
      { sa_nm: '김한국', sa_id: '9510427', sa_dept: '01',
        sa_position: 'A3', sa_enterdate: '19890317', sa_desc: '' }
    ],
    options: {
      Def: { Col: { RelWidth: 1 } },
      Cols: [
        { Header: '이름', Name: 'sa_nm', Type: 'Text' },
        { Header: '사원번호', Name: 'sa_id', Type: 'Text',
        Align: 'center' },
        { Header: '부서', Name: 'sa_dept', Type: 'Enum',
          Enum: '|경영지원|총무|인사|설계|시공1|시공2',
          EnumKeys: '|01|02|03|04|05|06' },
        { Header: '직급', Name: 'sa_position', Type: 'Enum',
          Enum: '|대표|상무|이사|부장|차장|과장|대리|사원',
          EnumKeys: '|A1|A2|A3|B0|B1|C4|C5|C6' },
        { Header: '입사일', Name: 'sa_enterdate', Type: 'Date',
          Width: 100, Format: 'yyyy/MM/dd' },
        { Header: '비고', Name: 'sa_desc', Type: 'Lines' }
      ]
    }
  },
  // sheet2
  {
    options: {
      Def: {
        Col: { Align: 'Left', RelWidth: '1' }
      },
      Cfg: {
        CanSort: '0'
      },
      Cols: [
        { Header: '부서명', Type: 'Text', Name: 'sDept' },
        { Header: '팀명', Type: 'Text', Name: 'sTeam' },
        { Header: '직급', Type: 'Text', Name: 'sPosition' },
        { Header: '성명', Type: 'Text', Name: 'sName' },
        { Header: '성별', Type: 'Enum', Name: 'sGender', Align: 'Center',
          Enum: '|男|女|기타', EnumKeys: '|男|女|기타' },
        { Header: '연령대', Type: 'Enum', Name: 'sAgeRange', Align: 'Center',
          Enum: '|10대|20대|30대|40대|50대|60대',
          EnumKeys: '|10대|20대|30대|40대|50대|60대'
        },
        { Header: '거주지', Type: 'Text', Name: 'sAddr',
          Align: 'Center' },
        { Header: '나이', Type: 'Int', Name: 'sAge',
          Width: '130', Align: 'Right' },
        { Header: '근속기간(년)', Type: 'Int',
          Name: 'sPeriod', Align: 'Right' },
        { Header: '급여', Type: 'Int', Name: 'sSalary',
          Align: 'Right', Format: '#,###' },
        { Header: '상여', Type: 'Int', Name: 'sBonus',
          Align: 'Right', Format: '#,###' }
      ]
    },
    data: [
      { sDept: 'CEO', sTeam: '임원', sPosition: '대표이사', sName: '황정열',
        sGender: '男', sAgeRange: '50대', sAddr: '서울', sAge: 50, sPeriod: 15,
        sSalary: 10122200, sBonus: 1012220 },
      { sDept: 'SI사업부', sTeam: '임원', sPosition: '상무', sName: '강대호',
        sGender: '男', sAgeRange: '40대', sAddr: '경기', sAge: 47, sPeriod: 15,
        sSalary: 6756170, sBonus: 675617 },
      { sDept: 'SI사업부', sTeam: '개발1팀', sPosition: '부장', sName: '김미경',
        sGender: '女', sAgeRange: '30대', sAddr: '강원', sAge: 39, sPeriod: 12,
        sSalary: 4180950, sBonus: 418095 },
      { sDept: 'SI사업부', sTeam: '개발1팀', sPosition: '과장', sName: '김선희',
        sGender: '女', sAgeRange: '30대', sAddr: '경기', sAge: 34, sPeriod: 7,
        sSalary: 3217000, sBonus: 321700 },
      { sDept: 'SI사업부', sTeam: '개발1팀', sPosition: '과장', sName: '최세희',
        sGender: '女', sAgeRange: '30대', sAddr: '경기', sAge: 32, sPeriod: 3,
        sSalary: 2750800, sBonus: 275080 },
      { sDept: 'SI사업부', sTeam: '개발1팀', sPosition: '대리', sName: '이명희',
        sGender: '女', sAgeRange: '20대', sAddr: '서울', sAge: 29, sPeriod: 3,
        sSalary: 2571900, sBonus: 257190 },
      { sDept: 'SI사업부', sTeam: '개발1팀', sPosition: '사원', sName: '노효일',
        sGender: '男', sAgeRange: '20대', sAddr: '서울', sAge: 23, sPeriod: 1,
        sSalary: 1520150, sBonus: 152020 },
      { sDept: 'SI사업부', sTeam: '개발1팀', sPosition: '사원', sName: '원영국',
        sGender: '男', sAgeRange: '20대', sAddr: '경기', sAge: 28, sPeriod: 2,
        sSalary: 2557000, sBonus: 255700 },
      { sDept: 'SI사업부', sTeam: '개발1팀', sPosition: '사원', sName: '이지선',
        sGender: '女', sAgeRange: '20대', sAddr: '서울', sAge: 24, sPeriod: 2,
        sSalary: 2007500, sBonus: 200750 },
      { sDept: '인사부', sTeam: '인사1팀', sPosition: '부장', sName: '김상도',
        sGender: '男', sAgeRange: '40대', sAddr: '경기', sAge: 40, sPeriod: 9,
        sSalary: 4290850, sBonus: 429085 },
      { sDept: '인사부', sTeam: '인사1팀', sPosition: '대리', sName: '한보라',
        sGender: '女', sAgeRange: '20대', sAddr: '서울', sAge: 28, sPeriod: 5,
        sSalary: 1959500, sBonus: 195950 },
      { sDept: '인사부', sTeam: '인사2팀', sPosition: '사원', sName: '장태우',
        sGender: '男', sAgeRange: '20대', sAddr: '서울', sAge: 28, sPeriod: 1,
        sSalary: 1959500, sBonus: 195950 },
      { sDept: '인사부', sTeam: '인사2팀', sPosition: '차장', sName: '정필석',
        sGender: '男', sAgeRange: '40대', sAddr: '경기', sAge: 40, sPeriod: 4,
        sSalary: 3851150, sBonus: 385120 },
      { sDept: '솔루션사업부', sTeam: '임원', sPosition: '이사', sName: '조성목',
        sGender: '男', sAgeRange: '40대', sAddr: '경기', sAge: 41, sPeriod: 15,
        sSalary: 6313700, sBonus: 631370 },
      { sDept: '솔루션사업부', sTeam: '개발1팀', sPosition: '부장', sName: '유봉근',
        sGender: '男', sAgeRange: '40대', sAddr: '서울', sAge: 42, sPeriod: 5,
        sSalary: 5187610, sBonus: 518760 },
      { sDept: '솔루션사업부', sTeam: '개발1팀', sPosition: '차장', sName: '오필환',
        sGender: '男', sAgeRange: '30대', sAddr: '서울', sAge: 37, sPeriod: 4,
        sSalary: 3412510, sBonus: 341250 },
      { sDept: '솔루션사업부', sTeam: '개발1팀', sPosition: '차장', sName: '송복석',
        sGender: '男', sAgeRange: '30대', sAddr: '경기', sAge: 39, sPeriod: 6,
        sSalary: 3871680, sBonus: 387170 },
      { sDept: '솔루션사업부', sTeam: '개발1팀', sPosition: '과장', sName: '김남연',
        sGender: '男', sAgeRange: '30대', sAddr: '서울', sAge: 36, sPeriod: 4,
        sSalary: 3500700, sBonus: 350070 },
      { sDept: '솔루션사업부', sTeam: '개발1팀', sPosition: '대리', sName: '한혜선',
        sGender: '女', sAgeRange: '20대', sAddr: '서울', sAge: 29, sPeriod: 2,
        sSalary: 2746000, sBonus: 274600 },
      { sDept: '솔루션사업부', sTeam: '개발1팀', sPosition: '사원', sName: '조미미',
        sGender: '女', sAgeRange: '20대', sAddr: '서울', sAge: 25, sPeriod: 2,
        sSalary: 2297040, sBonus: 229700 },
      { sDept: '솔루션사업부', sTeam: '개발1팀', sPosition: '사원', sName: '고은혜',
        sGender: '女', sAgeRange: '20대', sAddr: '서울', sAge: 26, sPeriod: 1,
        sSalary: 2390740, sBonus: 239070 },
      { sDept: '솔루션사업부', sTeam: '개발1팀', sPosition: '사원', sName: '성열',
        sGender: '男', sAgeRange: '20대', sAddr: '서울', sAge: 27, sPeriod: 1,
        sSalary: 2409000, sBonus: 240900 },
      { sDept: '솔루션사업부', sTeam: '개발1팀', sPosition: '사원', sName: '김영중',
        sGender: '女', sAgeRange: '20대', sAddr: '인천', sAge: 28, sPeriod: 3,
        sSalary: 2871100, sBonus: 287110 },
      { sDept: '솔루션사업부', sTeam: '개발2팀', sPosition: '부장', sName: '김명호',
        sGender: '男', sAgeRange: '30대', sAddr: '서울', sAge: 38, sPeriod: 8,
        sSalary: 3709800, sBonus: 370980 },
      { sDept: '솔루션사업부', sTeam: '개발2팀', sPosition: '사원', sName: '하태선',
        sGender: '男', sAgeRange: '20대', sAddr: '서울', sAge: 28, sPeriod: 1,
        sSalary: 2415010, sBonus: 241500 },
      { sDept: '솔루션사업부', sTeam: '영업팀', sPosition: '사원', sName: '김정민',
        sGender: '男', sAgeRange: '30대', sAddr: '경기', sAge: 32, sPeriod: 3,
        sSalary: 2989010, sBonus: 298900 },
      { sDept: '솔루션사업부', sTeam: '기술지원팀', sPosition: '차장', sName: '장성훈',
        sGender: '男', sAgeRange: '30대', sAddr: '서울', sAge: 37, sPeriod: 5,
        sSalary: 3880150, sBonus: 388020 },
      { sDept: '솔루션사업부', sTeam: '기술지원팀', sPosition: '차장', sName: '강윤식',
        sGender: '男', sAgeRange: '30대', sAddr: '서울', sAge: 35, sPeriod: 7,
        sSalary: 3855600, sBonus: 385560 },
      { sDept: '솔루션사업부', sTeam: '기술지원팀', sPosition: '대리', sName: '김수연',
        sGender: '女', sAgeRange: '30대', sAddr: '경기', sAge: 30, sPeriod: 1,
        sSalary: 2698800, sBonus: 269880 },
      { sDept: '솔루션사업부', sTeam: '기술지원팀', sPosition: '대리', sName: '정은지',
        sGender: '女', sAgeRange: '30대', sAddr: '서울', sAge: 30, sPeriod: 1,
        sSalary: 2698800, sBonus: 269880 },
      { sDept: '영업팀', sTeam: '영업1팀', sPosition: '사원', sName: '정창호',
        sGender: '男', sAgeRange: '20대', sAddr: '서울', sAge: 27, sPeriod: 1,
        sSalary: 1897500, sBonus: 189750 },
      { sDept: '영업팀', sTeam: '영업2팀', sPosition: '대리', sName: '김대현',
        sGender: '男', sAgeRange: '30대', sAddr: '서울', sAge: 33, sPeriod: 5,
        sSalary: 2709800, sBonus: 270980 },
      { sDept: '기술연구소', sTeam: '연구1팀', sPosition: '소장', sName: '안남주',
        sGender: '女', sAgeRange: '30대', sAddr: '서울', sAge: 38, sPeriod: 10,
        sSalary: 4891350, sBonus: 489140 },
      { sDept: '기술연구소', sTeam: '연구1팀', sPosition: '차장', sName: '이민수',
        sGender: '男', sAgeRange: '30대', sAddr: '경기', sAge: 38, sPeriod: 8,
        sSalary: 3845010, sBonus: 384500 },
      { sDept: '기술연구소', sTeam: '연구1팀', sPosition: '차장', sName: '최갑석',
        sGender: '男', sAgeRange: '30대', sAddr: '경기', sAge: 38, sPeriod: 5,
        sSalary: 3500700, sBonus: 350070 },
      { sDept: '기술연구소', sTeam: '연구1팀', sPosition: '차장', sName: '김태헌',
        sGender: '男', sAgeRange: '30대', sAddr: '경기', sAge: 37, sPeriod: 6,
        sSalary: 3489000, sBonus: 348900 },
      { sDept: '기술연구소', sTeam: '연구1팀', sPosition: '과장', sName: '박정석',
        sGender: '男', sAgeRange: '30대', sAddr: '서울', sAge: 32, sPeriod: 3,
        sSalary: 2885000, sBonus: 288500 },
      { sDept: '기술연구소', sTeam: '연구1팀', sPosition: '과장', sName: '권기윤',
        sGender: '男', sAgeRange: '30대', sAddr: '경기', sAge: 37, sPeriod: 7,
        sSalary: 3450100, sBonus: 345010 },
      { sDept: '경영지원팀', sTeam: '경영1팀', sPosition: '차장', sName: '김승운',
        sGender: '男', sAgeRange: '30대', sAddr: '경기', sAge: 39, sPeriod: 2,
        sSalary: 3505700, sBonus: 350570 },
      { sDept: '경영지원팀', sTeam: '경영1팀', sPosition: '사원', sName: '이해영',
        sGender: '女', sAgeRange: '20대', sAddr: '경기', sAge: 23, sPeriod: 1,
        sSalary: 1800800, sBonus: 180080 }
    ]
  }
];

```

## BOTTOM
