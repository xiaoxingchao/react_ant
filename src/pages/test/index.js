
import { Form,Row,Col,Input,Icon,Button } from 'antd';
const FormItem = Form.Item;

export default () => {
  return (
    <div>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
    </div>
  )
}
