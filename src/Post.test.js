// Post.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Post from './Post/post.js';

test('onDelete prop changes to true when clicking delete option', () => {
  // Mock the onDelete function

  const mockDeleteHandler = jest.fn();

  // Render the Post component with mock data and handlers
  render(
    <Post
      id="1"
      text="Test post"
      profile="TestUser"
      date="2024-02-18"
      onDelete={mockDeleteHandler}
    />
  );

  // Find the three dots (options) button and click it
  const optionsButton = screen.getByTestId('three-dots-icon');

  fireEvent.click(optionsButton);

  // Find the delete option and click it
  const deleteOption = screen.getByText('Delete');
  fireEvent.click(deleteOption);
  const deleteOption2 = screen.getByText('Delete');
  fireEvent.click(deleteOption2);

  // Check if onDelete prop has been called with true
  expect(mockDeleteHandler).toHaveBeenCalledWith("1");
});

test('Add and edit a comment in Post component', () => {
    render(<Post id={1} text="Test post" profile="Guest" date="2022-01-01" />);
    
    // Find and click the Comment button
    const commentButton = screen.getByText('Comment');
    fireEvent.click(commentButton);
  
    // Find the Comment Input and add a new comment
    const commentInput = screen.getByPlaceholderText('Add a comment...');
    fireEvent.change(commentInput, { target: { value: 'New comment' } });
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);
  
    // Find the added comment and click the Edit button
    const optionsButton1 = screen.getByTestId('three-dots-icon-comment');
    fireEvent.click(optionsButton1);
  
      // Click on the edit option
  const editOption = screen.getByText('Edit');
  fireEvent.click(editOption);

  // Edit the text in the modal
  const editTextarea = screen.getByTestId('comment-textarea');
  fireEvent.change(editTextarea, { target: { value: 'Edited Comment' } });
  // Click on Save Changes button
  const saveChangesButton = screen.getByText('Save Changes');
  fireEvent.click(saveChangesButton);

    // Check if the edited comment is displayed
    const editedComment = screen.getByText('Edited Comment');
    expect(editedComment).toBeInTheDocument();
});