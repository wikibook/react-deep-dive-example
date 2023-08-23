# yceffort (no-new-date)

기기 시간에 의존적인 `new Date()`를 사용하지 마세요. 대신 `ServerDate()` 함수를 만들어 사용하세요.

## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js
// ❌
new Date()
```

Examples of **correct** code for this rule:

```js
// 👌
new Date('2022-01-01')
// 👌
ServerDate()
```

## When Not To Use It

- `ServerDate()` 함수가 없는 경우
- 기기 시간에 의존해도 상관없는 경우

## Further Reading

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date
