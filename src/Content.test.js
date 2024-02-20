// Content.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers
import Content from './Home_page/Content/content.js';
import { BrowserRouter as Router } from 'react-router-dom';

test('Add a new post and check if it is displayed', () => {
  render(
    <Router>
      <Content />
    </Router>
  );

  // Find the textarea for adding a new post
  const textArea = screen.getByPlaceholderText("What's on your mind?");
  fireEvent.change(textArea, { target: { value: 'Test Post' } });


  // Find the button for adding a new post and click it
  const addButton = screen.getByText('Add Post');
  fireEvent.click(addButton);

  // Check if the new post is displayed
  const addedPost = screen.getByText('Test Post');
  expect(addedPost).toBeInTheDocument();
});

// Add more tests if needed...
