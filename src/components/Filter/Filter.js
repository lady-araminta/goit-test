import { Form, Label, Option, Select } from './Filter.styled';

export const Filter = ({ filter, handleFilterChange }) => {
  return (
    <Form>
      <Label htmlFor="status">Filter by status</Label>
      <Select
        id="status"
        name="status"
        value={filter}
        onChange={handleFilterChange}
      >
        <Option value="show all">show all</Option>
        <Option value="follow">follow</Option>
        <Option value="following">followings</Option>
      </Select>
    </Form>
  );
};
