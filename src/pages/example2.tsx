import { Example2 } from '../examples/example2/Example2';

export default function Example2Page() {
  return (
    <div>
      <h1>Hello YouTube - AgGrid Example!</h1>
      <Example2
        onMoney={(money) => {
          alert(money);
        }}
      />
    </div>
  );
}
