# React-Hook-Form

> React에서 form의 validation을 도와주는 라이브러리이다. 장점은 가볍고, 다른 `dependency`가 없으며,  
> `ref`를 기반으로 하여 다른 UI 라이브러리와 호환이 잘 된다.

## register, handleSubmit

```js
const { register, handleSubmit } = useForm();

const onSubmit = (data) => console.log(data);
const onErrors = (errors) => console.log(errors)

<form onSubmit={handleSubmit(onSubmit, onErrors)}>// ...</form>;
```

> register는 해당 컴포넌트의 값을 트래킹하고 `validation`을 하기위해 `react hook form` 라이브러리에 등록한다는 뜻이다.  
> handleSubmit method는 form 제출을 handling하는 method로 form 컴포넌트의 onSubmit prop에 handleSubmit을 넘겨주면 된다.  
> handleSubmit은 두 가지 argument를 받는데, 첫번째는 form validation이 success일 때 호출하는 callback이고 두번째는 fail일 때  
> 에러와 함께 호출하는 callback이다.

## useFieldArray

> `form`의 `field array`는 동적으로 생성된다. 사용자가 필요에 따라서 field를 추가허거나 제거할 수 있는 기능을 제공한다.  
> 대신 form field 배열의 이름과 register에 등록하는 이름이 같아야 한다.  
> 추가할 때는 append 함수를 제거할 때는 remove 함수를 사용해야한다.
