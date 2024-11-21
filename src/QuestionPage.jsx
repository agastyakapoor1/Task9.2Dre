import React, { useState } from 'react';
import { Input, TextArea, Form, Button } from 'semantic-ui-react';
import { Controlled as CodeMirror } from 'react-codemirror2'; // Import CodeMirror
import 'codemirror/lib/codemirror.css'; // Import CodeMirror styling
import 'codemirror/mode/javascript/javascript'; // Import JavaScript mode (no .css)

import './QuestionPage.css';

const QuestionPage = () => {
  const [code, setCode] = useState(''); // State to store the code input

  const handleCodeChange = (editor, data, value) => {
    setCode(value); // Update the code state when the code editor content changes
  };

  return (
    <div className="question-page">
      <h2>What do you want to ask or share?</h2>
      
      <Form>
        <Form.Field>
          <label>Title</label>
          <Input placeholder="Start your question with how, what, why, etc." />
        </Form.Field>
        
        <Form.Field>
          <label>Describe your problem</label>
          <TextArea placeholder="Describe your problem in detail" />
        </Form.Field>
        
        <Form.Field>
          <label>Tags</label>
          <Input placeholder="Please add up to 3 tags e.g., Java" />
        </Form.Field>

        {/* CodeMirror Editor for Code Input */}
        <Form.Field>
          <label>Code</label>
          <CodeMirror
            value={code}
            options={{
              mode: 'javascript', // Set the mode to JavaScript
              theme: 'default', // Set the theme (you can change it)
              lineNumbers: true, // Show line numbers
              viewportMargin: Infinity, // Makes the editor scrollable indefinitely
              tabSize: 2,
              indentWithTabs: true,
            }}
            onBeforeChange={handleCodeChange}
          />
        </Form.Field>

        <Button primary>Post</Button>
      </Form>
    </div>
  );
};

export default QuestionPage;
