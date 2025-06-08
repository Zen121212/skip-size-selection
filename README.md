# Skip Size Selection App

## Overview

This is a React-based web application that allows users to select a suitable skip size for their waste disposal needs. The app fetches available skip options from a remote API and displays them in an intuitive card layout.

---

## Technologies Used

- **React**: For building the user interface with component-based architecture.
- **React Query (@tanstack/react-query)**: To manage data fetching, caching, and state for asynchronous API calls.
- **Tailwind CSS**: Utility-first CSS framework used for styling and responsive layout.
- **JavaScript (ES6+)**: Modern JavaScript features used throughout the project.
- **Fetch API**: For making HTTP requests to the backend API.
- **Vite** (assumed): Fast frontend build tool for development and bundling.

---

## Project Design & Structure

- **Component-Based Architecture**: The UI is divided into reusable components such as `SkipCard`, `ProgressIndicator`, `SkipCardSkeleton` (loading placeholders), and `Footer`. This ensures modularity and easier maintenance.
- **Custom Hook (`useSkips`)**: Encapsulates the logic for fetching skip data, improving separation of concerns and reusability.
- **Step Progress Indicator**: Shows the user their current step in the multi-stage skip hire process, enhancing usability and navigation clarity.
- **Loading and Error States**: Provides user feedback while data is being fetched or if an error occurs.
- **Responsive Grid Layout**: Uses Tailwind CSS grid classes to create a responsive card layout that adjusts across different screen sizes.
- **State Management**: React’s `useState` is used to track the currently selected skip and update the UI accordingly.
