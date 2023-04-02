import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import Counter from "./Counter";

describe('when Counter render initially', () => { 
  it('should render text of div', async () => {
    const {findByText} = render(<Counter />);
    await waitFor(() => {
      const myText = findByText('Counted 1 times');
      expect(myText).toBeTruthy();
    });  
  }); 
});