import React, { useState } from 'react';
import { Radio } from 'semantic-ui-react';
import './PostPage.css';
import QuestionPage from './QuestionPage';
import ArticlePage from './ArticlePage';

const PostPage = () => {
  const [postType, setPostType] = useState('question'); 

  return (
    <div className="post-page">
      <h1 className="post-title">New Post</h1>
      <div className="post-type-selector">
        <Radio
          label="Question"
          name="postType"
          value="question"
          checked={postType === 'question'}
          onChange={() => setPostType('question')}
          className="radio-option"
        />
        <Radio
          label="Article"
          name="postType"
          value="article"
          checked={postType === 'article'}
          onChange={() => setPostType('article')}
          className="radio-option"
        />
      </div>
      <div className="post-content">
        {postType === 'question' ? <QuestionPage /> : <ArticlePage />}
      </div>
    </div>
  );
};

export default PostPage;
