This project is a React-based web application that allows users to search for existing articles by user id or title and create new articles. It's built using TypeScript, React, Vite for the build setup, and Vitest for testing.

### Results Page

The Results page allows users to search for existing articles. It includes:

- Search functionality by user id or title
- Display of search results. Initially, only ten articles are displayed.
- Navigation to the Article Creation page

### Article Creation Page

The Article Creation page allows users to create new articles using a form connected to an API. It includes:

- Form for entering article details (title, content, attorney's name, contact info)
- Client-side validation for form fields
- Submission of the article to an online API
- Success and error notifications for article creation

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/isoteriksoftware/rrsoft-frontend-test.git
   cd rrsoft-frontend-test
   ```

2. **Install dependencies:**

   ```bash
   yarn install
   ```

3. **Run the application:**

   ```bash
   yarn dev
   ```

4. **Run tests:**

   ```bash
   yarn test
   ```

## Usage

- Access the application at `http://localhost:5173`.
- Use the Results page (index page) to search for articles.
- Navigate to the Article Creation page to create a new article.

## Tech Stack

- React
- TypeScript
- Vite (for build setup)
- Vitest (for testing)
- Axios (for API communication)
- React Router (for page navigation)
- Tailwind CSS (for styling)
