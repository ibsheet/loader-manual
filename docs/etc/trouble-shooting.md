---
id: trouble-shooting
title: Trouble Shooting
sidebar_label: 문제해결
---

import { HelpText } from '../shared'

<HelpText>
  1. loader-config 설정은 최상위 루트에서 한 번만 실행해주시면 됩니다.
  2. ibsheet-common.js 에 있는 IB_Preset 의 경우, 별도의 IB_Preset 을 모듈화한 common.js 파일을 Import 해주시면 됩니다.
  해당 파일의 위치는 시작패키지-React 시작 패키지, loader-react-starter/src/shared/common.js 에 위치하고 있습니다.
  3. 시트의 생성은 일반적으로 mount 시점, 시트를 제거하는 시점은 unmount 시점으로 잡아서 지정해주시면 됩니다.
  4. loader-create 이 후, then 에서 sheet 객체가 생성되는데 해당 구간에서 데이터를 조회하시면 안됩니다. 첫 조회는 onRenderFirstFinish 를 이용해주셔야 합니다.
</HelpText>
