import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ComponentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <h1>Warning!</h1>
        <div>Are you sure you want to do this?</div>
      </ApprovalCard>
      <ApprovalCard>
        <ComponentDetail
          author='Sam'
          timeAgo='Today at 6:00 PM'
          content='Hey! have a nice day.'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <ComponentDetail
          author='Alex'
          timeAgo='Today at 3:00 PM'
          content='Hey! have a nice day.'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <ComponentDetail
          author='Jane'
          timeAgo='Today at 12:00 PM'
          content='Hey! have a nice day.'
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'), (e) => {
  console.log(e);
});
