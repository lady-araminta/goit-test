import { useSelector } from 'react-redux';
import { statusFilters } from 'redux/constants';

import { Form, Label, Option, Select } from './Filter.styled';
import { selectStatusFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectStatusFilter);
  return (
    <Form>
      <Label htmlFor="status">Filter by status</Label>
      <Select id="status" name="status">
        <Option value="show all" selected={filter === statusFilters.all}>
          show all
        </Option>
        <Option value="follow" selected={filter === statusFilters.follow}>
          follow
        </Option>
        <Option
          value="followings"
          selected={filter === statusFilters.following}
        >
          followings
        </Option>
      </Select>
    </Form>
  );
};
