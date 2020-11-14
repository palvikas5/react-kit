### simple TextInput

```js
const [text, setText] = React.useState('Vikas');
<TextInput ariaLabel="user name" value={text} onTextChange={(name) => setText(name)}  />
```
