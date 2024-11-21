import React from 'react';
import { Input, TextArea, Form, Button } from 'semantic-ui-react';
import './ArticlePage.css';

const ArticlePage = () => {
  return (
    <div className="article-page">
      <h2>What do you want to ask or share?</h2>
    
      <Form>
        <Form.Field>
          <label>Title</label>
          <Input placeholder="Enter a descriptive title" />
        </Form.Field>
        <Form.Field>
          <label>Abstract</label>
          <TextArea placeholder="Enter a 1-paragraph abstract" />
        </Form.Field>
        <Form.Field>
          <label>Article Text</label>
          <TextArea placeholder="Enter your article text" />
        </Form.Field>
        <Form.Field>
          <label>Tags</label>
          <Input placeholder="Please add up to 3 tags e.g., Java" />
        </Form.Field>
        <Button primary>Post</Button>
      </Form>
    </div>
  );
};

export default ArticlePage;
