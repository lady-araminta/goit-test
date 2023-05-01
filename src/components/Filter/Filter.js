import { Form, Label, Option, Select } from './Filter.styled';

export const Filter = () => {
  return (
    <Form>
      <Label htmlFor="status">Filter by status</Label>
      <Select id="status" name="status">
        <Option value="show all">show all</Option>
        <Option value="follow">follow</Option>
        <Option value="followings">followings</Option>
      </Select>
    </Form>
  );
};
