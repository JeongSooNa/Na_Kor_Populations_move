# Na_Kor_Populations_move
project for portfolio

# 2021.10 ~ 2021.12 까지 월별 전국 인구이동

## IDEA   
- SQL : excel file 을 이용해 database(MYSQL)로 데이터 정규화   
- JAVA : 정규화 된 data를 java를 이용하여 자료분석 (SAS/R 사용할 수도)   
- HTML : 분석 된 자료를 시각화, UI 구현   
> 지도에 이동인구 많은만큼 표기하기 (화살표?)   
> 분석된 자료 다양한 plot으로 나타내기   

## Excel File
### COULUM
- 행정구역
- 총 전입
- 총 전출
- 순 이동
- 시도내이동 - 시군구내
- 시도내이동 - 시군구간 전입
- 시도내이동 - 시군구간 전출
- 시도간 전입
- 시도간 전출
> 시도간 전입 = 시도간 전출   
> 성별로도 나뉘어져 있으나 일단 합계를 이용!   
> 통계센터 내에 2022년 자료는 아직 없어 최근 3개월 자료 이용.   
> 자료 출처 : 마이크로데이터 통합서비스(MDIS)   
> https://mdis.kostat.go.kr/index.do