---
id: registry
title: Registry
sidebar_label: 스크립트 등록하기
---

## RegistryItem

* `name`: `string` - 식별 이름 (unique)
* `version`: `string`
* `baseUrl`: `string` - URL의 기본 경로(프로토콜 또는 절대경로를 포함하지 않은 경우)
* `urls`: `string[]|object[]` - 가져올 URL 리스트
  * `url`: `string`
  * `target`: `head|body` - 추가시킬 부모 HTMLElement 이름
* `dependentUrls` - 제거시킬 URL 리스트(`unload`시 사용)
